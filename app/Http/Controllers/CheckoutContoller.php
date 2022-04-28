<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutRequest;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Product;
use Cartalyst\Stripe\Exception\CardErrorException;
use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;

class CheckoutContoller extends Controller
{
    public function index()
    {
        $ids = [];
        foreach (Cart::content() as $item) {
            array_push($ids, $item->id);
        }
        $cart = Product::whereIn('id', $ids)->get();

        $getNumbers = $this->getNumbers();

        return view('pages.checkout', [
            'cart' => $cart,
            'discount' => $getNumbers->get('discount'),
            'newSubtotal' => $getNumbers->get('newSubtotal'),
            'newTax' => $getNumbers->get('newTax'),
            'newTotal' => $getNumbers->get('newTotal'),
        ]);
    }

    public function store(CheckoutRequest $request)
    {
        $content = Cart::content()->map(function ($item) {
            return $item->model->slug.', '.$item->qty;
        })->values()->toJson();

        try {
            $charge = Stripe::charges()->create([
                'amount' => $this->getNumbers()->get('newTotal'),
                'currency' => 'USD',
                'source' => $request->stripeToken,
                'description' => 'Order',
                'receipt_email' => $request->email,
                'metadata' => [
                    'content' => $content,
                    'quantity' => Cart::instance('default')->count(),
                    'coupon' => collect(session()->get('coupon'))->toJson(),
                    'receipt_email' => $request->email,
                ],
            ]);

            $this->addOrder($request, null);

            Cart::instance('default')->destroy();
            session()->forget('coupon');

            return redirect('/thankyou');
        } catch (CardErrorException $e) {
            $this->addOrder($request, $e->getMessage());
            return back()->withErrors('Error! ' . $e->getMessage());
        }
    }

    private function getNumbers()
    {
        $tax = config('cart.tax') / 100;
        $discount = session()->get('coupon')['discount'] ?? 0;
        $code = session()->get('coupon')['code'] ?? null;
        $newSubtotal = (Cart::subtotal() - $discount);
        if ($newSubtotal < 0) {
            $newSubtotal = 0;
        }
        $newTax = $newSubtotal * $tax;
        $newTotal = $newSubtotal * (1 + $tax);

        return collect([
            'tax' => $tax,
            'discount' => $discount,
            'code' => $code,
            'newSubtotal' => $newSubtotal,
            'newTax' => $newTax,
            'newTotal' => $newTotal,
        ]);
    }

    private function addOrder($request, $error)
    {
        $order = Order::create([
            'user_id' => auth()->user()->id ?? null,
            'billing_email' => $request->email,
            'billing_name' => $request->name,
            'billing_address' => $request->address,
            'billing_city' => $request->city,
            'billing_province' => $request->province,
            'billing_postalcode' => $request->postalcode,
            'billing_phone' => $request->phone,
            'billing_name_on_card' => $request->name_on_card,
            'billing_discount' => getNumbers()->get('discount'),
            'billing_discount_code' => getNumbers()->get('code'),
            'billing_subtotal' => getNumbers()->get('newSubtotal'),
            'billing_tax' => getNumbers()->get('newTax'),
            'billing_total' => getNumbers()->get('newTotal'),
            'error' => $error,
        ]);

        $cart = [];
        foreach (Cart::content() as $product) {
            array_push($cart, [
                'order_id' => $order->id,
                'product_id' => $product->id,
                'quantity' => $product->qty
            ]);
        }

        OrderProduct::insert($cart);
    }
}

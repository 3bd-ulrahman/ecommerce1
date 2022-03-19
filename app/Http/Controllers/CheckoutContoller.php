<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutRequest;
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
                    'coupon' => collect(session()->get('coupon'))->toJson()
                ],
            ]);

            Cart::instance('default')->destroy();
            session()->forget('coupon');

            return redirect('/thankyou');
        } catch (CardErrorException $e) {
            // return redirectWith('cart.index', 'error', 'somthing wrong try again later');
            return back()->withErrors('Error! ' . $e->getMessage());
        }
    }

    private function getNumbers()
    {
        $tax = config('cart.tax') / 100;
        $discount = session()->get('coupon')['discount'] ?? 0;
        $newSubtotal = (Cart::subtotal() - $discount);
        $newTax = $newSubtotal * $tax;
        $newTotal = $newSubtotal * (1 + $tax);

        return collect([
            'tax' => $tax,
            'discount' => $discount,
            'newSubtotal' => $newSubtotal,
            'newTax' => $newTax,
            'newTotal' => $newTotal,
        ]);
    }
}

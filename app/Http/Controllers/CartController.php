<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Gloudemans\Shoppingcart\Facades\Cart;

class CartController extends Controller
{
    public function index()
    {
        $mightAlsoLike = Product::randomProduct(4)->get();

        return view('pages.cart', [
            'mightAlsoLike' => $mightAlsoLike
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $duplicates = Cart::search(function ($cartItem, $rowId) use ($request) {
            return $cartItem->id === $request->id;
        });

        if ($duplicates->isNotEmpty()) {
            return redirect()->route('cart.index')->with('success', 'Item is already in your cart!');
        }

        Cart::add($request->id, $request->name, 1, $request->price)
            ->associate(Product::class);

        return redirectWith('cart.index', 'success', 'item was add to your cart');
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        Cart::remove($id);
        return redirectWith('cart.index', 'success', 'item has been removed');
    }

    public function switchToSaveForLater($id)
    {
        $item = Cart::get($id);

        Cart::remove($id);

        $duplicates = Cart::instance('saveForLater')->search(function ($cartItem, $rowId) use ($id) {
            return $rowId === $id;
        });

        if ($duplicates->isNotEmpty()) {
            return redirect()->route('cart.index')->with('success', 'Item is already Saved For Later!');
        }

        Cart::instance('saveForLater')->add($item->id, $item->name, 1, $item->price)
            ->associate(Product::class);

        return redirectWith('cart.index', 'success', 'item has been saved for later');
    }
}

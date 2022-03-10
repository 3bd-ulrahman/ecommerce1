<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Validator;

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
        $validtor = Validator::make($request->all(), [
            'quantity' => ['required', 'numeric', 'between:1,5']
        ]);

        if ($validtor->fails()) {
            session()->flash('error', 'Quantity must be between 1 and 5');
            return response()->json(['success' => false], 400);
        }

        Cart::update($id, $request->quantity);

        session()->flash('success', 'Quantity was updated successfully');
        return response()->json(['success' => true]);
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

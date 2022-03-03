<?php

namespace App\Http\Controllers;

use Gloudemans\Shoppingcart\Facades\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

class SaveForLaterController extends Controller
{
    public function destroy($id)
    {
        Cart::instance('saveForLater')->remove($id);
        return redirectWith('cart.index', 'success', 'item has been removed');
    }

    public function switchToCart($id)
    {
        $item = Cart::instance('saveForLater')->get($id);

        Cart::instance('saveForLater')->remove($id);

        $duplicates = Cart::instance('default')->search(function ($cartItem, $rowId) use ($id) {
            return $rowId === $id;
        });

        if ($duplicates->isNotEmpty()) {
            return redirect()->route('cart.index')->with('success', 'Item is already in your cart');
        }

        Cart::instance('default')->add($item->id, $item->name, 1, $item->price)
            ->associate(Product::class);

        return redirectWith('cart.index', 'success', 'item has been moved for cart');
    }
}

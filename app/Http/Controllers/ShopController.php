<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\User;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function index()
    {
        $products = Product::randomProduct(12)->get();

        return view('shop.index', [
            'products' => $products
        ]);
    }

    public function show($slug)
    {
        $product = Product::where('slug', $slug)->first();
        $mightAlsoLike = Product::where('slug', '!=', $slug)
            ->randomProduct(4)
            ->get();

        return view('shop.show', [
            'product' => $product,
            'mightAlsoLike' => $mightAlsoLike
        ]);
    }
}

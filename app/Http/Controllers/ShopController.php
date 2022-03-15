<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\User;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        if (request()->category) {
            $products = Product::with('categories')->whereHas('categories', function ($query) {
                $query->where('slug', request()->category);
            });
        } else {
            $products = Product::where('featured', true);
        }

        if (request()->sort == 'low_high') {
            $products = $products->orderBy('price')->paginate(9);
        } elseif (request()->sort == 'high_low') {
            $products = $products->orderBy('price', 'DESC')->paginate(9);
        } else {
            $products = $products->paginate(9);
        }

        return view('shop.index', [
            'products' => $products,
            'categories' => $categories,
        ]);
    }

    public function show($slug)
    {
        $product = Product::where('slug', $slug)->first();
        $mightAlsoLike = Product::where('slug', '!=', $slug)
            ->random(4)
            ->get();

        return view('shop.show', [
            'product' => $product,
            'mightAlsoLike' => $mightAlsoLike
        ]);
    }
}

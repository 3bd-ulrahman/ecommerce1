<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
            $products = Product::query()->inRandomOrder()->take(9);
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
        $asset = asset('storage/');

        $product = Product::query()->withoutGlobalScope('accessor')
            ->select('*', DB::raw("CONCAT('$asset/', image) as image"))
            ->where('slug', $slug)
            ->first();

        $mightAlsoLike = Product::where('slug', '!=', $slug)
            ->random(4)
            ->get();

        return view('shop.show', [
            'product' => $product,
            'mightAlsoLike' => $mightAlsoLike
        ]);
    }

    public function search(Request $request)
    {
        $request->validate([
            'query' => ['required', 'min:3']
        ]);

        $query = $request->input('query');

        DB::statement("SET sql_mode = '' ");
        $products = Product::withoutGlobalScope('accessor')
            ->select('*',DB::raw("CONCAT(price, '$') as price"))
            ->when($query, function ($q) use($query) {
                $q->search($query, 0);
            })->paginate(PAGINATION);

        return view('search.search-results', compact('products'));
    }

    public function searchAlgolia()
    {
        return view('search.search-results-algolia');
    }
}

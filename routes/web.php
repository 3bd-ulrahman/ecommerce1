<?php

use Illuminate\Support\Facades\Route;


Route::view('/', 'pages/main');
Route::view('/products', 'products/index');
Route::view('/product', 'products/show');
Route::view('/cart', 'pages/cart');
Route::view('/checkout', 'pages/checkout');
Route::view('/thankyou', 'pages/thankyou');

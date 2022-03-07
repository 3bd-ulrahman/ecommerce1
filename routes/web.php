<?php

use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Route;

Route::get('/', 'LandingPageController@index')->name('landing-page');

Route::get('/shop', 'ShopController@index')->name('shop.index');
Route::get('/shop/{product}', 'ShopController@show')->name('shop.show');

Route::get('/cart', 'CartController@index')->name('cart.index');
Route::post('/cart', 'CartController@store')->name('cart.store');
Route::post('/cart/switchToSaveForLater/{product}', 'CartController@switchToSaveForLater')->name('cart.switchToSaveForLater');
Route::delete('/cart/{product}', 'CartController@destroy')->name('cart.destroy');

Route::post('/saveForLater/switchToCart/{product}', 'SaveForLaterController@switchToCart')->name('saveForLater.switchToCart');
Route::delete('/saveForLater/{product}', 'SaveForLaterController@destroy')->name('saveForLater.destroy');


Route::middleware('checkout')->name('checkout.')->group(function () {
    Route::get('/checkout', 'CheckoutContoller@index')->name('index');
    Route::post('/checkout/store', 'CheckoutContoller@store')->name('store');
});

Route::view('/thankyou', 'pages/thankyou');


Route::get('test', function () {
    return redirect();
});

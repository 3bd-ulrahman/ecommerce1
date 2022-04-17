<?php

use App\Http\Controllers\CouponController;
use App\Models\Product;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

define('PAGINATION', 9);


Route::get('/', 'LandingPageController@index')->name('landing-page');


Route::prefix('shop')->name('shop.')->group(function () {
	Route::get('/', 'ShopController@index')->name('index');
	Route::get('/{product}', 'ShopController@show')->name('show');
});


Route::prefix('cart')->name('cart.')->group(function () {
	Route::get('/', 'CartController@index')->name('index');
	Route::post('/', 'CartController@store')->name('store');
	Route::post('/switchToSaveForLater/{product}', 'CartController@switchToSaveForLater')->name('switchToSaveForLater');
	Route::patch('/{product}', 'CartController@update')->name('update');
	Route::delete('/{product}', 'CartController@destroy')->name('destroy');
});


Route::prefix('saveForLater')->name('saveForLater.')->group(function () {
	Route::post('/switchToCart/{product}', 'SaveForLaterController@switchToCart')->name('switchToCart');
	Route::delete('/{product}', 'SaveForLaterController@destroy')->name('destroy');
});


Route::prefix('coupon')->name('coupon.')->group(function () {
	Route::post('/', [CouponController::class, 'store'])->name('store');
	Route::delete('/', [CouponController::class, 'destroy'])->name('destroy');
});


Route::get('/checkout', 'CheckoutContoller@index')
    ->middleware(['checkout', 'auth'])
    ->name('checkout.index');

Route::get('/guestCheckout', 'CheckoutContoller@index')
    ->middleware(['checkout', 'guest'])
    ->name('guestCheckout.index');

Route::post('/checkout/store', 'CheckoutContoller@store')->name('checkout.store');


Route::view('/thankyou', 'pages/thankyou');


Route::group(['prefix' => 'admin'], function () {
	Voyager::routes();
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('test', function () {
    $produtc = Product::latest()->first();

    var_dump($produtc->categories);
});

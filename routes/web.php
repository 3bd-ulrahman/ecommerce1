<?php

use App\Http\Controllers\CouponController;
use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Support\Facades\Auth;

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

Route::middleware(['checkout', 'auth'])->prefix('checkout')->name('checkout.')->group(function () {
	Route::get('/', 'CheckoutContoller@index')->name('index');
	Route::post('/store', 'CheckoutContoller@store')->name('store');
});


Route::view('/thankyou', 'pages/thankyou');


Route::get('test', function () {

});



Route::group(['prefix' => 'admin'], function () {
	Voyager::routes();
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    public function store(Request $request)
    {
        $coupon = Coupon::where('code', $request->coupon_code)->first();

        if (! $coupon) {
            return redirectWith('checkout.index', 'error', 'Invalid coupon code please try again');
        }

        session()->put('coupon', [
            'code' => $coupon->code,
            'discount' => $coupon->discount(Cart::subtotal())
        ]);

        return redirectWith('checkout.index', 'success', 'coupon has been applied');
    }

    public function destroy()
    {
        session()->forget('coupon');
        return redirectWith('checkout.index', 'success', 'coupon has been removed');
    }
}

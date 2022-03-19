<?php

use Gloudemans\Shoppingcart\Facades\Cart;

if (! function_exists('redirectWithSuccess')) {
    function redirectWith($route, $key, $value)
    {
        return redirect()
            ->route($route)
            ->with($key, $value);
    }
}

if (! function_exists('presentPrice')) {
    function presentPrice($value)
    {
        return sprintf('$%0.2f', $value);
    }
}

if (!function_exists('setActiveCategory')) {
    function setActiveCategory($categoey, $output = 'active')
    {
        return request()->category == $categoey ? $output : '';
    }
}

if (!function_exists('getNumbers')) {
    function getNumbers()
    {
        $tax = config('cart.tax') / 100;
        $discount = session()->get('coupon')['discount'] ?? 0;
        $code = session()->get('coupon')['code'] ?? null;
        $newSubtotal = (Cart::subtotal() - $discount);
        if ($newSubtotal < 0) {
            $newSubtotal = 0;
        }
        $newTax = $newSubtotal * $tax;
        $newTotal = $newSubtotal * (1 + $tax);

        return collect([
            'tax' => $tax,
            'discount' => $discount,
            'code' => $code,
            'newSubtotal' => $newSubtotal,
            'newTax' => $newTax,
            'newTotal' => $newTotal,
        ]);
    }
}

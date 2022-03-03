<?php

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

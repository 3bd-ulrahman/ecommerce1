<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Product extends Model
{
    protected $table = 'products';

    // Accessors
    public function getPriceAttribute($value)
    {
        return sprintf('$%0.2f', $value);
    }

    public function getImageAttribute($value)
    {
        return asset($value);
    }

    // Scopes
    public function scopeRandomProduct($query, $number)
    {
        return $query->inRandomOrder()->take($number);
    }
}

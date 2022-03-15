<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    // realtionShips
    public function products()
    {
        return $this->belongsToMany(Product::class, 'category_product');
    }
}

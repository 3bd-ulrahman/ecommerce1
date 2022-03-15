<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Product extends Model
{
    protected $table = 'products';
    protected $fillable = [
        'name', 'slug', 'details', 'description', 'price', 'image'
    ];

    // realtionShips
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_product');
    }

    // Accessors
    public function getPriceAttribute($value)
    {
        return sprintf('$%0.2f', $value);
    }

    public function getImageAttribute($value)
    {
        return asset('img/' . $value);
    }

    // Scopes
    public function scopeRandom($query, $number)
    {
        return $query->inRandomOrder()->take($number);
    }
}

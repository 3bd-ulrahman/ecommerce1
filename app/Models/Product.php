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
    // protected $casts = [
    //     'images' => 'array'
    // ];

    // realtionShips
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_product');
    }

    // Accessors
    // public function getPriceAttribute($value)
    // {
    //     return sprintf('$%0.2f', $value);
    // }

    public function getImageAttribute($value)
    {
        return file_exists('storage/'.$value) ?
            asset('storage/'.$value) :
            asset('img/not-found.jpg');
    }

    public function getImagesAttribute($images)
    {
        if ($images) {
            $images = json_decode($images, true);
            foreach ($images as $key => $image) {
                $images[$key] = asset('storage/'.$image);
            }
            return $images;
        }
    }

    // Scopes
    public function scopeRandom($query, $number)
    {
        return $query->inRandomOrder()->take($number);
    }
}

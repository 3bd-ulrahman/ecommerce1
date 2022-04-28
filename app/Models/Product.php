<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use Gloudemans\Shoppingcart\Contracts\Buyable;

class Product extends Model implements Buyable
{
    protected $table = 'products';
    protected $fillable = [
        'name', 'slug', 'details', 'description', 'price', 'image', 'images'
    ];

    public function getBuyableIdentifier($options = null) {
        return $this->id;
    }

    public function getBuyableDescription($options = null) {
        return $this->name;
    }

    public function getBuyablePrice($options = null) {
        return $this->price;
    }

    // realtionShips
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_product');
    }

    // Mutators
    // public function setImageAttribute($value)
    // {
    //     $this->attributes['image'] = substr($value, strlen(asset('storage')));
    // }

    // Scopes
    public function scopeRandom($query, $number)
    {
        return $query->inRandomOrder()->take($number);
    }

    protected static function booted()
    {
        static::addGlobalScope('accessor', function (Builder $builder) {
            $model = new Product();
            $asset = file_exists('storage/'.$model['image']) ?
                asset('storage/'.$model['image']) :
                asset('img/not-found.jpg');

            $builder->select('*', DB::raw("CONCAT(price, '$') as price,
                CONCAT('$asset/', image) as image")
            );
        });
    }
}

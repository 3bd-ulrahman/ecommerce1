<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use Nicolaslopezj\Searchable\SearchableTrait;
use Laravel\Scout\Searchable;

class Product extends Model
{
    use SearchableTrait, Searchable;

    protected $table = 'products';
    protected $fillable = [
        'name', 'slug', 'details', 'description', 'price', 'image', 'images'
    ];

    protected $searchable = [
        /**
         * Columns and their priority in search results.
         * Columns with higher values are more important.
         * Columns with equal values have equal importance.
         *
         * @var array
         */
        'columns' => [
            'products.name' => 10,
            'products.details' => 5,
            'products.description' => 2,
        ],
    ];


    // realtionShips
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_product');
    }

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

    // scout package
    public function toSearchableArray()
    {
        $array = $this->toArray();

        $extraFields = [
            'categories' => $this->categories()->pluck('name')->toArray(),
        ];

        return array_merge($array, $extraFields);
    }
}

<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'email',
        'name',
        'address',
        'city',
        'province',
        'postalcode',
        'phone',
        'name_on_card',
        'discount',
        'discount_code',
        'subtotal',
        'tax',
        'total',
        'error',
    ];

    // relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_product')->withPivot('quantity');
    }
}

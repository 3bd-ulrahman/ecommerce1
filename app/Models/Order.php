<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class Order extends Model
{
    protected $fillable = [
        'user_id', 'billing_email', 'billing_name', 'billing_address', 'billing_city',
        'billing_province', 'billing_postalcode', 'billing_phone', 'billing_name_on_card', 'billing_discount', 'billing_discount_code', 'billing_subtotal', 'billing_tax', 'billing_total', 'error',
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

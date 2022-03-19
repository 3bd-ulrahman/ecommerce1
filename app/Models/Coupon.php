<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    protected $table = 'coupons';
    protected $fillable = [
        'code', 'type', 'value'
    ];

    public function discount($total)
    {
        if ($this->type == 'fixed') {
            return $this->value;
        } elseif ($this->type == 'percent') {
            return round(($this->value / 100) * $total);
        } else {
            return 0;
        }
    }

    // scopes
    public function scopeFindByCode($query, $code)
    {
        $query->where('code', $code)->first();
    }
}

<?php

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name' => 'MacBook Pro',
            'slug' => 'macbook-pro',
            'details' => '15 inch, 1TB SSD, 32GB RAM',
            'price' => 2499.99,
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
            'image' => '/img/products/macbook-pro.jpg'
        ]);

        Product::create([
            'name' => 'Laptop 2',
            'slug' => 'laptop-2',
            'details' => '15 inch, 1TB SSD, 16GB RAM',
            'price' => 1499.99,
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
            'image' => '/img/products/laptop-2.jpg'
        ]);

        Product::create([
            'name' => 'Laptop 3',
            'slug' => 'laptop-3',
            'details' => '13 inch, 1TB SSD, 16GB RAM',
            'price' => 1499.99,
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
            'image' => '/img/products/laptop-3.jpg'
        ]);

        Product::create([
            'name' => 'Laptop 4',
            'slug' => 'laptop-4',
            'details' => '15 inch, 1TB SSD, 16GB RAM',
            'price' => 1499.99,
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
            'image' => '/img/products/laptop-4.jpg'
        ]);

        Product::create([
            'name' => 'Laptop 5',
            'slug' => 'laptop-5',
            'details' => '15 inch, 1TB SSD, 16GB RAM',
            'price' => 1499.99,
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
            'image' => '/img/products/laptop-5.jpg'
        ]);

        Product::create([
            'name' => 'Laptop 6',
            'slug' => 'laptop-6',
            'details' => '15 inch, 1TB SSD, 16GB RAM',
            'price' => 1499.99,
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
            'image' => '/img/products/laptop-6.jpg'
        ]);

        Product::create([
            'name' => 'Laptop 7',
            'slug' => 'laptop-7',
            'details' => '15 inch, 1TB SSD, 16GB RAM',
            'price' => 1499.99,
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
            'image' => '/img/products/laptop-7.jpg'
        ]);

        Product::create([
            'name' => 'Laptop 8',
            'slug' => 'laptop-8',
            'details' => '15 inch, 1TB SSD, 16GB RAM',
            'price' => 1499.99,
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
            'image' => '/img/products/laptop-8.jpg'
        ]);

        Product::create([
            'name' => 'Laptop 9',
            'slug' => 'laptop-9',
            'details' => '15 inch, 1TB SSD, 16GB RAM',
            'price' => 1499.99,
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
            'image' => '/img/products/laptop-9.jpg'
        ]);
    }
}

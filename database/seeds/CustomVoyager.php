<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomVoyager extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = array(
            array('id' => '1','parent_id' => NULL,'order' => '1','name' => 'Category 1','slug' => 'category-1','created_at' => '2022-03-23 20:36:27','updated_at' => '2022-03-23 20:36:27'),
            array('id' => '2','parent_id' => NULL,'order' => '1','name' => 'Category 2','slug' => 'category-2','created_at' => '2022-03-23 20:36:27','updated_at' => '2022-03-23 20:36:27')
        );

        DB::table('categories')->insert($categories);

        /* `ecommerce2`.`data_types` */
        $data_types = array(
            array('id' => '1','name' => 'users','slug' => 'users','display_name_singular' => 'User','display_name_plural' => 'Users','icon' => 'voyager-person','model_name' => 'TCG\\Voyager\\Models\\User','policy_name' => 'TCG\\Voyager\\Policies\\UserPolicy','controller' => 'TCG\\Voyager\\Http\\Controllers\\VoyagerUserController','description' => '','generate_permissions' => '1','server_side' => '0','details' => NULL,'created_at' => '2022-03-23 20:36:20','updated_at' => '2022-03-23 20:36:20'),
            array('id' => '2','name' => 'menus','slug' => 'menus','display_name_singular' => 'Menu','display_name_plural' => 'Menus','icon' => 'voyager-list','model_name' => 'TCG\\Voyager\\Models\\Menu','policy_name' => NULL,'controller' => '','description' => '','generate_permissions' => '1','server_side' => '0','details' => NULL,'created_at' => '2022-03-23 20:36:20','updated_at' => '2022-03-23 20:36:20'),
            array('id' => '3','name' => 'roles','slug' => 'roles','display_name_singular' => 'Role','display_name_plural' => 'Roles','icon' => 'voyager-lock','model_name' => 'TCG\\Voyager\\Models\\Role','policy_name' => NULL,'controller' => 'TCG\\Voyager\\Http\\Controllers\\VoyagerRoleController','description' => '','generate_permissions' => '1','server_side' => '0','details' => NULL,'created_at' => '2022-03-23 20:36:20','updated_at' => '2022-03-23 20:36:20'),
            array('id' => '4','name' => 'categories','slug' => 'categories','display_name_singular' => 'Category','display_name_plural' => 'Categories','icon' => 'voyager-categories','model_name' => 'TCG\\Voyager\\Models\\Category','policy_name' => NULL,'controller' => '','description' => '','generate_permissions' => '1','server_side' => '0','details' => NULL,'created_at' => '2022-03-23 20:36:26','updated_at' => '2022-03-23 20:36:26'),
            array('id' => '5','name' => 'posts','slug' => 'posts','display_name_singular' => 'Post','display_name_plural' => 'Posts','icon' => 'voyager-news','model_name' => 'TCG\\Voyager\\Models\\Post','policy_name' => 'TCG\\Voyager\\Policies\\PostPolicy','controller' => '','description' => '','generate_permissions' => '1','server_side' => '0','details' => NULL,'created_at' => '2022-03-23 20:36:27','updated_at' => '2022-03-23 20:36:27'),
            array('id' => '6','name' => 'pages','slug' => 'pages','display_name_singular' => 'Page','display_name_plural' => 'Pages','icon' => 'voyager-file-text','model_name' => 'TCG\\Voyager\\Models\\Page','policy_name' => NULL,'controller' => '','description' => '','generate_permissions' => '1','server_side' => '0','details' => NULL,'created_at' => '2022-03-23 20:36:30','updated_at' => '2022-03-23 20:36:30'),
            array('id' => '7','name' => 'products','slug' => 'products','display_name_singular' => 'Product','display_name_plural' => 'Products','icon' => 'voyager-bag','model_name' => 'App\\Models\\Product','policy_name' => NULL,'controller' => '\\App\\Http\\Controllers\\Voyager\\PorductsController','description' => NULL,'generate_permissions' => '1','server_side' => '0','details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}','created_at' => '2022-03-24 08:51:03','updated_at' => '2022-04-17 04:52:36'),
            array('id' => '9','name' => 'category','slug' => 'category','display_name_singular' => 'Category','display_name_plural' => 'Categories','icon' => 'voyager-categories','model_name' => 'App\\Models\\Category','policy_name' => NULL,'controller' => NULL,'description' => NULL,'generate_permissions' => '1','server_side' => '0','details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}','created_at' => '2022-03-24 19:12:55','updated_at' => '2022-03-24 19:12:55'),
            array('id' => '10','name' => 'coupons','slug' => 'coupons','display_name_singular' => 'Coupon','display_name_plural' => 'Coupons','icon' => 'voyager-dollar','model_name' => 'App\\Models\\Coupon','policy_name' => NULL,'controller' => NULL,'description' => NULL,'generate_permissions' => '1','server_side' => '0','details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}','created_at' => '2022-03-24 20:21:26','updated_at' => '2022-03-24 20:21:26'),
            array('id' => '11','name' => 'category_product','slug' => 'category-product','display_name_singular' => 'Category Product','display_name_plural' => 'Category Products','icon' => 'voyager-tag','model_name' => 'App\\Models\\CategoryProduct','policy_name' => NULL,'controller' => NULL,'description' => NULL,'generate_permissions' => '1','server_side' => '0','details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}','created_at' => '2022-03-26 09:01:51','updated_at' => '2022-03-26 09:01:51')
        );
        DB::table('data_types')->insert($data_types);

        /* `ecommerce2`.`data_rows` */
        $data_rows = array(
            array('id' => '1','data_type_id' => '1','field' => 'id','type' => 'number','display_name' => 'ID','required' => '1','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '1'),
            array('id' => '2','data_type_id' => '1','field' => 'name','type' => 'text','display_name' => 'Name','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '2'),
            array('id' => '3','data_type_id' => '1','field' => 'email','type' => 'text','display_name' => 'Email','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '3'),
            array('id' => '4','data_type_id' => '1','field' => 'password','type' => 'password','display_name' => 'Password','required' => '1','browse' => '0','read' => '0','edit' => '1','add' => '1','delete' => '0','details' => NULL,'order' => '4'),
            array('id' => '5','data_type_id' => '1','field' => 'remember_token','type' => 'text','display_name' => 'Remember Token','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '5'),
            array('id' => '6','data_type_id' => '1','field' => 'created_at','type' => 'timestamp','display_name' => 'Created At','required' => '0','browse' => '1','read' => '1','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '6'),
            array('id' => '7','data_type_id' => '1','field' => 'updated_at','type' => 'timestamp','display_name' => 'Updated At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '7'),
            array('id' => '8','data_type_id' => '1','field' => 'avatar','type' => 'image','display_name' => 'Avatar','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '8'),
            array('id' => '9','data_type_id' => '1','field' => 'user_belongsto_role_relationship','type' => 'relationship','display_name' => 'Role','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '0','details' => '{"model":"TCG\\\\Voyager\\\\Models\\\\Role","table":"roles","type":"belongsTo","column":"role_id","key":"id","label":"display_name","pivot_table":"roles","pivot":0}','order' => '10'),
            array('id' => '10','data_type_id' => '1','field' => 'user_belongstomany_role_relationship','type' => 'relationship','display_name' => 'voyager::seeders.data_rows.roles','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '0','details' => '{"model":"TCG\\\\Voyager\\\\Models\\\\Role","table":"roles","type":"belongsToMany","column":"id","key":"id","label":"display_name","pivot_table":"user_roles","pivot":"1","taggable":"0"}','order' => '11'),
            array('id' => '11','data_type_id' => '1','field' => 'settings','type' => 'hidden','display_name' => 'Settings','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '12'),
            array('id' => '12','data_type_id' => '2','field' => 'id','type' => 'number','display_name' => 'ID','required' => '1','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '1'),
            array('id' => '13','data_type_id' => '2','field' => 'name','type' => 'text','display_name' => 'Name','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '2'),
            array('id' => '14','data_type_id' => '2','field' => 'created_at','type' => 'timestamp','display_name' => 'Created At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '3'),
            array('id' => '15','data_type_id' => '2','field' => 'updated_at','type' => 'timestamp','display_name' => 'Updated At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '4'),
            array('id' => '16','data_type_id' => '3','field' => 'id','type' => 'number','display_name' => 'ID','required' => '1','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '1'),
            array('id' => '17','data_type_id' => '3','field' => 'name','type' => 'text','display_name' => 'Name','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '2'),
            array('id' => '18','data_type_id' => '3','field' => 'created_at','type' => 'timestamp','display_name' => 'Created At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '3'),
            array('id' => '19','data_type_id' => '3','field' => 'updated_at','type' => 'timestamp','display_name' => 'Updated At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '4'),
            array('id' => '20','data_type_id' => '3','field' => 'display_name','type' => 'text','display_name' => 'Display Name','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '5'),
            array('id' => '21','data_type_id' => '1','field' => 'role_id','type' => 'text','display_name' => 'Role','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '9'),
            array('id' => '22','data_type_id' => '4','field' => 'id','type' => 'number','display_name' => 'ID','required' => '1','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '1'),
            array('id' => '23','data_type_id' => '4','field' => 'parent_id','type' => 'select_dropdown','display_name' => 'Parent','required' => '0','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"default":"","null":"","options":{"":"-- None --"},"relationship":{"key":"id","label":"name"}}','order' => '2'),
            array('id' => '24','data_type_id' => '4','field' => 'order','type' => 'text','display_name' => 'Order','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"default":1}','order' => '3'),
            array('id' => '25','data_type_id' => '4','field' => 'name','type' => 'text','display_name' => 'Name','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '4'),
            array('id' => '26','data_type_id' => '4','field' => 'slug','type' => 'text','display_name' => 'Slug','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"slugify":{"origin":"name"}}','order' => '5'),
            array('id' => '27','data_type_id' => '4','field' => 'created_at','type' => 'timestamp','display_name' => 'Created At','required' => '0','browse' => '0','read' => '1','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '6'),
            array('id' => '28','data_type_id' => '4','field' => 'updated_at','type' => 'timestamp','display_name' => 'Updated At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '7'),
            array('id' => '29','data_type_id' => '5','field' => 'id','type' => 'number','display_name' => 'ID','required' => '1','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '1'),
            array('id' => '30','data_type_id' => '5','field' => 'author_id','type' => 'text','display_name' => 'Author','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '0','delete' => '1','details' => NULL,'order' => '2'),
            array('id' => '31','data_type_id' => '5','field' => 'category_id','type' => 'text','display_name' => 'Category','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '0','details' => NULL,'order' => '3'),
            array('id' => '32','data_type_id' => '5','field' => 'title','type' => 'text','display_name' => 'Title','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '4'),
            array('id' => '33','data_type_id' => '5','field' => 'excerpt','type' => 'text_area','display_name' => 'Excerpt','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '5'),
            array('id' => '34','data_type_id' => '5','field' => 'body','type' => 'rich_text_box','display_name' => 'Body','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '6'),
            array('id' => '35','data_type_id' => '5','field' => 'image','type' => 'image','display_name' => 'Post Image','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"resize":{"width":"1000","height":"null"},"quality":"70%","upsize":true,"thumbnails":[{"name":"medium","scale":"50%"},{"name":"small","scale":"25%"},{"name":"cropped","crop":{"width":"300","height":"250"}}]}','order' => '7'),
            array('id' => '36','data_type_id' => '5','field' => 'slug','type' => 'text','display_name' => 'Slug','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"slugify":{"origin":"title","forceUpdate":true},"validation":{"rule":"unique:posts,slug"}}','order' => '8'),
            array('id' => '37','data_type_id' => '5','field' => 'meta_description','type' => 'text_area','display_name' => 'Meta Description','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '9'),
            array('id' => '38','data_type_id' => '5','field' => 'meta_keywords','type' => 'text_area','display_name' => 'Meta Keywords','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '10'),
            array('id' => '39','data_type_id' => '5','field' => 'status','type' => 'select_dropdown','display_name' => 'Status','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"default":"DRAFT","options":{"PUBLISHED":"published","DRAFT":"draft","PENDING":"pending"}}','order' => '11'),
            array('id' => '40','data_type_id' => '5','field' => 'created_at','type' => 'timestamp','display_name' => 'Created At','required' => '0','browse' => '1','read' => '1','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '12'),
            array('id' => '41','data_type_id' => '5','field' => 'updated_at','type' => 'timestamp','display_name' => 'Updated At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '13'),
            array('id' => '42','data_type_id' => '5','field' => 'seo_title','type' => 'text','display_name' => 'SEO Title','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '14'),
            array('id' => '43','data_type_id' => '5','field' => 'featured','type' => 'checkbox','display_name' => 'Featured','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '15'),
            array('id' => '44','data_type_id' => '6','field' => 'id','type' => 'number','display_name' => 'ID','required' => '1','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '1'),
            array('id' => '45','data_type_id' => '6','field' => 'author_id','type' => 'text','display_name' => 'Author','required' => '1','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '2'),
            array('id' => '46','data_type_id' => '6','field' => 'title','type' => 'text','display_name' => 'Title','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '3'),
            array('id' => '47','data_type_id' => '6','field' => 'excerpt','type' => 'text_area','display_name' => 'Excerpt','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '4'),
            array('id' => '48','data_type_id' => '6','field' => 'body','type' => 'rich_text_box','display_name' => 'Body','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '5'),
            array('id' => '49','data_type_id' => '6','field' => 'slug','type' => 'text','display_name' => 'Slug','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"slugify":{"origin":"title"},"validation":{"rule":"unique:pages,slug"}}','order' => '6'),
            array('id' => '50','data_type_id' => '6','field' => 'meta_description','type' => 'text','display_name' => 'Meta Description','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '7'),
            array('id' => '51','data_type_id' => '6','field' => 'meta_keywords','type' => 'text','display_name' => 'Meta Keywords','required' => '1','browse' => '0','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '8'),
            array('id' => '52','data_type_id' => '6','field' => 'status','type' => 'select_dropdown','display_name' => 'Status','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"default":"INACTIVE","options":{"INACTIVE":"INACTIVE","ACTIVE":"ACTIVE"}}','order' => '9'),
            array('id' => '53','data_type_id' => '6','field' => 'created_at','type' => 'timestamp','display_name' => 'Created At','required' => '1','browse' => '1','read' => '1','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '10'),
            array('id' => '54','data_type_id' => '6','field' => 'updated_at','type' => 'timestamp','display_name' => 'Updated At','required' => '1','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => NULL,'order' => '11'),
            array('id' => '55','data_type_id' => '6','field' => 'image','type' => 'image','display_name' => 'Page Image','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => NULL,'order' => '12'),
            array('id' => '56','data_type_id' => '7','field' => 'id','type' => 'hidden','display_name' => 'Id','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '0','details' => '{}','order' => '1'),
            array('id' => '57','data_type_id' => '7','field' => 'name','type' => 'text','display_name' => 'name','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"validation":{"rule":"required|max:50"}}','order' => '2'),
            array('id' => '58','data_type_id' => '7','field' => 'slug','type' => 'text','display_name' => 'Slug','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{}','order' => '3'),
            array('id' => '59','data_type_id' => '7','field' => 'details','type' => 'text','display_name' => 'Details','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{}','order' => '4'),
            array('id' => '60','data_type_id' => '7','field' => 'description','type' => 'rich_text_box','display_name' => 'Description','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{}','order' => '5'),
            array('id' => '61','data_type_id' => '7','field' => 'price','type' => 'number','display_name' => 'Price','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"validation":{"rule":"required|regex:\\/^\\\\d*(\\\\.\\\\d{1,2})?$\\/"}}','order' => '6'),
            array('id' => '62','data_type_id' => '7','field' => 'image','type' => 'image','display_name' => 'Image','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"resize":{"width":"1000","height":null},"quality":"70%","upsize":false,"thumbnails":[{"name":"medium","scale":"50%"},{"name":"small","scale":"25%"},{"name":"cropped","crop":{"width":"300","height":"250"}}]}','order' => '7'),
            array('id' => '63','data_type_id' => '7','field' => 'featured','type' => 'checkbox','display_name' => 'Featured','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"on":"Yes","off":"No"}','order' => '8'),
            array('id' => '64','data_type_id' => '7','field' => 'created_at','type' => 'timestamp','display_name' => 'Created At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => '{}','order' => '9'),
            array('id' => '65','data_type_id' => '7','field' => 'updated_at','type' => 'timestamp','display_name' => 'Updated At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => '{}','order' => '10'),
            array('id' => '66','data_type_id' => '9','field' => 'id','type' => 'hidden','display_name' => 'Id','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '0','details' => '{}','order' => '1'),
            array('id' => '67','data_type_id' => '9','field' => 'name','type' => 'text','display_name' => 'Name','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{}','order' => '2'),
            array('id' => '68','data_type_id' => '9','field' => 'slug','type' => 'text','display_name' => 'Slug','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{}','order' => '3'),
            array('id' => '69','data_type_id' => '9','field' => 'created_at','type' => 'timestamp','display_name' => 'Created At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => '{}','order' => '4'),
            array('id' => '70','data_type_id' => '9','field' => 'updated_at','type' => 'timestamp','display_name' => 'Updated At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => '{}','order' => '5'),
            array('id' => '71','data_type_id' => '10','field' => 'id','type' => 'hidden','display_name' => 'Id','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '0','details' => '{}','order' => '1'),
            array('id' => '72','data_type_id' => '10','field' => 'code','type' => 'text','display_name' => 'Code','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{}','order' => '2'),
            array('id' => '73','data_type_id' => '10','field' => 'type','type' => 'select_dropdown','display_name' => 'Type','required' => '1','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"default":"fixed","options":{"fixed":"Fixed Value","percent":"Percent Off"}}','order' => '3'),
            array('id' => '74','data_type_id' => '10','field' => 'value','type' => 'text','display_name' => 'Value','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{"null":""}','order' => '4'),
            array('id' => '75','data_type_id' => '10','field' => 'created_at','type' => 'timestamp','display_name' => 'Created At','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '0','delete' => '1','details' => '{}','order' => '5'),
            array('id' => '76','data_type_id' => '10','field' => 'updated_at','type' => 'timestamp','display_name' => 'Updated At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => '{}','order' => '6'),
            array('id' => '77','data_type_id' => '11','field' => 'id','type' => 'text','display_name' => 'Id','required' => '1','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => '{}','order' => '1'),
            array('id' => '78','data_type_id' => '11','field' => 'product_id','type' => 'number','display_name' => 'Product Id','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{}','order' => '2'),
            array('id' => '79','data_type_id' => '11','field' => 'category_id','type' => 'number','display_name' => 'Category Id','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{}','order' => '3'),
            array('id' => '80','data_type_id' => '11','field' => 'created_at','type' => 'timestamp','display_name' => 'Created At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => '{}','order' => '4'),
            array('id' => '81','data_type_id' => '11','field' => 'updated_at','type' => 'timestamp','display_name' => 'Updated At','required' => '0','browse' => '0','read' => '0','edit' => '0','add' => '0','delete' => '0','details' => '{}','order' => '5'),
            array('id' => '82','data_type_id' => '7','field' => 'images','type' => 'multiple_images','display_name' => 'Images','required' => '0','browse' => '1','read' => '1','edit' => '1','add' => '1','delete' => '1','details' => '{}','order' => '8')
        );
        DB::table('data_rows')->insert($data_rows);

        /* `ecommerce2`.`failed_jobs` */
        $failed_jobs = array(
        );
        DB::table('failed_jobs')->insert($failed_jobs);

        /* `ecommerce2`.`menus` */
        $menus = array(
            array('id' => '1','name' => 'admin','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-23 20:36:22'),
            array('id' => '2','name' => 'main','created_at' => '2022-03-26 19:12:29','updated_at' => '2022-03-26 19:12:29'),
            array('id' => '3','name' => 'footer','created_at' => '2022-03-27 09:14:43','updated_at' => '2022-03-27 09:14:43')
        );
        DB::table('menus')->insert($menus);

        /* `ecommerce2`.`menu_items` */
        $menu_items = array(
            array('id' => '1','menu_id' => '1','title' => 'Dashboard','url' => '','target' => '_self','icon_class' => 'voyager-boat','color' => NULL,'parent_id' => NULL,'order' => '1','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-23 20:36:22','route' => 'voyager.dashboard','parameters' => NULL),
            array('id' => '2','menu_id' => '1','title' => 'Media','url' => '','target' => '_self','icon_class' => 'voyager-images','color' => NULL,'parent_id' => NULL,'order' => '8','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-26 09:02:33','route' => 'voyager.media.index','parameters' => NULL),
            array('id' => '3','menu_id' => '1','title' => 'Users','url' => '','target' => '_self','icon_class' => 'voyager-person','color' => NULL,'parent_id' => NULL,'order' => '7','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-26 09:02:33','route' => 'voyager.users.index','parameters' => NULL),
            array('id' => '4','menu_id' => '1','title' => 'Roles','url' => '','target' => '_self','icon_class' => 'voyager-lock','color' => NULL,'parent_id' => NULL,'order' => '6','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-26 09:02:33','route' => 'voyager.roles.index','parameters' => NULL),
            array('id' => '5','menu_id' => '1','title' => 'Tools','url' => '','target' => '_self','icon_class' => 'voyager-tools','color' => NULL,'parent_id' => NULL,'order' => '11','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-26 09:02:33','route' => NULL,'parameters' => NULL),
            array('id' => '6','menu_id' => '1','title' => 'Menu Builder','url' => '','target' => '_self','icon_class' => 'voyager-list','color' => NULL,'parent_id' => '5','order' => '1','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-24 16:29:46','route' => 'voyager.menus.index','parameters' => NULL),
            array('id' => '7','menu_id' => '1','title' => 'Database','url' => '','target' => '_self','icon_class' => 'voyager-data','color' => NULL,'parent_id' => '5','order' => '2','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-24 16:29:46','route' => 'voyager.database.index','parameters' => NULL),
            array('id' => '8','menu_id' => '1','title' => 'Compass','url' => '','target' => '_self','icon_class' => 'voyager-compass','color' => NULL,'parent_id' => '5','order' => '3','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-24 16:29:46','route' => 'voyager.compass.index','parameters' => NULL),
            array('id' => '9','menu_id' => '1','title' => 'BREAD','url' => '','target' => '_self','icon_class' => 'voyager-bread','color' => NULL,'parent_id' => '5','order' => '4','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-24 16:29:46','route' => 'voyager.bread.index','parameters' => NULL),
            array('id' => '10','menu_id' => '1','title' => 'Settings','url' => '','target' => '_self','icon_class' => 'voyager-settings','color' => NULL,'parent_id' => NULL,'order' => '12','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-26 09:02:33','route' => 'voyager.settings.index','parameters' => NULL),
            array('id' => '11','menu_id' => '1','title' => 'Categories','url' => '','target' => '_self','icon_class' => 'voyager-categories','color' => NULL,'parent_id' => NULL,'order' => '13','created_at' => '2022-03-23 20:36:27','updated_at' => '2022-03-26 09:02:33','route' => 'voyager.categories.index','parameters' => NULL),
            array('id' => '12','menu_id' => '1','title' => 'Posts','url' => '','target' => '_self','icon_class' => 'voyager-news','color' => NULL,'parent_id' => NULL,'order' => '9','created_at' => '2022-03-23 20:36:29','updated_at' => '2022-03-26 09:02:33','route' => 'voyager.posts.index','parameters' => NULL),
            array('id' => '13','menu_id' => '1','title' => 'Pages','url' => '','target' => '_self','icon_class' => 'voyager-file-text','color' => NULL,'parent_id' => NULL,'order' => '10','created_at' => '2022-03-23 20:36:30','updated_at' => '2022-03-26 09:02:33','route' => 'voyager.pages.index','parameters' => NULL),
            array('id' => '14','menu_id' => '1','title' => 'Products','url' => '','target' => '_self','icon_class' => 'voyager-bag','color' => NULL,'parent_id' => NULL,'order' => '3','created_at' => '2022-03-24 08:51:04','updated_at' => '2022-03-24 20:23:44','route' => 'voyager.products.index','parameters' => NULL),
            array('id' => '15','menu_id' => '1','title' => 'Categories','url' => '','target' => '_self','icon_class' => 'voyager-categories','color' => NULL,'parent_id' => NULL,'order' => '2','created_at' => '2022-03-24 19:12:55','updated_at' => '2022-03-24 20:23:43','route' => 'voyager.category.index','parameters' => NULL),
            array('id' => '16','menu_id' => '1','title' => 'Coupons','url' => '','target' => '_self','icon_class' => 'voyager-dollar','color' => NULL,'parent_id' => NULL,'order' => '5','created_at' => '2022-03-24 20:21:26','updated_at' => '2022-03-26 09:02:33','route' => 'voyager.coupons.index','parameters' => NULL),
            array('id' => '17','menu_id' => '1','title' => 'Category Products','url' => '','target' => '_self','icon_class' => 'voyager-tag','color' => NULL,'parent_id' => NULL,'order' => '4','created_at' => '2022-03-26 09:01:51','updated_at' => '2022-03-26 09:02:33','route' => 'voyager.category-product.index','parameters' => NULL),
            array('id' => '18','menu_id' => '2','title' => 'Shop','url' => '','target' => '_self','icon_class' => NULL,'color' => '#000000','parent_id' => NULL,'order' => '14','created_at' => '2022-03-26 19:14:36','updated_at' => '2022-03-26 19:14:36','route' => 'shop.index','parameters' => NULL),
            array('id' => '19','menu_id' => '2','title' => 'About','url' => '#','target' => '_self','icon_class' => NULL,'color' => '#000000','parent_id' => NULL,'order' => '15','created_at' => '2022-03-26 19:16:47','updated_at' => '2022-03-26 19:16:47','route' => NULL,'parameters' => ''),
            array('id' => '20','menu_id' => '2','title' => 'Blog','url' => '#','target' => '_self','icon_class' => NULL,'color' => '#000000','parent_id' => NULL,'order' => '16','created_at' => '2022-03-26 19:19:58','updated_at' => '2022-03-26 19:19:58','route' => NULL,'parameters' => ''),
            array('id' => '22','menu_id' => '3','title' => 'fa-globe','url' => 'https://abdulrahman5648.github.io/abdulrahman5648/','target' => '_self','icon_class' => NULL,'color' => '#000000','parent_id' => NULL,'order' => '2','created_at' => '2022-03-27 09:16:20','updated_at' => '2022-03-27 10:07:31','route' => NULL,'parameters' => ''),
            array('id' => '23','menu_id' => '3','title' => 'fa-github','url' => 'https://github.com/abdulrahman5648','target' => '_self','icon_class' => NULL,'color' => '#000000','parent_id' => NULL,'order' => '3','created_at' => '2022-03-27 09:16:54','updated_at' => '2022-03-27 10:07:31','route' => NULL,'parameters' => ''),
            array('id' => '24','menu_id' => '3','title' => 'Follow Me','url' => '','target' => '_self','icon_class' => NULL,'color' => '#000000','parent_id' => NULL,'order' => '1','created_at' => '2022-03-27 10:07:23','updated_at' => '2022-03-27 10:07:31','route' => NULL,'parameters' => '')
        );
        DB::table('menu_items')->insert($menu_items);

        /* `ecommerce2`.`pages` */
        $pages = array(
            array('id' => '1','author_id' => '0','title' => 'Hello World','excerpt' => 'Hang the jib grog grog blossom grapple dance the hempen jig gangway pressgang bilge rat to go on account lugger. Nelsons folly gabion line draught scallywag fire ship gaff fluke fathom case shot. Sea Legs bilge rat sloop matey gabion long clothes run a shot across the bow Gold Road cog league.','body' => '<p>Hello World. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>
          <p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>','image' => 'pages/page1.jpg','slug' => 'hello-world','meta_description' => 'Yar Meta Description','meta_keywords' => 'Keyword1, Keyword2','status' => 'ACTIVE','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31')
        );
        DB::table('pages')->insert($pages);

        /* `ecommerce2`.`password_resets` */
        $password_resets = array(
        );
        DB::table('password_resets')->insert($password_resets);

        /* `ecommerce2`.`permissions` */
        $permissions = array(
            array('id' => '1','key' => 'browse_admin','table_name' => NULL,'created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-23 20:36:22'),
            array('id' => '2','key' => 'browse_bread','table_name' => NULL,'created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-23 20:36:22'),
            array('id' => '3','key' => 'browse_database','table_name' => NULL,'created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '4','key' => 'browse_media','table_name' => NULL,'created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '5','key' => 'browse_compass','table_name' => NULL,'created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '6','key' => 'browse_menus','table_name' => 'menus','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '7','key' => 'read_menus','table_name' => 'menus','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '8','key' => 'edit_menus','table_name' => 'menus','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '9','key' => 'add_menus','table_name' => 'menus','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '10','key' => 'delete_menus','table_name' => 'menus','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '11','key' => 'browse_roles','table_name' => 'roles','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '12','key' => 'read_roles','table_name' => 'roles','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '13','key' => 'edit_roles','table_name' => 'roles','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '14','key' => 'add_roles','table_name' => 'roles','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '15','key' => 'delete_roles','table_name' => 'roles','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '16','key' => 'browse_users','table_name' => 'users','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '17','key' => 'read_users','table_name' => 'users','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '18','key' => 'edit_users','table_name' => 'users','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '19','key' => 'add_users','table_name' => 'users','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '20','key' => 'delete_users','table_name' => 'users','created_at' => '2022-03-23 20:36:23','updated_at' => '2022-03-23 20:36:23'),
            array('id' => '21','key' => 'browse_settings','table_name' => 'settings','created_at' => '2022-03-23 20:36:24','updated_at' => '2022-03-23 20:36:24'),
            array('id' => '22','key' => 'read_settings','table_name' => 'settings','created_at' => '2022-03-23 20:36:24','updated_at' => '2022-03-23 20:36:24'),
            array('id' => '23','key' => 'edit_settings','table_name' => 'settings','created_at' => '2022-03-23 20:36:24','updated_at' => '2022-03-23 20:36:24'),
            array('id' => '24','key' => 'add_settings','table_name' => 'settings','created_at' => '2022-03-23 20:36:24','updated_at' => '2022-03-23 20:36:24'),
            array('id' => '25','key' => 'delete_settings','table_name' => 'settings','created_at' => '2022-03-23 20:36:24','updated_at' => '2022-03-23 20:36:24'),
            array('id' => '26','key' => 'browse_categories','table_name' => 'categories','created_at' => '2022-03-23 20:36:27','updated_at' => '2022-03-23 20:36:27'),
            array('id' => '27','key' => 'read_categories','table_name' => 'categories','created_at' => '2022-03-23 20:36:27','updated_at' => '2022-03-23 20:36:27'),
            array('id' => '28','key' => 'edit_categories','table_name' => 'categories','created_at' => '2022-03-23 20:36:27','updated_at' => '2022-03-23 20:36:27'),
            array('id' => '29','key' => 'add_categories','table_name' => 'categories','created_at' => '2022-03-23 20:36:27','updated_at' => '2022-03-23 20:36:27'),
            array('id' => '30','key' => 'delete_categories','table_name' => 'categories','created_at' => '2022-03-23 20:36:27','updated_at' => '2022-03-23 20:36:27'),
            array('id' => '31','key' => 'browse_posts','table_name' => 'posts','created_at' => '2022-03-23 20:36:29','updated_at' => '2022-03-23 20:36:29'),
            array('id' => '32','key' => 'read_posts','table_name' => 'posts','created_at' => '2022-03-23 20:36:29','updated_at' => '2022-03-23 20:36:29'),
            array('id' => '33','key' => 'edit_posts','table_name' => 'posts','created_at' => '2022-03-23 20:36:29','updated_at' => '2022-03-23 20:36:29'),
            array('id' => '34','key' => 'add_posts','table_name' => 'posts','created_at' => '2022-03-23 20:36:29','updated_at' => '2022-03-23 20:36:29'),
            array('id' => '35','key' => 'delete_posts','table_name' => 'posts','created_at' => '2022-03-23 20:36:29','updated_at' => '2022-03-23 20:36:29'),
            array('id' => '36','key' => 'browse_pages','table_name' => 'pages','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '37','key' => 'read_pages','table_name' => 'pages','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '38','key' => 'edit_pages','table_name' => 'pages','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '39','key' => 'add_pages','table_name' => 'pages','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '40','key' => 'delete_pages','table_name' => 'pages','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '41','key' => 'browse_products','table_name' => 'products','created_at' => '2022-03-24 08:51:04','updated_at' => '2022-03-24 08:51:04'),
            array('id' => '42','key' => 'read_products','table_name' => 'products','created_at' => '2022-03-24 08:51:04','updated_at' => '2022-03-24 08:51:04'),
            array('id' => '43','key' => 'edit_products','table_name' => 'products','created_at' => '2022-03-24 08:51:04','updated_at' => '2022-03-24 08:51:04'),
            array('id' => '44','key' => 'add_products','table_name' => 'products','created_at' => '2022-03-24 08:51:04','updated_at' => '2022-03-24 08:51:04'),
            array('id' => '45','key' => 'delete_products','table_name' => 'products','created_at' => '2022-03-24 08:51:04','updated_at' => '2022-03-24 08:51:04'),
            array('id' => '46','key' => 'browse_category','table_name' => 'category','created_at' => '2022-03-24 19:12:55','updated_at' => '2022-03-24 19:12:55'),
            array('id' => '47','key' => 'read_category','table_name' => 'category','created_at' => '2022-03-24 19:12:55','updated_at' => '2022-03-24 19:12:55'),
            array('id' => '48','key' => 'edit_category','table_name' => 'category','created_at' => '2022-03-24 19:12:55','updated_at' => '2022-03-24 19:12:55'),
            array('id' => '49','key' => 'add_category','table_name' => 'category','created_at' => '2022-03-24 19:12:55','updated_at' => '2022-03-24 19:12:55'),
            array('id' => '50','key' => 'delete_category','table_name' => 'category','created_at' => '2022-03-24 19:12:55','updated_at' => '2022-03-24 19:12:55'),
            array('id' => '51','key' => 'browse_coupons','table_name' => 'coupons','created_at' => '2022-03-24 20:21:26','updated_at' => '2022-03-24 20:21:26'),
            array('id' => '52','key' => 'read_coupons','table_name' => 'coupons','created_at' => '2022-03-24 20:21:26','updated_at' => '2022-03-24 20:21:26'),
            array('id' => '53','key' => 'edit_coupons','table_name' => 'coupons','created_at' => '2022-03-24 20:21:26','updated_at' => '2022-03-24 20:21:26'),
            array('id' => '54','key' => 'add_coupons','table_name' => 'coupons','created_at' => '2022-03-24 20:21:26','updated_at' => '2022-03-24 20:21:26'),
            array('id' => '55','key' => 'delete_coupons','table_name' => 'coupons','created_at' => '2022-03-24 20:21:26','updated_at' => '2022-03-24 20:21:26'),
            array('id' => '56','key' => 'browse_category_product','table_name' => 'category_product','created_at' => '2022-03-26 09:01:51','updated_at' => '2022-03-26 09:01:51'),
            array('id' => '57','key' => 'read_category_product','table_name' => 'category_product','created_at' => '2022-03-26 09:01:51','updated_at' => '2022-03-26 09:01:51'),
            array('id' => '58','key' => 'edit_category_product','table_name' => 'category_product','created_at' => '2022-03-26 09:01:51','updated_at' => '2022-03-26 09:01:51'),
            array('id' => '59','key' => 'add_category_product','table_name' => 'category_product','created_at' => '2022-03-26 09:01:51','updated_at' => '2022-03-26 09:01:51'),
            array('id' => '60','key' => 'delete_category_product','table_name' => 'category_product','created_at' => '2022-03-26 09:01:51','updated_at' => '2022-03-26 09:01:51')
        );
        DB::table('permissions')->insert($permissions);

        /* `ecommerce2`.`roles` */
        $roles = array(
            array('id' => '1','name' => 'admin','display_name' => 'Administrator','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-23 20:36:22'),
            array('id' => '2','name' => 'user','display_name' => 'Normal User','created_at' => '2022-03-23 20:36:22','updated_at' => '2022-03-23 20:36:22')
        );
        DB::table('roles')->insert($roles);

        /* `ecommerce2`.`permission_role` */
        $permission_role = array(
            array('permission_id' => '1','role_id' => '1'),
            array('permission_id' => '2','role_id' => '1'),
            array('permission_id' => '3','role_id' => '1'),
            array('permission_id' => '4','role_id' => '1'),
            array('permission_id' => '5','role_id' => '1'),
            array('permission_id' => '6','role_id' => '1'),
            array('permission_id' => '7','role_id' => '1'),
            array('permission_id' => '8','role_id' => '1'),
            array('permission_id' => '9','role_id' => '1'),
            array('permission_id' => '10','role_id' => '1'),
            array('permission_id' => '11','role_id' => '1'),
            array('permission_id' => '12','role_id' => '1'),
            array('permission_id' => '13','role_id' => '1'),
            array('permission_id' => '14','role_id' => '1'),
            array('permission_id' => '15','role_id' => '1'),
            array('permission_id' => '16','role_id' => '1'),
            array('permission_id' => '17','role_id' => '1'),
            array('permission_id' => '18','role_id' => '1'),
            array('permission_id' => '19','role_id' => '1'),
            array('permission_id' => '20','role_id' => '1'),
            array('permission_id' => '21','role_id' => '1'),
            array('permission_id' => '22','role_id' => '1'),
            array('permission_id' => '23','role_id' => '1'),
            array('permission_id' => '24','role_id' => '1'),
            array('permission_id' => '25','role_id' => '1'),
            array('permission_id' => '26','role_id' => '1'),
            array('permission_id' => '27','role_id' => '1'),
            array('permission_id' => '28','role_id' => '1'),
            array('permission_id' => '29','role_id' => '1'),
            array('permission_id' => '30','role_id' => '1'),
            array('permission_id' => '31','role_id' => '1'),
            array('permission_id' => '32','role_id' => '1'),
            array('permission_id' => '33','role_id' => '1'),
            array('permission_id' => '34','role_id' => '1'),
            array('permission_id' => '35','role_id' => '1'),
            array('permission_id' => '36','role_id' => '1'),
            array('permission_id' => '37','role_id' => '1'),
            array('permission_id' => '38','role_id' => '1'),
            array('permission_id' => '39','role_id' => '1'),
            array('permission_id' => '40','role_id' => '1'),
            array('permission_id' => '41','role_id' => '1'),
            array('permission_id' => '42','role_id' => '1'),
            array('permission_id' => '43','role_id' => '1'),
            array('permission_id' => '44','role_id' => '1'),
            array('permission_id' => '45','role_id' => '1'),
            array('permission_id' => '46','role_id' => '1'),
            array('permission_id' => '47','role_id' => '1'),
            array('permission_id' => '48','role_id' => '1'),
            array('permission_id' => '49','role_id' => '1'),
            array('permission_id' => '50','role_id' => '1'),
            array('permission_id' => '51','role_id' => '1'),
            array('permission_id' => '52','role_id' => '1'),
            array('permission_id' => '53','role_id' => '1'),
            array('permission_id' => '54','role_id' => '1'),
            array('permission_id' => '55','role_id' => '1'),
            array('permission_id' => '56','role_id' => '1'),
            array('permission_id' => '57','role_id' => '1'),
            array('permission_id' => '58','role_id' => '1'),
            array('permission_id' => '59','role_id' => '1'),
            array('permission_id' => '60','role_id' => '1')
        );
        DB::table('permission_role')->insert($permission_role);

        /* `ecommerce2`.`posts` */
        $posts = array(
            array('id' => '1','author_id' => '0','category_id' => NULL,'title' => 'Lorem Ipsum Post','seo_title' => NULL,'excerpt' => 'This is the excerpt for the Lorem Ipsum Post','body' => '<p>This is the body of the lorem ipsum post</p>','image' => 'posts/post1.jpg','slug' => 'lorem-ipsum-post','meta_description' => 'This is the meta description','meta_keywords' => 'keyword1, keyword2, keyword3','status' => 'PUBLISHED','featured' => '0','created_at' => '2022-03-23 20:36:29','updated_at' => '2022-03-23 20:36:29'),
            array('id' => '2','author_id' => '0','category_id' => NULL,'title' => 'My Sample Post','seo_title' => NULL,'excerpt' => 'This is the excerpt for the sample Post','body' => '<p>This is the body for the sample post, which includes the body.</p>
                          <h2>We can use all kinds of format!</h2>
                          <p>And include a bunch of other stuff.</p>','image' => 'posts/post2.jpg','slug' => 'my-sample-post','meta_description' => 'Meta Description for sample post','meta_keywords' => 'keyword1, keyword2, keyword3','status' => 'PUBLISHED','featured' => '0','created_at' => '2022-03-23 20:36:30','updated_at' => '2022-03-23 20:36:30'),
            array('id' => '3','author_id' => '0','category_id' => NULL,'title' => 'Latest Post','seo_title' => NULL,'excerpt' => 'This is the excerpt for the latest post','body' => '<p>This is the body for the latest post</p>','image' => 'posts/post3.jpg','slug' => 'latest-post','meta_description' => 'This is the meta description','meta_keywords' => 'keyword1, keyword2, keyword3','status' => 'PUBLISHED','featured' => '0','created_at' => '2022-03-23 20:36:30','updated_at' => '2022-03-23 20:36:30'),
            array('id' => '4','author_id' => '0','category_id' => NULL,'title' => 'Yarr Post','seo_title' => NULL,'excerpt' => 'Reef sails nipperkin bring a spring upon her cable coffer jury mast spike marooned Pieces of Eight poop deck pillage. Clipper driver coxswain galleon hempen halter come about pressgang gangplank boatswain swing the lead. Nipperkin yard skysail swab lanyard Blimey bilge water ho quarter Buccaneer.','body' => '<p>Swab deadlights Buccaneer fire ship square-rigged dance the hempen jig weigh anchor cackle fruit grog furl. Crack Jennys tea cup chase guns pressgang hearties spirits hogshead Gold Road six pounders fathom measured fer yer chains. Main sheet provost come about trysail barkadeer crimp scuttle mizzenmast brig plunder.</p>
          <p>Mizzen league keelhaul galleon tender cog chase Barbary Coast doubloon crack Jennys tea cup. Blow the man down lugsail fire ship pinnace cackle fruit line warp Admiral of the Black strike colors doubloon. Tackle Jack Ketch come about crimp rum draft scuppers run a shot across the bow haul wind maroon.</p>
          <p>Interloper heave down list driver pressgang holystone scuppers tackle scallywag bilged on her anchor. Jack Tar interloper draught grapple mizzenmast hulk knave cable transom hogshead. Gaff pillage to go on account grog aft chase guns piracy yardarm knave clap of thunder.</p>','image' => 'posts/post4.jpg','slug' => 'yarr-post','meta_description' => 'this be a meta descript','meta_keywords' => 'keyword1, keyword2, keyword3','status' => 'PUBLISHED','featured' => '0','created_at' => '2022-03-23 20:36:30','updated_at' => '2022-03-23 20:36:30')
        );
        DB::table('posts')->insert($posts);

        /* `ecommerce2`.`settings` */
        $settings = array(
            array('id' => '1','key' => 'site.title','display_name' => 'Site Title','value' => 'Site Title','details' => '','type' => 'text','order' => '1','group' => 'Site'),
            array('id' => '2','key' => 'site.description','display_name' => 'Site Description','value' => 'Site Description','details' => '','type' => 'text','order' => '2','group' => 'Site'),
            array('id' => '3','key' => 'site.logo','display_name' => 'Site Logo','value' => '','details' => '','type' => 'image','order' => '3','group' => 'Site'),
            array('id' => '4','key' => 'site.google_analytics_tracking_id','display_name' => 'Google Analytics Tracking ID','value' => NULL,'details' => '','type' => 'text','order' => '4','group' => 'Site'),
            array('id' => '5','key' => 'admin.bg_image','display_name' => 'Admin Background Image','value' => '','details' => '','type' => 'image','order' => '5','group' => 'Admin'),
            array('id' => '6','key' => 'admin.title','display_name' => 'Admin Title','value' => 'Abdulrahman','details' => '','type' => 'text','order' => '1','group' => 'Admin'),
            array('id' => '7','key' => 'admin.description','display_name' => 'Admin Description','value' => 'Welcome to the Admin.','details' => '','type' => 'text','order' => '2','group' => 'Admin'),
            array('id' => '8','key' => 'admin.loader','display_name' => 'Admin Loader','value' => '','details' => '','type' => 'image','order' => '3','group' => 'Admin'),
            array('id' => '9','key' => 'admin.icon_image','display_name' => 'Admin Icon Image','value' => '','details' => '','type' => 'image','order' => '4','group' => 'Admin'),
            array('id' => '10','key' => 'admin.google_analytics_client_id','display_name' => 'Google Analytics Client ID (used for admin dashboard)','value' => NULL,'details' => '','type' => 'text','order' => '1','group' => 'Admin')
        );
        DB::table('settings')->insert($settings);

        /* `ecommerce2`.`translations` */
        $translations = array(
            array('id' => '1','table_name' => 'data_types','column_name' => 'display_name_singular','foreign_key' => '5','locale' => 'pt','value' => 'Post','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '2','table_name' => 'data_types','column_name' => 'display_name_singular','foreign_key' => '6','locale' => 'pt','value' => 'Página','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '3','table_name' => 'data_types','column_name' => 'display_name_singular','foreign_key' => '1','locale' => 'pt','value' => 'Utilizador','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '4','table_name' => 'data_types','column_name' => 'display_name_singular','foreign_key' => '4','locale' => 'pt','value' => 'Categoria','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '5','table_name' => 'data_types','column_name' => 'display_name_singular','foreign_key' => '2','locale' => 'pt','value' => 'Menu','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '6','table_name' => 'data_types','column_name' => 'display_name_singular','foreign_key' => '3','locale' => 'pt','value' => 'Função','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '7','table_name' => 'data_types','column_name' => 'display_name_plural','foreign_key' => '5','locale' => 'pt','value' => 'Posts','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '8','table_name' => 'data_types','column_name' => 'display_name_plural','foreign_key' => '6','locale' => 'pt','value' => 'Páginas','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '9','table_name' => 'data_types','column_name' => 'display_name_plural','foreign_key' => '1','locale' => 'pt','value' => 'Utilizadores','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '10','table_name' => 'data_types','column_name' => 'display_name_plural','foreign_key' => '4','locale' => 'pt','value' => 'Categorias','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '11','table_name' => 'data_types','column_name' => 'display_name_plural','foreign_key' => '2','locale' => 'pt','value' => 'Menus','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '12','table_name' => 'data_types','column_name' => 'display_name_plural','foreign_key' => '3','locale' => 'pt','value' => 'Funções','created_at' => '2022-03-23 20:36:31','updated_at' => '2022-03-23 20:36:31'),
            array('id' => '13','table_name' => 'categories','column_name' => 'slug','foreign_key' => '1','locale' => 'pt','value' => 'categoria-1','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '14','table_name' => 'categories','column_name' => 'name','foreign_key' => '1','locale' => 'pt','value' => 'Categoria 1','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '15','table_name' => 'categories','column_name' => 'slug','foreign_key' => '2','locale' => 'pt','value' => 'categoria-2','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '16','table_name' => 'categories','column_name' => 'name','foreign_key' => '2','locale' => 'pt','value' => 'Categoria 2','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '17','table_name' => 'pages','column_name' => 'title','foreign_key' => '1','locale' => 'pt','value' => 'Olá Mundo','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '18','table_name' => 'pages','column_name' => 'slug','foreign_key' => '1','locale' => 'pt','value' => 'ola-mundo','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '19','table_name' => 'pages','column_name' => 'body','foreign_key' => '1','locale' => 'pt','value' => '<p>Olá Mundo. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>
          <p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '20','table_name' => 'menu_items','column_name' => 'title','foreign_key' => '1','locale' => 'pt','value' => 'Painel de Controle','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '21','table_name' => 'menu_items','column_name' => 'title','foreign_key' => '2','locale' => 'pt','value' => 'Media','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '22','table_name' => 'menu_items','column_name' => 'title','foreign_key' => '12','locale' => 'pt','value' => 'Publicações','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '23','table_name' => 'menu_items','column_name' => 'title','foreign_key' => '3','locale' => 'pt','value' => 'Utilizadores','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '24','table_name' => 'menu_items','column_name' => 'title','foreign_key' => '11','locale' => 'pt','value' => 'Categorias','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '25','table_name' => 'menu_items','column_name' => 'title','foreign_key' => '13','locale' => 'pt','value' => 'Páginas','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '26','table_name' => 'menu_items','column_name' => 'title','foreign_key' => '4','locale' => 'pt','value' => 'Funções','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '27','table_name' => 'menu_items','column_name' => 'title','foreign_key' => '5','locale' => 'pt','value' => 'Ferramentas','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '28','table_name' => 'menu_items','column_name' => 'title','foreign_key' => '6','locale' => 'pt','value' => 'Menus','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '29','table_name' => 'menu_items','column_name' => 'title','foreign_key' => '7','locale' => 'pt','value' => 'Base de dados','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32'),
            array('id' => '30','table_name' => 'menu_items','column_name' => 'title','foreign_key' => '10','locale' => 'pt','value' => 'Configurações','created_at' => '2022-03-23 20:36:32','updated_at' => '2022-03-23 20:36:32')
        );
        DB::table('translations')->insert($translations);

        /* `ecommerce2`.`user_roles` */
        $user_roles = array(
        );
        DB::table('user_roles')->insert($user_roles);
    }
}

@extends('layouts.layout')

@section('title', 'Products')

@section('breadcrumbs')
    <x-breadcrumbs :breadcrumbs="['Shop']" />
@endsection

@section('content')

<div class="products-section container">

	<div class="sidebar">
		<h3>By Category</h3>
		<ul>
			@foreach ($categories as $category)
				<li class="{{ setActiveCategory($category->slug) }}">
					<a href="{{ request()->fullUrlWithQuery(['category' => $category->slug]) }}">
						{{ $category->name }}
					</a>
				</li>
			@endforeach
		</ul>

		<h3>By Price</h3>
		<ul>
			<li><a href="#">$0 - $700</a></li>
			<li><a href="#">$700 - $2500</a></li>
			<li><a href="#">$2500+</a></li>
		</ul>
	</div>

	<div>

		<div class="products-header">
			<h1 class="stylish-heading">
				{{ request()->category ?? 'Products' }}
			</h1>
			<div>
				<strong>Price: </strong>
				<a href="{{ request()->fullUrlWithQuery(['sort' => 'low_high']) }}">
					Low to High
				</a> |
				<a href="{{ request()->fullUrlWithQuery(['sort' => 'high_low']) }}">
					High to Low
				</a>
			</div>
		</div>
		<div class="products text-center">
			@forelse ($products as $product)
				<div class="product">
					<a href="{{ route('shop.show', $product->slug) }}">
						<img src="{{ $product->image }}" alt="product">
					</a>
					<a href="{{ route('shop.show', $product->slug) }}">
						<div class="product-name">{{ $product->name }}</div>
					</a>
					<div class="product-price">{{ $product->price }}</div>
				</div>
			@empty
				<div style="text-align: left">No items found</div>
			@endforelse
		</div>

		<div class="spacer"></div>
		{{ $products->appends(request()->input())->links() }}

	</div>

</div>

@endsection

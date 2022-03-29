@extends('layouts.layout')

@section('title', $product->name)

@section('extra-css')

@endsection

@section('content')

    <div class="breadcrumbs">
        <div class="container">
            <a href="#">Home</a>
            <i class="fa fa-chevron-right breadcrumb-separator"></i>
            <span>Shop</span>
            <i class="fa fa-chevron-right breadcrumb-separator"></i>
            <span>Macbook Pro</span>
        </div>
    </div>

    <div class="product-section container">
        <div>
            <div class="product-section-image">
                <img src="{{ asset($product->image) }}" alt="product">
            </div>
            <div>
                @if ($product->images)
                    @foreach ($product->images as $image)
                        <img src="{{ $image }}" alt="Product">
                    @endforeach
                @endif
            </div>
        </div>
        <div class="product-section-information">
            <h1 class="product-section-title">{{ $product->name }}</h1>
            <div class="product-section-subtitle">
                {!! $product->details !!}
            </div>
            <div class="product-section-price">{{ $product->price }}</div>

            <p>
                {!! $product->description !!}
            </p>

            <p>&nbsp;</p>

            <form action="{{ route('cart.store') }}" method="POST">
                @csrf

                <input type="hidden" name="id" value="{{ $product->id }}">
                <input type="hidden" name="name" value="{{ $product->name }}">
                <input type="hidden" name="price" value="{{ $product->getRawOriginal('price') }}">

                <button type="submit" class="button button-plain">Add to Cart</button>
            </form>
        </div>
    </div>

    @include('partials.might-like')


@endsection

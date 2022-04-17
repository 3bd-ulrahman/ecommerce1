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
                <img src="{{ asset($product->image) }}"
                    alt="product"
                    id="currentImage"
                    class="active"
                >
            </div>
            <div class="product-section-images">
                <div class="product-section-thumbnail selected">
                    <img src="{{ $product->image }}" alt="Product">
                </div>
                @if ($product->images)
                    @foreach (json_decode($product->images, true) as $image)
                    <div class="product-section-thumbnail">
                        <img src="{{ asset('storage/'.$image) }}" alt="Product">
                    </div>
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

@push('js')
<script>
    (function () {
        const currentImage = document.querySelector('#currentImage');
        const images = document.querySelectorAll('.product-section-thumbnail');

        images.forEach((element) => element.addEventListener('click', thumbnailClick));

        function thumbnailClick(e) {
            currentImage.classList.remove('active');

            currentImage.addEventListener('transitionend', () => {
                currentImage.src = this.querySelector('img').src;
                currentImage.classList.add('active');
            });

            images.forEach(function (element) {
                element.classList.remove('selected');
            });
            this.classList.add('selected');
        }
    })();
</script>
@endpush

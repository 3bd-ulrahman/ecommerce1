@extends('layouts.layout')

@section('title', 'Shopping Cart')

@section('extra-css')

@endsection

@section('content')

    <div class="breadcrumbs">
        <div class="container">
            <a href="#">Home</a>
            <i class="fa fa-chevron-right breadcrumb-separator"></i>
            <span>Shopping Cart</span>
        </div>
    </div>

    <div class="cart-section container">
        <div>

        @if (Cart::count() > 0)
        <h2 style="margin-bottom: 0px">
            {{ Cart::content()->count() }} product(s) in Shopping Cart
        </h2>
        <h2>{{ Cart::count() }} item(s) in Shopping Cart</h2>

        <div class="cart-table">
            @foreach (Cart::content() as $item)
            <div class="cart-table-row">
                <div class="cart-table-row-left">
                    <a href="{{ route('shop.show', $item->model->slug) }}">
                        <img src="{{ $item->model->image }}" alt="item" class="cart-table-img">
                    </a>
                    <div class="cart-item-details">
                        <div class="cart-table-item">
                            <a href="{{ route('shop.show', $item->model->slug) }}">
                                {{ $item->model->name }}
                            </a>
                        </div>
                        <div class="cart-table-description">
                            {{ $item->model->details }}
                        </div>
                    </div>
                </div>
                <div class="cart-table-row-right">
                    <div class="cart-table-actions">
                        <form action="{{ route('cart.destroy', $item->rowId) }}" method="post">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="cart-options">
                                Remove
                            </button>
                        </form>
                        <form action="{{ route('cart.switchToSaveForLater', $item->rowId) }}" method="post">
                            @csrf

                            <button type="submit" class="cart-options">
                                Save for Later
                            </button>
                        </form>
                    </div>
                    <div>
                        <select class="quantity" data-id="{{ $item->rowId }}" data-qty={{ $item->qty }}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div>{{ presentPrice($item->subtotal) }}</div>
                </div>
            </div>
            @endforeach
        </div>

        <a href="#" class="have-code">Have a Code?</a>

        <div class="have-code-container">
            <form action="#">
                <input type="text">
                <button type="submit" class="button button-plain">Apply</button>
            </form>
        </div>

        <div class="cart-totals">
            <div class="cart-totals-left">
                Shipping is free because we’re awesome like that. Also because that’s additional stuff I don’t feel like figuring out :).
            </div>

            <div class="cart-totals-right">
                <div>
                    Subtotal <br>
                    Tax({{ config('cart.tax') }}%)<br>
                    <span class="cart-totals-total">Total</span>
                </div>
                <div class="cart-totals-subtotal">
                    {{ presentPrice(Cart::subtotal()) }} <br>
                    {{ presentPrice(Cart::tax()) }} <br>
                    <span class="cart-totals-total">
                        {{ presentPrice(Cart::total()) }}
                    </span>
                </div>
            </div>
        </div>

        <div class="cart-buttons">
            <a href="{{ route('shop.index') }}" class="button">
                Continue Shopping
            </a>
            <a href="{{ route('checkout.index') }}" class="button-primary">
                Proceed to Checkout
            </a>
        </div>
        @else
        <h3 style="margin-bottom: 12px">No items in cart</h3>
        <div class="cart-buttons">
            <a href="{{ route('shop.index') }}" class="button">
                Continue Shopping
            </a>
        </div>
        @endif

        @if (Cart::instance('saveForLater')->count() > 0)
        <h2>
            {{ Cart::instance('saveForLater')->count() }} item(s) Saved For Later
        </h2>

        <div class="saved-for-later cart-table">
            @foreach (Cart::instance('saveForLater')->content() as $item)
                <div class="cart-table-row">
                    <div class="cart-table-row-left">
                        <a href="{{ route('shop.show', $item->model->slug) }}">
                            <img src="{{ $item->model->image }}" alt="item" class="cart-table-img">
                        </a>
                        <div class="cart-item-details">
                            <div class="cart-table-item">
                                <a href="{{ route('shop.show', $item->model->slug) }}">
                                    {{ $item->model->name }}
                                </a>
                            </div>
                            <div class="cart-table-description">
                                {{ $item->model->details }}
                            </div>
                        </div>
                    </div>
                    <div class="cart-table-row-right">
                        <div class="cart-table-actions">
                            <form action="{{ route('saveForLater.destroy', $item->rowId) }}" method="post">
                                @csrf
                                @method('DELETE')

                                <button type="submit" class="cart-options">
                                    Remove
                                </button>
                            </form>
                            <form action="{{ route('saveForLater.switchToCart', $item->rowId) }}" method="post">
                                @csrf

                                <button type="submit" class="cart-options">
                                    Move To Cart
                                </button>
                            </form>
                        </div>
                        {{-- <div>
                            <select class="quantity">
                                <option selected="">1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div> --}}
                        <div>{{ presentPrice($item->price) }}</div>
                    </div>
                </div>
            @endforeach
        </div>
        @else
            <h3>you have no items saved for later</h3>
        @endif

        </div>
    </div>

    @include('partials.might-like')

@section('js')
<script src="{{ asset('js/app.js') }}"></script>
<script>
    (function () {
        const classname = document.querySelectorAll('.quantity');

        Array.from(classname).forEach(function (element) {

            // set value of option eqaul cart quantity
            let qty = element.getAttribute('data-qty');
            element.options.selectedIndex = qty - 1;

            element.addEventListener('change', function () {

                const id = element.getAttribute('data-id');

                axios.patch(`cart/${id}`, {
                    quantity: this.value
                }).then(function (response) {
                    window.location.href = '{{ route('cart.index') }}';
                }).catch(function (error) {
                    console.log(error);
                });

            });
        });
    })();
</script>
@endsection

@endsection

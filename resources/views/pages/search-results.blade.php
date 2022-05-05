@extends('layouts.layout')

@section('title', '$product->name')

@section('breadcrumbs')
    @component('components.breadcrumbs')
        <a href="/">Home</a>
        <i class="fa fa-chevron-right breadcrumb-separator"></i>
        <span>Shop</span>
    @endcomponent
@endsection

@section('content')

    <div class="search-container container">
        <h1>Search Results</h1>
        <p class="search-results-count" style="font-size: 1.2rem;">
            {{ $products->total() }} result(s) for '{{ request()->input('query') }}'
            &nbsp;
            page {{ $products->currentPage() }} from {{ $products->lastPage() }}
        </p>

        @if ($products->count() > 0)
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Details</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($products as $product)
                    <tr>
                        <th>
                            <a href="{{ route('shop.show', $product->slug) }}">
                                {{ $product->name }}
                            </a>
                        </th>
                        <td>{{ $product->details }}</td>
                        <td>{{ Str::limit($product->description, 80) }}</td>
                        <td>{{ $product->price }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        {{ $products->appends(request()->input())->links() }}
        @endif
    </div>

@endsection

@push('js')

@endpush

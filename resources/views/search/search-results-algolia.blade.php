@extends('layouts.layout')

@section('title', 'Search Results Algolia')

@push('css')
    <link rel="stylesheet" href="{{ asset('css/algolia.css') }}">
@endpush

@section('breadcrumbs')
    <x-breadcrumbs :breadcrumbs="['Search Results Algolia']" />
@endsection

@section('content')

    <div class="container">
        <h1 style="margin-top: 40px;">Search Results</h1>

        <div class="ais-InstantSearch">
            <div class="left-panel">
                <div id="searchbox" class="ais-SearchBox"></div>
                <div id="stats"></div>
                <h2 style="margin: 10px 0 0 0">Categories</h2>
                <div id="clear-refinements"></div>
                <div id="brand-list"></div>
            </div>
            <div class="right-panel">
                <div id="hits"></div>
                <div id="pagination" style="margin-top: 3rem;"></div>
            </div>
        </div>
    </div>

@endsection

@push('js')
    <script src="{{ asset('js/algolia/algolia-instantsearch.js') }}"></script>
@endpush

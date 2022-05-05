<div class="breadcrumbs">
    <div class="breadcrumbs-container container">
        <div>
            {{ $slot }}
        </div>
        <div>
            {{-- @include('partials.search') --}}
            <form action="{{ route('shop.search') }}" method="GET" class="search-form">
                <i class="fa fa-search search-icon"></i>
                <input type="text" name="query" id="query" value="{{ request()->input('query') }}" class="search-box" placeholder="Search for product" required>
            </form>
        </div>
    </div>
</div>

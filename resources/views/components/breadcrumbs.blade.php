<div id="app">
    <div class="breadcrumbs">
        <div class="breadcrumbs-container container">

            <div>
                <a href="/">Home</a>
                <i class="fa fa-chevron-right breadcrumb-separator"></i>

                <span>{{ $breadcrumbs[0] }}</span>
                @if (isset($breadcrumbs[1]))
                    <i class="fa fa-chevron-right breadcrumb-separator"></i>
                    <span>{{ $breadcrumbs[1] }}</span>
                @endif
            </div>

            <div>
                @include('partials.search')
            </div>

        </div>
    </div>
</div>

@push('js')
    <script type="module" src="{{ asset('js/algolia/algolia-autocomplete.js') }}"></script>
@endpush

@php
    $dir = (App::getLocale() == 'ar') ? 'topLeft' : 'topRight';
    $timeout = 2500;
@endphp

@if (session('success'))
    <script>
        new Noty({
            type: 'info',
            layout: "<?php echo $dir; ?>",
            text: "{{ session('success') }}",
            timeout: {{ $timeout }},
            killer: true
        }).show();
    </script>
@endif


@if (session('error'))
    <script>
        new Noty({
            type: 'error',
            layout: "<?php echo $dir; ?>",
            text: "{{ session('error') }}",
            timeout: {{ $timeout }},
            killer: true
        }).show();
    </script>
@endif



@php
    $dir = (App::getLocale() == 'ar') ? 'topLeft' : 'topRight';
@endphp

@if (session('success'))
    <script>
        new Noty({
            type: 'info',
            layout: "<?php echo $dir; ?>",
            text: "{{ session('success') }}",
            timeout: 2000,
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
            timeout: 2000,
            killer: true
        }).show();
    </script>
@endif

@if (count($errors) > 0)
    <script>
        new Noty({
            type: 'error',
            layout: "<?php echo $dir; ?>",
            text: "Abdulrahman",
            text:{{ $errors->first() }},
            timeout: 2000,
            killer: true
        }).show();
    </script>
@endif

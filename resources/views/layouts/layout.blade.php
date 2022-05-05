<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Laravel Ecommerce | @yield('title', '')</title>

    <link href="/favicon.ico" rel="SHORTCUT ICON" />

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat%7CRoboto:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    {{-- Noty --}}
    <link rel="stylesheet" href="{{ asset('plugins/noty/noty.css') }}">
    <style>.noty_theme__mint.noty_bar .noty_body {font-size: 18px}</style>
    <script src="{{ asset('plugins/noty/noty.min.js') }}"></script>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/front/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/responsive.css') }}">

    @yield('css')
</head>
<body class="@yield('body-class', '')">

    <div id='app'></div>

    <header>
        @include('partials.nav')
    </header>

    @include('partials._session')

    @yield('breadcrumbs')

    @include('partials._errors')

    @yield('content')

    @include('partials.footer')

    @yield('js')
    @stack('js')

</body>
</html>

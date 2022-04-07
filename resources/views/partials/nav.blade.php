<nav class="top-nav container">
    <div class="top-nav-left">
        <div class="logo">
            <a href="/">
                Ecommerce
            </a>
        </div>
        <ul>
            <li>
                <a href="{{ route('shop.index') }}">Shop</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
        </ul>
    </div>
    <div class="top-nav-right">
        <ul>
            @guest
                <li>
                    <a href="{{ route('register') }}">Sign Up</a>
                </li>
                <li>
                    <a href="{{ route('login') }}">Login</a>
                </li>
            @else
                <li>
                    <a class="dropdown-item" href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                    </a>
                </li>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
            @endguest
            <li>
                <a href="{{ route('cart.index') }}">
                    Cart
                    @if (Cart::instance('default')->count() > 0)
                    <span class="cart-count">
                        <span>{{ Cart::instance('default')->count() }}</span>
                    </span>
                    @endif
                </a>
            </li>
        </ul>
    </div>
</nav>

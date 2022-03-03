@extends('layouts.layout')

@section('title', 'Checkout')

@section('css')

@endsection

@section('content')

    <div class="container">
        <h1 class="checkout-heading stylish-heading">Checkout</h1>
        <div class="checkout-section">
            <div>
                <form action="#" id="payment-form">
                    <h2>Billing Details</h2>

                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" id="email" name="email" value="">
                    </div>

                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name" value="">
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" name="address" value="">
                    </div>

                    <div class="half-form">
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" class="form-control" id="city" name="city" value="">
                        </div>
                        <div class="form-group">
                            <label for="province">Province</label>
                            <input type="text" class="form-control" id="province" name="province" value="">
                        </div>
                    </div> <!-- end half-form -->

                    <div class="half-form">
                        <div class="form-group">
                            <label for="postalcode">Postal Code</label>
                            <input type="text" class="form-control" id="postalcode" name="postalcode" value="">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="text" class="form-control" id="phone" name="phone" value="">
                        </div>
                    </div> <!-- end half-form -->

                    <div class="spacer"></div>

                    <h2>Payment Details</h2>

                    <div class="form-group">
                        <label for="name_on_card">Name on Card</label>
                        <input type="text" class="form-control" id="name_on_card" name="name_on_card" value="">
                    </div>

                    {{-- stripe --}}
                    <div class="form-group">
                        <div id="payment-element">

                            <!--Stripe.js injects the Payment Element-->

                          </div>

                          <button id="submit">

                            <div class="spinner hidden" id="spinner"></div>

                            <span id="button-text">Pay now</span>

                          </button>

                          <div id="payment-message" class="hidden"></div>
                    </div>

                    <div class="spacer"></div>

                    <button type="submit" class="button-primary full-width">Complete Order</button>
                </form>
            </div>

            <div class="checkout-table-container">
                <h2>Your Order</h2>

                <div class="checkout-table">
                    @foreach (Cart::content() as $item)
                    <div class="checkout-table-row">
                        <div class="checkout-table-row-left">
                            <img src="{{ $item->model->image }}" alt="item" class="checkout-table-img">
                            <div class="checkout-item-details">
                                <div class="checkout-table-item">
                                    {{ $item->model->name }}
                                </div>
                                <div class="checkout-table-description">
                                    {{ $item->model->details }}
                                </div>
                                <div class="checkout-table-price">
                                    {{ $item->model->price }}
                                </div>
                            </div>
                        </div>

                        <div class="checkout-table-row-right">
                            <div class="checkout-table-quantity">
                                {{ $item->qty }}
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>

                <div class="checkout-totals">
                    <div class="checkout-totals-left">
                        Subtotal <br>
                        {{-- Discount (10OFF - 10%) <br> --}}
                        Tax <br>
                        <span class="checkout-totals-total">Total</span>

                    </div>

                    <div class="checkout-totals-right">
                        {{ presentPrice($item->subtotal) }} <br>
                        {{-- -$750.00 <br> --}}
                        {{ presentPrice(Cart::tax()) }} <br>
                        <span class="checkout-totals-total">
                            {{ presentPrice(Cart::total()) }}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
@section('js')
<script src="https://js.stripe.com/v3/"></script>
<script>
    // This is a public sample test API key.
    // Don’t submit any personally identifiable information in requests made with this key.
    // Sign in to see your own test API key embedded in code samples.
    const stripe = Stripe("pk_test_51JVen0CvaRQNq9FWjLnIFnnPMlEHKQdI6S8mFEmgqdMi2S6t7QgNZEqReGAGkbjh4uTqnFfPoWk2eW8Lh4fOuzCx00gaieVfXE");

    // The items the customer wants to buy
    const items = [{ id: "xl-tshirt" }];

    let elements;

    initialize();
    checkStatus();

    document
    .querySelector("#payment-form")
    .addEventListener("submit", handleSubmit);

    // Fetches a payment intent and captures the client secret
    async function initialize() {
    const { clientSecret } = await fetch("/create.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
    }).then((r) => r.json());

    elements = stripe.elements({ clientSecret });

    const paymentElement = elements.create("payment");
    paymentElement.mount("#payment-element");
    }

    async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:4242/public/checkout.html",
        },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
        showMessage(error.message);
    } else {
        showMessage("An unexpected error occured.");
    }

    setLoading(false);
    }

    // Fetches the payment intent status after payment submission
    async function checkStatus() {
    const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
    );

    if (!clientSecret) {
        return;
    }

    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

    switch (paymentIntent.status) {
        case "succeeded":
        showMessage("Payment succeeded!");
        break;
        case "processing":
        showMessage("Your payment is processing.");
        break;
        case "requires_payment_method":
        showMessage("Your payment was not successful, please try again.");
        break;
        default:
        showMessage("Something went wrong.");
        break;
    }
    }

    // ------- UI helpers -------

    function showMessage(messageText) {
    const messageContainer = document.querySelector("#payment-message");

    messageContainer.classList.remove("hidden");
    messageContainer.textContent = messageText;

    setTimeout(function () {
        messageContainer.classList.add("hidden");
        messageText.textContent = "";
    }, 4000);
    }

    // Show a spinner on payment submission
    function setLoading(isLoading) {
    if (isLoading) {
        // Disable the button and show a spinner
        document.querySelector("#submit").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
    } else {
        document.querySelector("#submit").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
    }
    }
</script>
@endsection
@endsection

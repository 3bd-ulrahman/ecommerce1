<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Accept a payment</title>
    <meta name="description" content="A demo of a payment on Stripe" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://js.stripe.com/v3/"></script>
    {{-- <script src="/checkout.js" defer></script> --}}
    <link rel="stylesheet" href="/checkout.css" />
    <link rel="stylesheet" href="/css/app.css">
</head>

<body>

    <!-- Display a payment form -->
    <form id="payment-form">

        <div id="payment-element">

            <!--Stripe.js injects the Payment Element-->

        </div>

        <button id="submit">

            <div class="spinner hidden" id="spinner"></div>

            <span id="button-text">Pay now</span>

        </button>

        <div id="payment-message" class="hidden"></div>

    </form>


<script src="https://js.braintreegateway.com/web/dropin/1.13.0/js/dropin.min.js"></script>
{{-- <script>
    var stripe = Stripe('pk_test_JKVJPMynL8ckk7ivBxoroTlT');
    var elements = stripe.elements();
    // var style = {
    //     base: {
    //     color: '#32325d',
    //     lineHeight: '18px',
    //     fontFamily: '"Roboto", Helvetica Neue", Helvetica, sans-serif',
    //     fontSmoothing: 'antialiased',
    //     fontSize: '16px',
    //     '::placeholder': {
    //         color: '#aab7c4'
    //     }
    //     },
    //     invalid: {
    //     color: '#fa755a',
    //     iconColor: '#fa755a'
    //     }
    // };
    // Create an instance of the card Element
    var card = elements.create('card', {
        style: style,
        hidePostalCode: true
    });
    // Add an instance of the card Element into the `card-element` <div>
    card.mount('#card-element');
    // Handle real-time validation errors from the card Element.
</script> --}}
<script>
    var stripe = Stripe('pk_test_JKVJPMynL8ckk7ivBxoroTlT');
    var elements = stripe.elements();
    var card = elements.create('card', {
        // hidePostalCode: false
    });
    // const paymentElement = elements.create("payment");
    card.mount("#payment-element");
</script>
</body>
</html>

(function() {
  var stripe = Stripe('pk_live_l7EQ68G1zeTNVBfofXYssGE900JHYvEJ8Q');

  var checkoutButton = document.getElementById('checkout-button-price_1IpbBqG1VXL5zVgOAwtSl4J8');
  checkoutButton.addEventListener('click', function () {
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1IpbBqG1VXL5zVgOAwtSl4J8', quantity: 1}],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://stripe.com/docs/payments/checkout/fulfill-orders
       */
      successUrl: 'https://www.legalutopia.co.uk/success.html',
      cancelUrl: 'https://www.legalutopia.co.uk/canceled.html',
    })
    .then(function (result) {
      if (result.error) {
        /*
         * If `redirectToCheckout` fails due to a browser or network
         * error, display the localized error message to your customer.
         */
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();
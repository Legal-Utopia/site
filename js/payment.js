/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Script for the button which corresponds to the £99.99 price tag*/
(function() {
  var stripe = Stripe('pk_test_FDPtusaaQazanMehraItyOz100isLaJZhO');

  var checkoutButton = document.getElementById('checkout-button-price_1InhMEG1VXL5zVgO11WBTje2');
  checkoutButton.addEventListener('click', function () {
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1InhMEG1VXL5zVgO11WBTje2', quantity: 1}],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://stripe.com/docs/payments/checkout/fulfill-orders
       */
      successUrl: 'https://legalutopia.services/success',
      cancelUrl: 'https://legalutopia.services/canceled',
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

/*Script for the button which corresponds to the £149.99 price tag*/
(function() {
  var stripe = Stripe('pk_test_FDPtusaaQazanMehraItyOz100isLaJZhO');

  var checkoutButton = document.getElementById('checkout-button-price_1InhPzG1VXL5zVgOImEwem3X');
  checkoutButton.addEventListener('click', function () {
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1InhPzG1VXL5zVgOImEwem3X', quantity: 1}],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://stripe.com/docs/payments/checkout/fulfill-orders
       */
      successUrl: 'https://legalutopia.services/success',
      cancelUrl: 'https://legalutopia.services/canceled',
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



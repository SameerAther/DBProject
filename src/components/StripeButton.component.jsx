import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Jcr1mGiEIYcwevMq7KWwclrF9a8tT7VRQJc2b9QxHTU5LoOqEmo7ujRUOXwgrkqdufb9lMPJVs3XrhJH1CeCCYr00Y2DEDsCn';

  const onToken = () => {
    console.log('Successful');
    alert('Payment Successfull')
  }

  return(
    <StripeCheckout 
      label="Pay Now"
      name="Clothing Pvt Ltd."
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      token = {onToken}
      panelLabel="Pay Now"
      stripeKey = {publishableKey}
      amount = {priceForStripe}
    />
  )
}
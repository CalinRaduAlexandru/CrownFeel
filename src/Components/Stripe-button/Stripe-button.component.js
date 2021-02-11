import React from "react";
import StripeCheckout from "react-stripe-checkout";
import crown from "./../../Assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IBY8YIAuzIuRHYREd15mt2mjCAjrgknYxv8EyZe3XWzwkGUsKVBlfhCOql57aVb1b4eeNyr2YC1jkmobWRHn3bI00nu176qde";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crownfeel Ltd."
      billingAddress
      shippingAddress
      image={crown}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

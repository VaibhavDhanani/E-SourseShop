import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../../assets/e-sourceshop-logo-zip-file/png/logo-no-background.png"

const StripeCheckoutButton = ({ price }) => {
  const publishKey =
    "pk_test_51P6BiVSI75Ug1k9LAADosHU7z2cDDNPDjfubKZb39QsIyIZPuzaEz93LF6zH1OF0yWz9R50v04x2WDxrTQyiiujc00AMOq4xnf";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Here"
      name="E-SourceShop Ltd"
      billingAddress
      shippingAddress
      image="https://imgs.search.brave.com/h2xxtuqWu5QktQOsEiEyS_koMMSF7xtoW-ioH2f7Mg4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9hdE84eHBodmcw/a0hib0Jkako2a3gz/TlpnZUk9LzEwMngw/OjgwMng3MDAvZml0/LWluLzUwMHg1MDAv/cHJvamVjdHMtZmls/ZXMvMTgvMTg5MS8x/ODkxMzAvNjdjMTM2/ODMtOWUxMy1mOTBm/LWM3NWEtNzgwZDI4/ZGUwZmQ2LnBuZw"
      currency="INR"
      description={`Your total bill is ${price}`}
      amount={price*100}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );    
};

export default StripeCheckoutButton;

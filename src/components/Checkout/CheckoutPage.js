import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Checkout from "./Checkout";

const CheckoutPage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Checkout />
    </React.Fragment>
  );
};

export default CheckoutPage;

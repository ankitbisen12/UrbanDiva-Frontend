import React from "react";
import Navbar from "../Navbar/Navbar";
import EmptyCart from "../Cart/EmptyCart";

const EmptyCartPage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <EmptyCart />
    </React.Fragment>
  );
};

export default EmptyCartPage;

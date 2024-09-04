import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import UserOrders from "./UserOrders";

const UserOrdersPage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <UserOrders />
      <Footer></Footer>
    </React.Fragment>
  );
};

export default UserOrdersPage;

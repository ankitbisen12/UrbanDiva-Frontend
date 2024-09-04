import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import UserOrderDetail from "./UserOrderDetail";

const UserOrderDetailPage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <UserOrderDetail />
      <Footer></Footer>
    </React.Fragment>
  );
};

export default UserOrderDetailPage;

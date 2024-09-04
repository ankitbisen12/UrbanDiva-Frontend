import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import UserProfile from "./UserProfile";

const UserProfilePage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <UserProfile />
      <Footer></Footer>
    </React.Fragment>
  );
};

export default UserProfilePage;

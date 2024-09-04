import React from "react";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "./authSlice";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Protected = (props) => {
  const user = useSelector(selectLoggedInUser);
  if (!user) {
    toast.warn("Please login", {
      position: "top-center",
      autoClose: 3000, // Close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return (
      <React.Fragment>
        <Navigate to="/"></Navigate>
        <ToastContainer />
      </React.Fragment>
    );
  }

  return props.children;
};

export default Protected;

import "./App.css";
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Login/Signup";
import AboutUs from "./components/Help/AboutUs";
import ContactUs from "./components/Help/ContactUs";
import Login from "./components/Login/Login";
import ProductDetailPage from "./components/Product/ProductDetailPage";
import EmptyCartPage from "../../frontend/src/components/Cart/EmptyCartPage";
import CartPage from "./components/Cart/CartPage";
import Protected from "../src/features/auth/Protected";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import UserProfilePage from "./components/Profile/UserProfilePage";
import UserOrdersPage from "./components/Orders/UserOrdersPage";
import UserOrderDetailPage from "./components/Orders/UserOrderDetailPage";
import PageNotFound from "./components/404";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthAsync, selectLoggedInUser } from "./features/auth/authSlice";
import { fetchCartItemsByUserIdAsync } from "./features/Cart/cartSlice";
import { fetchLoggedInUserAsync } from "./features/User/userSlice";
import OrderSuccess from "./components/Orders/OrderSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/about",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/contact",
    element: <ContactUs></ContactUs>,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetailPage></ProductDetailPage>,
  },
  {
    path: "/empty-cart",
    element: (
      <Protected>
        <EmptyCartPage></EmptyCartPage>,
      </Protected>
    ),
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <CheckoutPage></CheckoutPage>
      </Protected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <UserProfilePage></UserProfilePage>
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccess></OrderSuccess>,
  },
  {
    path: "/orders",
    element: (
      <Protected>
        <UserOrdersPage></UserOrdersPage>
      </Protected>
    ),
  },
  {
    path: "/orderdetails/:id",
    element: (
      <Protected>
        <UserOrderDetailPage></UserOrderDetailPage>
      </Protected>
    ),
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItemsByUserIdAsync());
      //we can get req.user by token on backend so no need to given in front-end
      dispatch(fetchLoggedInUserAsync());
    }
  }, [dispatch, user]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/Product/ProductListSlice";
import orderReducer from "../features/Order/orderSlice";
import cartReducer from "../features/Cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/User/userSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

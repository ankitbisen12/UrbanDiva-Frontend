import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import SmallFooter from "../Footer/SmallFooter";
import { discountedPrice } from "../../utils/util";
// import { updateUserAsync } from "../../features/user/userSlice";
import { ToastContainer, toast } from "react-toastify";
import { selectUserInfo, updateUserAsync } from "../../features/User/userSlice";
import {
  deleteItemFromCartAsync,
  selectCartItems,
  updateCartAsync,
} from "../../features/Cart/cartSlice";
import {
  createOrderAsync,
  selectCurrentOrder,
  selectStatus,
} from "../../features/Order/orderSlice";

// const items = [
//   {
//     product: {
//       id: "d5fd56v6fv46dvf45",
//       title: "Ether tshirt",
//       description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
//       price: 450,
//       discountPercentage: 10,
//       zoner: "Men",
//       rating: 4.2,
//       stock: 40,
//       brand: "Ether",
//       category: "Tshirt",
//       thumbnail:
//         "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
//       images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
//       highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
//       deleted: false,
//       discountPrice: 370,
//       packagingCharge: 6,
//     },
//     user: "shdvhj54513131546565",
//     quantity: 4,
//     size: { name: "XS" },
//     color: { name: "Red" },
//   },
//   {
//     product: {
//       id: "d5fd56v6fv46dvf45",
//       title: "Ether tshirt",
//       description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
//       price: 450,
//       discountPercentage: 10,
//       zoner: "Men",
//       rating: 4.2,
//       stock: 40,
//       brand: "Ether",
//       category: "Tshirt",
//       thumbnail:
//         "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
//       images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
//       highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
//       deleted: false,
//       discountPrice: 370,
//       packagingCharge: 7,
//     },
//     user: "shdvhj54513131546565",
//     quantity: 4,
//     size: { name: "XS" },
//     color: { name: "Red" },
//   },
//   {
//     product: {
//       id: "d5fd56v6fv46dvf45",
//       title: "Ether tshirt",
//       description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
//       price: 450,
//       discountPercentage: 10,
//       zoner: "Men",
//       rating: 4.2,
//       stock: 40,
//       brand: "Ether",
//       category: "Tshirt",
//       thumbnail:
//         "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
//       images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
//       highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
//       deleted: false,
//       discountPrice: 370,
//       packagingCharge: 8,
//     },
//     user: "shdvhj54513131546565",
//     quantity: 4,
//     size: { name: "XS" },
//     color: { name: "Red" },
//   },
// ];

// const user = {
//   id: "dbhbhbfhdb11231",
//   email: "john.doe@example.com",
//   password: "a1b2c3d4e5f6g7h8", // This would typically be a hashed password in Buffer format
//   role: "user",
//   addresses: [
//     {
//       name: "Ankit Bisen",
//       street: "123 Main Stng gnnhhn",
//       city: "New York",
//       state: "NY",
//       phone: 8085717056,
//       pinCode: "560031",
//     },
//     {
//       name: "Deepti Bisen",
//       street: "456 Maple Avegfb g n",
//       city: "Los Angeles",
//       state: "CA",
//       phone: 8878769631,
//       pinCode: "474001",
//     },
//   ],
//   name: "John Doe",
//   salt: "randomsaltvalue", // This would also be a Buffer in a real scenario
// };

const Checkout = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const user = useSelector(selectUserInfo);
  console.log("userin checkout", user);
  const currentOrder = useSelector(selectCurrentOrder);
  const status = useSelector(selectStatus);

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const Amount = items.reduce(
    (amount, item) => item.product.discountPrice * item.quantity + amount,
    0
  );

  const totalItems = items.reduce((total, item) => item.quantity + total, 0);
  const totalPackagingCharge = items.reduce(
    (amount, item) => amount + item.product.packagingCharge,
    0
  );
  const totalDiscountPrice = items.reduce(
    (amount, item) => amount + discountedPrice(item),
    0
  );
  const totalAmount = Amount + totalPackagingCharge;

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPayementMethod] = useState("cash");

  const handleQuantity = (e, item) => {
    // console.log(item);
    dispatch(
      updateCartAsync({ id: item.id, quantity: +e.target.value, toast })
    );
  };

  const deleteHandler = (e, item) => {
    // console.log("running");
    dispatch(deleteItemFromCartAsync(item.id));
  };

  const handleAddress = (e) => {
    // console.log(e.target.value);
    setSelectedAddress(user.addresses[e.target.value]);
  };

  const handlePayments = (e) => {
    setPayementMethod(e.target.value);
  };

  const handleOrder = (e) => {
    if (selectedAddress && paymentMethod) {
      const order = {
        items,
        totalItems,
        totalAmount,
        user: user.id,
        paymentMethod,
        selectedAddress,
        status: "pending", //other status can be changed i.e delievered, dispatched ,packed.
      };

      console.log("Order", order);
      dispatch(createOrderAsync(order));
      //TODO: Redirect to order success page.
      //TODO: clear cart after order
      //TODO: on server change the stock number of items.
    } else {
      toast.error("Enter Address and Payment method", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <Fragment>
      {!items.length && <Navigate to="/" replace={true}></Navigate>}
      {currentOrder && currentOrder.paymentMethod === "cash" && (
        <Navigate
          to={`/order-success/${currentOrder.id}`}
          replace={true}
        ></Navigate>
      )}
      {currentOrder && currentOrder.paymentMethod === "card" && (
        <Navigate
          to={`/order-success/${currentOrder.id}`}
          replace={true}
        ></Navigate>
      )}
      <ToastContainer />
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 jost-category">
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              className="bg-white px-5 py-5 mt-12 border-[1px] shadow-md"
              onSubmit={handleSubmit((data) => {
                dispatch(
                  updateUserAsync({
                    update: {
                      ...user,
                      addresses: [...user.addresses, data],
                    },
                    toast,
                    message: "Add Address",
                  }),
                  reset()
                );
                console.log(data);
                reset();
              })}
            >
              <div className="space-y-12">
                <div className="mb-4">
                  <h2 className="text-2xl lg:text-3xl font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-5 text-gray-600">
                    Use a permanent address where you can receive your order.
                  </p>
                  <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="name"
                        className="block text-md font-medium leading-6 text-gray-800"
                      >
                        Full name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("name", {
                            required: "name is required",
                          })}
                          id="name"
                          autoComplete="given-name"
                          className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-md font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          {...register("email", {
                            required: "email is required",
                            pattern: {
                              value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                              message: "email not valid",
                            },
                          })}
                          type="email"
                          className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="phone"
                        className="block text-md font-medium leading-6 text-gray-900"
                      >
                        Phone No
                      </label>
                      <div className="mt-2">
                        <input
                          type="tel"
                          {...register("phone", {
                            required: "Phone no is required",
                          })}
                          id="phone"
                          className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-md font-medium leading-6 text-gray-900"
                      >
                        Address
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("street", {
                            required: "Address is required",
                          })}
                          id="street"
                          className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-md font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("city", {
                            required: "city is required",
                          })}
                          id="city"
                          autoComplete="address-level2"
                          className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-md font-medium leading-6 text-gray-900"
                      >
                        State
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("state", {
                            required: "state is required",
                          })}
                          id="state"
                          autoComplete="address-level1"
                          className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="pinCode"
                        className="block text-md font-medium leading-6 text-gray-900"
                      >
                        Pin Code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("pinCode", {
                            required: "postal-code is required",
                          })}
                          id="pinCode"
                          className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-md font-semibold leading-6 text-gray-900"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="bg-slate-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-slate-800 "
                  >
                    Add Address
                  </button>
                </div>

                {user.addresses !== 0 && (
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold leading-7 text-gray-900">
                      Address
                    </h2>
                    {user.addresses.length === 0 && (
                      <p className="mt-1 mb-1 text-sm leading-6 text-gray-600">
                        Please add address.
                      </p>
                    )}
                    {user.addresses.length !== 0 && (
                      <p className="mt-1 mb-1 text-sm leading-6 text-gray-600">
                        Choose from Existing address.
                      </p>
                    )}
                    <ul role="list" className="">
                      {user.addresses.map((address, index) => (
                        <li
                          key={index}
                          className="flex justify-between gap-x-6 py-5 px-3 mt-2 border-dashed border-2 border-gray"
                        >
                          <div className="flex gap-x-4">
                            <input
                              onChange={handleAddress}
                              name="address"
                              type="radio"
                              value={index}
                              className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-600"
                            />
                            <div className="min-w-0 flex-auto">
                              <p className="text-lg font-semibold leading-6 text-gray-800">
                                {address.name}
                              </p>
                              <p className="mt-1 text-md leading-5 text-gray-500 max-w-sm md:max-w-lg lg:max-w-xl">
                                {address.street}
                              </p>
                              <p className="mt-1 truncate text-md leading-5 text-gray-500 md:hidden lg:hidden">
                                {address.phone}
                              </p>
                              <p className="mt-1 truncate text-md leading-5 text-gray-500 md:hidden lg:hidden">
                                {address.city}
                              </p>
                              <p className="mt-1 truncate text-md leading-5 text-gray-500">
                                {address.pinCode}
                              </p>
                            </div>
                          </div>
                          <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <p className="text-md leading-6 text-gray-500">
                              {address.phone}
                            </p>
                            <p className="text-md leading-6 text-gray-500">
                              {address.city}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 space-y-10">
                      <fieldset>
                        <legend className="text-md font-semibold leading-6 text-gray-900">
                          Payment Methods
                        </legend>
                        <p className="mt-4 text-sm leading-6 text-gray-600">
                          Choose one
                        </p>
                        <div className="mt-2 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="cash"
                              name="payments"
                              onChange={handlePayments}
                              value="cash"
                              type="radio"
                              checked={paymentMethod === "cash"}
                              className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-600"
                            />
                            <label
                              htmlFor="cash"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Cash on delievery
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="card"
                              name="payments"
                              onChange={handlePayments}
                              value="card"
                              type="radio"
                              checked={paymentMethod === "card"}
                              className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-600"
                            />
                            <label
                              htmlFor="card"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Card payment
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-md font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-slate-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-slate-5800 "
                >
                  Save
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2">
            <div className="mx-auto mt-12 bg-white max-w-7xl border-[1px] shadow-md">
              <div className="px-4 py-2 sm:px-0">
                <h1 className="text-4xl my-2 px-2 md:px-4 font-semibold tracking-tight text-gray-700">
                  Cart
                </h1>
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 pl-2 md:pl-4 flex-shrink-0 overflow-hidden rounded-none">
                          <img
                            src={item.product.thumbnail}
                            alt={item.product.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-2 pr-2 md:pr-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <Link to={`/product-detail/${item.product.id}`}>
                                  {item.product.title}
                                </Link>
                              </h3>
                              <p className="ml-4">
                                ₹{item.product.discountPrice}
                              </p>
                            </div>
                            <div className="flex justify-between text-base font-medium ">
                              <p className="mt-1 text-sm text-gray-500">
                                {item.product.brand}
                              </p>
                              <p className="ml-4 text-sm line-through text-gray-500">
                                ₹{item.product.price}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Size: {item.size && item.size.name}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500">
                              <label
                                htmlFor="quantity"
                                className="inline text-sm font-medium leading-6 text-gray-900 mr-1"
                              >
                                Qty
                              </label>
                              <select
                                onChange={(e) => handleQuantity(e, item)}
                                className="hover:outline-none focus:outline-none"
                                value={item.quantity}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                            <div className="flex">
                              <button
                                onClick={(e) => deleteHandler(e, item)}
                                type="button"
                                className="font-medium text-gray-600 hover:text-gray-500 cursor-pointer"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-4 sm:px-2 text-gray-700">
                <div className="flex justify-between my-1 text-base font-medium">
                  <p className="text-lg">Total Items in Cart</p>
                  <p>{totalItems}</p>
                </div>
                <div className="flex justify-between my-1 text-base font-medium">
                  <p className="text-lg">Price</p>
                  <p>₹{Amount}</p>
                </div>
                <div className="flex justify-between my-1 text-base font-medium">
                  <p className="text-lg">Packaging charge</p>
                  <p>₹{totalPackagingCharge}</p>
                </div>
                <div className="flex justify-between my-1 text-base font-medium">
                  <p className="text-lg">SubTotal</p>
                  <p>₹{totalAmount}</p>
                </div>
                <p className="mt-0.5 text-sm text-green-500">
                  You will save ₹{totalDiscountPrice} on this order
                </p>
                <div className="mt-2">
                  <div
                    onClick={handleOrder}
                    className="flex items-center cursor-pointer justify-center border border-transparent bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-sm "
                  >
                    Place Order
                  </div>
                </div>
                <div className="mt-2 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or
                    <Link to="/">
                      <button
                        type="button"
                        className="font-medium nl-1 text-gray-600 cursor-pointer ml-1"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SmallFooter />
    </Fragment>
  );
};

export default Checkout;

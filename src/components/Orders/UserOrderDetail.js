import React, { useState } from "react";
import { Link } from "react-router-dom";
import { discountedPrice } from "../../utils/util";
import { FiEdit2 } from "react-icons/fi";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

const orders = {
  id: "eygfg,bjfv45d4vf6f41v416d4v5",
  items: [
    {
      product: {
        id: "d5fd56v6fv46dvf45",
        title: "Ether tshirt",
        description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
        price: 450,
        discountPercentage: 10,
        zoner: "Men",
        rating: 4.2,
        stock: 40,
        brand: "Ether",
        category: "Tshirt",
        thumbnail:
          "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
        images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
        highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
        deleted: false,
        discountPrice: 370,
        packagingCharge: 12,
      },
      size: {
        name: "XS",
      },
      quantity: 2,
    },
    {
      product: {
        id: "d5fd56v6fv46dvf45",
        title: "Ether tshirt",
        description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
        price: 450,
        discountPercentage: 10,
        zoner: "Men",
        rating: 4.2,
        stock: 40,
        brand: "Ether",
        category: "Tshirt",
        thumbnail:
          "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
        images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
        highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
        deleted: false,
        discountPrice: 370,
        packagingCharge: 12,
      },
      size: {
        name: "S",
      },
      quantity: 3,
    },
    {
      product: {
        id: "d5fd56v6fv46dvf45",
        title: "Ether tshirt",
        description: "dfhbhbfhb vbjvjrhv jvkjhfkbv",
        price: 450,
        discountPercentage: 10,
        zoner: "Men",
        rating: 4.2,
        stock: 40,
        brand: "Ether",
        category: "Tshirt",
        thumbnail:
          "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
        images: ["fcnjncj", "gvehdgvche", "cvgvghvg", "gvfchvc"],
        highlights: ["fcb", "ckjnj", "cbjhb", "fdffvcg"],
        deleted: false,
        discountPrice: 370,
        packagingCharge: 12,
      },
      size: {
        name: "M",
      },
      quantity: 1,
    },
  ],
  totalAmount: 856,
  totalItems: 3,
  user: {
    email: "anktbisen751@gmail.com",
    password: "eed4f45h3nb24h7g656m",
    role: "user",
    addresses: [
      {
        name: "Ankit Bisen",
        street: "123 Main Stng gnnhhn",
        city: "New York",
        state: "NY",
        phone: 8085717056,
        pinCode: "560031",
      },
      {
        name: "Deepti Bisen",
        street: "456 Maple Avegfb g n",
        city: "Los Angeles",
        state: "CA",
        phone: 8878769631,
        pinCode: "474001",
      },
    ],
    name: "Ankit Bisen",
    gender: "Male",
    mobileNo: 8085717056,
    salt: "hfgds,jdgjfd5353d5gg6f",
  },
  paymentMethod: "cash",
  paymentStatus: "Pending",
  status: "Pending",
  selectedAddress: {
    name: "Ankit Bisen",
    street: "123 Main Stng gnnhhn",
    city: "New York",
    country: "India",
    state: "NY",
    locality: "Adarsh Palm Retreat",
    phone: 8085717056,
    pinCode: "560031",
  },
};

const UserOrderDetail = () => {
  const [editAddress, setEditAddress] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    // formState: { errors },
  } = useForm();

  const totalPackagingCharge = orders.items.reduce(
    (amnt, item) => amnt + item.product.packagingCharge,
    0
  );

  const actualPrice = orders.items.reduce(
    (amnt, item) => amnt + item.product.price,
    0
  );

  const totalDiscountPrice = orders.items.reduce(
    (amount, item) => amount + discountedPrice(item),
    0
  );

  const editAddressHandler = () => {
    setEditAddress(true);
    setValue("name", orders.selectedAddress.name);
    setValue("street", orders.selectedAddress.street);
    setValue("city", orders.selectedAddress.city);
    setValue("country", orders.selectedAddress.country);
    setValue("state", orders.selectedAddress.state);
    setValue("locality", orders.selectedAddress.locality);
    setValue("pinCode", orders.selectedAddress.pinCode);
    setValue("mobileNo", orders.selectedAddress.phone);
  };

  return (
    <div className="mx-auto mt-6 mb-2 max-w-7xl px-2 sm:px-6 lg:px-8 jost-category">
      <div className="mx-auto mt-6 mb-2 max-w-7xl px-2 sm:px-6 lg:px-6 ">
        <div className="px-2 bg-white border-[1px] border-gray shadow-md">
          <div className="px-2 md:px-4 lg:px-4 py-6 sm:px-6">
            <div className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200">
                {orders.items.map((item) => (
                  <li key={item.id} className="flex pt-6 pb-2">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden border border-gray-200">
                      <Link to={`/product-detail/${item.product.id}`}>
                        <img
                          src={item.product.thumbnail}
                          alt={item.product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </Link>
                    </div>
                    <div className="ml-2 md:ml-4 lg:ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <Link to={`/product-detail/${item.product.id}`}>
                              {item.product.title}
                            </Link>
                          </h3>
                          <p className="ml-4">₹{item.product.discountPrice}</p>
                        </div>
                        <div className="flex justify-between text-base font-medium ">
                          <p className="mt-1 text-sm text-gray-500">
                            {item.product.brand}
                          </p>
                          <p className="ml-4 text-sm line-through text-gray-500">
                            ₹{item.product.price}
                          </p>
                        </div>
                        {item.size.name && (
                          <p className="mt-1 text-sm text-gray-500">
                            Size: {item.size.name}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <label
                            htmlFor="quantity"
                            className="inline text-sm font-medium leading-6 text-gray-900"
                          >
                            Qty :{item.quantity}
                          </label>
                        </div>
                        <div className="flex"></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-2 md:px-4 lg:px-4 py-6 sm:px-6">
            <div className="flex justify-between items-center">
              <p className="text-sm">Order Confirmed</p>
              <p className="text-sm">Shipped</p>
              <p className="text-sm">Out for delivery</p>
              <p className="text-sm">Delivered</p>
            </div>
            <div className="relative mt-2">
              <div className="w-full h-1 bg-gray-300"></div>
              <div className="absolute top-0 left-0 w-1/4 h-1 bg-green-500"></div>
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <p>Fri, 9th Aug</p>
                <p>Fri, 9th Aug</p>
                <p>Tue, 13th Aug</p>
                <p>Tue, 13th Aug</p>
              </div>
            </div>
            <p className="mt-2 text-center text-sm">
              Your item is out for delivery
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-x-2 gap-y-4 p-2 md:p-6">
        {/* Address Section: spans 2 columns */}
        <div className="col-span-6 md:col-span-3 bg-white p-4 border-[1px] shadow-md">
          <div className="flex justify-between">
            <h2 className="font-bold">Delivery Address</h2>
            <div
              className="flex flex-row items-center font-semibold text-blue-500 cursor-pointer "
              onClick={() => editAddressHandler()}
            >
              <FiEdit2 className="w-3 h-3" />
              Edit
            </div>
          </div>
          <p>{orders.selectedAddress.name}</p>
          <p>{orders.selectedAddress.street}</p>
          <p>{orders.selectedAddress.locality}</p>
          <p>
            {orders.selectedAddress.city} - {orders.selectedAddress.pinCode},{" "}
            {orders.selectedAddress.country}
          </p>
          <p className="mt-2">Phone number: {orders.selectedAddress.phone}</p>
        </div>

        {/* Delivery Status Section: spans 4 columns */}
        <div className="col-span-6 md:col-span-3">
          <div className="mx-auto bg-white border-[1px] shadow-md">
            <h2 className="text-lg font-semibold mb-4 p-4 border-b-[1px] text-gray-700">
              PRICE DETAILS
            </h2>
            <div className="flex justify-between mb-2 px-4 py-px">
              <span>Price ({orders.totalItems} items)</span>
              <span>₹{actualPrice}</span>
            </div>
            <div className="flex justify-between mb-2 px-4 py-px">
              <span>Discount</span>
              <span className="text-green-500">- ₹{totalDiscountPrice}</span>
            </div>
            <div className="flex justify-between mb-2 px-4 py-px ">
              <span>Delivery Charges</span>
              <div>
                <span className="line-through mr-1">₹80</span>
                <span className="text-green-500">Free</span>
              </div>
            </div>
            <div className="flex justify-between mb-4 px-4 ">
              <span>Secured Packaging Fee</span>
              <span>₹{totalPackagingCharge}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-700 text-lg px-4 py-2 border-t-2 border-dashed">
              <span>Total Amount</span>
              <span>₹{orders.totalAmount}</span>
            </div>
            <p className="text-green-600 font-semibold px-4 mb-2">
              You will save ₹{totalDiscountPrice} on this order
            </p>
          </div>
        </div>
      </div>

      {editAddress && orders.status==='Pending' && (
        <React.Fragment>
          <Dialog
            open={editAddress}
            onClose={setEditAddress}
            className="relative z-10"
          >
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden  bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <form
                      className=""
                      onSubmit={handleSubmit((data) => {
                        // dispatch(
                        //   updateUserAsync({
                        //     update: {
                        //       ...user,
                        //       addresses: [...user.addresses, data],
                        //     },
                        //     toast,
                        //     message: "Add Address",
                        //   }),
                        //   reset()
                        // );
                        console.log("data", data);
                        reset();
                        setEditAddress(false);
                      })}
                    >
                      <div className="space-y-12">
                        <div className="mb-4">
                          <h2 className="text-2xl lg:text-3xl font-semibold leading-7 text-gray-900">
                            Edit Address
                          </h2>
                          <p className="mt-1 text-sm leading-5 text-gray-600">
                            Use a permanent address where you can receive your
                            order.
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
                                htmlFor="street"
                                className="block text-md font-medium leading-6 text-gray-900"
                              >
                                Street
                              </label>
                              <div className="mt-2">
                                <input
                                  id="street"
                                  {...register("street", {
                                    required: "street is required",
                                  })}
                                  type="text"
                                  className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-4">
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
                                    required: "city name is required",
                                  })}
                                  id="city"
                                  className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="locality"
                                className="block text-md font-medium leading-6 text-gray-900"
                              >
                                Locality
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  {...register("locality", {
                                    required: "locality is required",
                                  })}
                                  id="locality"
                                  autoComplete="locality"
                                  className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                              <label
                                htmlFor="state"
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
                                  autoComplete="state"
                                  className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="country"
                                className="block text-md font-medium leading-6 text-gray-900"
                              >
                                Country
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  {...register("country", {
                                    required: "country is required",
                                  })}
                                  id="country"
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
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="mobileNo"
                                className="block text-md font-medium leading-6 text-gray-900"
                              >
                                Mobile No
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  {...register("mobileNo", {
                                    required: "Mobile No is required",
                                  })}
                                  id="mobileNo"
                                  className="block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                          type="button"
                          className="text-md font-semibold leading-6 text-gray-900"
                          onClick={() => setEditAddress(false)}
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
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </React.Fragment>
      )}
      {/* {editAddress && orders.status!=='Pending' } */}
    </div>
  );
};

export default UserOrderDetail;

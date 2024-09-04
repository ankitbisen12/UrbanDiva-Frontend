import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUserInfo, updateUserAsync } from "../userSlice";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import {  toast } from "react-toastify";

const userInfo = {
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
};

const UserProfile = () => {
  //   const dispatch = useDispatch();
  //   const userInfo = useSelector(selectUserInfo);
  // console.log(user);
  const [selectedEditIndex, setSelectedEditIndex] = useState(-1);
  const [showAddAddressForm, setShowAddressForm] = useState(false);
  const [openAddress, setOpenAddress] = useState(true);
  const [openNewAdddress, setOpenNewAdddress] = useState(false);
  const [openSignOut, setOpenSignout] = useState(false);
  const [edit, setEdit] = useState(false);

  //TODO: we will add payment section when we work on backend. //later

  const {
    register,
    handleSubmit,
    reset,
    // setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: userInfo.name.split(" ")[0],
      lastName: userInfo.name.split(" ")[1],
      gender: userInfo.gender,
      email: userInfo.email,
      phone: userInfo.mobileNo,
    },
  });

  //   const handleEdit = (updateAddress, index) => {
  //     const newUser = { ...userInfo, addresses: [...userInfo.addresses] }; //for shallow copy user
  //     newUser.addresses.splice(index, 1, updateAddress);
  //     dispatch(updateUserAsync({update:newUser,toast,message:'Address Edited'}));
  //     setSelectedEditIndex(-1);
  //   };

  //   const handleRemove = (e, index) => {
  //     const newUser = { ...userInfo, addresses: [...userInfo.addresses] }; //for shallow copy user
  //     newUser.addresses.splice(index, 1);
  //     dispatch(updateUserAsync({update:newUser,toast,message:'Address Deleted'}));
  //   };

  //   const handleAdd = (address) => {
  //     const newUser = {
  //       ...userInfo,
  //       addresses: [...userInfo.addresses, address],
  //     }; //for shallow copy user
  //     dispatch(updateUserAsync({update:newUser,toast,message:'Add Address'}));
  //     setShowAddressForm(false);
  //   };

  //   const handleEditForm = (index) => {
  //     setSelectedEditIndex(index);
  //     const address = userInfo.addresses[index];
  //     setValue("name", address.name);
  //     setValue("email", address.email);
  //     setValue("phone", address.phone);
  //     setValue("city", address.city);
  //     setValue("street", address.street);
  //     setValue("state", address.state);
  //     setValue("pinCode", address.pinCode);
  //   };

  const toggelOpenAddress = () => {
    setOpenAddress(true);
    setOpenNewAdddress(false);
    setOpenSignout(false);
  };

  const toggleOpenNewAddress = () => {
    setOpenNewAdddress(true);
    setOpenAddress(false);
    setOpenSignout(false);
  };

  const toggleOpenSignout = () => {
    setOpenSignout(true);
    setOpenNewAdddress(false);
    setOpenAddress(false);
  };

  return (
    <div className="px-4 jost-category">
      <div className="mx-auto mt-4 mb-4 bg-white max-w-7xl">
        <div className="grid grid-cols-6 gap-4">
          {/* Card 1 */}
          <div className="col-span-6 sm:col-span-3">
            <div className="flex items-center p-4 bg-white border-[1px]">
              <div className=" rounded-full flex items-center justify-center">
                {/* Image placeholder */}
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Hello,</p>
                <p className="text-lg font-semibold text-gray-900">
                  {userInfo.name}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-span-6 sm:col-span-3">
            <div className="flex items-center p-4 bg-white border-[1px]">
              <div className=" rounded-full flex items-center justify-center">
                {/* Image placeholder */}
                <img
                  src="https://img.freepik.com/free-vector/taking-orders-by-phone-store-contact-center-customers-support-easy-order-fast-delivery-trade-service-call-center-operator-cartoon-character_335657-2564.jpg"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">{userInfo.mobileNo}</p>
                <p className="text-lg font-semibold text-gray-900">
                 {userInfo.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 mb-4 bg-white max-w-7xl px-4 lg:px-8 border-[1px]">
        {/* <ToastContainer/> */}
        <div className="px-2 py-6">
          {/* {userInfo.role === "admin" && (
            <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
              role: {userInfo.role}
            </h3>
          )}  */}
          <form
            className=""
            onSubmit={handleSubmit((data) => {
              console.log(data);
              setEdit(false);
            })}
          >
            <div className="space-y-12">
              <div className="mb-4">
                <div className="flex flex-row space-x-2 ">
                  <h2 className="text-2xl lg:text-3xl font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  {edit ? (
                    <span
                      className="text-xl font-medium mt-0.5 md:mt-1.5 text-red-500 cursor-pointer"
                      onClick={() => setEdit(false)}
                    >
                      Cancel
                    </span>
                  ) : (
                    <span
                      className="text-xl font-medium mt-0.5 md:mt-1.5 text-blue-600 cursor-pointer"
                      onClick={() => setEdit(true)}
                    >
                      Edit{" "}
                    </span>
                  )}
                </div>
                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3 sm:col-start-1">
                    <label
                      htmlFor="firstName"
                      className="block text-md font-medium leading-6 text-gray-900"
                    >
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("firstName", {
                          required: "firstName is required",
                        })}
                        id="firstName"
                        disabled={!edit}
                        autoComplete="given-name"
                        className={`block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 ${
                          !edit ? "cursor-not-allowed" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 ">
                    <label
                      htmlFor="lastName"
                      className="block text-md font-medium leading-6 text-gray-900"
                    >
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                        disabled={!edit}
                        id="lastName"
                        autoComplete="given-name"
                        className={`block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 ${
                          !edit ? "cursor-not-allowed" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-md font-medium leading-6 text-gray-900"
                    >
                      Gender
                    </label>
                    <div className="mt-2 flex flex-row">
                      <div className="flex items-center gap-x-1">
                        <input
                          id="cash"
                          name="payments"
                          // onChange={handlePayments}
                          value="cash"
                          type="radio"
                          disabled={!edit}
                          // checked={paymentMethod === "cash"}
                          className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-600"
                        />
                        <label
                          htmlFor="cash"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center gap-x-1 ml-6">
                        <input
                          id="card"
                          name="payments"
                          // onChange={handlePayments}
                          value="card"
                          type="radio"
                          disabled={!edit}
                          // checked={paymentMethod === "card"}
                          className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-600"
                        />
                        <label
                          htmlFor="card"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
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
                        disabled={!edit}
                        type="email"
                        className={`block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 ${
                          !edit ? "cursor-not-allowed" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
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
                        disabled={!edit}
                        id="phone"
                        className={`block w-full border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 ${
                          !edit ? "cursor-not-allowed" : ""
                        }`}
                      />
                    </div>
                  </div>
                  {edit && (
                    <div className="flex  gap-x-6">
                      <button
                        type="submit"
                        className="bg-slate-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-slate-5800 "
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="px-4 py-4">
          <div className="flex flex-row justify-between sm:justify-start md:justify-start border-b border-gray-200 ">
            <span
              className={`text-sm md:text-md lg:text-lg cursor-pointer ${
                openAddress
                  ? "text-blue-900 text-semibold border-b-4 border-blue-900 pb-4"
                  : "text-gray-900 pb-4"
              }`}
              onClick={toggelOpenAddress}
            >
              Addresses
            </span>
            <span
              className={`text-sm md:text-md lg:text-lg sm:ml-4 md:ml-4 lg:ml-6 cursor-pointer ${
                openNewAdddress
                  ? "text-blue-900 text-semibold border-b-4 border-blue-900 pb-4"
                  : "text-gray-900 pb-4"
              }`}
              onClick={toggleOpenNewAddress}
            >
              Add New Address
            </span>
            <span
              className={`text-sm md:text-md lg:text-lg sm:ml-4 md:ml-4 lg:ml-6 cursor-pointer ${
                openSignOut
                  ? "text-blue-900 text-semibold border-b-4 border-blue-900 pb-4"
                  : "text-gray-900 pb-4"
              }`}
              onClick={toggleOpenSignout}
            >
              Signout
            </span>
          </div>
        </div>
        {/* Address section */}
        {openAddress && (
          <div className="py-4 sm:px-4">
            <p className="mt-3 text-lg text-gray-500 px-1 py-2">
              Your addresses:
            </p>
            {userInfo.addresses.map((address, index) => (
              <div>
                {selectedEditIndex === index ? (
                  <form
                    className="bg-white p-3 md:p-3 lg:p-5 mt-2"
                    onSubmit={handleSubmit((data) => {
                      console.log("Data", data);
                      // handleEdit(data, index);
                      reset();
                    })}
                  >
                    <div className="space-y-12">
                      <div className="pb-6">
                        <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                          Personal Information
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Use a permanent address where you can receive mail.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                                className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label
                              htmlFor="email"
                              className="block text-md font-medium leading-6 text-gray-800"
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
                                className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label
                              htmlFor="phone"
                              className="block text-md font-medium leading-6 text-gray-800"
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
                                className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="col-span-full">
                            <label
                              htmlFor="street-address"
                              className="block text-md font-medium leading-6 text-gray-800"
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
                                className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2 sm:col-start-1">
                            <label
                              htmlFor="city"
                              className="block text-md font-medium leading-6 text-gray-800"
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
                                className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor="region"
                              className="block text-md font-medium leading-6 text-gray-800"
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
                                className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor="pinCode"
                              className="block text-md font-medium leading-6 text-gray-800"
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
                                className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                          onClick={() => setSelectedEditIndex(-1)}
                          type="submit"
                          className="text-md font-semibold leading-6 text-gray-900"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-slate-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-slate-800 "
                        >
                          Edit Address
                        </button>
                      </div>
                    </div>
                  </form>
                ) : null}

                {/* address layout */}

                <div className="flex justify-between gap-x-6 p-3 md:p-3 lg:p-5 border-dashed border-2 border-gray-300">
                  <div className="flex gap-x-4">
                    <div className="min-w-0 flex flex-col items-start">
                      <p className="text-lg font-semibold leading-6 text-gray-800">
                        {address.name}
                      </p>
                      <p className="mt-1 text-md leading-5 text-gray-500 max-w-md md:max-w-md lg:max-w-xl">
                        {address.street}
                      </p>
                      <p className="mt-1 truncate text-md leading-5 text-gray-500">
                        {address.pinCode}
                      </p>
                      <button
                        //   onClick={(e) => handleEditForm(index)}
                        type="button"
                        className="font-medium text-gray-800  sm:hidden md:hidden lg:hidden"
                      >
                        Edit
                      </button>
                      <button
                        //   onClick={(e) => handleRemove(e, index)}
                        type="button"
                        className="font-medium text-gray-800  sm:hidden md:hidden lg:hidden"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <button
                      // onClick={(e) => handleEditForm(index)}
                      type="button"
                      className="font-medium text-gray-800"
                    >
                      Edit
                    </button>
                    <button
                      // onClick={(e) => handleRemove(e, index)}
                      type="button"
                      className="font-medium text-gray-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Add new address section */}
        {openNewAdddress && (
          <div className="py-6 sm:px-4 h-auto">
            <button
              className="flex items-center justify-center border-dashed border border-gray-300 p-16 rounded-lg"
              onClick={(e) => {
                setShowAddressForm(true);
                setSelectedEditIndex(true);
              }}
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-lg md:text-2xl lg:text-2xl text-gray-800">
                Add new address
              </span>
            </button>

            {/* <button
          //   onClick={(e) => {
          //     setShowAddressForm(true);
          //     setSelectedEditIndex(true);
          //   }}
          type="submit"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add New Address
        </button> */}
            {showAddAddressForm ? (
              <form
                className="bg-white p-3 md:p-3 lg:p-5 mt-12"
                onSubmit={handleSubmit((data) => {
                  console.log("Address form ", data);
                  // handleAdd(data);
                  reset();
                })}
              >
                <div className="space-y-12">
                  <div className="pb-6">
                    <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                      Personal Information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Use a permanent address where you can receive mail.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                            className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label
                          htmlFor="email"
                          className="block text-md font-medium leading-6 text-gray-800"
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
                            className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label
                          htmlFor="phone"
                          className="block text-md font-medium leading-6 text-gray-800"
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
                            className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label
                          htmlFor="street-address"
                          className="block text-md font-medium leading-6 text-gray-800"
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
                            className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label
                          htmlFor="city"
                          className="block text-md font-medium leading-6 text-gray-800"
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
                            className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-md font-medium leading-6 text-gray-800"
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
                            className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="pinCode"
                          className="block text-md font-medium leading-6 text-gray-800"
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
                            className="block w-full rounded-md border border-gray-300 py-1.5 px-2 outline-none text-gray-700 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      onClick={() => setShowAddressForm(false)}
                      type="submit"
                      className="text-md font-semibold leading-6 text-gray-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-slate-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-slate-800 "
                    >
                      Add Address
                    </button>
                  </div>
                </div>
              </form>
            ) : null}
          </div>
        )}
        {/*signout section */}
        {openSignOut && (
          <div className="py-6 sm:px-4 h-[300px]">
            <button className="flex items-center justify-center  p-2 rounded-lg">
              <Link to="/logout" className="text-gray-800">
                Sign Out
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

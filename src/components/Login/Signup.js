import React, { useState } from "react";
import LoginImage from "./../../assests/LoginImage.png";
import {
  UserIcon,
  KeyIcon,
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserAsync,
  selectLoggedInUser,
} from "../../features/auth/authSlice";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <React.Fragment>
      {user && <Navigate to="/" replace={true}></Navigate>}
      <div className="flex flex-col items-center m-auto p-6">
        <div className="w-full max-w-md bg-white shadow-lg text-center">
          <div className="w-full h-full">
            <img src={LoginImage} alt="loginImage" className="object-cover" />
          </div>
          <div className="py-4 px-4">
            <h2 className="text-lg font-bold jost-nav">
              Sign In to your account
            </h2>
            <form
              className="mt-4"
              onSubmit={handleSubmit((data) => {
                dispatch(
                  createUserAsync({
                    email: data.email,
                    password: data.password,
                    name: data.name,
                    addresses: [],
                    role: "user",
                  })
                );
                reset();
              })}
            >
              <div className="flex items-center border overflow-hidden mt-2">
                <UserIcon className="text-gray-500 h-4 pl-2" />
                <input
                  id="name"
                  type="name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  placeholder="Enter name"
                  className="block w-full p-2 ml-1 border-0 outline-none text-gray-700  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center border overflow-hidden mt-2">
                <AtSymbolIcon className="text-gray-500 h-4 pl-2" />
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "email not valid",
                    },
                  })}
                  placeholder="Enter email"
                  className="block w-full p-2 ml-1 border-0 outline-none text-gray-700  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center border overflow-hidden mt-2">
                <KeyIcon className="text-gray-500 h-4 pl-2" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `- at least 8 characters\n
                  - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                  - Can contain special characters\n`,
                    },
                  })}
                  placeholder="Enter password"
                  className="block w-full p-2 ml-1 border-0 outline-none text-gray-700  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {showPassword ? (
                  <EyeIcon
                    onClick={() => setShowPassword(false)}
                    className="h-4 pr-2 cursor-pointer"
                  />
                ) : (
                  <EyeSlashIcon
                    onClick={() => setShowPassword(true)}
                    className="h-4 pr-2 cursor-pointer"
                  />
                )}
              </div>
              <div className="flex items-center border overflow-hidden mt-2">
                <KeyIcon className="text-gray-500 h-4 pl-2" />
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value, formValues) =>
                      value === formValues.password || "password not matching",
                  })}
                  placeholder="Confirm password"
                  className="block w-full p-2 ml-1 border-0 outline-none text-gray-700  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {showConfirmPassword ? (
                  <EyeIcon
                    onClick={() => setShowConfirmPassword(false)}
                    className="h-4 pr-2 cursor-pointer"
                  />
                ) : (
                  <EyeSlashIcon
                    onClick={() => setShowConfirmPassword(true)}
                    className="h-4 pr-2 cursor-pointer"
                  />
                )}
              </div>
              <button
                type="submit"
                className="flex mt-4 w-full justify-center bg-slate-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 mb-2 text-center text-sm text-gray-500">
              Already a member?{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-gray-800"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;

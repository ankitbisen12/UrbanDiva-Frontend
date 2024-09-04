import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginImage from "./../../assests/LoginImage.png";

import {
  AtSymbolIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  loginUserAsync,
  selectError,
  selectLoggedInUser,
} from "../../features/auth/authSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const error = useSelector(selectError);

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
              Log In to your account
            </h2>
            <form
              className="mt-4"
              noValidate
              onSubmit={handleSubmit((data) => {
                dispatch(
                  loginUserAsync({ email: data.email, password: data.password })
                );
                reset();
              })}
            >
              <div className="flex items-center border overflow-hidden mt-2">
                <AtSymbolIcon className="text-gray-500 h-4 pl-2" />
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Email not valid",
                    },
                  })}
                  placeholder="Enter email address"
                  className="block w-full p-2 ml-1 border-0 outline-none text-gray-700  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-start px-2">
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="flex justify-end text-sm text-gray-500 py-2">
                {/* TODO: replace /forgot-password */}
                <Link to="/" replace={true}>
                  Forgot password?
                </Link>
              </div>
              <div className="flex items-center border overflow-hidden">
                <KeyIcon className="text-gray-500 h-4 pl-2" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
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
              <div className="text-start px-2">
                {" "}
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="flex mt-4 w-full justify-center bg-slate-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Log In
              </button>
            </form>
            <p className="mt-4 mb-5 text-center text-sm text-gray-500">
              Not a member?
              <Link
                to="/signup"
                className="ml-1 font-semibold leading-6 text-gray-800 "
              >
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;

import React, { Fragment, useState } from "react";
// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { discountedPrice } from "../../utils/util";
import Modal from "../../common/Modal";
import {
  deleteItemFromCartAsync,
  selectCartItems,
  updateCartAsync,
} from "../../features/Cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(null);
  const items = useSelector(selectCartItems);
  console.log("items inside cart", items);

  const actualPrice = items.reduce(
    (amount, item) => amount + item.product.price,
    0
  );

  const totalItems = items.reduce((total, item) => item.quantity + total, 0);
  const totalPackagingCharge = items.reduce(
    (amount, item) => amount + item.product.packagingCharge,
    0
  );
  console.log("totalPackagingCharge", totalPackagingCharge);

  const DiscountPrice = items.reduce(
    (amount, item) => amount + discountedPrice(item),
    0
  );

  const totalDiscountPrice = actualPrice - DiscountPrice;

  const totalAmount = DiscountPrice + totalPackagingCharge;

  const handleQuantity = (e, item) => {
    dispatch(
      updateCartAsync({ id: item.id, quantity: +e.target.value, toast })
    );
  };

  const deleteHandler = (e, itemId) => {
    dispatch(deleteItemFromCartAsync(itemId));
  };

  return (
    <Fragment>
      {!items.length && <Navigate to="/empty-cart" replace={true}></Navigate>}
      <ToastContainer />
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-4 jost-category mb-10">
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ul className="mt-12">
              {items.map((item) => (
                <li key={item.id} className="flex px-4 py-4 border-[1px] mb-2">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-none border border-gray-200">
                    <Link
                      to={`/product-detail/${item.product.id}`}
                      className="cursor-pointer"
                    >
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </Link>
                  </div>
                  <div className="ml-2 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-lg font-medium text-gray-900">
                        <h3>
                          <Link to={`/product-detail/${item.product.id}`}>
                            {item.product.title}
                          </Link>
                        </h3>
                        <p className="ml-4">₹{item.product.discountPrice}</p>
                      </div>
                      <div className="flex justify-between text-base font-medium ">
                        <p className="mt-1 text-sm text-gray-500">
                          Brand: {item.product.brand}
                        </p>
                        <p className="ml-4 text-sm line-through text-gray-400">
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
                          className="inline mr-3 text-sm font-medium leading-6 text-gray-900"
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
                        <Modal
                          title={`Delete ${item.product.title}`}
                          message="Are you sure you want to delete this cart item"
                          img={item.product.thumbnail}
                          dangerOption="Delete"
                          cancelOption="Cancel"
                          dangerAction={(e) => deleteHandler(e, item.id)}
                          cancelAction={() => setOpenModal(-1)}
                          showModal={openModal === item.id}
                        />
                        <button
                          onClick={() => setOpenModal(item.id)}
                          type="button"
                          className="font-medium text-lg text-gray-700"
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
          <div className="lg:col-span-2">
            <div className="mx-auto mt-4 md:mt-12 bg-white border-[1px]">
              <h2 className="text-lg font-semibold mb-4 p-4 border-b-[1px] text-gray-700">
                PRICE DETAILS
              </h2>
              <div className="flex justify-between mb-2 px-4 py-px">
                <span>Price ({totalItems} items)</span>
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
                <span>₹{totalAmount}</span>
              </div>
              <p className="text-green-600 font-semibold px-4 mb-2">
                You will save ₹{totalDiscountPrice} on this order
              </p>
              <div className="mt-6 p-4">
                <Link
                  to="/checkout"
                  className="flex items-center justify-center border border-transparent bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-sm "
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-50 px-4 py-8 text-sm text-gray-600 border-t-[1px] border-gray-300">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start space-x-2">
            <Link to="/" className="hover:underline">
              Policies
            </Link>
            <span>|</span>
            <Link to="/" className="hover:underline">
              Returns Policy
            </Link>
            <span>|</span>
            <Link to="/" className="hover:underline">
              Terms of use
            </Link>
            <span>|</span>
            <Link to="/" className="hover:underline">
              Security
            </Link>
            <span>|</span>
            <Link to="/" className="hover:underline">
              Privacy
            </Link>
            <span>|</span>
            <Link to="/" className="hover:underline">
              Infringement
            </Link>
          </div>

          <div className="my-2 md:my-0">© 2007-2024 Flipkart.com</div>

          <div className="flex flex-wrap justify-center md:justify-end space-x-2">
            <span>Need help? Visit the</span>
            <Link to="/" className="text-blue-600 hover:underline">
              Help Center
            </Link>
            <span>or</span>
            <Link to="/" className="text-blue-600 hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Cart;

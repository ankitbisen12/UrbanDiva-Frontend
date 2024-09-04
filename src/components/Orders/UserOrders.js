import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchLoggedInUserOrdersAsync,
//   // selectUserInfo,
//   selectUserOrders,
//   selectedStatus,
// } from "../userSlice";
import { chooseTextColor } from "../../common/constant";
// import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const orders = [
  {
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
      state: "NY",
      phone: 8085717056,
      pinCode: "560031",
    },
  },
];

const UserOrders = () => {
  // const dispatch = useDispatch();

  // const orders = useSelector(selectUserOrders);
  // console.log("orders", orders);
  // const status = useSelector(selectedStatus);

  // useEffect(() => {
  //   dispatch(fetchLoggedInUserOrdersAsync());
  // }, [dispatch]);

  return (
    <div className="jost-category">
      {/* {status === "loading" ? (
        <div className="flex items-center mt-2 justify-center">
          <RotatingLines
            visible={true}
            height="70"
            width="70"
            color="#212020"
            barColor="#212020"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : null} */}
      {orders &&
        orders.map((order) => (
          <div key={order.id}>
            <div className="mx-auto mt-6 mb-2 max-w-7xl px-2 sm:px-6 lg:px-8 tilt-neon-pp">
              <div className="px-2 bg-white border-2 border-gray">
                <div className="px-2 md:px-4 lg:px-4 py-6 sm:px-6">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {order.items.map((item) => (
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
                                  <Link
                                    to={`/product-detail/${item.product.id}`}
                                  >
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
                <div className="px-2 sm:px-6 md:px-4 lg:px-4 py-2 md:py-4">
                  <hr className="border-gray-200" />
                  <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                    <p>SubTotal</p>
                    <p>₹ {order.totalAmount}</p>
                  </div>
                  <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                    <p>Total Items</p>
                    <p>{order.totalItems} items</p>
                  </div>
                  <div className="mt-2 flex items-center justify-end">
                    <Link
                      to={`/orderdetails/${order.id}`}
                      className="py-2 text-md font-semibold text-blue-500"
                    >
                      View Order Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {/* {orders && orders.length === 0 && status === "idle" && (
        <div className="flex flex-col justify-center items-center h-screen bg-white p-4 recursive-pp">
          <div className="w-[250px] h-[200px] mb-2">
            <div className="flex flex-col items-center text-center">
              <span className="font-medium text-2xl text-gray-900 p-2">
                Not placed any order.
              </span>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default UserOrders;

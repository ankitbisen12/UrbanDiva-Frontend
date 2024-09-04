import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import ChartModal from "../../common/ChartModal";
import {
  fetchProductByIdAsync,
  selectProductById,
} from "../../features/Product/ProductListSlice";
import { formatRating } from "../../utils/util";
import {
  StarIcon,
  ShoppingBagIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { selectLoggedInUser } from "../../features/auth/authSlice";
import { addToCartAsync, selectCartItems } from "../../features/Cart/cartSlice";
import "react-toastify/dist/ReactToastify.css";

// const product = {
//   title: "Realme Watch 3 Pro 1.78 AMOLED 368 x 448p (Black Strap, Free Size)",
//   price: "6999",
//   breadcrumbs: [
//     { id: 1, name: "Men", href: "#" },
//     { id: 2, name: "Clothing", href: "#" },
//   ],
//   discountPercentage: 30,
//   rating: 4.1,
//   stock: 25,
//   categories: "Men",
//   category: "Tshirts",
//   thumbnail:
//     "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
//   images: [
//     "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_4.JPG",
//     "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_3.JPG",
//     "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_5.JPG",
//     "https://getketchadmin.getketch.com/product/8905980283660/660/KHTS001088_1.JPG",
//   ],
//   brand: "Levis",
//   colors: [
//     {
//       name: "White",
//       class: "bg-white",
//       selectedClass: "ring-gray-400",
//       id: "White",
//     },
//     {
//       name: "Gray",
//       class: "bg-gray-200",
//       selectedClass: "ring-gray-400",
//       id: "Gray",
//     },
//     {
//       name: "Black",
//       class: "bg-gray-900",
//       selectedClass: "ring-gray-900",
//       id: "Black",
//     },
//   ],
//   sizes: [
//     { name: "XXS", inStock: false, id: "XXS" },
//     { name: "XS", inStock: true, id: "XS" },
//     { name: "S", inStock: true, id: "S" },
//     { name: "M", inStock: true, id: "M" },
//     { name: "L", inStock: true, id: "L" },
//     { name: "XL", inStock: true, id: "XL" },
//     { name: "2XL", inStock: true, id: "2XL" },
//     { name: "3XL", inStock: true, id: "3XL" },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     "Hand cut and sewn locally",
//     "Dyed with our proprietary colors",
//     "Pre-washed & pre-shrunk",
//     "Ultra-soft 100% cotton",
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
//   discountPrice: 4899,
// };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector(selectProductById);
  const user = useSelector(selectLoggedInUser);
  const items = useSelector(selectCartItems);
  const sliderRef = useRef(null);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    sliderRef.current.scrollTo({
      left: index * sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < product.images.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const addCartHandler = (e) => {
    e.preventDefault();
    if (user) {
      if (items.findIndex((item) => item.product.id === product.id) < 0) {
        const newItem = {
          product: product.id,
          quantity: 1,
        };
        if (selectedColor) {
          newItem.color = selectedColor;
        }
        if (!selectedColor) {
          toast.error("Please select color", {
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
        if (selectedSize) {
          // console.log("selectedSize", selectedSize);
          newItem.size = selectedSize;
        }
        if (!selectedSize) {
          toast.error("Please select size", {
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

        console.log("newItem", newItem);
        dispatch(addToCartAsync({ item: newItem, toast }));
      } else {
        toast.error("already added", {
          position: "bottom-center",
        });
      }
    } else {
      toast.error("Please Logged In", {
        position: "bottom-center",
      });
    }
  };

  useEffect(() => {
    dispatch(fetchProductByIdAsync(params.id));
  }, [dispatch, params.id]);

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="recursive-pp jost-category">
        {product && (
          <div className="pt-6">
            <nav aria-label="Breadcrumb">
              <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-2 sm:px-6 lg:max-w-7xl lg:px-8">
                {product.categories && (
                  <React.Fragment>
                    <li>
                      <div className="flex items-center">
                        <span className="text-lg md:text-sm font-medium text-gray-900">
                          {product.categories}
                        </span>
                        <svg
                          width={16}
                          height={20}
                          viewBox="0 0 16 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-4 text-gray-400"
                        >
                          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="text-lg md:text-sm font-medium text-gray-900">
                          {product.category}
                        </span>
                      </div>
                    </li>
                  </React.Fragment>
                )}
              </ol>
            </nav>

            {/* Image gallery */}
            <div className="mx-auto hidden md:block mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-none lg:block">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-none">
                  <img
                    src={product.images[1]}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-none">
                  <img
                    src={product.images[2]}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 rounded-none lg:aspect-w-3 sm:overflow-hidden">
                <img
                  src={product.images[3]}
                  alt={product.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="w-full block md:hidden relative">
              <div
                ref={sliderRef}
                className="flex overflow-x-hidden scroll-smooth"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-none"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-none"
              >
                &gt;
              </button>
              <div className="flex justify-center mt-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full mx-1 ${
                      index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                    }`}
                    onClick={() => scrollToIndex(index)}
                  ></button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pb-2 pt-4 md:pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {product.title}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <div className="flex flex-row">
                  <p className="text-2xl lg:text-3xl mr-2 font-semibold line-through tracking-tight text-gray-500 ">
                    ₹{product.price}
                  </p>
                  <p className="text-2xl lg:text-3xl mr-1 font-semibold tracking-tight text-gray-900">
                    ₹{product.discountPrice}
                  </p>
                  <p className="text-2xl lg:text-2xl font-semibold tracking-tight text-green-600">
                    {`(${product.discountPercentage} % OFF)`}
                  </p>
                </div>
                <div className="flex flex-col text-start bg-white">
                  <span className="text-green-500">inclusive of all taxes</span>
                  <span className="text-black">
                    Free Shipping on Bill Value above 599/-
                  </span>
                  <div className="text-gray-800">
                    or 3 monthly payments of{" "}
                    <span className="font-bold text-black">₹150</span> with
                    <span className="text-green-600 font-bold"> Axis card</span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    UPI & Cards Accepted, Online approval in 2 minutes
                  </div>
                </div>
                {/* Reviews */}
                <div className="mt-2">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex flex-row items-center">
                      <StarIcon
                        className="text-amber-500 h-5 w-5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-lg font-medium text-gray-900">
                        {/* {product.rating} */}
                        {formatRating(product.rating)}
                      </span>
                    </div>
                  </div>
                </div>
                <form className="mt-4">
                  {/* Colors */}
                  {product.colors && product.colors.length && (
                    <div>
                      <h3 className="text-xl font-medium text-gray-900">
                        Color
                      </h3>
                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                        className="mt-4"
                      >
                        <RadioGroup.Label className="sr-only">
                          Choose a color
                        </RadioGroup.Label>
                        <div className="flex items-center space-x-3">
                          {product.colors.map((color) => (
                            <RadioGroup.Option
                              key={color.name}
                              value={color}
                              className={({ active, checked }) =>
                                classNames(
                                  color.selectedClass,
                                  active && checked ? "ring ring-offset-1" : "",
                                  !active && checked ? "ring-1" : "",
                                  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                )
                              }
                            >
                              <RadioGroup.Label as="span" className="sr-only">
                                {color.name}
                              </RadioGroup.Label>
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.class,
                                  "h-8 w-8 rounded-full border border-black border-opacity-10"
                                )}
                              />
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {/* Sizes */}
                  {product.sizes && product.sizes.length && (
                    <div className="mt-6">
                      <div className="flex items-center justify-between">
                        {openModal && (
                          <ChartModal
                            cancelAction={() => {
                              setOpenModal(false);
                            }}
                          />
                        )}
                        <h3 className="text-lg font-medium text-gray-900">
                          Select size
                        </h3>
                        {product.category === "Tshirts" && (
                          <span
                            onClick={() => setOpenModal(true)}
                            className="text-sm font-normal text-gray-800 cursor-pointer"
                          >
                            Size guide
                          </span>
                        )}
                      </div>
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="mt-4"
                      >
                        <RadioGroup.Label className="sr-only">
                          Choose a size
                        </RadioGroup.Label>
                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                          {product.sizes.map((size) => (
                            <RadioGroup.Option
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={({ active }) =>
                                classNames(
                                  size.inStock
                                    ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                                  active ? "" : "",
                                  "group relative flex items-center justify-center rounded-none border outline-none py-3 px-4 text-base font-medium uppercase hover:bg-gray-900 hover:text-white  focus:outline-none sm:flex-1 "
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <RadioGroup.Label as="span">
                                    {size.name}
                                  </RadioGroup.Label>
                                  {size.inStock ? (
                                    <span
                                      className={classNames(
                                        active ? "border" : "border-2",
                                        checked
                                          ? "border-gray-500"
                                          : "border-transparent",
                                        "pointer-events-none absolute -inset-px rounded-md"
                                      )}
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                    >
                                      <svg
                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line
                                          x1={0}
                                          y1={100}
                                          x2={100}
                                          y2={0}
                                          vectorEffect="non-scaling-stroke"
                                        />
                                      </svg>
                                    </span>
                                  )}
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                  <div className="w-full flex flex-row space-x-2">
                    <button
                      onClick={addCartHandler}
                      type="submit"
                      className="mt-10 flex w-1/2 items-center justify-center rounded-lg border border-transparent bg-slate-900 px-2 py-3 text-lg font-medium text-white hover:bg-slate-800 focus:outline-none"
                    >
                      <ShoppingBagIcon className="h-4 ml-1" /> Add to Cart
                    </button>
                    <button
                      // onClick={handleCart}
                      type="submit"
                      className="mt-10 flex w-1/2 items-center justify-center rounded-lg border border-slate-900 px-2 py-3 text-lg font-medium text-slate-900 outline-none"
                    >
                      <HeartIcon className="h-4 ml-1" /> Wishlist
                    </button>
                  </div>
                </form>
              </div>
              <div className="py-4 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>

                {product.highlights && (
                  <div className="mt-6">
                    <h3 className="text-xl font-medium text-gray-900">
                      Highlights
                    </h3>
                    <div className="mt-2">
                      <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm"
                      >
                        {product.highlights.map((highlight) => (
                          <li key={highlight} className="text-lg text-gray-600">
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <h2 className="text-xl font-medium text-gray-900">
                    Product Details
                  </h2>
                  <div className="mt-4 space-y-6">
                    <p className="text-lg text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;

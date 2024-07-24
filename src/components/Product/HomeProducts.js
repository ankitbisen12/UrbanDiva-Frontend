import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Puma",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

const HomeProducts = () => {
  return (
    <React.Fragment>
    <div className="mx-auto px-4 py-4 sm:px-6 sm:py-6 max-w-full lg:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 jost-nav">
        Clothing for Men and Women
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-6">
        {products.map((product) => (
          <Link to="/">
            <div
              key={product.id}
              className="group relative shadow-lg rounded-xl"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none lg:h-80 lg:w-full rounded-t-xl">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center rounded-t-xl"
                />
              </div>
              <div className="px-2 py-2 md:p-6 flex flex-col justify-between">
                <div className="jost-category">
                  <span className="text-lg font-semibold tracking-tight leading-[6px]">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.imageAlt}
                  </span>
                </div>
                <div className="py-2">
                  <span className="text-lg font-normal tracking-tight leading-[6px]">
                    {product.color}
                  </span>
                </div>
                <div className="flex text-md">
                  <span className="font-medium mr-1 text-cyan-700">₹546</span>
                  <span className="font-medium text-gray-400 line-through mr-1">
                    ₹546
                  </span>
                  <span className="font-medium text-red-600">(72% OFF)</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <div className="mx-auto px-4 py-4 sm:px-6 sm:py-6 max-w-full lg:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 jost-nav">
        Accessories for Men and Women
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-6">
        {products.map((product) => (
          <Link to="/">
            <div
              key={product.id}
              className="group relative shadow-lg rounded-xl"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none lg:h-80 lg:w-full rounded-t-xl">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center rounded-t-xl"
                />
              </div>
              <div className="px-2 py-2 md:p-6 flex flex-col justify-between">
                <div className="jost-category">
                  <span className="text-lg font-semibold tracking-tight leading-[6px]">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.imageAlt}
                  </span>
                </div>
                <div className="py-2">
                  <span className="text-lg font-normal tracking-tight leading-[6px]">
                    {product.color}
                  </span>
                </div>
                <div className="flex text-md">
                  <span className="font-medium mr-1 text-cyan-700">₹546</span>
                  <span className="font-medium text-gray-400 line-through mr-1">
                    ₹546
                  </span>
                  <span className="font-medium text-red-600">(72% OFF)</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </React.Fragment>
  );
};

export default HomeProducts;

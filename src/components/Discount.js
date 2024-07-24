import React from "react";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <div className="flex h-12 items-center justify-center gap-x-4 gap-y-2 bg-discount-100 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
      <p className="text-xs md:text-sm leading-6 uppercase text-white">
        Get free delivery on orders over ₹499
      </p>
      <Link
        to="/signup"
        className="flex-none rounded-full px-2 py-0.5 md:px-3.5 md:py-1 text-[12px] md:text-sm font-semibold text-white shadow-sm border border-gray-600"
      >
        Shop now <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
};

export default Discount;

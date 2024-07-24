import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ShippingDetail = () => {
  return (
    <div className="mx-auto px-4 py-4 sm:px-6 sm:py-6 max-w-full lg:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 jost-nav">
        Our benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
        {/* Free Shipping */}
        <div className="flex items-center justify-center flex-row border border-shipping-100 py-6 px-6">
          <div className="mr-2 mt-1">
            <i className="fas fa-truck fa-3x text-gray-600 mb-2"></i>
          </div>
          <div className="py-1">
            <span className="text-lg font-bold jost-category">
              FREE SHIPPING
            </span>
            <p className="text-sm text-gray-600">
              Suffered Alteration in Some Form
            </p>
          </div>
        </div>

        {/* Cash on Delivery */}
        <div className="flex items-center justify-center flex-row border border-shipping-100 py-6 px-6">
          <div className="mr-2 mt-1">
            <i className="fas fa-money-bill-wave fa-3x text-gray-600 mb-2"></i>
          </div>
          <div className="py-1">
            <span className="text-lg font-bold jost-category ">
              CASH ON DELIVERY
            </span>
            <p className="text-sm text-gray-600">The Internet Tend To Repeat</p>
          </div>
        </div>
        {/* 45 Days Return */}
        <div className="flex items-center justify-center flex-row border border-shipping-100 py-6 px-6">
          <div className="mr-2 mt-1">
            <i className="fas fa-sync-alt fa-3x text-gray-600 mb-2"></i>
          </div>
          <div className="py-1">
            <span className="text-lg font-bold jost-category ">
              7 DAYS RETURN
            </span>
            <p className="text-sm text-gray-600">
              Making it Look Like Readable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetail;

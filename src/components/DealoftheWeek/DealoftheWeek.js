import React from "react";

const DealoftheWeek = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 bg-gray-50">
      {/* Image section */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mb-4 lg:mb-0">
        <img
          src="https://quintuslabs.github.io/fashion-cube/static/media/deal_ofthe_week.18a6bbdf.png"
          alt="Deal of the Week"
          className="max-w-full h-auto"
        />
      </div>

      {/* Countdown section */}
      <div className="absolute lg:relative w-full lg:w-1/2 flex flex-col items-center ">
        <h2 className="text-2xl font-bold mb-4 lg:mb-0 lg:text-4xl">
          Deal Of The Week
        </h2>
        <div className="mb-6 md:mt-6 md:mb-10 w-14 h-1 bg-red-500" />
        <div className="flex mb-8 space-x-2 lg:space-x-4 lg:mb-14">
          <div className="flex flex-col items-center bg-white p-2 lg:p-4 w-16 h-16 lg:w-28 lg:h-28 rounded-full shadow-lg">
            <span className="text-2xl lg:text-5xl font-semibold md:font-bold text-red-500">
              04
            </span>
            <span className="text-xs lg:text-lg font-semibold text-gray-700">
              Days
            </span>
          </div>
          <div className="flex flex-col items-center bg-white p-2 lg:p-4 w-16 h-16 lg:w-28 lg:h-28 rounded-full shadow-lg">
            <span className="text-2xl lg:text-5xl font-semibold md:font-bold text-red-500">
              23
            </span>
            <span className="text-xs lg:text-lg font-semibold text-gray-700">
              Hours
            </span>
          </div>
          <div className="flex flex-col items-center bg-white p-2 lg:p-4 w-16 h-16 lg:w-28 lg:h-28 rounded-full shadow-lg">
            <span className="text-2xl lg:text-5xl font-semibold md:font-bold text-red-500">
              55
            </span>
            <span className="text-xs lg:text-lg font-semibold text-gray-700">
              Mins
            </span>
          </div>
          <div className="flex flex-col items-center bg-white p-2 lg:p-4 w-16 h-16 lg:w-28 lg:h-28 rounded-full shadow-lg">
            <span className="text-2xl lg:text-5xl font-semibold md:font-bold text-red-500">
              41
            </span>
            <span className="text-xs lg:text-lg font-semibold text-gray-700">
              Sec
            </span>
          </div>
        </div>
        <button className="bg-btn-100 text-white px-8 py-2 uppercase font-semibold text-sm">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default DealoftheWeek;

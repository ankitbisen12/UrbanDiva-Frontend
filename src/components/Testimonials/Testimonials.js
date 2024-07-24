import React, { useState } from "react";
import { carosuelImage } from "./../../utils/util";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carosuelImage.length - 3 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carosuelImage.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mx-auto px-4 py-4 sm:px-6 sm:py-6 max-w-full lg:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 jost-nav py-2">
        UrbanDiva Spotlight
      </h2>
      <div className="relative w-full h-full mx-auto max-w-7xl overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out space-x-4"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {carosuelImage.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={image}
                className="w-1/3 h-full flex-shrink-0 rounded-xl"
              />
          ))}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-400 text-white font-bold bg-opacity-50 p-2 hover:bg-opacity-75"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-400 text-white font-bold bg-opacity-50 p-2  hover:bg-opacity-75"
          onClick={handleNextClick}
        >
          &gt;
        </button>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carosuelImage.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

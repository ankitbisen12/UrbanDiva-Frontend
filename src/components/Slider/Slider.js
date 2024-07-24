import React, { useState, useEffect } from "react";
import { images } from "./../../utils/util";

const Slider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % images.length);
  };

  // const handlePreviousClick = () => {
  //   setActiveImageIndex(
  //     !activeImageIndex ? images.length - 1 : activeImageIndex - 1
  //   );
  // };

  useEffect(() => {
    const timer = setTimeout(() => handleNextClick(), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="relative w-full h-full mx-auto p-2 md:px-4 md:py-6">
      {images.map((url, i) => (
        <img
          src={url}
          key={url}
          alt="wallpaper"
          className={`w-full h-full object-contain transition-opacity duration-1000 ${
            activeImageIndex === i ? "block" : "hidden"
          }`}
        />
      ))}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveImageIndex(i)}
            className={`w-2 h-2 rounded-full ${
              activeImageIndex === i ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;

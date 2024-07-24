import React from "react";
import Marquee from "react-fast-marquee";

import denim from "./../../assests/denim.png";
import highlander from "./../../assests/highlander.png";
import ketch from "./../../assests/ketch.png";
import JackandJones from "./../../assests/Jack&Jones.png";
import Levis from "./../../assests/Levis.png";
import usPoloAssn from "./../../assests/usPoloAssn.png";
import firebolt from "./../../assests/firebolt.png";
import noise from "./../../assests/noise.png";
import bewakoof from "./../../assests/bewakoof.png";
import roadster from "./../../assests/roadster.png";
import Locomotive from "./../../assests/Locomotive.png";

const brands = [
  {
    name: "Denim",
    imageSrc: denim,
  },
  {
    name: "Highlander",
    imageSrc: highlander,
  },
  {
    name: "Ketch",
    imageSrc: ketch,
  },
  {
    name: "JackandJones",
    imageSrc: JackandJones,
  },
  {
    name: "Levis",
    imageSrc: Levis,
  },
  {
    name: "UsPoloAssn",
    imageSrc: usPoloAssn,
  },
  {
    name: "Firebolt",
    imageSrc: firebolt,
  },
  {
    name: "Noise",
    imageSrc: noise,
  },
  {
    name: "Bewakoof",
    imageSrc: bewakoof,
  },
  {
    name: "Locomotive",
    imageSrc: Locomotive,
  },
  {
    name: "Roadster",
    imageSrc: roadster,
  },
];

const BrandsMarquee = () => {
  return (
    <div className="py-6">
      <Marquee gradient={false} speed={100} className="py-2">
        {brands.map((brand, index) => (
          <div key={index} className="mx-4">
            <img
              src={brand.imageSrc}
              alt={brand.name}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
      <Marquee gradient={false} direction="right" speed={100} className="py-2">
        {brands.map((brand, index) => (
          <div key={index} className="mx-4">
            <img
              src={brand.imageSrc}
              alt={brand.name}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandsMarquee;

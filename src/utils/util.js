import { BsBookshelf } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiUsersFourLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import slider1 from "./../assests/slider1.webp";
import slider2 from "./../assests/slider2.webp";
import slider3 from "./../assests/slider3.webp";
import slider4 from "./../assests/slider4.webp";
import slider5 from "./../assests/slider5.webp";
import slider6 from "./../assests/slider6.webp";
import c1 from "./../assests/c1.webp";
import c2 from "./../assests/c2.webp";
import c3 from "./../assests/c3.webp";
import c4 from "./../assests/c4.webp";
import c5 from "./../assests/c5.jpg";
import c6 from "./../assests/c6.webp";
import c7 from "./../assests/c7.webp";
import c8 from "./../assests/C8.webp";

export const images = [slider1, slider2, slider3, slider4, slider5, slider6];

export const AboutDetail = [
  {
    icon: <BsBookshelf className="w-11 h-11 mr-1 text-red-400" />,
    description: "products for women, men and kids.",
    count: 20,
    quantity: "thousand",
  },
  {
    icon: <HiOutlineShoppingBag className="w-11 h-11 mr-1 text-red-400" />,
    description: "spread across over 56+ cities in India.",
    count: 135,
    quantity: "stores",
  },
  {
    icon: <PiUsersFourLight className="w-11 h-11 mr-1 text-red-400" />,
    description: "helping us deliver real value to our customers.",
    count: 6899,
    quantity: "employees",
  },
];

export const ContactDetail = [
  {
    icon: <CiMail className="w-24 h-24 text-red-400" />,
    title: "Write to us",
    item1: "contact@fashiondiva.com",
    item2: "help@fashiondiva.com",
  },
  {
    icon: <FiPhone className="w-[90px] h-[90px] text-red-400" />,
    title: "Talk to us",
    item1: "Mon to Sun, 10:00AM to 10:00PM",
    item2: "Call us on 1800-242-4556",
  },
  {
    icon: <CiLocationOn className="w-24 h-24 text-red-400" />,
    title: "Address",
    item1: "43A Ecospace,7A building,Industrial area",
    item2: "Deavarabisnahalli,Karnataka",
  },
];

export const carosuelImage = [c1, c2, c3, c4, c5, c6, c7, c8];

export const formatRating = (rating) => {
  if (rating && rating.$numberDecimal) {
    return parseFloat(rating.$numberDecimal).toFixed(2);
  }
  return rating;
};

export function discountedPrice(item) {
  return Math.round(
    item.product.price * (1 - item.product.discountPercentage / 100),
    2
  );
}

export const calculateTotalPackagingCharge = (orders) => {
  let totalPackagingCharge = 0;

  orders.forEach(order => {
    order.items.forEach(item => {
      totalPackagingCharge += item.product.packagingCharge * item.quantity;
    });
  });

  return totalPackagingCharge;
};

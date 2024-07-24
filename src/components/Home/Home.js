import React from "react";
import Discount from "../Discount";
import Navbar from "../Navbar/Navbar";
import NavigateToPage from "../NavigateToPage/NavigateToPage";
import Footer from "../Footer/footer";
import BrandsMarquee from "../BrandsMarque/BrandsMarquee";
import DealoftheWeek from "../DealoftheWeek/DealoftheWeek";
import FlatOff from "../FlatOff/FlatOff";
import Slider from "../Slider/Slider";
import HomeProducts from "../Product/HomeProducts";
import Testimonial from "../Testimonials/Testimonials";
import ShippingDetail from "../Testimonials/ShippingDetail";

const Home = () => {
  return (
    <React.Fragment>
      <Discount />
      <Navbar />
      <Slider />
      <Testimonial />
      <NavigateToPage />
      <HomeProducts />
      <BrandsMarquee />
      <DealoftheWeek />
      <FlatOff />
      <ShippingDetail/>
      <Footer />
    </React.Fragment>
  );
};

export default Home;

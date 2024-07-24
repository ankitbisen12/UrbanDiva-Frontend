import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import { AboutDetail } from "../../utils/util";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Navbar />
      <About />
      <Footer />
    </React.Fragment>
  );
};

const About = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <div className="mb-8">
        <p className="text-md text-gray-500">Home / About Us</p>
      </div>
      <div className="flex flex-col items-center text-center md:mb-4">
        <h1 className="text-3xl font-bold jost-category">ABOUT US</h1>
        <div className="mb-6 md:mt-2 w-14 h-0.5 bg-red-500" />
      </div>
      <div className="space-y-6 leading-6 font-about">
        <p>
          At UrbanDiva, we believe that every individual deserves to look good,
          feel confident, and express themselves through the language of
          fashion. Our mission is to "Transform Everyday Style" for our
          customers, ensuring that they have access to the latest trends and
          timeless pieces that elevate their wardrobe and lifestyle.
        </p>
        <p>
          We listen attentively to our customers, understanding their needs,
          wants, and desires. This customer-first approach allows us to create
          fashion brands that are not only trendy but also accessible, catering
          to diverse tastes and preferences. Our commitment is to deliver the
          latest styles in the most efficient and timely manner.
        </p>
        <p>
          By leveraging sophisticated technology, we transform valuable consumer
          insights into fresh, relevant fashion products. Our team of talented
          designers, product experts, data analysts, and sourcing specialists
          work tirelessly to bring the latest trends from concept to consumer
          with unprecedented speed.
        </p>
        <p>
          UrbanDiva is one of India’s fastest growing tech Enabled house of
          Fashion Brands.
        </p>
        <p className="font-semibold text-red-500">
          Manufactured In India with good quality raw material, each product
          goes through quality checks before it is ready to ship.
        </p>
        <p>
          Explore our diverse range of fashion-forward products and experience
          the perfect blend of style, quality, and convenience. At UrbanDiva,
          we're dedicated to making everyday style accessible and enjoyable for
          everyone.
        </p>
      </div>
      <div className="py-8 mx-auto">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {AboutDetail.map((about) => (
            <div
              key={about.description}
              className="border border-gray-200 px-8 py-6 md:py-12 rounded-none"
            >
              <div className="flex flex-row">
                {about.icon}
                <div className="flex flex-row mt-2 items-center">
                  <h2 className="text-3xl text-gray-900 font-medium title-font">
                    {about.count}+
                  </h2>
                  <span className="mt-1.5">{about.quantity}</span>
                </div>
              </div>
              <span className="leading-relaxed text-base px-1">
                {about.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

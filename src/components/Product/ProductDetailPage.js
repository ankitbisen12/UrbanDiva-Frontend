import React from "react";
import Navbar from "../Navbar/Navbar";
import ProductDetail from "./ProductDetail";
import Footer from "../Footer/footer";

const ProductDetailPage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <ProductDetail />
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetailPage;

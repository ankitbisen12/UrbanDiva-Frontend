import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import { ContactDetail } from "../../utils/util";

const ContactUs = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

const Contact = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl ">
      <div className="mb-8">
        <p className="text-md text-gray-500">Home / Contact Us</p>
      </div>
      <div className="flex flex-col items-start md:mb-4">
        <h1 className="text-3xl font-bold jost-category">Contact US</h1>
        <div className="mb-4 mt-2 w-14 h-0.5 bg-red-500" />
        <h6>
          If you have any query feel free to touch with us from any of these
          ways:
        </h6>
      </div>
      <div className="py-8 mx-auto jost-category">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ContactDetail.map((contact) => (
            <div className="border border-gray-200 px-6 py-4 rounded-none">
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center">{contact.icon}</div>
                <div>
                  <span className="text-xl font-semibold">{contact.title}</span>
                </div>
                <div className="flex flex-col mt-2 text-center">
                  <span className="text-lg font-normal ">{contact.item1}</span>
                  <span className="text-lg font-normal">{contact.item2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContactUs;

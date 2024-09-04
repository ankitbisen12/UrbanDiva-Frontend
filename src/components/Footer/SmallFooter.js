import React from "react";
import { Link } from "react-router-dom";

const SmallFooter = () => {
  return (
    <footer className="bg-gray-50 px-4 py-8 text-sm text-gray-600 border-t-[1px] border-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap justify-center md:justify-start space-x-2">
          <Link to="/" className="hover:underline">
            Policies
          </Link>
          <span>|</span>
          <Link to="/" className="hover:underline">
            Returns Policy
          </Link>
          <span>|</span>
          <Link to="/" className="hover:underline">
            Terms of use
          </Link>
          <span>|</span>
          <Link to="/" className="hover:underline">
            Security
          </Link>
          <span>|</span>
          <Link to="/" className="hover:underline">
            Privacy
          </Link>
          <span>|</span>
          <Link to="/" className="hover:underline">
            Infringement
          </Link>
        </div>

        <div className="my-2 md:my-0">© 2007-2024 Flipkart.com</div>

        <div className="flex flex-wrap justify-center md:justify-end space-x-2">
          <span>Need help? Visit the</span>
          <Link to="/" className="text-blue-600 hover:underline">
            Help Center
          </Link>
          <span>or</span>
          <Link to="/" className="text-blue-600 hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default SmallFooter;

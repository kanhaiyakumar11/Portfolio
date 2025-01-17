import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr className="border-gray-300 my-8" />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-center">
          <h2 className="text-2xl font-bold mb-1">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaLinkedinIn size={24} />
            </a>
          </div>
          <div className="flex items-center justify-center mt-8">
            <span className="text-gray-600">&copy; 2024 Your Company. All rights reserved</span>
            <br/>            
          </div>
          <p className="text-gray-600">Supportive Partner ❤️ Bhuwan Kumar, Raushon And 💻 Abhishek Kumar</p>

        </div>
      </footer>
    </>
  );
}

export default Footer;

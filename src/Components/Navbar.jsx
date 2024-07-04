// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 ">
              <Logo />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-blue-400 px-3 py-2 text-sm font-medium"
              >
                HOME
              </a>
              <div className="relative">
                <button className="text-gray-700 hover:text-blue-400 px-3 py-2 text-sm font-medium">
                  SERVICES
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg">
                  {/* Add your dropdown items here */}
                </div>
              </div>
              <div className="relative">
                <button className="text-gray-700 hover:text-blue-400 px-3 py-2 text-sm font-medium">
                  ABOUT US
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg">
                  {/* Add your dropdown items here */}
                </div>
              </div>
              <div className="relative">
                <button className="text-gray-700 hover:text-blue-400 px-3 py-2 text-sm font-medium">
                  RESOURCES
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg">
                  {/* Add your dropdown items here */}
                </div>
              </div>

              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 6h18M3 12h18m-18 6h18"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <hr />
          <a
            href="#"
            className="text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            HOME
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            SERVICES
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            RESOURCES
          </a>

          <a
            href="#"
            className="bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

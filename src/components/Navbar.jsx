import React, { useState } from "react";
import Logo from "../assets/Logo";
import DropDownMenu from "./DropDownMenu";
import { Link, useLocation } from "react-router-dom";
import { paths } from "../const/path";

const MENU_ITEMS = [
  {
    title: "Devops",
    path: `${paths.services}/${paths.devops}`,
  },
  {
    title: "NOC 24/7",
    path: `${paths.services}/${paths.noc}`,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setActivePath(path);
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to={paths.home} className="flex-shrink-0">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to={paths.home}
                onClick={() => handleLinkClick(paths.home)}
                className={`${
                  activePath === paths.home ? "text-blue-400" : "text-gray-700"
                } px-3 py-2 text-sm font-medium`}
              >
                HOME
              </Link>
              <div className="relative">
                <DropDownMenu title={"SERVICES"} menuItems={MENU_ITEMS} />
                <div className="absolute hidden group-hover:block bg-white shadow-lg">
                  {/* Add your dropdown items here */}
                </div>
              </div>
              <Link
                to={paths.aboutus}
                onClick={() => handleLinkClick(paths.aboutus)}
                className={`${
                  activePath === paths.aboutus
                    ? "text-blue-400"
                    : "text-gray-700"
                } px-3 py-2 text-sm font-medium`}
              >
                ABOUT US
              </Link>
              <Link
                to={paths.resources}
                onClick={() => handleLinkClick(paths.resources)}
                className={`${
                  activePath === paths.resources
                    ? "text-blue-400"
                    : "text-gray-700"
                } px-3 py-2 text-sm font-medium`}
              >
                RESOURCES
              </Link>
              <Link
                to={paths.contact}
                onClick={() => handleLinkClick(paths.contact)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </Link>
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
          <Link
            to={paths.home}
            onClick={() => handleLinkClick(paths.home)}
            className={`${
              activePath === paths.home ? "text-blue-400" : "text-gray-700"
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            HOME
          </Link>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            SERVICES
          </a>
          <Link
            to={paths.aboutus}
            onClick={() => handleLinkClick(paths.aboutus)}
            className={`${
              activePath === paths.aboutus ? "text-blue-400" : "text-gray-700"
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            ABOUT US
          </Link>

          <Link
            to={paths.resources}
            onClick={() => handleLinkClick(paths.resources)}
            className={`${
              activePath === paths.resources ? "text-blue-400" : "text-gray-700"
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            RESOURCES
          </Link>

          <Link
            to={paths.contact}
            onClick={() => handleLinkClick(paths.contact)}
            className="bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

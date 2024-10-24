"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi"; // Importing icons from react-icons

const MegaMenu = () => {
  const [menu, setMenu] = useState(true);
  const [show, setShow] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false); // New state for mega menu visibility

  const handleClose = () => {
    setShow(false);
    setMegaMenuOpen(false); // Close mega menu when closing the modal
  };
  const handleShow = () => setShow(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  return (
    <nav className="bg-transparent header text-white  relative  dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto container p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/images/logos/evolzer-white.webp"
            className="h-8"
            alt="Logo"
          />
        </Link>
        <button
          onClick={toggleNavbar} // Toggle mobile menu
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-cta"
          aria-expanded={menu ? "false" : "true"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full-cta"
          className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${
            menu ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center justify-center mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li
              onMouseEnter={() => setMegaMenuOpen(true)} // Open mega menu on hover
              onMouseLeave={() => setMegaMenuOpen(false)} // Close mega menu on mouse leave
            >
              <p
                id="mega-menu-full-cta-dropdown-button"
                data-collapse-toggle="mega-menu-full-cta-dropdown"
                data-dropdown-placement="bottom"
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
                <FiChevronDown className="ml-2 w-2.5 h-2.5" />
              </p>
              {megaMenuOpen && ( // Show mega menu if open
                <div
                  id="mega-menu-full-cta-dropdown"
                  className="absolute left-0 right-0 z-10 mt-1 w-full bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
                >
                  <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-5 md:px-6">
                    {/* First Column */}
                    <div className="mt-4 md:mt-0">
                      <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Our Services
                      </h2>
                      <div className="flex items-start mb-4">
                        <img
                          src="/images/leading-technologies.jpg"
                          alt="Leading Technologies"
                          className="h-10 w-10 mr-3"
                        />
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            Leading Technologies:
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Tech that simplifies your operations and gives you
                            an edge.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start mb-4">
                        <img
                          src="/images/trusted-tech-experts.jpg"
                          alt="Trusted Tech Experts"
                          className="h-10 w-10 mr-3"
                        />
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            Trusted Tech Experts:
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Reliable and innovative solutions crafted by
                            experts.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Second Column: App Development */}
                    <div className="mt-4 md:mt-0">
                      <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        App Development
                      </h2>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="#"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Mobile Application
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Web Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Software Development
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Third Column: Implementation */}
                    <div className="mt-4 md:mt-0">
                      <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Implementation
                      </h2>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="#"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            SAP Application
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Sale Force
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            HubSpot
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Fourth Column: Intelligent Data */}
                    <div className="mt-4 md:mt-0">
                      <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Intelligent Data
                      </h2>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="#"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Data Annotation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Data Engineering
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Data Management
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Fifth Column: AI */}
                    <div className="mt-4 md:mt-0">
                      <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        AI
                      </h2>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="#"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Generative AI
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Enterprise AI
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
            <li className="bg-[] text-white py-2 px-4 rounded ml-5">
              <button onClick={handleShow} className="text-white">
                Schedule a Call
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenu;

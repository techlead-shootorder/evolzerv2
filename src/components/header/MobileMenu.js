"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false); // State for the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mobile-header header">
      <div className="container flex justify-between items-center p-4">
        {/* Logo on the left */}
        <Link href="/" passHref>
          <img
            src={"/images/logos/evolzer-white.webp"}
            alt="logo"
            className="logo-item h-10"
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="text-xl !px-4 !py-2">
          {isOpen ? <AiOutlineClose className="text-white" /> : <AiOutlineMenu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${isOpen ? "open" : "closed"}`}>
        <ul className="flex flex-col items-start p-4">
        <li className="py-2">
            <Link href="/" passHref>
              <span className="text-white">Home</span>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/about-us" passHref>
              <span className="text-white">About</span>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/contact" passHref>
              <span className="text-white">Contact </span>
            </Link>
          </li>
          <li className="py-2">
            <span className="text-white">Services</span>
            {/* Submenu for Services */}
            <ul className="ml-4 flex flex-col text-white">
              <li>
                <span className="font-bold my-2">App Development</span>
                <ul className="ml-4 ">
                  <li className="mt-1 ">
                    <Link href="/mobile-application">Mobile Application</Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/web-application">Web Application</Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/software-development">Software Development</Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold  my-2">Implementation</span>
                <ul className="ml-4">
                  <li className="mt-1">
                    <Link href="/sap-application">SAP Application</Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/salesforce">Salesforce</Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/hubspot">HubSpot</Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold  my-2">Intelligent Data</span>
                <ul className="ml-4">
                  <li className="mt-1">
                    <Link href="/data-annotation">Data Annotation</Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/data-engineering">Data Engineering</Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/data-management">Data Management</Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold my-2">AI/ML</span>
                <ul className="ml-4">
                  <li className="mt-1">
                    <Link href="/generative-ai">Generative AI</Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/enterprise-ai">Enterprise AI</Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/data-modernization">Data Modernization</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="py-2 hidden">
            <button className="btn-schedule" onClick={() => alert('Schedule a call clicked!')}>
              Schedule a Call
            </button>
          </li>
        </ul>
      </nav>

      {/* Styles for the mobile menu */}
      <style jsx>{`
        .mobile-menu {
          display: none; /* Hidden by default */
          transition: all 0.3s ease; /* Transition effect */
        }

        .mobile-menu.open {
          display: block; /* Show when open */
          position: absolute;
          top: 60px; /* Adjust based on your header height */
          left: 0;
          right: 0;
          background: #2F2B28;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000; /* Ensure it appears above other elements */
        }

        .mobile-menu.closed {
          display: none; /* Hidden when closed */
        }

        .btn-schedule {
          background-color: #f15a29; /* Button color */
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn-schedule:hover {
          background-color: #e05e30; /* Darker shade on hover */
        }

        @media (min-width: 768px) {
          .mobile-header {
            display: none; /* Hide mobile header on larger screens */
          }
        }
      `}</style>
    </header>
  );
};

export default MobileHeader;

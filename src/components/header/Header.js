// components/MegaMenu.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai"; // Import from react-icons

const MegaMenu = () => {
  const [menu, setMenu] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const elementId = document.getElementById("header");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header
      id="header"
      className="headroom navbar-color-white navbar-style-four"
    >
      <div className="startp-nav">
        <div className="container">
          <div className="ruby-menu-demo-header">
            <div className="ruby-wrapper">
              <button className="c-hamburger c-hamburger--htx visible-xs">
                <span>toggle menu</span>
              </button>
              <ul className="ruby-menu">
                <Link href="/" passHref>
                  <li className="ruby-active-menu-item">
                    <img
                      src={"/images/logos/evolzer-white.webp"}
                      alt="logo"
                      className="logo-item"
                    />
                  </li>
                </Link>
                <li
                  className="ruby-menu-right btns btn-primarys"
                  style={{ marginLeft: "20px" }}
                >
                  <button onClick={handleShow}>Schedule a Call</button>
                </li>
                <li className="ruby-menu-mega-shop ruby-menu-right">
                  <Link href="/contact" passHref>
                    Contact
                  </Link>
                </li>
                <li className="ruby-menu-mega ruby-menu-right">
                  <a href="# " className=""> 
                    Services <AiOutlineDown className="inline-block"/>{" "}
                    {/* Replace feather icon with react-icon */}
                  </a>
                  <div className="ruby-grid ruby-grid-lined">
                    <div className="ruby-row container">
                      <div className="ruby-col-4 apply-padding">
                        <div className="flex justify-between items-center">
                          <div className="icons">
                            <img
                              src={"/images/banner-image/innovative.svg"}
                              alt="innovative"
                            />
                          </div>
                          <div>
                            <h6 className="ruby-list-headings left-headings">
                              <span>Leading Technologies:</span>
                            </h6>
                            <p>
                              Tech that simplifies your operations and gives you
                              an edge.
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="icons">
                            <img
                              src={"/images/banner-image/tech.svg"}
                              alt="tech"
                            />
                          </div>
                          <div>
                            <h6 className="ruby-list-headings left-headings">
                              <span>Trusted Tech Experts:</span>
                            </h6>
                            <p>
                              Reliable and innovative solutions crafted by
                              experts.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Additional columns for services */}
                      <div className="ruby-col-8 apply-padding">
                        <h3 className="ruby-list-heading">Our Services</h3>
                        <div className="ruby-row">
                          <div className="ruby-col-3 ruby-col-6-md">
                            <h6 className="ruby-list-headings">
                              App Development
                            </h6>
                            <ul>
                              <li>
                                <Link href="/mobile-application">
                                  Mobile Application
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development">
                                  Web Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/software-development">
                                  Software Development
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="ruby-col-3 ruby-col-6-md"
                            style={{ paddingLeft: 10 }}
                          >
                            <h6 className="ruby-list-headings">
                              Implementation
                            </h6>
                            <ul>
                              <li>
                                <Link href="/sap-application">
                                  SAP application
                                </Link>
                              </li>
                              <li>
                                <Link href="/sale-force">Salesforce</Link>
                              </li>
                              <li>
                                <Link href="/hubspot">HubSpot</Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="ruby-col-3 hidden-md"
                            style={{ paddingLeft: 15 }}
                          >
                            <h6 className="ruby-list-headings">
                              Intelligent Data
                            </h6>
                            <ul>
                              <li>
                                <Link href="/data-annotation">
                                  Data Annotation
                                </Link>
                              </li>
                              <li>
                                <Link href="/data-engineering">
                                  Data Engineering
                                </Link>
                              </li>
                              <li>
                                <Link href="/data-management">
                                  Data Management
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="ruby-col-3 hidden-md"
                            style={{ paddingLeft: 15 }}
                          >
                            <h6 className="ruby-list-headings">AI/ML</h6>
                            <ul>
                              <li>
                                <Link href="/generative-ai-services">
                                  Generative AI
                                </Link>
                              </li>
                              <li>
                                <Link href="/enterprise-ai-services">
                                  Enterprise AI
                                </Link>
                              </li>
                              <li>
                                <Link href="/data-modernization-services">
                                  Data Modernization
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="ruby-dropdown-toggle" />
                </li>
                <li className="ruby-menu-mega-shop ruby-menu-right">
                  <Link href="/about-us">About</Link>
                </li>
                <li className="ruby-menu-mega-blog ruby-menu-right">
                  <Link href="/">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MegaMenu;

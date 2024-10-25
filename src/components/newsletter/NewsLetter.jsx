"use client";
import React, { useState } from "react";
import Image from "next/image";

const NewsletterStyleTwo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    event.preventDefault(); // Prevent form submission
    setShow(true);
  };

  return (
    <div className="newsletter-area ml-3 md:ml-0 ">
      <div className="">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Container */}
          <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
            <div className="newsletter-image">
              <img
                src="/images/bigdata-analytics/contact.jpg"
                alt="Newsletter"
              
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="lg:w-1/2 w-full p-6 bg-white rounded-lg shadow-lg">
            <div className="newsletter-content">
              <p className="text-gray-600">Call Us, Message Us, Or Knock On Our Door!</p>
              <h2 className="mb-3 text-2xl font-bold mt-3">
                Let’s meet and discuss how we can help your business grow.
              </h2>
              <p className="text-gray-600 mt-3">
                Fill out this form with your information and select one of the services you are most interested in. We will get back to you within 24 hours.
              </p>
              <form className="newsletter-form">
                <button
                  onClick={handleShow}
                  className="w-full md:w-auto mt-4 py-2 px-4 text-white bg-blue-500 transition rounded-full"
                >
                  Schedule A Call
                </button>
              </form>
            </div>
            {/* <Modal handleShow={handleShow} handleClose={handleClose} show={show} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterStyleTwo;

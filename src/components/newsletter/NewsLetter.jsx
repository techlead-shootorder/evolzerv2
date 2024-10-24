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
    <div className="newsletter-area">
      <div className="">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full lg:mb-0">
            <div className="newsletter-image">
              <Image
                src="/images/bigdata-analytics/contact.jpg"
                alt="Newsletter"
                width={1000}
                height={400}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full p-6 bg-white rounded-lg shadow-lg">
            <div className="newsletter-content">
              <p className="text-gray-600">Call Us, Message Us, Or Knock On Our Door!</p>
              <h2 className="mb-3 text-2xl font-bold">
                Let’s meet and discuss how we can help your business grow.
              </h2>
              <p className="text-gray-600">
                Fill out this form with your information and select one of the services you are most interested in. We will get back to you within 24 hours.
              </p>
              <form className="newsletter-form">
                <button
                  onClick={handleShow}
                  className="mt-4 py-2 px-4 text-white transition !rounded-full"
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

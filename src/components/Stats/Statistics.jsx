import React from "react";
import Image from "next/image"; // Import Next.js Image


const Statistics = () => {
  return (
    <div className="funfacts-area pt-20 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800">
            <span>We understand your needs and deliver what works for you.</span>
          </h2>
          {/* Uncomment this if you want to add a description */}
          {/* <div className="bar mb-2"></div> */}
          {/* <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="w-1/2 sm:w-1/2 lg:w-1/4 p-4">
            <div className="funfact text-center">
              <h3 className="text-4xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-600">Ongoing Projects</p>
            </div>
          </div>

          <div className="w-1/2 sm:w-1/2 lg:w-1/4 p-4">
            <div className="funfact text-center">
              <h3 className="text-4xl font-bold ">11+</h3>
              <p className="text-gray-600">Years Of Expertise</p>
            </div>
          </div>

          <div className="w-1/2 sm:w-1/2 lg:w-1/4 p-4">
            <div className="funfact text-center">
              <h3 className="text-4xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-600">Innovative Experts</p>
            </div>
          </div>

          <div className="w-1/2 sm:w-1/2 lg:w-1/4 p-4">
            <div className="funfact text-center">
              <h3 className="text-4xl font-bold text-blue-600">92%</h3>
              <p className="text-gray-600">Client Retention Rate</p>
            </div>
          </div>
        </div>
        <div className="map-bg">
          <img
            src={"/images/map.png"}
            alt="map"
            loading="lazy"
            layout="responsive"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;

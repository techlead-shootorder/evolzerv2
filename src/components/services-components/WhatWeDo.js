import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhatWeDo = ({ heading, service }) => {
  return (
    <div className="services-area-two pt-20 pb-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">{heading}</h2>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service &&
            service.map((serviceItem, index) => (
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                key={index}
              >
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={serviceItem.imageUrl}
                    alt={serviceItem.card_title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-orange-600">
                    {serviceItem.card_title}
                  </h3>
                  <p className="text-gray-600">{serviceItem.card_subtitle}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

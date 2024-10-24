"use client"; // Use client-side rendering
import React from "react";
import Slider from "react-slick";
import Image from "next/image"; // Import Next.js Image component
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// List of image paths relative to the public folder
const logos = [
  "/images/client-image/a1.jpg",
  "/images/client-image/b1.jpg",
  "/images/client-image/c1.jpg",
  "/images/client-image/d1.jpg",
  "/images/client-image/e1.jpg",
  "/images/client-image/f1.jpg",
  "/images/client-image/g1.jpg",
  "/images/client-image/h1.jpg",
  "/images/client-image/i1.jpg",
  "/images/client-image/j1.jpg",
];

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button className="slick-prev text-gray-600 hover:text-gray-800" aria-label="Previous">
        <FaArrowLeft />
      </button>
    ),
    nextArrow: (
      <button className="slick-next text-gray-600 hover:text-gray-800" aria-label="Next">
        <FaArrowRight />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Adjusted for smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Clients</h2>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <div className="relative w-full h-32"> {/* Set height for the logo container */}
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="grayscale object-contain"
                  fill // Use fill for responsive size
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw" // Specify sizes for responsiveness
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Client;

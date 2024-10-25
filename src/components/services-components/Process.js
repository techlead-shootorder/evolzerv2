"use client"; // Add "use client" for Next.js 13 app router compatibility
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Process = () => {
  const slides = [
    {
      title: "Requirements Refinement",
      description: "We work with you to clarify your needs and expectations.",
      number: 1,
    },
    {
      title: "Development",
      description:
        "We develop software using the most relevant tools and technologies.",
      number: 2,
    },
    {
      title: "Testing",
      description:
        "We test software thoroughly to ensure its functionality and reliability.",
      number: 3,
    },
    {
      title: "Deployment",
      description:
        "We ensure smooth and efficient deployment into the target environment.",
      number: 4,
    },
    {
      title: "Maintenance",
      description:
        "We keep enhancing software to meet changing requirements and preferences.",
      number: 5,
    },
    {
      title: "Support",
      description:
        "We quickly and effectively deal with any incidents or malfunctions.",
      number: 6,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button className="slick-prev text-gray-700 hover:text-black">
        <FaArrowLeft className="w-8 h-8" />
      </button>
    ),
    nextArrow: (
      <button className="slick-next text-gray-700 hover:text-black">
        <FaArrowRight className="w-8 h-8" />
      </button>
    ),
    appendArrows: (arrows) => (
      <div className="slider-arrows flex justify-between">{arrows}</div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="tech-stack-slider bg-gray-100">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Software Development Processes{" "}
          </h2>
        </div>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="tech-slide px-3">
              <div className="tech-slide-content p-6 bg-white rounded-lg shadow-lg text-center">
                <h3 className="slide-number text-2xl font-semibold text-orange-500">
                  {slide.number}
                </h3>
                <h4 className="slide-title mt-4 text-xl font-bold text-gray-800">
                  {slide.title}
                </h4>
                <p className="slide-description mt-2 text-gray-600">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Process;

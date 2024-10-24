"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const IndustriesCater = ({ bg }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const industries = [
    {
      imgSrc: "/images/Industries/Industries/Healthcare.webp",
      link: "/industry/healthcare-industry",
      title: "Healthcare",
      description:
        "Our broad understanding of the digital network enables pharmaceutical, devices, and other medical businesses to adopt new technological breakthroughs and drive efficiency quickly.",
    },
    {
      imgSrc: "/images/Industries/Industries/Automobile.webp",
      link: "/industry/automobile",
      title: "Automobile",
      description:
        "We enable the automobile industry to use data analysis technology and IoT solutions to improve the performance of vehicles and maintenance.",
    },
    {
      imgSrc: "/images/Industries/Industries/Technology.webp",
      link: "/industry/technology",
      title: "Technology",
      description:
        "We accelerate your business transformation journeys with our expertise across IT infrastructure, software development, data analytics, and other personalized services.",
    },
    {
      imgSrc: "/images/Industries/Industries/Education.webp",
      link: "/industry/education",
      title: "Education",
      description:
        "We revolutionize the education industry by providing cutting-edge digital solutions that enhance learning experiences and streamline administrative processes.",
    },
    {
      imgSrc: "/images/Industries/Industries/Fintech.webp",
      link: "/industry/fintech",
      title: "Fintech",
      description:
        "We help you grow in demanding conditions, we are proficient in financial services, analytics, and agile engineering.",
    },
    {
      imgSrc: "/images/Industries/Industries/Ecommerce.webp",
      link: "/industry/e-commerce-industry",
      title: "E-commerce",
      description:
        "We assist you in increasing your sales, improving your processes, and communicating with your clientele through enhanced current digital storefronts.",
    },
    {
      imgSrc: "/images/Industries/Industries/Hospitality.webp",
      link: "/industry/hospitality",
      title: "Hospitality",
      description:
        "We utilize new technology to modernize, rigorously monitor costs, curate networks to generate long-term success, and succeed in today's customer-centric world.",
    },
    {
      imgSrc: "/images/Industries/Industries/Real Estate.webp",
      link: "/industry/real-estate",
      title: "Real Estate",
      description:
        "Our integrated approaches in property management, based on modern technologies and AI-Driven market insights, enable you to make decisions wisely.",
    },
    {
      imgSrc: "/images/Industries/Industries/Travel.webp",
      link: "/industry/travel-and-tourism",
      title: "Travel & Tourism",
      description:
        "We equip travel and tourism businesses with the technology and support they need to thrive in the new normal.",
    },
    {
      imgSrc: "/images/Industries/Industries/blog-details.webp",
      link: "/industry/manufacturing",
      title: "Manufacturing",
      description:
        "We offer technical expertise and blueprints to help manufacturers navigate the challenges of converting their IT and OT systems.",
    },
    {
      imgSrc: "/images/Industries/Industries/FMCG.webp",
      link: "/industry/fmcg",
      title: "FMCG",
      description:
        "We promote new consumer engagement models by creating a distinctive, data-driven digital environment to drive outcomes throughout your value chain.",
    },
    {
      imgSrc: "/images/Industries/Industries/Agriculture.webp",
      link: "/industry/agriculture",
      title: "Agriculture",
      description:
        "With our advanced data analytics, IoT integration, and precision farming technologies, we'll help you optimize your crop yields and manage your resources.",
    },
  ];

  return (
    <section className={`industries-cater ${bg} ptb-80`}>
      {/* Apply max width to container */}
      <div className="container mx-auto px-4 team-area">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Industries we cater to</h2>
        </div>

        {/* Constrain the width of the slider */}
        <div className="max-w-full">
          <Slider {...settings} className="team-slider">
            {industries.map((industry, index) => (
              <div key={index} className="single-team">
                <Link href={industry.link}>
                  <div className="entry-thumbnail">
                    <Image
                      src={industry.imgSrc}
                      alt={industry.title}
                      width={600}
                      height={400}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <div className="team-content">
                      <div className="team-info">
                        <h3>{industry.title}</h3>
                      </div>
                      <p className="mt-2">{industry.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCater;

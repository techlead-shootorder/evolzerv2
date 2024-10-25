import React from "react";
import Link from "next/link"; // Use Next.js Link

const HomePage = () => {
  return (
    <div className="bg-white !pt-[150px] md:!pt-[280px] bigdata-analytics-banner">
      <div className="container mx-auto">
        <div className="text-center md:text-left mb-12 w-full md:w-1/2"> {/* Changed to w-full for small screens */}
          <h1 className="text-center text-[27px] leading-[35px] md:text-left md:text-[50px] mb-[25px] md:leading-[70px] font-bold text-white">
            Developing Technology for A Smarter World
          </h1>
          <p className="text-center md:text-left mt-4 text-[#e9e9e9] max-w-[470px] text-[15px]">
            Driving digital transformation with cutting-edge technology
            solutions in application development, data analytics and
            engineering, software development, DevOps services, UI/UX design, AI
            and Machine learning.
          </p>

          <Link
            href="/contact"
            className="inline-block text-center md:text-left mt-6 bg-[#f15a29] text-white py-4 px-8 rounded hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>
        <div className="banner-boxes-area">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center"> {/* Flexbox for responsive layout */}
              <div className="w-full sm:w-1/2 md:w-1/3 p-2" data-aos="fade-up" data-aos-delay="100"> {/* Tailwind for responsive columns */}
                <div className="single-banner-boxes">
                  <div className="icon">
                    <img
                      src={"/images/banner-image/svg1.svg"}
                      alt="service"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-semibold ">End-to-end solutions</h3>
                  <p>
                    Comprehensive solutions tailored for all your business
                    needs.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                <div className="single-banner-boxes">
                  <div className="icon">
                    <img
                      src={"/images/banner-image/svg2.svg"}
                      alt="service"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-semibold ">Strategic services</h3>
                  <p>
                    Customized solutions aligning your business goals for
                    long-term success.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                <div className="single-banner-boxes">
                  <div className="icon">
                    <img
                      src={"/images/banner-image/svg3.svg"}
                      alt="service"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-semibold ">Comprehensive support</h3>
                  <p>
                    Experts provide outstanding assistance from consultation to
                    maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

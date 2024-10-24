import React from "react";

const AboutUsContent = () => {
  return (
    <section className="about-us-content bg-gray-50">
      <div className="agency-about-area pt-20 pb-20 container">
        <div className="container-fluid">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-7/12 md:w-full mb-8 lg:mb-0 p-8"> {/* Changed col-lg-7 to lg:w-7/12 */}
              <div className="agency-about-img ">
                <img
                  src={"/images/new-one/new-image.jpg"}
                  alt="About"
                  loading="lazy"
                  className="object-cover w-full" // Ensure the image is responsive
                />
              </div>
            </div>
            <div className="w-full lg:w-5/12 md:w-full"> {/* Changed col-lg-5 to lg:w-5/12 */}
              <div className="agency-about-content">
                <h2 className="!mb-6 text-2xl font-bold">
                  <span>Comprehensive Tech Solutions, </span>Unmatched Expertise
                </h2>
                <p className="text-gray-700">
                  At <b>Evolzer</b> we offer solid outcomes with faster
                  development while prioritizing the customer&apos;s needs.{" "}
                  <b>Our high-end custom solutions</b> and services will meet
                  your technology services needs and help your business succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContent;

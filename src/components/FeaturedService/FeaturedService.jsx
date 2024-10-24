import React from "react";
import {
  FiCode,
  FiTool,
  FiDatabase,
  FiLayers,
  FiServer,
  FiLayout,
} from "react-icons/fi";

const FeaturedService = () => {
  return (
    <>
      <div className="repair-services-area py-20">
        <div className="container mx-auto">
          <div className="section-title text-center mb-10">
            <h2 className="text-3xl font-bold">Our Featured Services that We Provide</h2>
            <p className="text-gray-600 mt-4">
              Technology, like art, is a soaring exercise of the human imagination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="single-repair-services bg1 p-6 rounded-lg  text-left">
              <div className="icon mb-4 flex items-center justify-center">
                <FiCode style={{ width: "40px", height: "40px" }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Application Development</h3>
              <p className="text-gray-600">
                Cutting-edge application offerings with seamless integration,
                robust security, and support, to ensure your business stays ahead.
              </p>
            </div>

            <div className="single-repair-services bg2 p-6 rounded-lg  text-left">
              <div className="icon mb-4 flex items-center justify-center">
                <FiTool style={{ width: "40px", height: "40px" }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">
                Implementation services to effectively integrate and deploy
                advanced solutions tailored to your business needs.
              </p>
            </div>

            <div className="single-repair-services bg3 p-6 rounded-lg  text-left">
              <div className="icon mb-4 !flex !items-center !justify-center">
                <FiDatabase style={{ width: "40px", height: "40px" }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Intelligent Data Services</h3>
              <p className="text-gray-600">
                Data Services, with a focus on precision and innovation to
                uncover valuable insights, transforming raw data into
                actionable intelligence.
              </p>
            </div>

            <div className="single-repair-services bg4 p-6 rounded-lg  text-left">
              <div className="icon mb-4 !flex !items-center !justify-center">
                <FiLayers style={{ width: "40px", height: "40px" }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI/ML</h3>
              <p className="text-gray-600">
                Utilizing AI and ML to transform complex data sets into
                applicable insights, enabling you to make informed decisions
                and implement innovative solutions.
              </p>
            </div>

            <div className="single-repair-services bg5 p-6 rounded-lg text-left">
              <div className="icon mb-4 !flex !items-center !justify-center">
                <FiServer style={{ width: "40px", height: "40px" }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
              <p className="text-gray-600">
                Comprehensive cloud services from migration and deployment to
                ongoing management to enhance your business operations
                efficiently.
              </p>
            </div>

            <div className="single-repair-services bg6 p-6 rounded-lg  text-left">
              <div className="icon mb-4 !flex !items-center !justify-center">
                <FiLayout style={{ width: "40px", height: "40px" }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">UX/UI</h3>
              <p className="text-gray-600">
                Focusing on user research, prototyping, and testing to ensure
                smooth navigation and attractive visual design to enhance user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedService;

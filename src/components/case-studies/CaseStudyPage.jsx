import Link from "next/link";
import React from "react";

const CaseStudyPage = ({ bg }) => {
  return (
    <section className={`pt-20 pb-20 ${bg}`}>
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-4xl font-bold">
          Case <span className="text-orange-600">Studies</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div>
            <Link
              href="/case-studies/chef-havn"
              className="no-underline"
            >
              <div
                className="relative p-6 rounded-xl shadow-md flex justify-between items-center bg-gradient-to-r from-[#E8E8FF] to-[#FFFFFF] min-h-[300px]"
              >
                <div>
                  <h4 className="mb-3 text-xl font-semibold">
                    Chef Havn: Transforming the Food Delivery Experience with a Scalable Mobile App Solution
                  </h4>
                  <div className="flex mb-3">
                    <span
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
                    >
                      Online Food Ordering
                    </span>
                  </div>
                </div>
                <img
                  src={"/images/case-study/Chef-Havn.webp"}
                  alt="Case Study 1"
                  className="max-w-[45%] rounded-lg"
                  loading="lazy"
                />
              </div>
            </Link>
          </div>

          {/* Case Study 2 */}
          <div>
            <Link
              href="/case-studies/good-sleep-bedding"
              className="no-underline"
            >
              <div
                className="relative p-6 rounded-xl shadow-md flex justify-between items-center bg-gradient-to-r from-[#E8FFFF] to-[#FFFFFF] min-h-[300px]"
              >
                <div>
                  <h4 className="mb-3 text-xl font-semibold">
                    Good Sleep Bedding: Elevating E-Commerce with a Seamless Shopify Web Development Solution
                  </h4>
                  <div className="flex mb-3">
                    <span
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
                    >
                      E-Commerce
                    </span>
                  </div>
                </div>
                <img
                  src={"/images/case-study/GSB.webp"}
                  alt="Case Study 2"
                  className="max-w-[45%] rounded-lg"
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPage;

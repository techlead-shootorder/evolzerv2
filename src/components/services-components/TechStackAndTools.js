"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import "react-tabs/style/react-tabs.css"; // Optional: retain react-tabs default styling

const TechStackAndTools = ({
  stacks,
  tools,
  framework,
  database,
  platform,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto py-10 px-4">
        <div className="w-full mb-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Tech Stacks and Tools We Use
          </h2>
        </div>

        <div className="mt-6 pt-6">
          <Tabs
            selectedIndex={activeIndex}
            onSelect={(index) => setActiveIndex(index)}
            className="transition duration-300"
          >
            <TabList className="flex flex-wrap justify-center space-x-4 border-b border-gray-300 ">
              {["Stacks", "Frameworks", "Tools", "Database", "Platform"].map(
                (label, index) => (
                  <Tab
                    key={index}
                    className={`!cursor-pointer !text-lg !font-bold !px-4 !py-2 transition-colors !duration-300 ${
                      activeIndex === index
                        ? "!bg-[#f15a29] !text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {label}
                  </Tab>
                )
              )}
            </TabList>

            {/* Stacks Tab */}
            <TabPanel>
              <div className="flex flex-wrap justify-center py-6 transition-opacity duration-300 ease-in-out opacity-100">
                {stacks &&
                  stacks.map((stack) => (
                    <div
                      key={stack.name}
                      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-col items-center mb-8"
                    >
                      <div className="techstack-item">
                        <Link href={stack.navigate}>
                          <Image src={stack.imageUrl} width={100} height={100} />
                        </Link>
                      </div>
                      <div className="text-gray-800 text-center mt-2">
                        {stack.name}
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>

            {/* Frameworks Tab */}
            <TabPanel>
              <div className="flex flex-wrap justify-center py-6 transition-opacity duration-300 ease-in-out opacity-100">
                {framework &&
                  framework.map((service) => (
                    <div
                      key={service.name}
                      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-col items-center mb-8"
                    >
                      <div className="techstack-item">
                        <Link href={service.navigate}>
                          <Image src={service.imageUrl} width={100} height={100} />
                        </Link>
                      </div>
                      <div className="text-gray-800 text-center mt-2">
                        {service.name}
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>

            {/* Tools Tab */}
            <TabPanel>
              <div className="flex flex-wrap justify-center py-6 transition-opacity duration-300 ease-in-out opacity-100">
                {tools &&
                  tools.map((service) => (
                    <div
                      key={service.name}
                      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-col items-center mb-8"
                    >
                      <div className="techstack-item">
                        <Link href={service.navigate}>
                          <Image src={service.imageUrl} width={100} height={100} />
                        </Link>
                      </div>
                      <div className="text-gray-800 text-center mt-2">
                        {service.name}
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>

            {/* Database Tab */}
            <TabPanel>
              <div className="flex flex-wrap justify-center py-6 transition-opacity duration-300 ease-in-out opacity-100">
                {database &&
                  database.map((db) => (
                    <div
                      key={db.name}
                      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-col items-center mb-8"
                    >
                      <div className="techstack-item">
                        <Link href={db.navigate}>
                          <Image src={db.imageUrl} width={100} height={100} />
                        </Link>
                      </div>
                      <div className="text-gray-800 text-center mt-2">
                        {db.name}
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>

            {/* Platform Tab */}
            <TabPanel>
              <div className="flex flex-wrap justify-center py-6 transition-opacity duration-300 ease-in-out opacity-100">
                {platform &&
                  platform.map((p) => (
                    <div
                      key={p.name}
                      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-col items-center mb-8"
                    >
                      <div className="techstack-item">
                        <Link href={p.navigate}>
                          <Image src={p.imageUrl} width={100} height={100} />
                        </Link>
                      </div>
                      <div className="text-gray-800 text-center mt-2">
                        {p.name}
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TechStackAndTools;

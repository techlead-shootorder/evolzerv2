"use client";
import { Disclosure } from "@headlessui/react";
import { MdExpandMore, MdExpandLess } from "react-icons/md"; // Import the icons from React Icons

const Faqs = ({ faq }) => (
  <div className="bg-gray-100 py-10">
    <div className="max-w-4xl mx-auto">
      <h3 className="text-center text-2xl font-bold mb-6">Frequently Asked Questions</h3>
      {faq.map((item) => (
        <Disclosure key={item.id} as="div" className="mb-4  rounded shadow">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center w-full px-6 py-3 text-left font-medium text-gray-900 bg-white hover:bg-opacity-80 transition-colors rounded">
                <span className="normal-case font-[600]">{item.question}</span>
                {open ? (
                  <MdExpandLess className="w-5 h-5 text-black" />
                ) : (
                  <MdExpandMore className="w-5 h-5 text-black" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-4 text-gray-700">
                {item.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
);

export default Faqs;

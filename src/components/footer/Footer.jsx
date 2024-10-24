"use client"; // Use client-side rendering
import React from "react";
import Link from "next/link"; // Use Next.js Link component
import * as Icon from "react-icons/fa"; // Import necessary React Icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-white text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/4 p-4">
            <div className="single-footer-widget text-left">
              <div className="logo mb-4">
                <img src={"/images/logos/logob-new.webp"} alt="logo" className="logo-item" loading="lazy" />
              </div>
              <p>
                Evolzer modernizes IT, optimizes data, and ensures cloud security. Trusted by leading firms, we help businesses excel in the digital age. Contact us to learn more.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 p-4">
            <div className="single-footer-widget">
              <h3 className="text-lg text-black font-bold mb-3">Company</h3>
              <ul className="list">
                <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                <li><Link href="/mobile-application" className="hover:underline">Mobile Application</Link></li>
                <li><Link href="/web-development" className="hover:underline">Web Development</Link></li>
                <li><Link href="/software-development" className="hover:underline">Software Development</Link></li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/4 p-4">
            <div className="single-footer-widget">
              <h3 className="text-lg font-bold text-black mb-3">Support</h3>
              <ul className="list">
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/term-condition" className="hover:underline">Terms & Condition</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/4 p-4">
            <div className="single-footer-widget">
              <h3 className="text-lg font-bold text-black mb-3">Address</h3>
              <ul className="footer-contact-info">
                <li>
                  <Icon.FaMapMarkerAlt className="inline-block mr-2" />
                  1st Floor, SY, Sattiah Residency,
                  <br /> Krishe Sapphire MSR Block,
                  <br /> Hitech City Rd, Madhapur,
                  <br /> Hyderabad, Telangana 500081
                </li>
                <li>
                  <Icon.FaEnvelope className="inline-block mr-2" />
                  Email: <a href="mailto:info@evolzer.com" className="hover:underline">info@evolzer.com</a>
                </li>
                <li>
                  <Icon.FaPhone className="inline-block mr-2 transform rotate-90" /> {/* Rotated the phone icon */}
                  Phone: <a href="tel:+91-630-392-1512" className="hover:underline">+91-630-392-1512</a>
                </li>
              </ul>

              <ul className="social-links flex space-x-4 mt-3">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-white bg-blue-600 p-2 rounded !hover:bg-[#4267b2]">
                    <Icon.FaFacebook className="text-white hover:bg-[#4267b2]"/>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white bg-blue-400 p-2 rounded !hover:bg-[#38a1f3]">
                    <Icon.FaTwitter className="text-white hover:bg-[#38a1f3]"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/evolzertechnology" target="_blank" rel="noreferrer" className="text-white bg-pink-500 p-2 rounded !hover:bg-[#0e314c]">
                    <Icon.FaInstagram className="text-white hover:bg-[#0e314c]"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white bg-blue-700 p-2 rounded !hover:bg-[#0077b5]">
                    <Icon.FaLinkedin className="text-white hover:bg-[#0077b5]"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm">
              Copyright &copy; {currentYear} Evolzer. All rights reserved by{" "}
              <a href="https://shootorder.com" target="_blank" rel="noreferrer" className="text-black hover:underline">
                Shootorder
              </a>
            </p>
          </div>
        </div>
      </div>
      <img src={"/images/map.png"} className="map mt-6" alt="map" loading="lazy" />
    </footer>
  );
};

export default Footer;

"use client";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image"; // Import Image component

const Banner = ({ pageTitle, banner, pagesubtitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isAboutUsPage, setIsAboutUsPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setIsAboutUsPage(path === "/about-us");
    }
  }, []);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.companyName) newErrors.companyName = "Company Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    const urlPath = window.location.pathname;

    try {
      const response = await fetch("/api/items/contacts/?access_token=0wZWayS435edEnwJ_uTf5yJrZkk0t3fI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          others: formData.companyName,
          service: urlPath,
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      toast.success("Form submitted successfully!");
      if (data.data && data.data.id) {
        document.cookie = `leadId=${data.data.id}; path=/; max-age=3600`;
        window.location.href = "/thankyou";
      }
    } catch (error) {
      toast.error("There was a problem with the form submission.");
      console.error("Fetch operation error:", error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="page-title-area relative "> {/* Set height as needed */}
        <Image
          src={banner} // Use the banner prop as the source
          alt="Banner background"
          layout="fill" // Make the image fill the parent div
          objectFit="cover" // Ensure the image covers the entire area
          priority // Optional: Load this image with priority
        />
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center"> {/* Centering content */}
          <div className="grid grid-cols-12 items-center justify-between md:gap-24">
            {/* Text Section */}
            <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
              <h1 className="text-white text-[44px]">
                {pageTitle}
              </h1>
              {pagesubtitle ? (
                <p className="text-white max-w-lg">{pagesubtitle}</p>
              ) : (
                <p className="text-white max-w-96">
                  Driving digital transformation with cutting-edge technology solutions in application development, data analytics and engineering, software development, DevOps services, UI/UX design, AI and Machine learning.
                </p>
              )}
            </div>

            {/* Form Section */}
            {!isAboutUsPage && (
              <div className="col-span-12 lg:col-span-5 mt-10 lg:mt-0 form-margin flex justify-end">
                <div className="bg-white p-6 rounded w-full max-w-sm mx-auto lg:mx-0">
                  <h3 className="text-center text-dark text-[28px] mb-4">Get A Quote</h3>
                  <form onSubmit={handleSubmit}>
                    {/* Floating Label Input for Name */}
                    <div className="relative mb-2">
                      <input
                        type="text"
                        id="name"
                        className={`peer form-control border-2 border-orange-500 rounded p-2 w-full text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 ${errors.name ? "border-red-500" : ""}`}
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-2 top-[-12px] bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[8px] peer-focus:left-1 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[15px] peer-focus:text-[#f15a29]"
                      >
                        Name
                      </label>
                      {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                    </div>

                    {/* Floating Label Input for Company Name */}
                    <div className="relative mb-2">
                      <input
                        type="text"
                        id="companyName"
                        className={`peer form-control border-2 border-orange-500 rounded p-2 w-full text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 ${errors.companyName ? "border-red-500" : ""}`}
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="companyName"
                        className="absolute left-1 top-[-12px] bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[8px] peer-focus:left-[-4px] peer-focus:bg-white peer-focus:px-1 peer-focus:text-[15px] peer-focus:text-[#f15a29]"
                      >
                        Company Name
                      </label>
                      {errors.companyName && <div className="text-red-500 text-sm">{errors.companyName}</div>}
                    </div>

                    {/* Floating Label Input for Email */}
                    <div className="relative mb-2">
                      <input
                        type="email"
                        id="email"
                        className={`peer form-control border-2 border-orange-500 rounded p-2 w-full text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 ${errors.email ? "border-red-500" : ""}`}
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-2 top-[-12px] bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[8px] peer-focus:left-1 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[15px] peer-focus:text-[#f15a29]"
                      >
                        Email
                      </label>
                      {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                    </div>

                    {/* Floating Label Input for Phone */}
                    <div className="relative mb-2">
                      <input
                        type="tel"
                        id="phone"
                        className={`peer form-control border-2 border-orange-500 rounded p-2 w-full text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 ${errors.phone ? "border-red-500" : ""}`}
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-2 top-[-12px] bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[8px] peer-focus:left-1 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[15px] peer-focus:text-[#f15a29]"
                      >
                        Phone
                      </label>
                      {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
                    </div>

                    {/* Floating Label Textarea for Message */}
                    <div className="relative mb-2">
                      <textarea
                        id="message"
                        className={`peer form-control border-2 border-orange-500 rounded p-2 w-full text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 ${errors.message ? "border-red-500" : ""}`}
                        placeholder="Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-2 top-[-12px] bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[8px] peer-focus:left-1 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[15px] peer-focus:text-[#f15a29]"
                      >
                        Message
                      </label>
                      {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
                    </div>

                    <button type="submit" className="bg-black text-white p-2 rounded w-full">
                      Schedule A Call
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

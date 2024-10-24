"use client"
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

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
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Simple international phone number validation
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.companyName) {
      newErrors.companyName = "Company Name is required";
    }
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
    if (!formData.message) {
      newErrors.message = "Message is required";
    }

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
      const response = await fetch(
        "/api/items/contacts/?access_token=0wZWayS435edEnwJ_uTf5yJrZkk0t3fI",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            others: formData.companyName, // Store Company Name in the "others" field
            service: urlPath, // Include the path in the request body
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      toast.success("Form submitted successfully!");
      console.log("Submitted Data:", formData); // Log the submitted data

      if (data.data && data.data.id) {
        document.cookie = `leadId=${data.data.id}; path=/; max-age=3600`;
        window.location.href = "/thankyou";
      }
    } catch (error) {
      toast.error("There was a problem with the form submission.");
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <>
      <Toaster />
      <div
        className="page-title-area relative"
        style={{ background: `transparent url(${banner}) center no-repeat` }}
      >
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-12 items-center justify-center gap-20">
            <div className="text-left z-10 col-span-5">
              <h1 className="text-white text-4xl" data-aos-delay="100" data-aos-duration="1200">
                {pageTitle}
              </h1>
              {pagesubtitle ? (
                <p className="text-white">{pagesubtitle}</p>
              ) : (
                <p className="text-white">
                  Driving digital transformation with cutting-edge technology
                  solutions in application development, data analytics and
                  engineering, software development, DevOps services, UI/UX
                  design, AI and Machine learning.
                </p>
              )}
            </div>
            {!isAboutUsPage && (
              <div className="bg-white p-4 rounded mt-6 w-full col-span-7 max-w-md z-10">
                <h3 className="text-center text-dark text-lg">Get A Quote</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <input
                      type="text"
                      className={`form-control border rounded p-2 w-full ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      id="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="text-red-500 text-sm">{errors.name}</div>
                    )}
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className={`form-control border rounded p-2 w-full ${
                        errors.companyName ? "border-red-500" : ""
                      }`}
                      id="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                    {errors.companyName && (
                      <div className="text-red-500 text-sm">
                        {errors.companyName}
                      </div>
                    )}
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      className={`form-control border rounded p-2 w-full ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      id="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="text-red-500 text-sm">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-2">
                    <input
                      type="tel"
                      className={`form-control border rounded p-2 w-full ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      id="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className="text-red-500 text-sm">{errors.phone}</div>
                    )}
                  </div>
                  <div className="mb-2">
                    <textarea
                      className={`form-control border rounded p-2 w-full ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      id="message"
                      placeholder="Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <div className="text-red-500 text-sm">{errors.message}</div>
                    )}
                  </div>
                  <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                    Schedule A Call
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

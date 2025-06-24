import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    zipCode: "",
    phone: "",
  });

  const countries = [
    "Select Country",
    "Thailand",
    "USA",
    "UAE",
    "China",
    "Myanmar",
    "India",
    "Others"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="bg-gray-100">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16" style={{ marginTop: "100px" }}>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h1>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl mx-auto">
          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700 w-20 flex-shrink-0">
                  Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 bg-#f2f2f2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  style={{ backgroundColor: "#f2f2f2" }}
                />
              </div>
              <div className="flex items-center space-x-4 " style={{ marginLeft: "20px" }}>
                {/* <label className="text-sm font-medium text-gray-700 w-20 flex-shrink-0 opacity-0">
                  Name
                </label> */}
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  style={{ backgroundColor: "#f2f2f2" }}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700 w-20 flex-shrink-0">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                style={{ backgroundColor: "#f2f2f2" }}
              />
            </div>

            {/* Company */}
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700 w-20 flex-shrink-0">
                Company
              </label>
              <input
                type="text"
                name="company"
                placeholder="Enter Company"
                value={formData.company}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                style={{ backgroundColor: "#f2f2f2" }}
              />
            </div>

            {/* Country and Zip Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700 w-20 flex-shrink-0">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                  style={{ backgroundColor: "#f2f2f2" }}
                >
                  {countries.map((country, index) => (
                    <option key={index} value={index === 0 ? "" : country} disabled={index === 0}>
                      {country}
                    </option>
                  ))}
                </select>

              </div>
              <div className="flex items-center ">
                <label className="text-sm font-medium text-gray-700 w-20 flex-shrink-0">
                  Zip code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Enter Zip code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"

                  style={{ backgroundColor: "#f2f2f2" }} />
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700 w-20 flex-shrink-0">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"

                style={{ backgroundColor: "#f2f2f2" }} />
            </div>

            {/* Submit Button */}
            <div className="pt-3 flex justify-center">
              <button type="submit"
                className="inline-flex items-center px-6 py-3 font-medium rounded-[16px] justify-center relative overflow-hidden
        bg-[#A8CF45] text-[#3D3E96] transition-all duration-500
        before:content-[''] before:absolute before:inset-0 before:bg-[#3D3E96] before:-translate-y-full 
        before:transition-transform before:duration-500 hover:before:translate-y-0 hover:text-[#A8CF45]"
              >
                <span className="relative z-10">Get Quote Now</span>
              </button>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-3 text-center">
          <p className="text-sm text-gray-600">
            Copyright © 2025 HI-TECH MEMBRANES, INC.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
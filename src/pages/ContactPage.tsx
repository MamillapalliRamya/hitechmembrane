import React, { useState } from "react";
import { Upload } from "lucide-react";
import image1 from '../assets/images/wetransfer_hitech/contactus_worldmap.png';
import image2 from '../assets/images/wetransfer_hitech/wtsapp_QR.png';
import image3 from '../assets/images/wetransfer_hitech/message_QR.png';
import image4 from '../assets/images/wetransfer_hitech/Line_QR.png';
import image5 from '../assets/images/wetransfer_hitech/location.png';

interface ContactFormData {
  firstName: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  country: string;
  subject: string;
  productType: string;
  message: string;
  file: File | null;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    country: "",
    subject: "",
    productType: "",
    message: "",
    file: null
  });

  const countries = [
    "Select Country",
    "Thailand",
    "USA",
    "UAE",
    "China",
    "Myanmar",
    "India",
    "Germany",
    "Brazil",
    "Canada",
    "Others"
  ];

  const categories = [
    "Select Category",
    "General Inquiry",
    "Technical Support",
    "Sales",
    "Partnership",
    "Others"
  ];

  const productTypes = [
    "Select Type",
    "RO Membranes",
    "UF Membranes",
    "NF Membranes",
    "MBR Systems",
    "Custom Solutions"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
    setFormData(prev => ({
      ...prev,
      file: file
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const downloadQRImage = (imageUrl: string, filename: string): void => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddressClick = () => {
    const address = "Hi-Tech Membranes Co., Ltd. 700/273 Amata City Chonburi Industrial Estate Moo 1, Tambon Ban Kao, Amphur Phan Thong, Chonburi 20160 (THAILAND)";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Container with Responsive Padding */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-12 py-8 sm:py-16 lg:py-24">
        
        {/* Page Title */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900">Contact Us</h1>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Column - Contact Form */}
          <div className="space-y-4">
            
            {/* Main Contact Form */}
            <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  
                  {/* Name and Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Name*</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Enter Company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Email and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Email*</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Category and Country Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                      >
                        {categories.map((category, index) => (
                          <option key={index} value={index === 0 ? "" : category} disabled={index === 0}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Country*</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                        required
                      >
                        {countries.map((country, index) => (
                          <option key={index} value={index === 0 ? "" : country} disabled={index === 0}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject and Product Type Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Enter Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Product Type*</label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                        required
                      >
                        {productTypes.map((type, index) => (
                          <option key={index} value={index === 0 ? "" : type} disabled={index === 0}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message and File Upload Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Message*</label>
                      <textarea
                        name="message"
                        placeholder="Enter Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">File Upload</label>
                      <div className="border-2 border-dashed border-gray-300 rounded p-3 text-center bg-gray-50 h-full min-h-[120px] flex flex-col justify-center" style={{ height: "82%" }}>
                        <Upload className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-600 mb-1">Choose a file or drag & drop it here</p>
                        <p className="text-xs text-gray-400 mb-2">JPEG, PNG & PDF files up to 10MB</p>
                        <input
                          type="file"
                          accept=".jpeg,.jpg,.png,.pdf"
                          className="hidden"
                          id="fileUpload"
                          onChange={handleFileChange}
                        />
                        <label
                          htmlFor="fileUpload"
                          className="inline-block px-3 py-1 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50 cursor-pointer text-xs"
                        >
                          Browse File
                        </label>
                        {formData.file && (
                          <p className="mt-2 text-xs text-green-600">{formData.file.name}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex justify-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-blue-900 font-medium py-3 px-8 rounded transition-colors"
                      style={{ backgroundColor: '#A8CF45' }}
                    >
                      Get Quote Now
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Support Section */}
            <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-5">
              <h3 className="text-center text-blue-700 font-medium mb-6 text-sm sm:text-base">
                FOR IMMEDIATE SUPPORT
              </h3>
              <div className="grid grid-cols-3 gap-4">
                
                {/* WhatsApp QR */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div className="w-20 h-20 bg-gray-100 border-2 border-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <img
                      src={image2}
                      alt="WhatsApp QR Code"
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <button 
                    onClick={() => downloadQRImage(image2, 'whatsapp-qr-code.png')}
                    className="bg-blue-500 text-white text-xs px-3 py-1 rounded flex items-center gap-1 mt-2 hover:bg-blue-600 transition-colors"
                  >
                    Save
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 16l-6-6h4V4h4v6h4l-6 6zM4 20v-2h16v2H4z" />
                    </svg>
                  </button>
                </div>

                {/* WeChat QR */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 bg-green-400 hover:bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.099 4.203 2.895 5.394L2.187 17.5l2.831-1.436c.747.131 1.543.198 2.372.198.248 0 .495-.013.742-.038-.158-.55-.237-1.122-.237-1.711 0-3.85 3.479-6.972 7.784-6.972.42 0 .832.032 1.23.092-.365-2.07-2.608-3.445-6.218-3.445zm-2.46 2.716c.5 0 .909.41.909.909s-.41.909-.909.909-.909-.41-.909-.909.41-.909.909-.909zm4.919 0c.5 0 .909.41.909.909s-.41.909-.909.909-.909-.41-.909-.909.41-.909.909-.909z" />
                      <path d="M15.785 8.963c-3.623 0-6.564 2.556-6.564 5.704 0 1.815.939 3.448 2.422 4.424l-.613 1.842 2.134-1.071c.613.122 1.25.184 1.907.184 3.623 0 6.564-2.556 6.564-5.704s-2.94-5.379-6.85-5.379zm-2.165 2.867c.397 0 .719.322.719.719s-.322.719-.719.719-.719-.322-.719-.719.322-.719.719-.719zm4.33 0c.397 0 .719.322.719.719s-.322.719-.719.719-.719-.322-.719-.719.322-.719.719-.719z" />
                    </svg>
                  </div>
                  <div className="w-20 h-20 bg-gray-100 border-2 border-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <img
                      src={image3}
                      alt="WeChat QR Code"
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <button 
                    onClick={() => downloadQRImage(image3, 'wechat-qr-code.png')}
                    className="bg-blue-500 text-white text-xs px-3 py-1 rounded flex items-center gap-1 mt-2 hover:bg-blue-600 transition-colors"
                  >
                    Save
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 16l-6-6h4V4h4v6h4l-6 6zM4 20v-2h16v2H4z" />
                    </svg>
                  </button>
                </div>

                {/* LINE QR */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-xs">L</span>
                    </div>
                  </div>
                  <div className="w-20 h-20 bg-gray-100 border-2 border-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <img
                      src={image4}
                      alt="LINE QR Code"
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <button 
                    onClick={() => downloadQRImage(image4, 'line-qr-code.png')}
                    className="bg-blue-500 text-white text-xs px-3 py-1 rounded flex items-center gap-1 mt-2 hover:bg-blue-600 transition-colors"
                  >
                    Save
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 16l-6-6h4V4h4v6h4l-6 6zM4 20v-2h16v2H4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            
            {/* Company Header with World Map */}
            <div className=" p-4 sm:p-6 xl:flex-grow">
              {/* Company Info */}
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 mb-3">Hi-Tech Membranes</h2>
                <div className="space-y-2">
                  <a href="mailto:sales@hitechmembranes.com" className="block text-blue-900 hover:underline text-sm sm:text-base">
                    sales@hitechmembranes.com
                  </a>
                  <a href="tel:+91-80-12345678" className="block text-blue-900 hover:underline font-medium text-sm sm:text-base">
                    +91-80-12345678
                  </a>
                </div>
              </div>

              {/* World Map Section */}
              <div className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 flex items-center justify-center relative overflow-hidden">
                <img
                  src={image1}
                  alt="Global Presence Map"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Links Section */}
            <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6" style={{ marginTop: '0px' }}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Links</h3>
              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                <a href="#" className="block text-blue-900 hover:underline text-sm sm:text-base">
                  FAQs
                </a>
                <a href="#" className="block text-blue-900 hover:underline text-sm sm:text-base">
                  Product Brochures
                </a>
                <a href="#" className="block text-blue-900 hover:underline text-sm sm:text-base">
                  Our Catalogue
                </a>
              </div>
            </div>

            {/* Office Address Section */}
            <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Office Address</h3>
              <div className="cursor-pointer rounded transition-colors">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="w-full sm:w-1/2 h-16 sm:h-20">
                    <img
                      src={image5}
                      alt="Address Location"
                      className="w-full h-full object-contain rounded cursor-pointer"
                      onClick={handleAddressClick}
                    />
                  </div>
                  <p 
                    className="text-xs sm:text-sm text-gray-600 leading-relaxed underline hover:text-blue-900 cursor-pointer w-full sm:w-1/2" 
                    onClick={handleAddressClick}
                  >
                    Hi-Tech Membranes Co., Ltd. 700/273 Amata City Chonburi Industrial Estate Moo 1,
                    Tambon Ban Kao, Amphur Phan Thong, Chonburi 20160 (THAILAND)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            All Rights Reserved. Copyright ©2022 HiTechMembrane Co.Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
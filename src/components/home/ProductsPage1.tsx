import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Building, Factory, ArrowRight } from 'lucide-react';
import image1 from "../../../src/assets/images/wetransfer_hitech/Residential_RO_image.png"
import image2 from "../../../src/assets/images/wetransfer_hitech/commercialRO_image.png"
import image3 from "../../../src/assets/images/wetransfer_hitech/IndustrialRO_image.png"



const OurProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Residential RO Membranes",
      description: "An efficient RO Water Filter system needs an accurate membrane to eliminate salts and impurities from our drinking water. Hi-Tech manufactures RO membranes that remove over 95% of dissolved chemicals and contaminants. The spiral membranes consist of TFC envelopes around a central tube.",
      image: image1,
      buttonText: "Get Quote Now"
    },
    {
      id: 2,
      title: "Commercial RO Membranes",
      description: "Water is essential for human life, especially in schools and colleges. Hi-Tech's RW range water purifier rejects 95% of dissolved salts, ensuring safe drinking water for offices, industries, hospitals, and hotels.",
      image: image2,
      buttonText: "Get Quote Now"
    },
    {
      id: 3,
      title: "Industrial RO Membranes",
      description: "Pharmaceuticals, laboratories, and industries need pure water for daily operations. The cost of clean water is rising, while pollution is increasing. Hi-Tech offers high-quality industrial RO membranes that effectively reject chemicals. Our BW brackish water membranes provide over 98-99% rejection, ensuring higher recovery and lower energy use.",
      image: image3,
      buttonText: "Get Quote Now"
    }
  ];

  return (
    <div className=" py-16">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8" style={{maxWidth:"95rem"}}>
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-[#3E4095] mb-4">Our Products</h2>
        </div>

        {/* Products Grid */}
        <div className="space-y-20">
          {products.map((product, index) => (
            <div key={product.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} style={{gap:"12rem"}}>
              {/* Image Section */}
              <div className="flex-1 lg:max-w-md">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className=" space-y-6" style={{width:"45%"}}>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#000000]" style={{opacity:"0.7"}}>
                  {product.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {product.description}
                </p>

                <button className="inline-flex items-center px-6 py-3 bg-[#A8CF45] hover:bg-[#A8CF45] text-[#3d3e96] font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  {product.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default OurProductsSection;

import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../../src/assets/images/wetransfer_hitech/Residential_RO_image.png";
import image2 from "../../../src/assets/images/wetransfer_hitech/commercialRO_image.png";
import image3 from "../../../src/assets/images/wetransfer_hitech/IndustrialRO_image.png";
import image4 from "../../../src/assets/images/wetransfer_hitech/products_side_image.png";

const OurProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Residential RO Membranes",
      description:
        "An efficient RO Water Filter system needs an accurate membrane to eliminate salts and impurities from our drinking water. Hi-Tech manufactures RO membranes that remove over 95% of dissolved chemicals and contaminants. The spiral membranes consist of TFC envelopes around a central tube.",
      image: image1,
      buttonText: "Get Quote Now",
    },
    {
      id: 2,
      title: "Commercial RO Membranes",
      description:
        "Water is essential for human life, especially in schools and colleges. Hi-Tech's RW range water purifier rejects 95% of dissolved salts, ensuring safe drinking water for offices, industries, hospitals, and hotels.",
      image: image2,
      buttonText: "Get Quote Now",
    },
    {
      id: 3,
      title: "Industrial RO Membranes",
      description:
        "Pharmaceuticals, laboratories, and industries need pure water for daily operations. The cost of clean water is rising, while pollution is increasing. Hi-Tech offers high-quality industrial RO membranes that effectively reject chemicals. Our BW brackish water membranes provide over 98-99% rejection, ensuring higher recovery and lower energy use.",
      image: image3,
      buttonText: "Get Quote Now",
    },
  ];

  return (
    <div className="py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "95rem" }}>

        {/* Heading Animation - slide from top */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl font-bold text-[#3E4095] mb-4">Our Products</h2>
        </motion.div>

        {/* Products Loop */}
        <div className="space-y-20">
          {products.map((product, index) => {
            const isReversed = index % 2 === 1;
            const delay = index * 0.3;

            return (
              <div
                key={product.id}
                className={`relative flex flex-col lg:flex-row items-center gap-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                style={{ gap: "12rem" }}
              >
                {/* Only for second product: Animated image absolutely at left */}
                {index === 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute left-0  tranform transform -translate-y-1/2 origin-left z-20"
                    style={{
                      width: "200px", // Or the image width
                      height: "auto"
                    }}
                  >
                    <img
                      src={image4} // Correct path
                      alt="Pipe Reveal"
                      className="w-full h-auto object-contain"
                      style={{ marginLeft: "-200px" }} />
                  </motion.div>
                )}


                {/* Image Animation */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay }}
                  viewport={{ once: true }}
                  className="flex-1 lg:max-w-md"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                </motion.div>

                {/* Text Animation */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay }}
                  viewport={{ once: true }}
                  className="space-y-6"
                  style={{ width: "45%" }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#000000]" style={{ opacity: "0.7" }}>
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {product.description}
                  </p>
                  <button
                    className="inline-flex items-center px-6 py-3 font-medium rounded-[16px] justify-center relative overflow-hidden
        bg-[#A8CF45] text-[#3D3E96] transition-all duration-500
        before:content-[''] before:absolute before:inset-0 before:bg-[#3D3E96] before:-translate-y-full 
        before:transition-transform before:duration-500 hover:before:translate-y-0 hover:text-[#A8CF45]"
                  >
                    <span className="relative z-10">{product.buttonText}</span>
                  </button>
                </motion.div>
              </div>


            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProductsSection;

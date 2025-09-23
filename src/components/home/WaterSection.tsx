import React, { useState } from "react";
import { motion } from "framer-motion";

const WaterSolutionsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: "ES-1812-75 RO Membrane",
      image: "/assets/images/MembraneTube3.png",
    },
    {
      id: 2,
      name: "ES-1812-75 RO Membrane",
      image: "/assets/images/MembraneTube2.png",
    },
    {
      id: 3,
      name: "ES-1812-75 RO Membrane",
      image: "/assets/images/MembraneTube1.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-4 bg-white relative overflow-hidden">
      {/* Section Title */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }} // Faster
        viewport={{ once: true, amount: 0.5 }}
        className="text-3xl sm:text-4xl lg:text-[48px] text-[#3E4095] text-center"
        style={{
          fontFamily: "Diodrum Cyrillic, sans-serif",
          fontWeight: "500",
        }}
      >
        Our Water Solutions
      </motion.h2>

      {/* Product Carousel */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }} // Faster
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 mt-12"
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20"
        >
          <img
            src="/assets/images/arrowLeft.png"
            alt="Previous"
            className="h-[40px] sm:h-[54px] w-auto"
          />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20"
        >
          <img
            src="/assets/images/arrowRight.png"
            alt="Next"
            className="h-[40px] sm:h-[54px] w-auto"
          />
        </button>

        {/* Products Container */}
        <div className="flex justify-center items-center flex-wrap sm:flex-nowrap gap-8 sm:gap-12 lg:gap-[173px] py-8">
          {products.map((product, index) => {
            let scale = "";
            let opacity = "";

            if (index === currentSlide) {
              scale = "scale-110";
              opacity = "opacity-100";
            } else if (
              index === (currentSlide - 1 + products.length) % products.length ||
              index === (currentSlide + 1) % products.length
            ) {
              scale = "scale-100";
              opacity = "opacity-80";
            } else {
              scale = "scale-90";
              opacity = "opacity-40";
            }

            return (
              <div
                key={product.id}
                className={`transition-all duration-300 transform ${scale} ${opacity} flex flex-col items-center gap-6 sm:gap-[45px]`} // Faster transitions
              >
                {/* Product Image Container */}
                <div className="relative mb-6 flex items-center justify-center">
                  <div
                    className="bg-[#A8CF45]"
                    style={{
                      width: "160px",
                      height: "140px",
                      transform: "rotate(0deg)",
                      borderBottomLeftRadius: "25%",
                      borderBottomRightRadius: "121%",
                      borderTopLeftRadius: "121%",
                      borderTopRightRadius: "25%",
                      opacity: "0.2",
                    }}
                  ></div>

                  {/* Product Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-[120px] sm:w-[160px] lg:w-[195px]"
                    />
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-base sm:text-lg lg:text-[20px] font-medium text-[#323232] text-center whitespace-nowrap">
                  {product.name}
                </h3>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* View All Products Button */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }} // Faster
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mt-8 sm:mt-[50px]"
      >
        <button className="w-[220px] sm:w-[260px] lg:w-[307px] h-[55px] sm:h-[60px] lg:h-[69px] bg-[#A8CF45] text-[#3E4095] px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-lg hover:bg-[#98C135] transition-colors duration-200"> {/* Faster hover */}
          View All Products
        </button>
      </motion.div>
    </section>
  );
};

export default WaterSolutionsSection;
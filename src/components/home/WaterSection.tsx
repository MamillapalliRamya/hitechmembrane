import { useState } from "react";
import { motion } from "framer-motion";

const WaterSolutionsSection = () => {
  const [slideIndexes, setSlideIndexes] = useState([0, 0, 0]);

  const productCategories = [
    {
      categoryName: "Residential Membranes",
      features: [
        "Stable rejection performance",
        "Long membrane life",
        "Compatible with standard RO systems",
      ],
      products: [
        { id: 1, name: "ES-1812-75 RO Membrane", image: "/assets/images/MembraneTube3.png" },
        { id: 2, name: "ES-1812-100 RO Membrane", image: "/assets/images/MembraneTube2.png" },
        { id: 3, name: "ES-1812-125 RO Membrane", image: "/assets/images/MembraneTube1.png" },
      ],
    },
    {
      categoryName: "Industrial Membranes",
      features: [
        "High salt rejection",
        "Consistent flux under variable conditions",
        "Optimized for continuous operation",
      ],
      products: [
        { id: 4, name: "ES-2012-100 RO Membrane", image: "/assets/images/MembraneTube2.png" },
        { id: 5, name: "ES-2012-150 RO Membrane", image: "/assets/images/MembraneTube1.png" },
        { id: 6, name: "ES-2012-200 RO Membrane", image: "/assets/images/MembraneTube3.png" },
      ],
    },
    {
      categoryName: "Sea Water Membranes",
      features: [
        "Excellent salt rejection",
        "Energy-efficient performance",
        "Suitable for large-scale desalination plants",
      ],
      products: [
        { id: 7, name: "ES-3012-150 RO Membrane", image: "/assets/images/MembraneTube1.png" },
        { id: 8, name: "ES-3012-200 RO Membrane", image: "/assets/images/MembraneTube3.png" },
        { id: 9, name: "ES-3012-250 RO Membrane", image: "/assets/images/MembraneTube2.png" },
      ],
    },
  ];

  const nextSlide = (categoryIndex: number) => {
    setSlideIndexes(prev => {
      const updated = [...prev];
      updated[categoryIndex] =
        (updated[categoryIndex] + 1) %
        productCategories[categoryIndex].products.length;
      return updated;
    });
  };

  const prevSlide = (categoryIndex: number) => {
    setSlideIndexes(prev => {
      const updated = [...prev];
      updated[categoryIndex] =
        (updated[categoryIndex] - 1 +
          productCategories[categoryIndex].products.length) %
        productCategories[categoryIndex].products.length;
      return updated;
    });
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white">
      {/* Section Title */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] text-[#3E4095] mb-4 font-medium">
          Our Water Solutions
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Advanced RO membrane solutions engineered for diverse water treatment applications.
        </p>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {productCategories.map((category, categoryIndex) => {
            const currentProduct =
              category.products[slideIndexes[categoryIndex]];

            return (
              <div key={categoryIndex} className="flex flex-col items-center">
                
                {/* IMAGE + ARROWS */}
                <div className="relative w-full min-h-[300px] mb-6">

                  {/* Arrows overlay */}
                  {category.products.length > 1 && (
                    <div className="absolute inset-0 z-[200] flex items-center justify-between px-4 pointer-events-none">
                      
                      <button
                        onClick={() => prevSlide(categoryIndex)}
                        className="pointer-events-auto hover:scale-110 transition-transform"
                      >
                        <div className="w-12 h-12 bg-[#5A5C9D] rounded-full flex items-center justify-center shadow-xl">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                          </svg>
                        </div>
                      </button>

                      <button
                        onClick={() => nextSlide(categoryIndex)}
                        className="pointer-events-auto hover:scale-110 transition-transform"
                      >
                        <div className="w-12 h-12 bg-[#5A5C9D] rounded-full flex items-center justify-center shadow-xl">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>

                    </div>
                  )}

                  {/* Image */}
                  <div className="relative flex items-center justify-center h-full">
                    <div className="absolute bg-[#A8CF45] w-[260px] h-[220px] rounded-[40%] opacity-20 rotate-[-5deg]" />
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="relative z-10 w-[220px] object-contain"
                    />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-xl lg:text-[28px] font-semibold text-[#323232] text-center mb-6">
                  {category.categoryName}
                </h3>

                {/* Features */}
                <div className="w-full space-y-3 px-4">
                  {category.features.map((feature, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg px-4 py-3 text-center shadow-sm">
                      <p className="text-sm sm:text-base text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Dots */}
                <div className="flex gap-2 justify-center mt-6">
                  {category.products.map((_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        setSlideIndexes(prev => {
                          const updated = [...prev];
                          updated[categoryIndex] = i;
                          return updated;
                        })
                      }
                      className={`h-2 rounded-full transition-all ${
                        i === slideIndexes[categoryIndex]
                          ? "bg-[#3E4095] w-8"
                          : "bg-gray-300 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Button */}
      <div className="text-center mt-16">
        <button className="w-[320px] h-[60px] bg-[#A8CF45] text-[#3E4095] rounded-lg font-semibold text-lg hover:bg-[#98C135] shadow-lg">
          Explore Our RO Elements
        </button>
      </div>
    </section>
  );
};

export default WaterSolutionsSection;

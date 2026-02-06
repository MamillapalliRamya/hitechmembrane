import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslateContent } from '../../hooks/useTranslateContent';

const AboutExploreProducts: React.FC = () => {
  // Separate state for each product's image carousel
  const [residentialIndex, setResidentialIndex] = useState(0);
  const [industrialIndex, setIndustrialIndex] = useState(0);
  const [commercialIndex, setCommercialIndex] = useState(0);

  // Text content
  const headingText = "Explore Our Product Portfolio";
  const descriptionText = "RO membrane elements engineered for residential, commercial, industrial, and seawater applications.";
  const product1Title = "Residential Membranes";
  const product2Title = "Industrial Membranes";
  const product3Title = "Commercial Membranes";
  const buttonText = "Explore Our RO Elements";

  // Translation hooks
  const { translatedText: translatedHeading } = useTranslateContent(headingText);
  const { translatedText: translatedDescription } = useTranslateContent(descriptionText);
  const { translatedText: translatedProduct1 } = useTranslateContent(product1Title);
  const { translatedText: translatedProduct2 } = useTranslateContent(product2Title);
  const { translatedText: translatedProduct3 } = useTranslateContent(product3Title);
  const { translatedText: translatedButton } = useTranslateContent(buttonText);

  // Products with multiple images
  const products = [
    {
      id: 1,
      title: translatedProduct1,
      images: [
        "/assets/images/MembraneTube1.png",
        "/assets/images/MembraneTube2.png", // Add your additional images
        "/assets/images/MembraneTube3.png",
      ],
      alt: "Residential Membrane",
      currentIndex: residentialIndex,
      setIndex: setResidentialIndex
    },
    {
      id: 2,
      title: translatedProduct2,
      images: [
        "/assets/images/MembraneTube2.png",
        "/assets/images/MembraneTube1.png", // Add your additional images
        "/assets/images/MembraneTube3.png",
      ],
      alt: "Industrial Membrane",
      currentIndex: industrialIndex,
      setIndex: setIndustrialIndex
    },
    {
      id: 3,
      title: translatedProduct3,
      images: [
        "/assets/images/MembraneTube3.png",
        "/assets/images/MembraneTube2.png", // Add your additional images
        "/assets/images/MembraneTube1.png",
      ],
      alt: "Commercial Membrane",
      currentIndex: commercialIndex,
      setIndex: setCommercialIndex
    }
  ];

  const handlePrevImage = (product: typeof products[0]) => {
    const newIndex = (product.currentIndex - 1 + product.images.length) % product.images.length;
    product.setIndex(newIndex);
  };

  const handleNextImage = (product: typeof products[0]) => {
    const newIndex = (product.currentIndex + 1) % product.images.length;
    product.setIndex(newIndex);
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold text-[#3E4095] text-center mb-6 md:mb-8 lg:mb-10">
          {translatedHeading}
        </h2>

        <p className="text-center text-[#58585B] max-w-3xl mx-auto text-[22px] leading-relaxed font-medium mb-12 md:mb-16 lg:mb-20">
          {translatedDescription}
        </p>

        {/* Products Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center">
              {/* Image with Ellipse Background and Carousel */}
              <div className="relative w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] aspect-square mb-6 md:mb-8 group">
                {/* Rugby Ball Shaped Ellipse Background - Rotated */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[45%] h-[80%] bg-[#E8F5E0] rounded-[50%] opacity-80 transform rotate-45"></div>
                </div>

                {/* Left Arrow */}
                <button
                  onClick={() => handlePrevImage(product)}
                  className="absolute left-[-10px] md:left-[-15px] top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-1.5 md:p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-[#3E4095]" />
                </button>

                {/* Product Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src={product.images[product.currentIndex]}
                    alt={`${product.alt} - Image ${product.currentIndex + 1}`}
                    className="w-auto h-[85%] object-contain transform rotate-35 transition-opacity duration-300"
                  />
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => handleNextImage(product)}
                  className="absolute right-[-10px] md:right-[-15px] top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-1.5 md:p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#3E4095]" />
                </button>

                {/* Image Indicator Dots */}
                {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-1.5 md:gap-2 z-30">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => product.setIndex(idx)}
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                        idx === product.currentIndex 
                          ? 'bg-[#3E4095] w-4 md:w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div> */}
              </div>

              {/* Product Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#323232]">
                {product.title}
              </h3>
            </div>
          ))}

          {/* Explore Button */}
          <button className="col-span-1 md:col-span-3 justify-self-center bg-[#A8CF45] hover:bg-[#98C135] text-indigo-900 font-bold text-lg px-8 py-3 sm:px-10 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            {translatedButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutExploreProducts;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslateContent } from '../../hooks/useTranslateContent';

interface AboutExploreProductsProps {
  explore_products_section?: {
    id: number;
    about_page_id: number;
    heading: string;
    description: string;
    button_text: string;
  }[];
  explore_products?: {
    id: number;
    explore_section_id: number;
    title: string;
    images: string[];
  }[];
}

const AboutExploreProducts: React.FC<AboutExploreProductsProps> = ({ 
  explore_products_section, 
  explore_products 
}) => {
  // State for each product's current image index
  const [imageIndices, setImageIndices] = useState<{ [key: number]: number }>({});

  // Get section data from CMS or use fallback
  const sectionData = explore_products_section && explore_products_section.length > 0 
    ? explore_products_section[0] 
    : null;

  // Text content from CMS or fallback
  const headingText = sectionData?.heading || "Explore Our Product Portfolio";
  const descriptionText = sectionData?.description || "RO membrane elements engineered for residential, commercial, industrial, and seawater applications.";
  const buttonText = sectionData?.button_text || "Explore Our RO Elements";

  // Translation hooks
  const { translatedText: translatedHeading } = useTranslateContent(headingText);
  const { translatedText: translatedDescription } = useTranslateContent(descriptionText);
  const { translatedText: translatedButton } = useTranslateContent(buttonText);

  // Fallback products with multiple images
  const fallbackProducts = [
    {
      id: 1,
      title: "Residential Membranes",
      images: [
        "/assets/images/MembraneTube1.png",
        "/assets/images/MembraneTube2.png",
        "/assets/images/MembraneTube3.png",
      ],
    },
    {
      id: 2,
      title: "Industrial Membranes",
      images: [
        "/assets/images/MembraneTube2.png",
        "/assets/images/MembraneTube1.png",
        "/assets/images/MembraneTube3.png",
      ],
    },
    {
      id: 3,
      title: "Commercial Membranes",
      images: [
        "/assets/images/MembraneTube3.png",
        "/assets/images/MembraneTube2.png",
        "/assets/images/MembraneTube1.png",
      ],
    }
  ];

  // Process CMS products or use fallback
  const processedProducts = explore_products && explore_products.length > 0
    ? explore_products.map(product => ({
        id: product.id,
        title: product.title,
        images: product.images && product.images.length > 0
          ? product.images.map((img: string) => 
              img.startsWith('http') ? img : `http://65.0.77.32:8000${img}`
            )
          : ["/assets/images/MembraneTube1.png"], // Fallback if no images
      }))
    : fallbackProducts;

  // Initialize image indices when products change
  useEffect(() => {
    const initialIndices: { [key: number]: number } = {};
    processedProducts.forEach(product => {
      initialIndices[product.id] = 0;
    });
    setImageIndices(initialIndices);
  }, [explore_products]);

  const handlePrevImage = (productId: number, imagesLength: number) => {
    setImageIndices(prev => ({
      ...prev,
      [productId]: (prev[productId] - 1 + imagesLength) % imagesLength
    }));
  };

  const handleNextImage = (productId: number, imagesLength: number) => {
    setImageIndices(prev => ({
      ...prev,
      [productId]: (prev[productId] + 1) % imagesLength
    }));
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
          {processedProducts.map((product) => {
            const { translatedText: translatedTitle } = useTranslateContent(product.title);
            const currentIndex = imageIndices[product.id] || 0;
            const hasMultipleImages = product.images && product.images.length > 1;

            return (
              <div key={product.id} className="flex flex-col items-center text-center">
                {/* Image with Ellipse Background and Carousel */}
                <div className="relative w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] aspect-square mb-6 md:mb-8 group">
                  {/* Rugby Ball Shaped Ellipse Background - Rotated */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[45%] h-[80%] bg-[#E8F5E0] rounded-[50%] opacity-80 transform rotate-45"></div>
                  </div>

                  {/* Left Arrow - only show if multiple images */}
                  {hasMultipleImages && (
                    <button
                      onClick={() => handlePrevImage(product.id, product.images.length)}
                      className="absolute left-[-10px] md:left-[-15px] top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-1.5 md:p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-[#3E4095]" />
                    </button>
                  )}

                  {/* Product Image */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img
                      src={product.images[currentIndex]}
                      alt={`${product.title} - Image ${currentIndex + 1}`}
                      className="w-auto h-[85%] object-contain transform rotate-35 transition-opacity duration-300"
                    />
                  </div>

                  {/* Right Arrow - only show if multiple images */}
                  {hasMultipleImages && (
                    <button
                      onClick={() => handleNextImage(product.id, product.images.length)}
                      className="absolute right-[-10px] md:right-[-15px] top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-1.5 md:p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#3E4095]" />
                    </button>
                  )}
                </div>

                {/* Product Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#323232]">
                  {translatedTitle}
                </h3>
              </div>
            );
          })}

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
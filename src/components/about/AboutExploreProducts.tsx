import React from 'react';

const AboutExploreProducts: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
       <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold text-[#3E4095] text-center mb-6 md:mb-8 lg:mb-10">
          Explore Our Product Portfolio
        </h2>

        <p className="text-center text-[#58585B] max-w-3xl mx-auto text-[22px] leading-relaxed font-medium mb-12 md:mb-16 lg:mb-20">
          RO membrane elements engineered for residential, commercial, industrial, and seawater applications.
        </p>

        {/* Products Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Product 1 - Residential Membranes */}
          <div className="flex flex-col items-center text-center">
            {/* Image with Ellipse Background */}
            <div className="relative w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] aspect-square mb-6 md:mb-8">
              {/* Rugby Ball Shaped Ellipse Background - Rotated */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[45%] h-[80%] bg-[#E8F5E0] rounded-[50%] opacity-80 transform rotate-45"></div>
              </div>
              {/* Product Image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src="/assets/images/MembraneTube1.png"
                  alt="Residential Membrane"
                  className="w-auto h-[85%] object-contain transform rotate-35"
                />
              </div>
            </div>
            {/* Product Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#323232]">
              Residential Membranes
            </h3>
          </div>

          {/* Product 2 - Industrial Membranes */}
          <div className="flex flex-col items-center text-center">
            {/* Image with Ellipse Background */}
            <div className="relative w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] aspect-square mb-6 md:mb-8">
              {/* Rugby Ball Shaped Ellipse Background - Rotated */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[45%] h-[80%] bg-[#E8F5E0] rounded-[50%] opacity-80 transform rotate-45"></div>
              </div>
              {/* Product Image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src="/assets/images/MembraneTube2.png"
                  alt="Industrial Membrane"
                  className="w-auto h-[85%] object-contain transform rotate-35"
                />
              </div>
            </div>
            {/* Product Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#323232]">
              Industrial Membranes
            </h3>
          </div>

          {/* Product 3 - Commercial Membranes */}
          <div className="flex flex-col items-center text-center">
            {/* Image with Ellipse Background */}
            <div className="relative w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] aspect-square mb-6 md:mb-8">
              {/* Rugby Ball Shaped Ellipse Background - Rotated */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[45%] h-[80%] bg-[#E8F5E0] rounded-[50%] opacity-80 transform rotate-45"></div>
              </div>
              {/* Product Image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src="/assets/images/MembraneTube3.png"
                  alt="Commercial Membrane"
                  className="w-auto h-[85%] object-contain transform rotate-35"
                />
              </div>
            </div>
            {/* Product Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#323232]">
              Commercial Membranes
            </h3>
          </div>
          <button className="col-span-1 md:col-span-3 justify-self-center bg-lime-400 hover:bg-lime-500 text-indigo-900 font-bold text-lg px-8 py-3 sm:px-10 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore Our RO Elements
          </button>

        </div>
      </div>
    </section>
  );
};

export default AboutExploreProducts;
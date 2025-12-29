import React from 'react';

const AboutRevolutionary: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto">
        {/* Content Container - Two Column Layout with fixed height */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:h-[472px] overflow-hidden">
          {/* Left Side - Image (approximately 30-35% width) */}
          <div className="w-full h-[300px] md:h-[400px] lg:h-[472px]">
            <img
              src="/assets/images/about/AboutRevolutionary.svg"
              alt="Revolutionary membrane rolling facility"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content (approximately 65-70% width) */}
          <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-12 md:py-14 lg:py-16 xl:py-20 flex flex-col justify-center space-y-6 md:space-y-7 lg:space-y-8">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-bold text-[#A7CD45] leading-tight">
              Revolutionary Start to Worldwide Impact
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base md:text-lg lg:text-[1.05rem] xl:text-[1.125rem] text-[#58585B] font-medium leading-relaxed">
              In 2016, we expanded into Thailand and introduced the country's first-ever membrane rolling line. This milestone was more than a technological achievement—it signaled our role in shaping the future of water treatment in Asia, and beyond.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base md:text-lg lg:text-[1.05rem] xl:text-[1.125rem] text-[#58585B] font-medium leading-relaxed">
              Today, our membranes help industries and communities worldwide tap new water sources, reuse wastewater, and secure sustainable clean water—driven by the same spirit of innovation and responsibility that started our journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRevolutionary;
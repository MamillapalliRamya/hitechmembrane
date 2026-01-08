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
          <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-12 md:py-14 lg:py-16 xl:py-20 flex flex-col justify-center">
  
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-bold text-[#A7CD45] leading-tight mb-4">
              Revolutionary Start to Worldwide Impact
            </h2>

            <h3 className="text-[24px] md:text-[24px] lg:text-[24px] xl:text-[25px] font-bold text-[#58585B] leading-tight">
              From Engineering Roots to Global Impact
            </h3>

            {/* Paragraph 1 */}
            <p className="mt-6 text-base md:text-lg lg:text-[1.05rem] xl:text-[1.125rem] text-gray-600 font-medium leading-relaxed">
              Hi-Tech Membranes was established with a clear objective—to develop dependable reverse osmosis membrane technology that addresses real-world water challenges.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-4 text-base md:text-lg lg:text-[1.05rem] xl:text-[1.125rem] text-gray-600 font-medium leading-relaxed">
              From our manufacturing base in Asia, we have grown into a global supplier, supporting OEM partners, system integrators, and water treatment professionals across multiple regions. Our focus remains on process consistency, product reliability, and long-term partnerships.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutRevolutionary;
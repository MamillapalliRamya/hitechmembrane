import React from 'react';

const AboutOurClients: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12 md:py-14 lg:py-16 xl:py-18 bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold text-[#3E4095] text-center">
            OUR CLIENTS / PARTNERS
          </h2>

          <h4 className="text-center text-[#58585B] max-w-3xl mx-auto text-[24px] leading-relaxed font-medium mt-5">
            Trusted by Water Treatment Professionals Worldwide
          </h4>

          <p className="text-center text-gray-600 max-w-3xl mx-auto text-[20px] leading-relaxed font-medium mt-4">
            Our membranes are used by OEMs, distributors, and system integrators across multiple industries—supporting long-term projects and sustainable water solutions.
          </p>


        {/* Clients Grid - 2 Rows with varying heights */}
        <div className="flex flex-col ">
          
          {/* Row 1 - Top row with 4 logos */}
          <div className="flex justify-between items-end ">
            {/* HiCura 1 */}
            <div className="flex items-end justify-center" style={{ height: '140px' }}>
              <img
                src="/assets/images/about/Client1.svg"
                alt="HiCura"
                className="h-[120px] w-auto object-contain "
              />
            </div>

            {/* HiCura 2 */}
            <div className="flex items-end justify-center" style={{ height: '140px' }}>
              <img
                src="/assets/images/about/Client1.svg"
                alt="HiCura"
                className="h-[130px] w-auto object-contain"
              />
            </div>

            {/* Water Box 1 */}
            <div className="flex items-end justify-center" style={{ height: '150px' }}>
              <img
                src="/assets/images/about/Client2.svg"
                alt="Water Box"
                className="h-[140px] w-auto object-contain"
              />
            </div>

            {/* Aqua Care 1 */}
            <div className="flex items-end justify-center" style={{ height: '130px' }}>
              <img
                src="/assets/images/about/Client3.svg"
                alt="Aqua Care"
                className="h-[120px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Row 2 - Bottom row with 6 logos (overlapping middle section) */}
          <div className="flex justify-between items-end pl-12 pr-20">
            {/* Aqua Care 2 */}
            <div className="flex items-end justify-center" style={{ height: '120px' }}>
              <img
                src="/assets/images/about/Client3.svg"
                alt="Aqua Care"
                className="h-[110px] w-auto object-contain"
              />
            </div>

            {/* Water Box 2 */}
            <div className="flex justify-center mr-" style={{ height: '190px' }}>
              <img
                src="/assets/images/about/Client2.svg"
                alt="Water Box"
                className="h-[170px] w-auto object-contain"
              />
            </div>

            {/* Blue B 1 - Tallest */}
            <div className="flex items-end justify-center ml-" style={{ height: '110px' }}>
              <img
                src="/assets/images/about/Client4.svg"
                alt="Blue B"
                className="h-[100px] w-auto object-contain"
              />
            </div>

            {/* Water Box 3 - Center, extends upward */}
            <div className="flex items-end justify-center" style={{ height: '190px' }}>
              <img
                src="/assets/images/about/Client2.svg"
                alt="Water Box"
                className="h-[170px] w-auto object-contain"
              />
            </div>

            {/* Blue B 2 - Medium tall */}
            <div className="flex items-end justify-center" style={{ height: '120px' }}>
              <img
                src="/assets/images/about/Client4.svg"
                alt="Blue B"
                className="h-[110px] w-auto object-contain"
              />
            </div>

            {/* HiCura 3 */}
            <div className="flex items-end justify-center" style={{ height: '150px' }}>
              <img
                src="/assets/images/about/Client1.svg"
                alt="HiCura"
                className="h-[140px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default AboutOurClients;
import React from 'react';

const AboutCertifications: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8 md:py-10 lg:py-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold text-[#3E4095] text-center mb-8 md:mb-10 lg:mb-12">
          Certifications
        </h2>

        {/* Certifications Grid - 5 certificates in a row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 2xl:gap-16 mb-12 md:mb-16 lg:mb-20">
          {/* Certificate Card 1 */}
          <div className="relative group">
            <div className="w-[150px] md:w-[170px] lg:w-[185px] xl:w-[200px] 2xl:w-[220px] aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/assets/images/certificate1.png"
                alt="CE Marking Certificate 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
              <p className="text-white text-sm md:text-base font-semibold">CE Marking</p>
            </div>
          </div>

          {/* Certificate Card 2 */}
          <div className="relative group">
            <div className="w-[150px] md:w-[170px] lg:w-[185px] xl:w-[200px] 2xl:w-[220px] aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/assets/images/certificate1.png"
                alt="CE Marking Certificate 2"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
              <p className="text-white text-sm md:text-base font-semibold">CE Marking</p>
            </div>
          </div>

          {/* Certificate Card 3 */}
          <div className="relative group">
            <div className="w-[150px] md:w-[170px] lg:w-[185px] xl:w-[200px] 2xl:w-[220px] aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/assets/images/certificate1.png"
                alt="CE Marking Certificate 3"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
              <p className="text-white text-sm md:text-base font-semibold">CE Marking</p>
            </div>
          </div>

          {/* Certificate Card 4 */}
          <div className="relative group">
            <div className="w-[150px] md:w-[170px] lg:w-[185px] xl:w-[200px] 2xl:w-[220px] aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/assets/images/certificate1.png"
                alt="CE Marking Certificate 4"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
              <p className="text-white text-sm md:text-base font-semibold">CE Marking</p>
            </div>
          </div>

          {/* Certificate Card 5 */}
          <div className="relative group">
            <div className="w-[150px] md:w-[170px] lg:w-[185px] xl:w-[200px] 2xl:w-[220px]aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/assets/images/certificate1.png"
                alt="CE Marking Certificate 5"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
              <p className="text-white text-sm md:text-base font-semibold">CE Marking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCertifications;
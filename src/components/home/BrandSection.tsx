import React from "react";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 border-2 border-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 border-2 border-gray-300 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-gray-300 rounded-full"></div>
      </div>

      <div className="container relative z-10 ml-[150px]">
        <div className="flex items-center gap-[208px]">
          
          {/* Left side - Images and Statistics */}
          <div className="flex gap-9">
            
            {/* First Column: First Image + Clients Worldwide Badge */}
            <div className="flex flex-col gap-6">
              <div className="relative mt-[82px]">
                <img
                  src="/assets/images/Aboutus2.png"
                  alt="Laboratory equipment"
                  className="object-cover rounded-lg shadow-lg"
                  style={{ width: '300px', height: '378px' }}
                />
              </div>
              
              {/* Clients Worldwide Badge */}
              <div 
                className="bg-white p-4 shadow-lg text-start ml-[40px] "
                style={{ 
                  width: '216px', 
                  height: '177px', 
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  fontFamily: 'Diodrum Cyrillic, sans-serif'
                }}
              >
                <div className="text-[20px] text-[#3E4095]">Clients</div>
                <div className="text-[20px] text-[#3E4095]">Worldwide</div>
                <div className="font-bold text-[#A8CF45] text-[80px]">200+</div>
              </div>
            </div>

            {/* Second Column: Years of Experience Badge + Second Image */}
            <div className="flex flex-col gap-6">
              {/* Years of Experience Badge */}
              <div 
                className="bg-white p-4 shadow-lg text-start ml-[40px] "
                style={{ 
                  width: '169px', 
                  height: '178px', 
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  fontFamily: 'Diodrum Cyrillic, sans-serif'
                }}
              >
                <div className="text-[20px] text-[#3E4095]">Years of</div>
                <div className="text-[20px] text-[#3E4095]">Experience</div>
                <div className="font-bold text-[#A8CF45] text-[80px]">50+</div>
              </div>
              
              <div className="relative">
                <img
                  src="/assets/images/Aboutus1.png"
                  alt="Water filtration system"
                  className="object-cover rounded-lg shadow-lg"
                  style={{ width: '300px', height: '378px' }}
                />
              </div>
            </div>
          </div>

          {/* Right side - About Us Content */}
          <div className="flex-1 space-y-6 pl-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#10111A] leading-tight">
              About Us
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed w-[515px] h-[150px]">
              At Hi-tech Ro Membrane Company, we specialize in reverse osmosis technology for high-quality water purification. Our membranes meet diverse needs, ensuring clean drinking water. Committed to excellence and sustainability, we lead in water treatment solutions.
            </p>

            <button className="bg-[#A8CF45] text-[#3E4095] rounded-lg font-medium text-lg hover:bg-[#98C135] transition-colors duration-300 w-[137px] h-[53px]">
              Know more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
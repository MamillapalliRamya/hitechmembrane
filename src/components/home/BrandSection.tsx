import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutUsSection = () => {
  const sectionRef = useRef(null);

  // Trigger animation only once, when 50% of section is visible
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <section
      ref={sectionRef}
      className="pt-[88px] pb-[60px] relative overflow-hidden"
    >


      {/* Isometric RO Membrane Image */}
      {/* <div
        className="absolute hidden lg:block"
        style={{
          width: '1028.57px',
          height: '210.165px',
          border: '1px solid rgb(0, 0, 0)',
          opacity: 0.4,
          marginTop: '245px',
          marginLeft: '-280px',
          transform: 'rotate(38.78deg)',
          transformOrigin: 'center'
        }}
      >
        <img
          src="/assets/images/Isometric1.png"
          alt="RO Membrane Isometric View"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16 xl:gap-20 2xl:gap-16">

          {/* Left side - Images and Statistics */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 lg:gap-9"
          >
            {/* First Column: First Image + Clients Worldwide Badge */}
            <div className="flex flex-col gap-6 items-center sm:items-center mt-8 lg:mt-12">
              <div className="relative">
                <img
                  src="/assets/images/Aboutus2.png"
                  alt="Laboratory equipment"
                  className="object-cover rounded-lg shadow-lg w-[220px] sm:w-[260px] lg:w-[300px] h-auto"
                />
              </div>

              {/* Clients Worldwide Badge */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="bg-white flex justify-center p-4 shadow-[1px_2px_16px_6px_#e0e0e0] text-start rounded-lg w-[160px] h-[177px] sm:w-[180px] lg:w-[216px]"
                style={{ fontFamily: "Diodrum Cyrillic, sans-serif",flexDirection:'column' }}
              >
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">
                  Clients
                </div>
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">
                  Worldwide
                </div>
                <div className="text-[#A8CF45] text-[40px] sm:text-[50px] lg:text-[60px]">
                  200+
                </div>
              </motion.div>
            </div>

            {/* Second Column: Years of Experience Badge + Second Image */}
            <div className="flex flex-col gap-6 items-center sm:items-center">
              {/* Years of Experience Badge */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                className="bg-white p-5 shadow-[1px_2px_16px_6px_#e0e0e0] h-[178px] text-start rounded-lg w-[150px] sm:w-[160px] lg:w-[169px]"
                style={{ fontFamily: "Diodrum Cyrillic, sans-serif" }}
              >
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">
                  Years of
                </div>
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">
                  Experience
                </div>
                <div className="text-[#A8CF45] text-[38px] sm:text-[50px] lg:text-[60px]">
                  50+
                </div>
              </motion.div>

              <div className="relative">
                <img
                  src="/assets/images/Aboutus1.png"
                  alt="Water filtration system"
                  className="object-cover rounded-lg shadow-lg w-[220px] sm:w-[260px] lg:w-[300px] h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - About Us Content */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex-1 space-y-6 text-center lg:text-left flex flex-col justify-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl  text-[#10111A] leading-tight">
              About Us
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0" >
              At Hi-tech Ro Membrane Company, we specialize in reverse osmosis technology for high-quality water purification. Our membranes meet diverse needs, ensuring clean drinking water. Committed to excellence and sustainability, we lead in water treatment solutions.
            </p>

            <button className="bg-[#A8CF45] text-[#3E4095] rounded-lg font-medium text-sm sm:text-base lg:text-lg hover:bg-[#98C135] transition-colors duration-300 h-[45px] sm:h-[53px] w-[137px] mx-auto lg:mx-0">
              Know more
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
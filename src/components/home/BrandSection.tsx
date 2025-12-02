import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutUsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <section
      ref={sectionRef}
      className="pt-[88px] pb-[184px] relative overflow-hidden"
    >
      <div className="relative z-10 ml-[40px] xl:mx-[80px] 2xl:ml-[112px] pr-3">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 xl:gap-16 2xl:gap-[128px]">

          {/* LEFT SIDE IMAGES + STATS */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 lg:gap-9"
          >
            {/* FIRST COLUMN */}
            <div className="flex flex-col gap-6 items-center mt-8 lg:mt-12">
              <div className="relative">
                <img
                  src="/assets/images/Aboutus2.png"
                  alt="Laboratory equipment"
                  className="object-cover rounded-lg shadow-lg 
                  w-[220px] sm:w-[260px] xl:w-[300px] 2xl:w-[360px] 3xl:w-[385px] h-auto"
                />
              </div>

              {/* Clients Worldwide */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="bg-white flex justify-center p-4 shadow-[1px_2px_16px_6px_#e0e0e0] 
                text-start rounded-lg w-[160px] sm:w-[180px] xl:w-[216px] 3xl:w-[240px] h-[177px]"
                style={{ fontFamily: "Diodrum Cyrillic, sans-serif", flexDirection: "column" }}
              >
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">Clients</div>
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">Worldwide</div>
                <div className="text-[#A8CF45] text-[40px] sm:text-[50px] lg:text-[60px]">200+</div>
              </motion.div>
            </div>

            {/* SECOND COLUMN */}
            <div className="flex flex-col gap-6 items-center">
              {/* Years of Experience */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                className="bg-white p-5 shadow-[1px_2px_16px_6px_#e0e0e0] h-[178px] 
                text-start rounded-lg w-[150px] sm:w-[160px] xl:w-[169px] 3xl:w-[200px]"
                style={{ fontFamily: "Diodrum Cyrillic, sans-serif" }}
              >
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">Years of</div>
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">Experience</div>
                <div className="text-[#A8CF45] text-[38px] sm:text-[50px] lg:text-[60px]">50+</div>
              </motion.div>

              <div className="relative">
                <img
                  src="/assets/images/Aboutus1.png"
                  alt="Water filtration system"
                  className="object-cover rounded-lg shadow-lg 
                  w-[220px] sm:w-[260px] xl:w-[300px] 2xl:w-[360px] 3xl:w-[385px] h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex-1 space-y-6 text-center lg:text-left flex flex-col justify-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl 2xl:text-[58px] 3xl:text-[64px] text-[#10111A] leading-tight">
              About Us
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg 2xl:text-[24.6px] 
              3xl:text-[24px] leading-relaxed max-w-2xl lg:mx-0">
              At Hi-tech Ro Membrane Company, we specialize in reverse osmosis technology for
              high-quality water purification. Our membranes meet diverse needs, ensuring clean
              drinking water. Committed to excellence and sustainability, we lead in water
              treatment solutions.
            </p>

            <button
              className="bg-[#A8CF45] text-[#3E4095] rounded-lg font-medium text-sm sm:text-base 
              lg:text-lg 2xl:text-[20px] 3xl:text-[22px] hover:bg-[#98C135] transition-colors 
              duration-300 h-[45px] sm:h-[53px] w-[137px] 2xl:w-[160px] 3xl:w-[180px] 
              mx-auto lg:mx-0"
            >
              Know more
            </button>
          </motion.div>
        </div>
      </div>

      {/* ISOMETRIC IMAGE WITH DIAGONAL ↘ ENTRY + DELAYED MICRO BOUNCE */}
<motion.img
  src="/assets/images/isometrics/isometric_1.svg"
  alt="decor"
  initial={{
    opacity: 0,
    x: -380, // start off-screen
    y: -380,
    scale: 0.92,
  }}
  animate={
    isInView
      ? {
          opacity: 1,
          x: 0,
          y: 0,
          scale: [1, 1.03, 0.99, 1], // slow, subtle bounce
        }
      : {}
  }
  transition={{
    duration: 1.6, // total time for entry
    delay: 0.8, // **delay start until left/right animations finish**
    // ease: [0.16, 1, 0.3, 1], // smooth ease
    scale: {
      duration: 1.0, // slow bounce
      delay: 1.0, // delay bounce slightly after movement
      ease: [0.22, 1, 0.36, 1], // soft, smooth
    },
  }}
  className="
    absolute 
    opacity-90
    w-[300px] sm:w-[450px] md:w-[600px] xl:w-[700px] 2xl:w-[780px] 3xl:w-[812px]
    lg:left-[-105px] xl:top-[-28px] lg:top-[23px] 3xl:left-[-47px] 3xl:top-[-30px]
  "
/>

    </section>
  );
};

export default AboutUsSection;

import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../src/assets/images/wetransfer_hitech/waterfilter_img.png";
import image2 from "../../../src/assets/images/wetransfer_hitech/pipes.png";

const AboutExcellence: React.FC = () => {
  return (
    <div
      className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('/images/about-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Floating top-right animated image */}
      <motion.img
        src={image2}
        alt="Pipes"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="absolute top-5 right-8 w-[220px] h-auto z-10 object-contain"
        loading="lazy"
      />


      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center items-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#58585B] text-center max-w-3xl">
            We are acclaimed worldwide for our excellence in water filter membrane solution
          </h1>
        </motion.div>

        {/* Image + Text row slide in together from left and right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left Image Card - slide from left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-[#F2F2F2] rounded-lg shadow-md w-full md:w-[387px] h-[340px] flex flex-col justify-center items-center"
          >
            <img
              src={image1}
              alt="Membrane"
              className="w-[469px] h-[202px] object-contain mt-6"
            />
            <img
              src="/logo-1 2.png"
              alt="Logo"
              className="w-[78px] h-[65px] mt-4 ml-auto mr-6"
            />
          </motion.div>

          {/* Right Text - slide from right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-left max-w-xl"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              Since 1995, Hi-Tech has been dedicated to providing high-quality water filter membranes.
              Our commitment to wellness and innovation has allowed us to expand globally over the years.
              With ANSI-58 certification, our Commercial and Industrial membranes are trusted by many.
              We’ve received multiple awards, including Best RO Membrane from The Water Digest for 2014–2016
              and the Best Water Filter Membrane Technology Award in Dubai 2015.
              Hi-Tech continues to grow by enhancing our network and delivering cutting-edge membrane technology,
              making us a leading water filter dealer in Thailand.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutExcellence;

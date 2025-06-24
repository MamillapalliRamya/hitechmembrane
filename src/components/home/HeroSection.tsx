import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoPlaying(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videoPlaying ? (
          <div className="w-full h-full">
            <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/videos/home_page_bg_animation.mp4" type="video/mp4" />
            </video>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            World-Leading Water Filter Membrane Solutions
          </h1>

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-100"
          >
            Acclaimed for excellence in membrane technology, delivering quality, credibility,
            and well-engineered water filter membranes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.button
              className="w-[283px] h-[74px] text-[28px] font-medium rounded-[16px] flex items-center justify-center relative overflow-hidden
                bg-[#A8CF45] text-[#3D3E96] transition-all duration-500
                before:content-[''] before:absolute before:inset-0 before:bg-[#3D3E96] before:-translate-y-full before:transition-transform before:duration-500
                hover:before:translate-y-0 hover:text-[#A8CF45]"
            >
              <span className="relative z-10">Get Quote Now</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Tubes Image */}
      <div className="w-[531px] h-[647px] absolute right-0 z-10 bottom-0">
        <img src="/assets/images/4tubes.png" alt="tubes" />
      </div>
    </section>
  );
};

export default HeroSection;

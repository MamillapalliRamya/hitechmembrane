import React from "react";
import { motion } from 'framer-motion';

const GroupCompanies = () => {
  return (
    <section className="relative h-screen max-h-[273px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/waterflow_home.png" 
          alt="waterflow" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 h-full flex items-center justify-between ml-[100px]">
        
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-[400px] text-white"
          >
            <h1 className="w-[851px] h-[132px] text-[48px] text-[#FFFFFF] ml-[100px] md:text-5xl lg:text-6xl font-bold leading-tight">
              Know More About Hi-Tech RO Water Filter Membranes
            </h1>
            
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-[264px] h-[69px] text-[24px] font-medium rounded-[11px] flex items-center justify-center relative overflow-hidden
                        bg-[#A8CF45] text-[#393185] transition-all duration-500 flex-shrink-0
                        before:content-[''] before:absolute before:inset-0 before:bg-[#393185] before:-translate-y-full before:transition-transform before:duration-500
                        hover:before:translate-y-0 hover:text-[#A8CF45]"
            >
              <span className="relative z-10">Contact Us</span>
            </motion.button>
          </motion.div>
        </div>
    </section>
  );
};

export default GroupCompanies;
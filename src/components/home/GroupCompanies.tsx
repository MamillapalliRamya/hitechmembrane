import React from "react";
import { motion } from 'framer-motion';

const GroupCompanies = () => {
  return (
    <section className="relative h-screen max-h-[273px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/waterflow_image.png" 
          alt="waterflow" 
          className="w-full h-full object-cover"
        />
        
      </div>

      {/* Centered Content */}
      <div className="relative z-20 h-full flex items-center justify-between">
        
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-[400px] text-white"
          >
            <h1 className="w-[682px] h-[96px] text-[40px] text-[#FFFFFF] ml-[80px] leading-tight">
              Learn more about Hi-tech’s advanced RO water filter membranes.
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
              <span className="relative z-10">Let's Talk</span>
            </motion.button>
          </motion.div>
        </div>
    </section>
  );
};

export default GroupCompanies;
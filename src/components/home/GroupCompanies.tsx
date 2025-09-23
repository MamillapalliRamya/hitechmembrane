import React from "react";

const GroupCompanies = () => {
  return (
    <section className="relative h-screen max-h-[200px] sm:max-h-[240px] lg:max-h-[273px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/waterflow_image.png" 
          alt="waterflow" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div 
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-between 
                     gap-6 sm:gap-8 lg:gap-[300px] text-white w-full max-w-7xl"
        >
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-[40px] text-[#FFFFFF] 
                         leading-[100%] text-center lg:text-left
                         max-w-[90%] sm:w-[600px] lg:w-[713px]">
            Learn more about Hi-tech's advanced RO water filter membranes.
          </h1>
          
          <button 
            className="w-[200px] sm:w-[220px] lg:w-[264px] 
                       h-[50px] sm:h-[60px] lg:h-[69px] 
                       text-base sm:text-lg lg:text-[24px] 
                       font-medium rounded-[4px] flex items-center justify-center 
                       relative overflow-hidden flex-shrink-0
                       bg-[#A8CF45] text-[#393185] transition-all duration-500
                       before:content-[''] before:absolute before:inset-0 before:bg-[#393185] 
                       before:-translate-y-full before:transition-transform before:duration-500
                       hover:before:translate-y-0 hover:text-[#A8CF45]
                       active:scale-95"
          >
            <span className="relative z-10">Let's Talk</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;
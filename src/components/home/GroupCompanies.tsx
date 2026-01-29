import React from "react";
import { Link, useLocation } from "react-router-dom";

const GroupCompanies = () => {
  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-12 lg:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/images/waterflow_image.png"
          alt="waterflow"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between 
                        gap-6 sm:gap-10 lg:gap-20 xl:gap-32 2xl:gap-[300px]
                        text-white w-full max-w-[1400px] 3xl:max-w-[1600px] lg:mx-[80px] 2xl:mx-0">

          {/* Heading */}
          <h1
            className="text-center lg:text-left
                       text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[42px]
                       font-medium leading-snug sm:leading-normal xl:leading-[45px]
                       max-w-[900px] flex-nowrap"
          >
            Need help choosing the right membrane?
          </h1>

          {/* Button */}
          <button
            className="w-[180px] sm:w-[200px] lg:w-[240px]
                       h-[50px] sm:h-[55px] lg:h-[65px]
                       text-base sm:text-lg lg:text-xl
                       font-medium rounded-[6px] flex items-center justify-center
                       relative overflow-hidden flex-shrink-0
                       bg-[#A8CF45] text-[#393185] transition-all duration-500
                       before:content-[''] before:absolute before:inset-0 before:bg-[#393185]
                       before:-translate-y-full before:transition-transform before:duration-500
                       hover:before:translate-y-0 hover:text-[#A8CF45]
                       active:scale-95"
          >
            <Link
              to="/contact">
              <span className="relative z-10">Let's Talk</span></Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;

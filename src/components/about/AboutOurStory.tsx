import React from "react";

const AboutOurStory: React.FC = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-6 md:py-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative">

        {/* Green Vector Line */}
        <div className="absolute left-0 right-0  pointer-events-none z-0">
          <img
            src="/assets/images/about/GreenVectorLine.svg"
            alt=""
            className="w-full object-contain opacity-80"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">

          {/* Heading Wrapper */}
          <div className="relative max-w-[1100px]">

            {/* Green Quote – aligned with heading start */}
            <div className="absolute -left-10 top-[10px]">
              <img
                src="/assets/images/about/GreenQuotes.svg"
                alt=""
                className="w-[44px]"
              />
            </div>

            <h2 className="text-[28px] mt-8 md:text-[36px] lg:text-[44px] font-bold text-[#3D3E96] leading-snug">
              Access to clean water is a human right, and<br/> technology can make it possible for everyone.
            </h2>
             <p className="text-center text-[#58585B] mb-12 max-w-3xl mx-auto text-[22.02px] mt-5 font-medium">
            Advancing water purification through membrane technology.
            </p>

            {/* Blue Quote – aligned with heading end */}
            <div className="absolute -right-20 top-[82px]">
              <img
                src="/assets/images/about/BlueQuotes.svg"
                alt=""
                className="w-[168px] rotate-[180] opacity-60"
              />
            </div>
          </div>

          {/* Logo */}
          <div className="mt-10 mb-6 w-[200px] md:w-[240px]">
            <img
              src="/assets/images/about/AboutLogo.svg"
              alt="Hi-Tech Logo"
              className="w-full object-contain"
            />
          </div>

          {/* Text */}
          <div className="max-w-[900px] space-y-6 text-center">
            <p className="text-[20px] md:text-[18px] font-medium text-[#58585B] leading-relaxed">
              {/* Our story began in 1995 in India, driven by this mission. What started as a vision soon grew
              into a commitment—to engineer solutions that combine innovation with real-world impact. */}
              Hi-Tech Membranes is a dedicated reverse osmosis membrane manufacturer focused on delivering reliable water purification solutions for diverse applications worldwide.
            </p>

            <p className="text-[20px] md:text-[18px] font-medium text-[#58585B] leading-relaxed">
              With decades of experience in membrane manufacturing, we support customers across residential, commercial, industrial, and desalination sectors through consistent performance, controlled processes, and application-driven design.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOurStory;

import React, { useState, useEffect } from 'react';
import { useTranslateContent } from "../../hooks/useTranslateContent"; // adjust path

const AwardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('awards-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="awards-section" className="py-16 bg-white overflow-hidden relative">
      <div className="mx-[40px] lg:mx-[80px] 2xl:mr-[112px] max-w-8xl relative">

        {/* Heading */}
        <div
          className={`text-left mb-12 transition-all duration-350 ease-out ${
            isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-4" style={{ fontWeight: '400' }}>
            {useTranslateContent("Exceptional Quality that").translatedText}
          </h2>
          <h2 className="text-5xl font-bold text-blue-900 mb-8" style={{ fontWeight: '400' }}>
            {useTranslateContent("can't be beaten").translatedText}
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-24 items-center">
          {/* LEFT SIDE */}
          <div
            className={`flex flex-col items-center transition-all duration-350 ease-out ${
              isVisible ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center w-36 h-40 sm:w-40 sm:h-48 md:w-44 md:h-52 lg:w-48 lg:h-56 xl:w-56 xl:h-64">
                  <img src="/assets/images/award1.png" alt={useTranslateContent("Award 1").translatedText} className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center w-36 h-40 sm:w-40 sm:h-48 md:w-44 md:h-52 lg:w-48 lg:h-56 xl:w-56 xl:h-64">
                  <img src="/assets/images/award2.png" alt={useTranslateContent("Award 2").translatedText} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`flex flex-col items-center transition-all duration-350 ease-out ${
              isVisible ? 'transform translate-x-0 opacity-100' : 'transform translate-x-20 opacity-0'
            }`}
          >
            <div className="flex gap-16 mb-8">
              <div className="w-50 h-68">
                <img src="/assets/images/certificate1.png" alt={useTranslateContent("Certificate 1").translatedText} className="w-full h-full object-contain shadow-lg rounded" />
              </div>
              <div className="w-50 h-68">
                <img src="/assets/images/certificate2.png" alt={useTranslateContent("Certificate 2").translatedText} className="w-full h-full object-contain shadow-lg rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

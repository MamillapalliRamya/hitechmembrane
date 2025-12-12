import React, { useState, useEffect } from 'react';

const AwardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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

        {/* IMAGE 1 — iso_4 */}
        <img
          src="/assets/images/isometrics/iso_4.svg"
          alt=""
          className={`absolute w-[334px] h-auto object-contain pointer-events-none transition-all ease-out
            ${
              isVisible
                ? 'opacity-100 animate-[diagonalIn_1s_ease-out_0s_1_forwards,bounceSideOnce_0.6s_ease-in-out_1.1s_1]'
                : 'opacity-0'
            }`}
          style={{
            left: '-95px',
            top: '-23px',
          }}
        />

       
        <img
          src="/assets/images/isometrics/iso_5.svg"
          alt=""
          className={`absolute w-[160px] h-auto object-contain pointer-events-none transition-all ease-out 
            ${
              isVisible
                ? 'opacity-100 animate-[diagonalIn_1s_ease-out_0s_1_forwards,bounceSideOnce_0.6s_ease-in-out_1.4s_1]'
                : 'opacity-0'
            }`}
          style={{
            left: '-187px',
            top: '129px',
          }}
        />

        
        <img
          src="/assets/images/isometrics/iso_5.svg"
          alt=""
          className={`absolute w-[180px] h-auto object-contain pointer-events-none transition-all ease-out
            ${
              isVisible
                ? 'opacity-100 animate-[diagonalIn_1s_ease-out_0s_1_forwards,bounceSideOnce_0.6s_ease-in-out_1.7s_1]'
                : 'opacity-0'
            }`}
          style={{
            left: '-105px',
            top: '241px',
          }}
        />

        {/* Heading */}
        <div
          className={`text-left mb-12 transition-all duration-350 ease-out ${
            isVisible
              ? 'transform translate-y-0 opacity-100'
              : 'transform -translate-y-20 opacity-0'
          }`}
        >
          <h2
            className="text-5xl font-bold text-blue-900 mb-8"
            style={{ fontWeight: '400' }}
          >
            Exceptional Quality that<br />can't be beaten
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24 items-center">

          {/* LEFT SIDE */}
          <div
            className={`flex flex-col items-center transition-all duration-350 ease-out ${
              isVisible
                ? 'transform translate-x-0 opacity-100'
                : 'transform -translate-x-20 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center w-36 h-40 sm:w-40 sm:h-48 md:w-44 md:h-52 lg:w-48 lg:h-56 xl:w-56 xl:h-64">
                  <img
                    src="/assets/images/award1.png"
                    alt="Award 1"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center w-36 h-40 sm:w-40 sm:h-48 md:w-44 md:h-52 lg:w-48 lg:h-56 xl:w-56 xl:h-64">
                  <img
                    src="/assets/images/award2.png"
                    alt="Award 2"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

         
          <div
            className={`flex flex-col items-center transition-all duration-350 ease-out ${
              isVisible
                ? 'transform translate-x-0 opacity-100'
                : 'transform translate-x-20 opacity-0'
            }`}
          >
            <div className="flex gap-16 mb-8">
              <div className="w-50 h-68">
                <img
                  src="/assets/images/certificate1.png"
                  alt="Certificate 1"
                  className="w-full h-full object-contain shadow-lg rounded"
                />
              </div>
              <div className="w-50 h-68">
                <img
                  src="/assets/images/certificate2.png"
                  alt="Certificate 2"
                  className="w-full h-full object-contain shadow-lg rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes diagonalIn {
          0% {
            transform: translate(-200px, 200px) scale(0.9);
            opacity: 0;
          }
          70% {
            transform: translate(10px, -10px) scale(1.05);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.25;
          }
        }

        /* One-time horizontal bounce (600ms total) */
        @keyframes bounceSideOnce {
          0% { transform: translateX(0); }
          50% { transform: translateX(8px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default AwardsSection;

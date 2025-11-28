import React, { useState, useEffect } from 'react';
import image1 from "../../../src/assets/images/wetransfer_hitech/pipes.png";

const AwardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBounce, setShowBounce] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start bounce effect after pipe formation is complete
          setTimeout(() => {
            setShowBounce(true);
          }, 1500); 
        }
      },
      { threshold: 0.3 }
    );

   

    const element = document.getElementById('awards-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="awards-section" className="py-16 bg-white overflow-hidden relative">
      <div className="mx-[40px] lg:mx-[80px] 2xl:mr-[112px] max-w-8xl relative">
        
       
{/* <img
  src="/assets/images/isometrics/iso_4.svg"
  alt=""
  className={`absolute w-[334px] h-auto object-contain pointer-events-none transition-all ease-out
    ${isVisible ? 'opacity-100 animate-[diagonalIn_1s_ease-out_0s_1_forwards,bounceSlight_0.6s_ease-in-out_1.2s_1]' : 'opacity-0'}`}
  style={{
    left: '-95px',
    top: '-23px',
  }}
/>


<img
  src="/assets/images/isometrics/iso_6.svg"
  alt=""
  className={`absolute w-[47px] h-auto object-contain pointer-events-none transition-all ease-out
    ${isVisible ? ' animate-[diagonalIn_1s_ease-out_0.4s_1_forwards,bounceSlight_0.6s_ease-in-out_1.6s_1]' : 'opacity-0'}`}
  style={{
    left: '-83px',
    top: '129px',
  }}
/> */}


{/* <img
  src="/assets/images/isometrics/iso_5.svg"
  alt=""
  className={`absolute w-[180px] h-auto object-contain pointer-events-none transition-all ease-out
    ${isVisible ? 'opacity-100 animate-[diagonalIn_1s_ease-out_0.8s_1_forwards,bounceSlight_0.6s_ease-in-out_2s_1]' : 'opacity-0'}`}
  style={{
    left: '-105px',
    top: '241px',
  }}
/> */}


        {/* Heading - comes from top */}
        <div 
          className={`text-left mb-12 transition-all duration-350 ease-out ${
            isVisible 
              ? 'transform translate-y-0 opacity-100' 
              : 'transform -translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-8" style={{fontWeight:"400"}}>
            Exceptional Quality that<br />can't be beaten
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24 items-center">
          <div 
            className={`flex flex-col items-center transition-all duration-350 ease-out ${
              isVisible 
                ? 'transform translate-x-0 opacity-100' 
                : 'transform -translate-x-20 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div className="flex flex-col items-center">
                <div className="
            mb-4 
            flex items-center justify-center
            w-36 h-40
            sm:w-40 sm:h-48
            md:w-44 md:h-52
            lg:w-48 lg:h-56
            xl:w-56 xl:h-64
          "
        >
                  <img 
                    src="/assets/images/award1.png" 
                    alt="Water Digest Award"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="
            mb-4 
            flex items-center justify-center
            w-36 h-40       /* mobile */
            sm:w-40 sm:h-48 /* small screens */
            md:w-44 md:h-52 /* tablets */
            lg:w-48 lg:h-56 /* laptops */
            xl:w-56 xl:h-64 /* large screens */
          "
        >
                  <img 
                    src="/assets/images/award2.png" 
                    alt="Golden Star Trophy Award"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* <button className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded hover:bg-blue-600 hover:text-white transition-colors">
              View Awards
            </button> */}
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
                  alt="CE Certificate 1"
                  className="w-full h-full object-contain shadow-lg rounded"
                />
              </div>
              <div className="w-50 h-68">
                <img 
                  src="/assets/images/certificate2.png" 
                  alt="CE Certificate 2"
                  className="w-full h-full object-contain shadow-lg rounded"
                />
              </div>
            </div>
            
            {/* <button className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded hover:bg-blue-600 hover:text-white transition-colors">
              View Certifications
            </button> */}
          </div>
          
        </div>
      </div>

      {/* Custom Bounce Animation - Opposite to growth direction */}
      <style>{`
        @keyframes diagonalIn {
          0% {
            transform: translate(-200px, 200px) scale(0.9);
            opacity: 0;
          }
          70% {
            transform: translate(10px, -10px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }

        @keyframes bounceSlight {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-diagonal-in {
          animation: diagonalIn 1.2s ease-out forwards;
        }
        
        .animate-bounce-slight {
          animation: bounceSlight 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AwardsSection;
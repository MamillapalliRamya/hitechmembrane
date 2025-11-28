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
      <div className="mx-[80px] max-w-8xl px-4 sm:px-6 lg:px-4 relative">
        
        {/* Pipe Animation - Coming from bottom-left moving upward diagonally */}
        {/* <img
          src={image1}
          alt="Pipes"
          className={`absolute w-[400px] h-auto z-10 object-contain transition-all duration-1500 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } ${showBounce ? 'animate-custom-bounce' : ''}`}
         style={{
            left: isVisible ? '0' : '-400px', // Move from left to final position
            top: isVisible ? '50%' : '80%', // Move from bottom area to middle
            transform: isVisible 
              ? 'translateY(-120%) scaleX(-1.2) rotate(84deg)' // Final position
              : 'translateY(-50%) scaleX(-1.2) rotate(84deg)', // Start position (less Y offset)
            transformOrigin: 'left center',
            transitionProperty: 'left, top, transform, opacity',
            transitionDuration: '1.5s',
            transitionTimingFunction: 'ease-in-out',
            opacity: '0.3',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div 
            className={`flex flex-col items-center transition-all duration-350 ease-out ${
              isVisible 
                ? 'transform translate-x-0 opacity-100' 
                : 'transform -translate-x-20 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div className="flex flex-col items-center">
                <div className="mb-4 w-40 h-40 flex items-center justify-center" style={{width:"16rem", height:"18rem"}}>
                  <img 
                    src="/assets/images/award1.png" 
                    alt="Water Digest Award"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 w-40 h-40 flex items-center justify-center" style={{width:"16rem", height:"18rem"}}>
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
        @keyframes bounceOpposite {
          0% {
            left: 0;
            top: 50%;
            transform: translateY(-120%) scaleX(-1.2) rotate(84deg);
          }
          50% {
            left: -30px;
            top: 55%;
            transform: translateY(-115%) scaleX(-1.2) rotate(84deg);
          }
          100% {
            left: 0;
            top: 50%;
            transform: translateY(-120%) scaleX(-1.2) rotate(84deg);
          }
        }
        
        .animate-custom-bounce {
          animation: bounceOpposite 1.5s ease-in-out 1 forwards;
        }
      `}</style>
    </section>
  );
};

export default AwardsSection;
import React, { useState, useEffect } from 'react';
import image1 from "../../../src/assets/images/wetransfer_hitech/pipes.png";

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 relative">
        
        {/* Pipe Animation - Growing from middle left to right with rotation */}
        <img
          src={image1}
          alt="Pipes"
          className={`absolute top-1/2 left-0 w-[400px] h-auto z-10 object-contain transition-all duration-1500 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
         style={{
            transform: 'translateY(-120%) scaleX(-1.2) rotate(84deg)', // Added rotation
            transformOrigin: 'left center', // Rotation from left center point
            clipPath: isVisible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)', // Animation left to right
            transitionProperty: 'clip-path, opacity',
            transitionDuration: '1.5s',
            transitionTimingFunction: 'ease-in-out',
            opacity: '0.3', // Make pipe more subtle
            // Reduce clarity and prominence
          }}
        />

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Awards Side - comes from left */}
          <div 
            className={`flex flex-col items-center transition-all duration-350 ease-out ${
              isVisible 
                ? 'transform translate-x-0 opacity-100' 
                : 'transform -translate-x-20 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-8 mb-16">
              {/* Award 1 - Water Digest Trophy */}
              <div className="flex flex-col items-center">
                <div className="mb-4 w-40 h-40 flex items-center justify-center" style={{width:"16rem", height:"18rem"}}>
                  <img 
                    src="/assets/images/award1.png" 
                    alt="Water Digest Award"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Award 2 - Golden Star Trophy */}
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
            
            <button className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded hover:bg-blue-600 hover:text-white transition-colors">
              View Awards
            </button>
          </div>
          
          {/* Certifications Side - comes from right */}
          <div 
            className={`flex flex-col items-center transition-all duration-350 ease-out ${
              isVisible 
                ? 'transform translate-x-0 opacity-100' 
                : 'transform translate-x-20 opacity-0'
            }`}
          >
            <div className="flex gap-16 mb-8">
              {/* Certificate 1 */}
              <div className="w-50 h-68">
                <img 
                  src="/assets/images/certificate1.png" 
                  alt="CE Certificate 1"
                  className="w-full h-full object-contain shadow-lg rounded"
                />
              </div>
              
              {/* Certificate 2 */}
              <div className="w-50 h-68">
                <img 
                  src="/assets/images/certificate2.png" 
                  alt="CE Certificate 2"
                  className="w-full h-full object-contain shadow-lg rounded"
                />
              </div>
            </div>
            
            <button className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded hover:bg-blue-600 hover:text-white transition-colors">
              View Certifications
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
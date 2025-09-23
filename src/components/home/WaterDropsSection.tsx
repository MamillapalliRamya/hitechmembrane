import React, { useState, useEffect } from 'react';

const WaterDropSection: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Wait for video to play for a bit before showing text
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000); // Adjust timing as needed (2 seconds delay)

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="waterdrop-section" 
      className="relative h-screen flex items-center justify-center overflow-hidden" 
    > 
      
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        style={{ mixBlendMode: "screen" }}
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/assets/videos/waterdrops_loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div 
        className={`text-center px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 transition-all duration-1000 ease-out ${
          showText 
            ? 'transform translate-y-0 opacity-100' 
            : 'transform translate-y-full opacity-0'
        }`}
        
      > 
        <h1 
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight transition-all duration-1000 ease-out ${
            showText ? 'delay-200' : ''
          }`}
          style={{ 
            color: 'black', 
            fontFamily: 'Diodrum Cyrillic',
            transform: showText ? 'translateY(0)' : 'translateY(50px)',
            opacity: showText ? 1 : 0
          }}
        > 
          Purifying millions of gallons, 
        </h1> 
        <h1 
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight mt-2 transition-all duration-1000 ease-out ${
            showText ? 'delay-500' : ''
          }`}
          style={{ 
            color: 'black', 
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            transform: showText ? 'translateY(0)' : 'translateY(50px)',
            opacity: showText ? 1 : 0
          }}
        > 
          Powering a sustainable future. 
        </h1> 
      </div> 
    </section> 
  ); 
}; 

export default WaterDropSection;
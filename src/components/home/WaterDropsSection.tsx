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
      className="relative h-screen flex items-center justify-center overflow-hidden" 
      style={{ backgroundColor: '#121372' }}   
    > 
      {/* Background video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        style={{ mixBlendMode: "screen", height: '128%', paddingTop: '88px' }}
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/assets/videos/waterdrops_vedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text content with slide-up animation */}
      <div 
        className={`text-center px-4 relative z-10 transition-all duration-1000 ease-out ${
          showText 
            ? 'transform translate-y-0 opacity-100' 
            : 'transform translate-y-full opacity-0'
        }`}
        style={{marginTop: '180px'}}
      > 
        <h1 
          className={`text-3xl text-[48px] md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-1000 ease-out ${
            showText ? 'delay-200' : ''
          }`}
          style={{ 
            color: 'black', 
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            transform: showText ? 'translateY(0)' : 'translateY(50px)',
            opacity: showText ? 1 : 0
          }}
        > 
          Purifying millions of gallons, 
        </h1> 
        <h2 
          className={`text-3xl text-[48px] md:text-4xl lg:text-5xl font-bold leading-tight mt-2 transition-all duration-1000 ease-out ${
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
        </h2> 
      </div> 
    </section> 
  ); 
}; 

export default WaterDropSection;
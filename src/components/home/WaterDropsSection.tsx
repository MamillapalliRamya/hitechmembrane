import React, { useState, useEffect } from 'react';

const WaterDropSection: React.FC = () => {
  const [textState, setTextState] = useState<'hidden' | 'visible' | 'exit'>('hidden');

  useEffect(() => {
    const runAnimation = () => {
      // Reset to hidden
      setTextState('hidden');
      
      // Show text after 3 seconds
      const showTimer = setTimeout(() => {
        setTextState('visible');
      }, 3000);

      // Hide text after 8.5 seconds
      const hideTimer = setTimeout(() => {
        setTextState('exit');
      }, 8300);

      // Loop back after animation completes (add small buffer for exit animation)
      const loopTimer = setTimeout(() => {
        runAnimation();
      }, 11800); // Total cycle time

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
        clearTimeout(loopTimer);
      };
    };

    const cleanup = runAnimation();

    return cleanup;
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
        className={`text-center px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 transition-all duration-300 ease-out ${
          textState === 'visible' 
            ? 'transform translate-y-0 opacity-100' 
            : textState === 'exit'
            ? 'transform -translate-y-full opacity-0'
            : 'transform translate-y-full opacity-0'
        }`}
      > 
        <h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight"
          style={{ 
            color: 'black', 
            fontFamily: 'Diodrum Cyrillic',
          }}
        > 
          Purifying millions of gallons, 
        </h1> 
        <h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight mt-2"
          style={{ 
            color: 'black', 
            fontFamily: 'Diodrum Cyrillic, sans-serif',
          }}
        > 
          Powering a sustainable future. 
        </h1> 
      </div> 
    </section> 
  ); 
}; 

export default WaterDropSection;
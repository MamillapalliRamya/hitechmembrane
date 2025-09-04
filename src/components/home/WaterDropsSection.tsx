import React from 'react'; 

const WaterDropSection: React.FC = () => { 
  return ( 
    <section 
      className="relative h-screen flex items-center justify-center" 
      style={{ backgroundColor: '#121372' }}   // <-- your color
    > 
      {/* Background video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        style={{ mixBlendMode: "screen" }}   // <-- makes black areas show as #4145A1
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/assets/videos/WaterDrops.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-center px-4 relative z-10"> 
        <h1 
          className="text-4xl text-[48px] md:text-5xl lg:text-6xl font-light leading-tight" 
          style={{ color: '#a3d977', fontFamily: 'Diodrum Cyrillic, sans-serif' }}
        > 
          Purifying millions of gallons, 
        </h1> 
        <h2 
          className="text-4xl text-[48px] md:text-5xl lg:text-6xl font-light leading-tight mt-2" 
          style={{ color: '#a3d977', fontFamily: 'Diodrum Cyrillic, sans-serif' }}
        > 
          Powering a sustainable future. 
        </h2> 
      </div> 
    </section> 
  ); 
}; 

export default WaterDropSection;

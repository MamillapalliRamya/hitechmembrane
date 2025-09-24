import React, { useState, useEffect, useCallback } from 'react';

const HeroSection: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadError, setImageLoadError] = useState<{ [key: string]: boolean }>({});
  const [isSwapped, setIsSwapped] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Data for the image blocks
  const imageBlocks = [
    {
      id: 1,
      images: [
        "/assets/images/HeroSecimg3.png",
        "/assets/images/HeroSecimg4.jpg",
        "/assets/images/HeroSecimg5.png",
      ],
      title: "Water Purification Systems"
    }
  ];

  // Image cycling effect with block swapping
  useEffect(() => {
    if (imageBlocks[0].images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageBlocks[0].images.length);
      setIsSwapped(prev => !prev);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [imageBlocks]);

  // Video autoplay effect + trigger text animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoPlaying(true);
      setAnimateText(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  

  // Handle image load errors
  const handleImageError = useCallback((imagePath: string) => {
    setImageLoadError(prev => ({ ...prev, [imagePath]: true }));
  }, []);

  // Get responsive dimensions based on screen size
  const getImageBlockDimensions = () => {
    if (windowWidth >= 1440) { // XL screens
      return {
        large: { width: 380, height: 480, borderRadius: { tl: 8, tr: 90, bl: 90, br: 6 }, border: 8 },
        small: { width: 250, height: 400, borderRadius: { tl: 6, tr: 70, bl: 70, br: 6 }, border: 6 },
        positions: { 
          largeRight: 180, 
          smallRight: -200,
          rightMargin: 100 
        }
      };
    } else if (windowWidth >= 1280) { // Large screens
      return {
        large: { width: 340, height: 430, borderRadius: { tl: 8, tr: 80, bl: 80, br: 6 }, border: 7 },
        small: { width: 220, height: 360, borderRadius: { tl: 6, tr: 60, bl: 60, br: 6 }, border: 5 },
        positions: { 
          largeRight: 160, 
          smallRight: -180,
          rightMargin: 80 
        }
      };
    } else if (windowWidth >= 1024) { // Medium-large screens
      return {
        large: { width: 290, height: 370, borderRadius: { tl: 7, tr: 70, bl: 70, br: 6 }, border: 6 },
        small: { width: 190, height: 300, borderRadius: { tl: 5, tr: 50, bl: 50, br: 5 }, border: 4 },
        positions: { 
          largeRight: 120, 
          smallRight: -150,
          rightMargin: 60 
        }
      };
    } else if (windowWidth >= 768) { // Tablet
      return {
        large: { width: 240, height: 310, borderRadius: { tl: 6, tr: 60, bl: 60, br: 5 }, border: 5 },
        small: { width: 160, height: 250, borderRadius: { tl: 4, tr: 40, bl: 40, br: 4 }, border: 3 },
        positions: { 
          largeRight: 80, 
          smallRight: -120,
          rightMargin: 40 
        }
      };
    } else { // Mobile
      return {
        mobile: { 
          width: 130, 
          height: 170, 
          borderRadius: 16, 
          border: 3,
          bottomMargin: windowWidth >= 480 ? 120 : 100 // More space on larger mobiles
        }
      };
    }
  };

  const dimensions = getImageBlockDimensions();
  
  return (
    <section className="relative overflow-hidden" style={{ height: windowWidth < 768 ? '120vh' : '100vh' }}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videoPlaying && (
          <div className="w-full h-full">
            <div className="absolute inset-0 mix-blend-multiply"></div>
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              onError={(e) => {
                console.error('Video failed to load:', e);
                setVideoPlaying(false);
              }}
            >
              <source src="/assets/videos/home_page_bg_animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      {/* Fallback background */}
      {!videoPlaying && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
      )}

      {/* Text Content Overlay with responsive animation */}
      <div
        className={`relative z-20 px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center transition-all duration-500 ease-out
          ${animateText ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        `}
        style={{ 
          marginLeft: windowWidth >= 1024 ? "80px" : "0px",
          maxWidth: windowWidth >= 1440 ? "700px" : 
                   windowWidth >= 1280 ? "650px" : 
                   windowWidth >= 1024 ? "580px" : 
                   windowWidth >= 768 ? "520px" : 
                   "100%",
          paddingRight: windowWidth >= 768 ? "40px" : "0px"
        }}
      >
        <h1 className={`font-semibold leading-tight mb-3 sm:mb-4 text-white ${
          windowWidth >= 1440 ? 'text-5xl xl:text-6xl' :
          windowWidth >= 1280 ? 'text-4xl lg:text-5xl' :
          windowWidth >= 1024 ? 'text-3xl md:text-4xl' :
          windowWidth >= 768 ? 'text-2xl sm:text-3xl' :
          'text-xl sm:text-2xl'
        }`}>
          Clean Water Today<br />Better Future Tomorrow
        </h1>

        <p className={`text-gray-100 mb-4 sm:mb-6 leading-relaxed ${
          windowWidth >= 1440 ? 'text-xl lg:text-2xl max-w-[650px]' :
          windowWidth >= 1280 ? 'text-lg lg:text-xl max-w-[600px]' :
          windowWidth >= 1024 ? 'text-base md:text-lg max-w-[520px]' :
          windowWidth >= 768 ? 'text-sm sm:text-base max-w-[480px]' :
          'text-sm max-w-full pr-4'
        }`}>
          Hi-tech membranes purify over 10 million gallons of water per minute globally, 
          enabling reuse and safe access to ground and surface water. Our RO Technology 
          addresses various water and sustainability challenges.
        </p>

        {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 lg:mt-8">
          <button 
            className={`flex items-center justify-center relative overflow-hidden bg-[#A8CF45] text-[#3D3E96] transition-all duration-500 before:content-[''] before:absolute before:inset-0 before:bg-[#3D3E96] before:-translate-y-full before:transition-transform before:duration-500 hover:before:translate-y-0 hover:text-[#A8CF45] font-medium rounded-[12px] sm:rounded-[16px] ${
              windowWidth >= 1280 ? 'w-full sm:w-[283px] h-[60px] lg:h-[74px] text-[22px] lg:text-[28px]' :
              windowWidth >= 1024 ? 'w-full sm:w-[260px] h-[55px] lg:h-[65px] text-[20px] lg:text-[24px]' :
              windowWidth >= 768 ? 'w-full sm:w-[240px] h-[50px] sm:h-[55px] text-[18px] sm:text-[20px]' :
              'w-full h-[45px] text-[16px]'
            }`}
            aria-label="Get Quote Now"
          >
            <span className="relative z-10">Get Quote Now</span>
          </button>
        </div> */}
      </div>

      {/* Image Blocks - Responsive */}
      {imageBlocks[0].images.length > 0 && (
        <>
          {/* Desktop and Tablet Image Blocks (md and above) */}
          {windowWidth >= 768 && dimensions.large && (
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 z-30"
              style={{ right: `${dimensions.positions.rightMargin}px` }}
            >
              {/* First Image Block */}
              <div 
                className="absolute cursor-pointer overflow-hidden"
                style={{
                  width: isSwapped ? `${dimensions.small.width}px` : `${dimensions.large.width}px`,
                  height: isSwapped ? `${dimensions.small.height}px` : `${dimensions.large.height}px`,
                  right: isSwapped ? `${dimensions.positions.smallRight}px` : `${dimensions.positions.largeRight}px`,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  borderTopLeftRadius: isSwapped ? `${dimensions.small.borderRadius.tl}px` : `${dimensions.large.borderRadius.tl}px`,
                  borderTopRightRadius: isSwapped ? `${dimensions.small.borderRadius.tr}px` : `${dimensions.large.borderRadius.tr}px`,
                  borderBottomRightRadius: `${dimensions.large.borderRadius.br}px`,
                  borderBottomLeftRadius: isSwapped ? `${dimensions.small.borderRadius.bl}px` : `${dimensions.large.borderRadius.bl}px`,
                  borderWidth: isSwapped ? `${dimensions.small.border}px` : `${dimensions.large.border}px`,
                  borderColor: 'white',
                  borderStyle: 'solid',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  transition: 'all 1s ease-in-out',
                  zIndex: isSwapped ? 10 : 20
                }}
              >
                {imageBlocks[0].images.map((image, index) => (
                  <div
                    key={`main-${index}`}
                    className={`absolute transition-all duration-700 ease-in-out ${
                      index === currentImageIndex 
                        ? 'opacity-100 transform scale-100' 
                        : 'opacity-0 transform scale-95'
                    }`}
                    style={{ inset: 0 }}
                  >
                    {imageLoadError[image] ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-400"></div>
                    ) : (
                      <img 
                        src={image}
                        alt={`Water purification system ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(image)}
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Second Image Block */}
              <div 
                className="absolute cursor-pointer overflow-hidden"
                style={{
                  width: isSwapped ? `${dimensions.large.width}px` : `${dimensions.small.width}px`,
                  height: isSwapped ? `${dimensions.large.height}px` : `${dimensions.small.height}px`,
                  right: isSwapped ? `${dimensions.positions.largeRight}px` : `${dimensions.positions.smallRight}px`,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  borderTopLeftRadius: isSwapped ? `${dimensions.large.borderRadius.tl}px` : `${dimensions.small.borderRadius.tl}px`,
                  borderTopRightRadius: isSwapped ? `${dimensions.large.borderRadius.tr}px` : `${dimensions.small.borderRadius.tr}px`,
                  borderBottomRightRadius: `${dimensions.small.borderRadius.br}px`,
                  borderBottomLeftRadius: isSwapped ? `${dimensions.large.borderRadius.bl}px` : `${dimensions.small.borderRadius.bl}px`,
                  borderWidth: isSwapped ? `${dimensions.large.border}px` : `${dimensions.small.border}px`,
                  borderColor: 'white',
                  borderStyle: 'solid',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  transition: 'all 1s ease-in-out',
                  zIndex: isSwapped ? 20 : 10
                }}
              >
                <div className="relative w-full h-full">
                  {imageBlocks[0].images.map((image, index) => {
                    const displayIndex = (currentImageIndex + 1) % imageBlocks[0].images.length;
                    return (
                      <div
                        key={`secondary-${index}`}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          index === displayIndex
                            ? 'opacity-100 transform scale-100' 
                            : 'opacity-0 transform scale-95'
                        }`}
                      >
                        <img 
                          src={image}
                          alt={`Water system ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(image)}
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Mobile Image Display (below md) - Positioned below button with proper spacing */}
          {windowWidth < 768 && dimensions.mobile && (
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 z-30"
              style={{ 
                bottom: '10vh'
              }}
            >
              <div className="flex justify-center space-x-3">
                {/* First mobile image block with original curved design */}
                <div 
                  className="relative cursor-pointer overflow-hidden border-white border-solid shadow-xl"
                  style={{
                    width: `${dimensions.mobile.width}px`,
                    height: `${dimensions.mobile.height}px`,
                    borderTopLeftRadius: '6px',
                    borderTopRightRadius: '35px',
                    borderBottomRightRadius: '6px',
                    borderBottomLeftRadius: '35px',
                    borderWidth: `${dimensions.mobile.border}px`,
                  }}
                >
                  {imageBlocks[0].images.map((image, index) => (
                    <div
                      key={`mobile-1-${index}`}
                      className={`absolute transition-all duration-700 ease-in-out ${
                        index === currentImageIndex 
                          ? 'opacity-100 transform scale-100' 
                          : 'opacity-0 transform scale-95'
                      }`}
                      style={{ inset: 0 }}
                    >
                      {imageLoadError[image] ? (
                        <div className="w-full h-full flex items-center justify-center bg-gray-400"></div>
                      ) : (
                        <img 
                          src={image}
                          alt={`Water purification system ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(image)}
                          loading="lazy"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Second mobile image block with original curved design */}
                <div 
                  className="relative cursor-pointer overflow-hidden border-white border-solid shadow-xl"
                  style={{
                    width: `${dimensions.mobile.width - 20}px`,
                    height: `${dimensions.mobile.height - 25}px`,
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '30px',
                    borderBottomRightRadius: '5px',
                    borderBottomLeftRadius: '30px',
                    borderWidth: `${dimensions.mobile.border - 1}px`,
                    marginTop: '12px'
                  }}
                >
                  {imageBlocks[0].images.map((image, index) => {
                    const displayIndex = (currentImageIndex + 1) % imageBlocks[0].images.length;
                    return (
                      <div
                        key={`mobile-2-${index}`}
                        className={`absolute transition-all duration-700 ease-in-out ${
                          index === displayIndex
                            ? 'opacity-100 transform scale-100' 
                            : 'opacity-0 transform scale-95'
                        }`}
                        style={{ inset: 0 }}
                      >
                        {imageLoadError[image] ? (
                          <div className="w-full h-full flex items-center justify-center bg-gray-400"></div>
                        ) : (
                          <img 
                            src={image}
                            alt={`Water system ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(image)}
                            loading="lazy"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default HeroSection;
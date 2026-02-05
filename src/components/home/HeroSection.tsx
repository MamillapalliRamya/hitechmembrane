import React, { useState, useEffect, useCallback } from 'react';
import { useTranslateContent } from '../../hooks/useTranslateContent';


const HeroSection: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadError, setImageLoadError] = useState<{ [key: string]: boolean }>({});
  const [isSwapped, setIsSwapped] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const heroTitle = "Advanced RO Membrane Solutions for a Thirsty World";
  const heroDesc = "High-performance reverse osmosis membranes engineered for industrial, commercial, and municipal water treatment applications worldwide.";
  const herobutton = "Talk to Our Experts"
  const { translatedText: translatedTitle } = useTranslateContent(heroTitle);
  const { translatedText: translatedDesc } = useTranslateContent(heroDesc);
  const { translatedText: translatedButton } = useTranslateContent(herobutton);
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
    if (windowWidth >= 1920) { // FHD screens
      return {
        large: { width: 420, height: 520, borderRadius: { tl: 8, tr: 100, bl: 100, br: 6 }, border: 8 },
        small: { width: 280, height: 440, borderRadius: { tl: 6, tr: 80, bl: 80, br: 6 }, border: 6 },
        positions: {
          largeRight: 220,
          smallRight: -240,
          rightMargin: 140
        }
      };
    } else if (windowWidth >= 1440) { // XL screens
      return {
        large: { width: 380, height: 480, borderRadius: { tl: 8, tr: 90, bl: 90, br: 6 }, border: 8 },
        small: { width: 250, height: 400, borderRadius: { tl: 6, tr: 70, bl: 70, br: 6 }, border: 6 },
        positions: {
          largeRight: 120,
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
          bottomMargin: windowWidth >= 480 ? 120 : 100
        }
      };
    }
  };

  const dimensions = getImageBlockDimensions();

  return (
    <section
      className="relative overflow-hidden bg-[#06368F]"
      style={{ height: windowWidth < 768 ? '80vh' : '100vh' }}
    >

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
              <source src="/assets/videos/Homepage_BackgroundRO.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      {/* Fallback background */}
      {!videoPlaying && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
      )}

      <div className="absolute inset-0 z-10 bg-[#0000004D]" />

      {/* Text Content Overlay with responsive animation */}
      <div
        className={`ml-[50px] relative z-20 2xl:px-8 
  ${windowWidth < 768 ? "h-auto mt-[70px]" : "h-full"} 
  flex flex-col justify-center transition-all duration-500 ease-out

          ${animateText ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        `}
        style={{
          marginLeft: windowWidth >= 1290 ? "80px" : "50px",
          maxWidth: windowWidth >= 1920 ? "890px" :
            windowWidth >= 1440 ? "790px" :
              windowWidth >= 1280 ? "650px" :
                windowWidth >= 1024 ? "580px" :
                  windowWidth >= 768 ? "520px" :
                    "100%",
          // paddingRight: windowWidth >= 768 ? "40px" : "0px"
        }}
      >
        <h1 className={`font-semibold leading-tight mb-3 sm:mb-4 text-white ${windowWidth >= 1920 ? 'text-6xl xl:text-7xl' :
          windowWidth >= 1440 ? 'text-5xl xl:text-[54px]' :
            windowWidth >= 1280 ? 'text-4xl lg:text-[48px]' :
              windowWidth >= 1100 ? 'text-3xl md:text-[38px] ml-[40px]' :
                windowWidth >= 1024 ? 'text-3xl md:text-[35px] ml-[40px]' :
                  windowWidth >= 768 ? 'text-2xl sm:text-3xl' :
                    'text-xl sm:text-2xl'
          }`}>
          {translatedTitle}
        </h1>

        <p className={`text-gray-100 mb-4 sm:mb-6 leading-relaxed ${windowWidth >= 1920 ? 'text-xl lg:text-2xl max-w-[700px]' :
          windowWidth >= 1440 ? 'text-xl lg:text-2xl max-w-[650px]' :
            windowWidth >= 1280 ? 'text-lg lg:text-[22px] max-w-[600px]' :
              windowWidth >= 1100 ? 'text-base md:text-[19.2px] max-w-[520px] ml-[40px]' :
                windowWidth >= 1024 ? 'text-base md:text-[18px] max-w-[460px] ml-[40px]' :
                  windowWidth >= 768 ? 'text-sm sm:text-base max-w-[480px]' :
                    'text-sm max-w-full pr-4'
          }`}>
          {translatedDesc}
        </p>
        {windowWidth >= 768 && (
          <a href="/contact">
            <button
              className="
        bg-[#A8CF45] text-[#3E4095]
        rounded-lg font-medium
        text-sm sm:text-base lg:text-lg 2xl:text-[20px] 3xl:text-[22px]
        px-6 py-3 sm:px-8 sm:py-4
        w-max ml-[40px] lg:mx-0
        shadow-lg cursor-pointer
        transform
        transition-all duration-300 ease-in-out
        hover:scale-105
        hover:bg-[#98C135]
      "
            >
              {translatedButton}
            </button>
          </a>
        )}

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
                  borderColor: '#A8CF45',
                  borderStyle: 'solid',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  transition: 'all 1s ease-in-out',
                  zIndex: isSwapped ? 10 : 20
                }}
              >
                {imageBlocks[0].images.map((image, index) => (
                  <div
                    key={`main-${index}`}
                    className={`absolute transition-all duration-700 ease-in-out ${index === currentImageIndex
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
                  borderColor: '#A8CF45',
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
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === displayIndex
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
              className="absolute left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
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
                      className={`absolute transition-all duration-700 ease-in-out ${index === currentImageIndex
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
                        className={`absolute transition-all duration-700 ease-in-out ${index === displayIndex
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
              {/* Mobile Button (NOW BELOW IMAGES) */}
              <a href="/contact" className="mt-4">
                <button
                  className="
      bg-[#A8CF45] text-[#3E4095]
      rounded-lg font-medium
      text-sm
      px-6 py-3
      shadow-lg cursor-pointer
      transform
      transition-all duration-300 ease-in-out
      hover:scale-105
      hover:bg-[#98C135]
    "
                >
                  {translatedButton}
                </button>
              </a>

            </div>
          )}
        </>
      )}
    </section>
  );
};

export default HeroSection;
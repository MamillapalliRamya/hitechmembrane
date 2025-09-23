import React, { useState, useEffect, useCallback } from 'react';

const HeroSection: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadError, setImageLoadError] = useState<{ [key: string]: boolean }>({});
  const [isSwapped, setIsSwapped] = useState(false);
  const [animateText, setAnimateText] = useState(false);

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

  // Responsive styles for image blocks
  const getImageBlockStyles = (isFirst: boolean) => {
    const baseStyles = {
      position: 'absolute' as const,
      cursor: 'pointer',
      overflow: 'hidden',
      borderStyle: 'solid',
      borderColor: 'white',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: 'all 1s ease-in-out',
      top: '50%',
      transform: 'translateY(-50%)',
    };

    // Desktop styles (xl and above)
    if (window.innerWidth >= 1280) {
      return {
        ...baseStyles,
        width: (isFirst ? !isSwapped : isSwapped) ? '409px' : '270px',
        height: (isFirst ? !isSwapped : isSwapped) ? '510px' : '430px',
        right: (isFirst ? !isSwapped : isSwapped) ? '140px' : '-173px',
        borderTopLeftRadius: (isFirst ? !isSwapped : isSwapped) ? '8px' : '6px',
        borderTopRightRadius: (isFirst ? !isSwapped : isSwapped) ? '100px' : '80px',
        borderBottomLeftRadius: (isFirst ? !isSwapped : isSwapped) ? '100px' : '80px',
        borderBottomRightRadius: '6px',
        borderWidth: (isFirst ? !isSwapped : isSwapped) ? '8px' : '6px',
        zIndex: (isFirst ? !isSwapped : isSwapped) ? 20 : 10,
      };
    }
    // Large screens (lg)
    else if (window.innerWidth >= 1024) {
      return {
        ...baseStyles,
        width: (isFirst ? !isSwapped : isSwapped) ? '320px' : '210px',
        height: (isFirst ? !isSwapped : isSwapped) ? '400px' : '340px',
        right: (isFirst ? !isSwapped : isSwapped) ? '60px' : '-120px',
        borderTopLeftRadius: (isFirst ? !isSwapped : isSwapped) ? '8px' : '6px',
        borderTopRightRadius: (isFirst ? !isSwapped : isSwapped) ? '80px' : '60px',
        borderBottomLeftRadius: (isFirst ? !isSwapped : isSwapped) ? '80px' : '60px',
        borderBottomRightRadius: '6px',
        borderWidth: (isFirst ? !isSwapped : isSwapped) ? '6px' : '4px',
        zIndex: (isFirst ? !isSwapped : isSwapped) ? 20 : 10,
      };
    }
    // Medium screens (md)
    else if (window.innerWidth >= 768) {
      return {
        ...baseStyles,
        width: (isFirst ? !isSwapped : isSwapped) ? '280px' : '180px',
        height: (isFirst ? !isSwapped : isSwapped) ? '350px' : '290px',
        right: (isFirst ? !isSwapped : isSwapped) ? '20px' : '-90px',
        borderTopLeftRadius: (isFirst ? !isSwapped : isSwapped) ? '6px' : '4px',
        borderTopRightRadius: (isFirst ? !isSwapped : isSwapped) ? '60px' : '40px',
        borderBottomLeftRadius: (isFirst ? !isSwapped : isSwapped) ? '60px' : '40px',
        borderBottomRightRadius: '4px',
        borderWidth: (isFirst ? !isSwapped : isSwapped) ? '5px' : '3px',
        zIndex: (isFirst ? !isSwapped : isSwapped) ? 20 : 10,
      };
    }
    // Small screens (sm and below)
    else {
      return {
        ...baseStyles,
        width: '140px',
        height: '200px',
        right: isFirst ? '10px' : '-70px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '30px',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '4px',
        borderWidth: '3px',
        zIndex: isFirst ? 20 : 10,
      };
    }
  };
  
  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
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

      {/* Text Content Overlay with responsive positioning */}
      <div
        className={`relative z-20 container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-full flex flex-col justify-center transition-all duration-500 ease-out
          ${animateText ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        `}
        style={{ 
          marginLeft: window.innerWidth >= 1280 ? "80px" : 
                     window.innerWidth >= 1024 ? "60px" : 
                     window.innerWidth >= 768 ? "40px" : "20px",
          maxWidth: window.innerWidth >= 1280 ? "760px" : 
                   window.innerWidth >= 1024 ? "600px" : 
                   window.innerWidth >= 768 ? "500px" : "350px"
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 text-white">
          Clean Water Today<br />Better Future Tomorrow
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 leading-relaxed" 
           style={{fontFamily: "Diodrum Cyrillic" }}>
          Hi-tech membranes purify over 10 million gallons of water per minute globally, 
          enabling reuse and safe access to ground and surface water. Our RO Technology addresses various water and sustainability challenges.
        </p>
      </div>

      {/* Responsive Image Blocks */}
      {imageBlocks[0].images.length > 0 && (
        <div className="absolute right-4 sm:right-8 md:right-12 lg:right-16 top-1/2 transform -translate-y-1/2 z-30">
          {/* First Image Block */}
          <div style={getImageBlockStyles(true)}>
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
                  <div className="w-full h-full flex items-center justify-center bg-gray-400">
                    <span className="text-white text-xs">Image Error</span>
                  </div>
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
          <div style={getImageBlockStyles(false)}>
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
                    {imageLoadError[image] ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-400">
                        <span className="text-white text-xs">Image Error</span>
                      </div>
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

      {/* Mobile-specific overlay to prevent image overflow */}
      <div className="absolute inset-0 pointer-events-none z-40 sm:hidden">
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
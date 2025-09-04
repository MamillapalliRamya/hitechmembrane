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
    }, 300); // fast
    return () => clearTimeout(timer);
  }, []);

  // Handle image load errors
  const handleImageError = useCallback((imagePath: string) => {
    setImageLoadError(prev => ({ ...prev, [imagePath]: true }));
  }, []);

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

      {/* Text Content Overlay with animation */}
      <div
        className={`relative z-20 container px-4 h-full flex flex-col justify-center transition-all duration-500 ease-out
          ${animateText ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        `}
        style={{ marginLeft: "80px", maxWidth: "760px" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Clean Water Today<br />Better Future Tomorrow
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100">
          Hi-tech membranes purify over 10 million gallons of water per minute globally, 
          enabling reuse and safe access to ground and surface water. Our RO Technology addresses various water and sustainability challenges.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button 
            className="w-[240px] sm:w-[283px] h-[60px] sm:h-[74px] text-[22px] sm:text-[28px] font-medium rounded-[16px] flex items-center justify-center relative overflow-hidden bg-[#A8CF45] text-[#3D3E96] transition-all duration-500 before:content-[''] before:absolute before:inset-0 before:bg-[#3D3E96] before:-translate-y-full before:transition-transform before:duration-500 hover:before:translate-y-0 hover:text-[#A8CF45]"
            aria-label="Get Quote Now"
          >
            <span className="relative z-10">Get Quote Now</span>
          </button>
        </div>
      </div>

      {/* Image Blocks (UNCHANGED) */}
      {imageBlocks[0].images.length > 0 && (
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 z-30 bg-white">
          {/* First Image Block */}
          <div 
            className="absolute cursor-pointer overflow-hidden"
            style={{
              width: isSwapped ? '270px' : '409px',
              height: isSwapped ? '430px' : '510px',
              right: isSwapped ? '-173px' : '140px',
              top: '50%',
              transform: 'translateY(-50%)',
              borderTopLeftRadius: isSwapped ? '6px' : '8px',
              borderTopRightRadius: isSwapped ? '80px' : '100px',
              borderBottomRightRadius: '6px',
              borderBottomLeftRadius: isSwapped ? '80px' : '100px',
              borderWidth: isSwapped ? '6px' : '8px',
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
              width: isSwapped ? '409px' : '270px',
              height: isSwapped ? '510px' : '430px',
              right: isSwapped ? '140px' : '-173px',
              top: '50%',
              transform: 'translateY(-50%)',
              borderTopLeftRadius: isSwapped ? '8px' : '6px',
              borderTopRightRadius: isSwapped ? '100px' : '80px',
              borderBottomRightRadius: '6px',
              borderBottomLeftRadius: isSwapped ? '100px' : '80px',
              borderWidth: isSwapped ? '8px' : '6px',
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
    </section>
  );
};

export default HeroSection;

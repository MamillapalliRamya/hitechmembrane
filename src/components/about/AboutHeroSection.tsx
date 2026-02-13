import React, { useEffect, useState } from 'react';

const FIRST_BATCH = [3, 11, 5, 6, 7];   
const SECOND_BATCH = [1, 2, 4, 8, 9, 10, 12, 13, 14];

interface AboutHeroSectionProps {
  about_hero?: {
    id: number;
    about_page_id: number;
    logo: string;
  }[];
  about_hero_images?: {
    id: number;
    hero_id: number;
    image: string;
    alt: string | null;
  }[];
}

const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({ about_hero, about_hero_images }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  // Determine if we're using CMS images or fallback
  const useCMSImages = about_hero_images && about_hero_images.length > 0;
  
  // Get the total number of images to display
  const totalImages = useCMSImages ? about_hero_images.length : 14;

  useEffect(() => {
    // Step 1: show logo first
    setShowLogo(true);

    // Step 2: show ALL first half images at same time
    const firstBatchTimer = setTimeout(() => {
      setVisibleImages(FIRST_BATCH);
    }, 700);

    // Step 3: show ALL second half images at same time
    const secondBatchTimer = setTimeout(() => {
      setVisibleImages([...FIRST_BATCH, ...SECOND_BATCH]);
    }, 1200);

    return () => {
      clearTimeout(firstBatchTimer);
      clearTimeout(secondBatchTimer);
    };
  }, []);

  // Get logo from CMS or use fallback
  const logoUrl = about_hero && about_hero.length > 0 && about_hero[0].logo
    ? (about_hero[0].logo.startsWith('http') ? about_hero[0].logo : `http://65.0.77.32:8000${about_hero[0].logo}`)
    : '/assets/images/about/AboutLogo.svg';

  // Get image URL - if CMS images exist, use them directly by index
  const getImageUrl = (imageNumber: number): string => {
    if (useCMSImages) {
      const index = imageNumber - 1;
      if (index < about_hero_images.length) {
        const cmsImage = about_hero_images[index];
        if (cmsImage && cmsImage.image) {
          return cmsImage.image.startsWith('http') 
            ? cmsImage.image 
            : `http://65.0.77.32:8000${cmsImage.image}`;
        }
      }
    }
    // Fallback to default images
    return `/assets/images/about/AboutHero_${imageNumber}.svg`;
  };

  // Create images object dynamically based on total images
  const images: Record<number | 'logo', string> = {
    logo: logoUrl,
  };

  for (let i = 1; i <= totalImages; i++) {
    images[i] = getImageUrl(i);
  }

  // Layout positions for desktop (supports up to 14 images, will use what's available)
  const desktopPositions = [
    { id: 1, left: '10%', top: '10%', width: '13%', height: '16%' },
    { id: 2, left: '14.5%', top: '30%', width: '9%', height: '20%' },
    { id: 3, left: '12.5%', top: '54%', width: '14%', height: '20%' },
    { id: 4, left: '24%', top: '10%', width: '15.5%', height: '30%' },
    { id: 5, left: '27.5%', top: '44%', width: '14%', height: '20%' },
    { id: 6, left: '26.5%', top: '68%', width: '14%', height: '14%' },
    { id: 7, left: '40.5%', top: '10%', width: '15.5%', height: '14%' },
    { id: 8, left: '42.5%', top: '58%', width: '11.5%', height: '20%' },
    { id: 9, left: '56.5%', top: '10%', width: '15.5%', height: '30%' },
    { id: 10, left: '54.5%', top: '44%', width: '14%', height: '20%' },
    { id: 11, left: '54.5%', top: '68%', width: '14%', height: '14%' },
    { id: 12, left: '73.5%', top: '10%', width: '13%', height: '16%' },
    { id: 13, left: '74.5%', top: '30%', width: '9%', height: '20%' },
    { id: 14, left: '70%', top: '54%', width: '14%', height: '20%' },
  ].slice(0, totalImages); // Only use positions for available images

  // Mobile layout - distribute images across 3 columns
  const getMobileColumnImages = (columnIndex: number): number[] => {
    const allImageIds = Array.from({ length: totalImages }, (_, i) => i + 1);
    // Remove images that will be in center column (logo position)
    const excludeCenter = columnIndex === 1 ? [4, 9] : [];
    
    if (columnIndex === 0) {
      // Left column
      return allImageIds.filter(id => [1, 2, 3].includes(id)).slice(0, 3);
    } else if (columnIndex === 1) {
      // Center column (below logo)
      return allImageIds.filter(id => [4, 9].includes(id));
    } else {
      // Right column
      return allImageIds.filter(id => [12, 13, 14].includes(id)).slice(0, 3);
    }
  };

  // Get alt text for CMS images
  const getAltText = (imageNumber: number): string => {
    if (useCMSImages) {
      const index = imageNumber - 1;
      if (index < about_hero_images.length && about_hero_images[index].alt) {
        return about_hero_images[index].alt!;
      }
    }
    return 'Facility';
  };

  return (
    <>
      <style>{`
        @keyframes logoPop {
          0% { transform: scale(2); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes blinkIn {
          0% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 0.5; }
          100% { opacity: 1; transform: scale(1); }
        }

        .logo-animate {
          animation: logoPop 0.6s ease-out forwards;
        }

        .img-animate {
          opacity: 0;
        }

        .img-visible {
          animation: blinkIn 0.35s ease-out forwards;
        }
      `}</style>

      <section className="w-full py-8 md:py-12 lg:py-16 overflow-hidden mt-[40px] md:mt-0">
        {/* DESKTOP */}
        <div className="hidden lg:block">
          <div className="w-full flex justify-center items-center">
            <div className="relative mx-auto" style={{ width: 'min(1440px, 95vw)', aspectRatio: '1440/600' }}>

              {/* Logo - Center (shows first) */}
              <div
                style={{ position: 'absolute', left: '42.5%', top: '28%', width: '12%', height: '26%' }}
                className={showLogo ? 'logo-animate flex items-center justify-center' : ''}
              >
                <img src={images.logo} alt="Hi-Tech Logo" className="w-full h-full object-contain" />
              </div>

              {/* All images from CMS or fallback */}
              {desktopPositions.map((item) => (
                <div
                  key={item.id}
                  style={{
                    position: 'absolute',
                    left: item.left,
                    top: item.top,
                    width: item.width,
                    height: item.height,
                  }}
                  className={`img-animate ${
                    visibleImages.includes(item.id) ? 'img-visible' : ''
                  } rounded-xl overflow-hidden shadow-md`}
                >
                  <img
                    src={images[item.id]}
                    alt={getAltText(item.id)}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="block lg:hidden px-4">
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-[900px] mx-auto">

            {/* Left Column */}
            <div className="flex flex-col gap-3 md:gap-4">
              {getMobileColumnImages(0).map(id => (
                <div key={id}
                  className={`img-animate ${visibleImages.includes(id) ? 'img-visible' : ''} rounded-lg overflow-hidden shadow-md`}
                >
                  <img 
                    src={images[id]} 
                    alt={getAltText(id)}
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>

            {/* Center Column */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className={showLogo ? 'logo-animate flex items-center justify-center' : ''}>
                <img src={images.logo} alt="Hi-Tech Logo" className="w-full h-full object-contain p-4" />
              </div>
              {getMobileColumnImages(1).map(id => (
                <div key={id}
                  className={`img-animate ${visibleImages.includes(id) ? 'img-visible' : ''} rounded-lg overflow-hidden shadow-md`}
                >
                  <img 
                    src={images[id]} 
                    alt={getAltText(id)}
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3 md:gap-4">
              {getMobileColumnImages(2).map(id => (
                <div key={id}
                  className={`img-animate ${visibleImages.includes(id) ? 'img-visible' : ''} rounded-lg overflow-hidden shadow-md`}
                >
                  <img 
                    src={images[id]} 
                    alt={getAltText(id)}
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;
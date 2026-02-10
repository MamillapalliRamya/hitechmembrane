import React, { useEffect, useState } from 'react';

const FIRST_BATCH = [ 3, 11, 5, 6, 7,];   
const SECOND_BATCH = [1, 2, 4,8, 9, 10, 12, 13, 14];

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

  // Map CMS images to numbered positions or use fallback
  const getImageUrl = (imageNumber: number): string => {
    // If we have CMS images, try to map them
    if (about_hero_images && about_hero_images.length > 0) {
      // Use modulo to cycle through available CMS images
      const index = (imageNumber - 1) % about_hero_images.length;
      const cmsImage = about_hero_images[index];
      if (cmsImage && cmsImage.image) {
        return cmsImage.image.startsWith('http') 
          ? cmsImage.image 
          : `http://65.0.77.32:8000${cmsImage.image}`;
      }
    }
    // Fallback to default images
    return `/assets/images/about/AboutHero_${imageNumber}.svg`;
  };

  const images = {
    1: getImageUrl(1),
    2: getImageUrl(2),
    3: getImageUrl(3),
    4: getImageUrl(4),
    5: getImageUrl(5),
    6: getImageUrl(6),
    7: getImageUrl(7),
    8: getImageUrl(8),
    9: getImageUrl(9),
    10: getImageUrl(10),
    11: getImageUrl(11),
    12: getImageUrl(12),
    13: getImageUrl(13),
    14: getImageUrl(14),
    logo: logoUrl,
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

              {[
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
              ].map((item) => (
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
                    src={images[item.id as keyof typeof images]}
                    alt="Facility"
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

            <div className="flex flex-col gap-3 md:gap-4">
              {[1, 2, 3].map(id => (
                <div key={id}
                  className={`img-animate ${visibleImages.includes(id) ? 'img-visible' : ''} rounded-lg overflow-hidden shadow-md`}
                >
                  <img src={images[id as keyof typeof images]} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <div className={showLogo ? 'logo-animate flex items-center justify-center' : ''}>
                <img src={images.logo} className="w-full h-full object-contain p-4" />
              </div>
              {[4, 9].map(id => (
                <div key={id}
                  className={`img-animate ${visibleImages.includes(id) ? 'img-visible' : ''} rounded-lg overflow-hidden shadow-md`}
                >
                  <img src={images[id as keyof typeof images]} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              {[12, 13, 14].map(id => (
                <div key={id}
                  className={`img-animate ${visibleImages.includes(id) ? 'img-visible' : ''} rounded-lg overflow-hidden shadow-md`}
                >
                  <img src={images[id as keyof typeof images]} className="w-full h-full object-cover" />
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
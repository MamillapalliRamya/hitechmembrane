import React, { useEffect, useState } from 'react';

const AboutHeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Image paths
  const images = {
    img1: '/assets/images/about/AboutHero_1.svg',
    img2: '/assets/images/about/AboutHero_2.svg',
    img3: '/assets/images/about/AboutHero_3.svg',
    img4: '/assets/images/about/AboutHero_4.svg',
    img5: '/assets/images/about/AboutHero_5.svg',
    img6: '/assets/images/about/AboutHero_6.svg',
    img7: '/assets/images/about/AboutHero_7.svg',
    img9: '/assets/images/about/AboutHero_9.svg',
    img10: '/assets/images/about/AboutHero_10.svg',
    img11: '/assets/images/about/AboutHero_11.svg',
    img12: '/assets/images/about/AboutHero_12.svg',
    img13: '/assets/images/about/AboutHero_13.svg',
    img14: '/assets/images/about/AboutHero_14.svg',
    logo: '/assets/images/about/AboutLogo.svg',
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-item {
          opacity: 0;
        }

        .animate-item.loaded {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-logo {
          opacity: 0;
        }

        .animate-logo.loaded {
          animation: scaleIn 1s ease-out forwards;
        }
      `}</style>

      <section className="w-full py-8 md:py-12 lg:py-16 overflow-hidden">
        {/* Desktop/Tablet Layout - Same structure from 1024px+ */}
        <div className="hidden lg:block">
          <div className="w-full flex justify-center items-center">
            <div className="relative mx-auto" style={{ width: 'min(1440px, 95vw)', height: 'auto', aspectRatio: '1440/600' }}>
              {/* Column 1 */}
              <div style={{ position: 'absolute', left: '10%', top: '10%', width: '13%', height: '16%', animationDelay: '0ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img1} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ position: 'absolute', left: '14.5%', top: '30%', width: '9%', height: '20%', animationDelay: '100ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img2} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ position: 'absolute', left: '12.5%', top: '54%', width: '14%', height: '20%', animationDelay: '200ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img3} alt="Facility" className="w-full h-full object-cover" />
              </div>

              {/* Column 2 */}
              <div style={{ position: 'absolute', left: '24%', top: '10%', width: '15.5%', height: '30%', animationDelay: '150ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img4} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ position: 'absolute', left: '27.5%', top: '44%', width: '14%', height: '20%', animationDelay: '250ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img5} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ position: 'absolute', left: '26.5%', top: '68%', width: '14%', height: '14%', animationDelay: '350ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img6} alt="Facility" className="w-full h-full object-cover" />
              </div>

              {/* Column 3 - Center with Logo */}
              <div style={{ position: 'absolute', left: '40.5%', top: '10%', width: '15.5%', height: '14%', animationDelay: '300ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img7} alt="Facility" className="w-full h-full object-cover" />
              </div>
              {/* Logo - No card background */}
              <div style={{ position: 'absolute', left: '42.5%', top: '28%', width: '12%', height: '26%', animationDelay: '400ms' }} className={`animate-logo ${isLoaded ? 'loaded' : ''} flex items-center justify-center`}>
                <img src={images.logo} alt="Hi-Tech Logo" className="w-full h-full object-contain" />
              </div>
              <div style={{ position: 'absolute', left: '42.5%', top: '58%', width: '11.5%', height: '20%', animationDelay: '500ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img9} alt="Facility" className="w-full h-full object-cover" />
              </div>

              {/* Column 4 */}
              <div style={{ position: 'absolute', left: '56.5%', top: '10%', width: '15.5%', height: '30%', animationDelay: '450ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img9} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ position: 'absolute', left: '54.5%', top: '44%', width: '14%', height: '20%', animationDelay: '550ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img10} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ position: 'absolute', left: '54.5%', top: '68%', width: '14%', height: '14%', animationDelay: '650ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img11} alt="Facility" className="w-full h-full object-cover" />
              </div>

              {/* Column 5 */}
              <div style={{ position: 'absolute', left: '73.5%', top: '10%', width: '13%', height: '16%', animationDelay: '600ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img12} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ position: 'absolute', left: '74.5%', top: '30%', width: '9%', height: '20%', animationDelay: '700ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img13} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ position: 'absolute', left: '70%', top: '54%', width: '14%', height: '20%', animationDelay: '800ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} rounded-xl overflow-hidden shadow-md`}>
                <img src={images.img14} alt="Facility" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Below 1024px */}
        <div className="block lg:hidden px-4">
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-[900px] mx-auto">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div style={{ animationDelay: '0ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} w-full aspect-[17/9] rounded-lg overflow-hidden shadow-md`}>
                <img src={images.img1} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ animationDelay: '200ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} w-full aspect-square rounded-lg overflow-hidden shadow-md`}>
                <img src={images.img2} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ animationDelay: '400ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} w-full aspect-[17/9] rounded-lg overflow-hidden shadow-md`}>
                <img src={images.img3} alt="Facility" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Column 2 - Center with logo */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div style={{ animationDelay: '100ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md`}>
                <img src={images.img4} alt="Facility" className="w-full h-full object-cover" />
              </div>
              {/* Logo */}
              <div style={{ animationDelay: '300ms' }} className={`animate-logo ${isLoaded ? 'loaded' : ''} w-full aspect-square flex items-center justify-center`}>
                <img src={images.logo} alt="Hi-Tech Logo" className="w-full h-full object-contain p-4" />
              </div>
              <div style={{ animationDelay: '500ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md`}>
                <img src={images.img9} alt="Facility" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div style={{ animationDelay: '200ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} w-full aspect-[17/9] rounded-lg overflow-hidden shadow-md`}>
                <img src={images.img12} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ animationDelay: '400ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} w-full aspect-square rounded-lg overflow-hidden shadow-md`}>
                <img src={images.img13} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div style={{ animationDelay: '600ms' }} className={`animate-item ${isLoaded ? 'loaded' : ''} w-full aspect-[17/9] rounded-lg overflow-hidden shadow-md`}>
                <img src={images.img14} alt="Facility" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;
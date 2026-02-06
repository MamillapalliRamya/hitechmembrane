import React from 'react';
import { useTranslateContent } from '../../hooks/useTranslateContent';

const AboutOurClients: React.FC = () => {
  // Text content
  const headingText = "OUR CLIENTS / PARTNERS";
  const subHeadingText = "Trusted by Water Treatment Professionals Worldwide";
  const descriptionText = "Our membranes are used by OEMs, distributors, and system integrators across multiple industries—supporting long-term projects and sustainable water solutions.";

  // Translation hooks
  const { translatedText: translatedHeading } = useTranslateContent(headingText);
  const { translatedText: translatedSubHeading } = useTranslateContent(subHeadingText);
  const { translatedText: translatedDescription } = useTranslateContent(descriptionText);

  return (
    <section className="w-full  py-12 md:py-14 lg:py-16 xl:py-18 bg-[#F5F5F5]">
      <div className="">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold text-[#3E4095] text-center">
          {translatedHeading}
        </h2>

        <h4 className="text-center text-[#58585B] max-w-3xl mx-auto text-[24px] leading-relaxed font-medium mt-5">
          {translatedSubHeading}
        </h4>

        

        {/* Clients Grid - 2 Rows with continuous scrolling */}
        <div className="flex flex-col mt-12 overflow-hidden gap-14">

          {/* Row 1 - Top row scrolling left to right */}
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-scroll">
              {/* Full logo strip */}
              <div className="flex items-end gap-12 px-8">
                <img src="/assets/images/about/ourclents299.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclents299.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclents299.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclents299.svg" className="h-[120px]" />
              </div>

              {/* Duplicate same strip */}
              <div className="flex items-end gap-12 px-8">
                <img src="/assets/images/about/ourclents299.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclents299.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclents299.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclents299.svg" className="h-[120px]" />
              </div>
            </div>
          </div>


          {/* Row 2 - Middle row faster */}
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-scroll-fast">
              {/* Full logo strip */}
              <div className="flex items-end gap-12 px-8">
                <img src="/assets/images/about/ourclients300.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients300.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients300.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients300.svg" className="h-[120px]" />
              </div>

              {/* Duplicate same strip */}
              <div className="flex items-end gap-12 px-8">
                <img src="/assets/images/about/ourclients300.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients300.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients300.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients300.svg" className="h-[120px]" />
              </div>
            </div>
          </div>

          {/* Row 3 - Bottom row scrolling left to right (same direction) */}
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-scroll">
              {/* Full logo strip */}
              <div className="flex items-end gap-12 px-8">
                <img src="/assets/images/about/ourclients301.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients301.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients301.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients301.svg" className="h-[120px]" />
              </div>

              {/* Duplicate same strip */}
              <div className="flex items-end gap-12 px-8">
                <img src="/assets/images/about/ourclients301.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients301.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients301.svg" className="h-[120px]" />
                <img src="/assets/images/about/ourclients301.svg" className="h-[120px]" />
              </div>
            </div>
          </div>


        </div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto text-[20px] leading-relaxed font-medium mt-8">
          {translatedDescription}
        </p>
      </div>

      <style>{`
  @keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Desktop default */
.animate-scroll {
  animation: scroll-left 20s linear infinite;
}

.animate-scroll-fast {
  animation: scroll-left 10s linear infinite;
}

/* 📱 Mobile & Tablet - slower */
@media (max-width: 768px) {
  .animate-scroll {
    animation-duration: 35s;
  }

  .animate-scroll-fast {
    animation-duration: 25s;
  }
}

`}</style>


    </section>
  );
};

export default AboutOurClients;
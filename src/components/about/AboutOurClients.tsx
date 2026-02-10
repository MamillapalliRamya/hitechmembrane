import React from 'react';
import { useTranslateContent } from '../../hooks/useTranslateContent';

interface AboutOurClientsProps {
  our_clients?: {
    id: number;
    about_page_id: number;
    heading: string;
    sub_heading: string;
    description: string;
  }[];
  client_logos?: {
    id: number;
    clients_id: number;
    row_number: number;
    image: string;
    alt_text: string | null;
  }[];
}

const AboutOurClients: React.FC<AboutOurClientsProps> = ({ our_clients, client_logos }) => {
  // Get CMS data or use fallback
  const clientsData = our_clients && our_clients.length > 0 ? our_clients[0] : null;

  // Text content from CMS or fallback
  const headingText = clientsData?.heading || "OUR CLIENTS / PARTNERS";
  const subHeadingText = clientsData?.sub_heading || "Trusted by Water Treatment Professionals Worldwide";
  const descriptionText = clientsData?.description || "Our membranes are used by OEMs, distributors, and system integrators across multiple industries—supporting long-term projects and sustainable water solutions.";

  // Translation hooks
  const { translatedText: translatedHeading } = useTranslateContent(headingText);
  const { translatedText: translatedSubHeading } = useTranslateContent(subHeadingText);
  const { translatedText: translatedDescription } = useTranslateContent(descriptionText);

  // Fallback logo data
  const fallbackRow1 = [
    "/assets/images/about/ourclents299.svg",
    "/assets/images/about/ourclents299.svg",
    "/assets/images/about/ourclents299.svg",
    "/assets/images/about/ourclents299.svg",
  ];
  const fallbackRow2 = [
    "/assets/images/about/ourclients300.svg",
    "/assets/images/about/ourclients300.svg",
    "/assets/images/about/ourclients300.svg",
    "/assets/images/about/ourclients300.svg",
  ];
  const fallbackRow3 = [
    "/assets/images/about/ourclients301.svg",
    "/assets/images/about/ourclients301.svg",
    "/assets/images/about/ourclients301.svg",
    "/assets/images/about/ourclients301.svg",
  ];

  // Process CMS logos by row
  const getLogosForRow = (rowNumber: number): string[] => {
    if (client_logos && client_logos.length > 0) {
      const rowLogos = client_logos
        .filter(logo => logo.row_number === rowNumber)
        .map(logo => 
          logo.image 
            ? (logo.image.startsWith('http') ? logo.image : `http://65.0.77.32:8000${logo.image}`)
            : ""
        )
        .filter(url => url !== "");
      
      if (rowLogos.length > 0) {
        return rowLogos;
      }
    }
    
    // Return fallback based on row number
    if (rowNumber === 1) return fallbackRow1;
    if (rowNumber === 2) return fallbackRow2;
    return fallbackRow3;
  };

  const row1Logos = getLogosForRow(1);
  const row2Logos = getLogosForRow(2);
  const row3Logos = getLogosForRow(3);

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

        {/* Clients Grid - 3 Rows with continuous scrolling */}
        <div className="flex flex-col mt-12 overflow-hidden gap-14">

          {/* Row 1 - Top row scrolling left to right */}
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-scroll">
              {/* Full logo strip */}
              <div className="flex items-end gap-12 px-8">
                {row1Logos.map((logo, index) => (
                  <img key={`row1-${index}`} src={logo} className="h-[120px]" alt="Client logo" />
                ))}
              </div>

              {/* Duplicate same strip */}
              <div className="flex items-end gap-12 px-8">
                {row1Logos.map((logo, index) => (
                  <img key={`row1-dup-${index}`} src={logo} className="h-[120px]" alt="Client logo" />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 - Middle row faster */}
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-scroll-fast">
              {/* Full logo strip */}
              <div className="flex items-end gap-12 px-8">
                {row2Logos.map((logo, index) => (
                  <img key={`row2-${index}`} src={logo} className="h-[120px]" alt="Client logo" />
                ))}
              </div>

              {/* Duplicate same strip */}
              <div className="flex items-end gap-12 px-8">
                {row2Logos.map((logo, index) => (
                  <img key={`row2-dup-${index}`} src={logo} className="h-[120px]" alt="Client logo" />
                ))}
              </div>
            </div>
          </div>

          {/* Row 3 - Bottom row scrolling left to right (same direction) */}
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-scroll">
              {/* Full logo strip */}
              <div className="flex items-end gap-12 px-8">
                {row3Logos.map((logo, index) => (
                  <img key={`row3-${index}`} src={logo} className="h-[120px]" alt="Client logo" />
                ))}
              </div>

              {/* Duplicate same strip */}
              <div className="flex items-end gap-12 px-8">
                {row3Logos.map((logo, index) => (
                  <img key={`row3-dup-${index}`} src={logo} className="h-[120px]" alt="Client logo" />
                ))}
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
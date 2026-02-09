import React, { useState, useEffect } from 'react';
import { useTranslateContent } from "../../hooks/useTranslateContent";

const BASE_URL = "http://65.0.77.32:8000";

interface Award {
  id: number;
  image: string | null;
  alt: string;
}

interface Certificate {
  id: number;
  image: string | null;
  alt: string;
}

interface Props {
  homepage?: any;
  awards?: Award[];
  certificates?: Certificate[];
}

const AwardsSection: React.FC<Props> = ({ homepage, awards, certificates }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('awards-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // ======= CMS + FALLBACK TEXTS =======
  const headingLine1 = homepage?.awards_heading_line_1 || "Exceptional Quality that";
  const headingLine2 = homepage?.awards_heading_line_2 || "can't be beaten";

  const translatedHeadingLine1 = useTranslateContent(headingLine1).translatedText;
  const translatedHeadingLine2 = useTranslateContent(headingLine2).translatedText;
  // ====================================

  // ======= FALLBACK DATA =======
  const fallbackAwards: Award[] = [
    { id: 1, image: "/assets/images/award1.png", alt: "Award 1" },
    { id: 2, image: "/assets/images/award2.png", alt: "Award 2" },
  ];

  const fallbackCertificates: Certificate[] = [
    { id: 1, image: "/assets/images/certificate1.png", alt: "Certificate 1" },
    { id: 2, image: "/assets/images/certificate2.png", alt: "Certificate 2" },
  ];
  // ============================

  // ======= FINAL DATA (CMS OR FALLBACK) =======
  const finalAwards = (awards && awards.length > 0) ? awards : fallbackAwards;
  const finalCertificates = (certificates && certificates.length > 0) ? certificates : fallbackCertificates;

  // Function to get correct image URL
  const getImageUrl = (img: string | null, type: "award" | "certificate") => {
    if (!img) {
      return type === "award"
        ? "/assets/images/placeholder-award.png"
        : "/assets/images/placeholder-certificate.png";
    }
    if (img.startsWith("http")) return img;
    if (img.startsWith("/")) return img; // public folder assets
    return `${BASE_URL}${img}`; // CMS backend images
  };

  return (
    <section id="awards-section" className="py-16 bg-white overflow-hidden relative">
      <div className="mx-[40px] lg:mx-[80px] 2xl:mr-[112px] max-w-8xl relative">

        {/* Heading */}
        <div
          className={`text-left mb-12 transition-all duration-350 ease-out ${
            isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-4" style={{ fontWeight: '400' }}>
            {translatedHeadingLine1}
          </h2>
          <h2 className="text-5xl font-bold text-blue-900 mb-8" style={{ fontWeight: '400' }}>
            {translatedHeadingLine2}
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-24 items-center">
          {/* LEFT SIDE - Awards */}
          <div
            className={`flex flex-col items-center transition-all duration-350 ease-out ${
              isVisible ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-8 mb-16">
              {finalAwards.map((award) => (
                <AwardCard key={award.id} award={award} getImageUrl={getImageUrl} />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Certificates */}
          <div
            className={`flex flex-col items-center transition-all duration-350 ease-out ${
              isVisible ? 'transform translate-x-0 opacity-100' : 'transform translate-x-20 opacity-0'
            }`}
          >
            <div className="flex gap-16 mb-8">
              {finalCertificates.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} getImageUrl={getImageUrl} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Award Card
const AwardCard: React.FC<{ award: Award; getImageUrl: (img: string | null, type: "award" | "certificate") => string }> = ({ award, getImageUrl }) => {
  const translatedAlt = useTranslateContent(award.alt).translatedText;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex items-center justify-center w-36 h-40 sm:w-40 sm:h-48 md:w-44 md:h-52 lg:w-48 lg:h-56 xl:w-56 xl:h-64">
        <img 
          src={getImageUrl(award.image, "award")} 
          alt={translatedAlt} 
          className="w-full h-full object-contain" 
        />
      </div>
    </div>
  );
};

// Certificate Card
const CertificateCard: React.FC<{ certificate: Certificate; getImageUrl: (img: string | null, type: "award" | "certificate") => string }> = ({ certificate, getImageUrl }) => {
  const translatedAlt = useTranslateContent(certificate.alt).translatedText;

  return (
    <div className="w-50 h-68">
      <img 
        src={getImageUrl(certificate.image, "certificate")} 
        alt={translatedAlt} 
        className="w-full h-full object-contain shadow-lg rounded" 
      />
    </div>
  );
};

export default AwardsSection;

import React from 'react';
import { useTranslateContent } from '../../hooks/useTranslateContent';

interface AboutCertificationsProps {
  certifications_section?: {
    id: number;
    about_page_id: number;
    heading: string;
  }[];
  certificates?: {
    id: number;
    certifications_id: number;
    image: string;
    tag: string;
  }[];
}

const AboutCertifications: React.FC<AboutCertificationsProps> = ({ certifications_section, certificates }) => {
  // Get heading from CMS or use fallback
  const headingText = certifications_section && certifications_section.length > 0 && certifications_section[0].heading
    ? certifications_section[0].heading
    : "Certifications";

  const { translatedText: translatedHeading } = useTranslateContent(headingText);

  // Fallback certificates
  const fallbackCertificates = [
    { id: 1, image: "/assets/images/certificate1.png", tag: "CE Marking" },
    { id: 2, image: "/assets/images/certificate1.png", tag: "CE Marking" },
    { id: 3, image: "/assets/images/certificate1.png", tag: "CE Marking" },
    { id: 4, image: "/assets/images/certificate1.png", tag: "CE Marking" },
    { id: 5, image: "/assets/images/certificate1.png", tag: "CE Marking" },
  ];

  // Use CMS certificates or fallback
  const certificatesData = certificates && certificates.length > 0 ? certificates : fallbackCertificates;

  // Process certificates images
  const processedCertificates = certificatesData.map(cert => ({
  ...cert,
  imageUrl:
    certificates && certificates.length > 0
      ? (cert.image.startsWith('http')
          ? cert.image
          : `http://65.0.77.32:8000${cert.image}`)
      : cert.image, 
}));


  return (
    <section className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8 md:py-10 lg:py-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold text-[#3E4095] text-center mb-8 md:mb-10 lg:mb-12">
          {translatedHeading}
        </h2>

        {/* Certifications Grid - 5 certificates in a row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 2xl:gap-16 mb-12 md:mb-16 lg:mb-20">
          {processedCertificates.map((cert) => {
            const { translatedText: translatedTag } = useTranslateContent(cert.tag || "Certificate");
            
            return (
              <div key={cert.id} className="relative group">
                <div className="w-[150px] md:w-[170px] lg:w-[185px] xl:w-[200px] 2xl:w-[220px] aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={cert.imageUrl}
                    alt={cert.tag || `Certificate ${cert.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                  <p className="text-white text-sm md:text-base font-semibold">{translatedTag}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutCertifications;
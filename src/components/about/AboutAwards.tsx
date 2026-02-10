import React from "react";
import { useTranslateContent } from '../../hooks/useTranslateContent';

interface AboutAwardsProps {
  awards_section?: {
    id: number;
    about_page_id: number;
    heading: string;
  }[];
  awards?: {
    id: number;
    awards_id: number;
    image: string;
    alt_text: string | null;
  }[];
}

const AboutAwards: React.FC<AboutAwardsProps> = ({ awards_section, awards }) => {
  // Get heading from CMS or use fallback
  const headingText = awards_section && awards_section.length > 0 && awards_section[0].heading
    ? awards_section[0].heading
    : "Awards";

  const { translatedText: translatedHeading } = useTranslateContent(headingText);

  // Fallback awards 
  const fallbackAwards = [
  { id: 1, image: "/assets/images/award1.png", alt_text: "Award 1" },
  { id: 2, image: "/assets/images/award2.png", alt_text: "Award 2" },
  { id: 3, image: "/assets/images/award1.png", alt_text: "Award 3" },
  { id: 4, image: "/assets/images/award2.png", alt_text: "Award 4" },
  { id: 5, image: "/assets/images/award1.png", alt_text: "Award 5" },
];


  // Use CMS awards or fallback 
  const awardsData = awards && awards.length > 0 ? awards : fallbackAwards;

  // Process awards images
  const processedAwards = awardsData.map(award => ({
  ...award,
  imageUrl:
    awards && awards.length > 0
      ? (award.image.startsWith('http')
          ? award.image
          : `http://65.0.77.32:8000${award.image}`)
      : award.image, 
}));


  
  console.log("AboutAwards - Processed awards:", processedAwards);

  // Split awards into two rows: first 3, then remaining
  const firstRowAwards = processedAwards.slice(0, 3);
  const secondRowAwards = processedAwards.slice(3);

  return (
    <section className="pb-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[#3E4095] text-center mb-12">
          {translatedHeading}
        </h2>

        {/* Awards Grid */}
        <div className="flex flex-col items-center gap-10">

          {/* Row 1 – First 3 cards */}
          {firstRowAwards.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full max-w-[900px]">
              {firstRowAwards.map((award) => (
                <div
                  key={award.id}
                  className="bg-[#F4F4F4] rounded-[24px] aspect-[206/226] flex items-center justify-center">
                  <img
                    src={award.imageUrl}
                    alt={award.alt_text || `Award ${award.id}`}
                    className="h-[75%] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Row 2 – Remaining cards centered */}
          {secondRowAwards.length > 0 && (
            <div className={`grid ${secondRowAwards.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-20 w-full max-w-[600px]`}>
              {secondRowAwards.map((award) => (
                <div
                  key={award.id}
                  className="bg-[#F4F4F4] rounded-[24px] aspect-[206/226] flex items-center justify-center">
                  <img
                    src={award.imageUrl}
                    alt={award.alt_text || `Award ${award.id}`}
                    className="h-[75%] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default AboutAwards;
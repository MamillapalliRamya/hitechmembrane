import React from "react";
import { useTranslateContent } from '../../hooks/useTranslateContent';

interface AboutWaterPowersProps {
  water_powers?: {
    id: number;
    about_page_id: number;
    main_heading: string;
    paragraph_1: string;
    paragraph_2: string;
    impact_heading: string;
    bottom_quote: string;
  }[];
  water_impact_cards?: {
    id: number;
    water_power_id: number;
    value: string;
    label: string;
    description: string;
  }[];
}

const AboutWaterPowers: React.FC<AboutWaterPowersProps> = ({ water_powers, water_impact_cards }) => {
  // Get CMS data or use fallback
  const waterData = water_powers && water_powers.length > 0 ? water_powers[0] : null;

  // Text content from CMS or fallback
  const mainHeadingText = waterData?.main_heading || "Water Powers Every Industry.";
  const paragraph1Text = waterData?.paragraph_1 || "Clean and reliable water is essential across industries—from drinking water production to complex industrial processes.";
  const paragraph2Text = waterData?.paragraph_2 || "Our reverse osmosis membranes are designed to perform consistently across a wide range of applications, supporting sustainable operations and efficient water management worldwide.";
  const impactHeadingText = waterData?.impact_heading || "Our Global Impact";
  const bottomQuoteText = waterData?.bottom_quote || "More than 10% of RO membrane OEMs worldwide rely on Hi-Tech Membranes directly or indirectly as a trusted manufacturing partner.";

  // Translation hooks - Main content
  const { translatedText: translatedMainHeading } = useTranslateContent(mainHeadingText);
  const { translatedText: translatedParagraph1 } = useTranslateContent(paragraph1Text);
  const { translatedText: translatedParagraph2 } = useTranslateContent(paragraph2Text);
  const { translatedText: translatedImpactHeading } = useTranslateContent(impactHeadingText);
  const { translatedText: translatedBottomQuote } = useTranslateContent(bottomQuoteText);

  // Fallback impact cards
  const fallbackImpactCards = [
    {
      id: 1,
      value: "22+",
      label: "Countries",
      description: "Supplying RO membrane solutions to diverse markets worldwide."
    },
    {
      id: 2,
      value: "100+",
      label: "Distributors",
      description: "Partnering with system integrators and distributors globally."
    },
    {
      id: 3,
      value: "50+",
      label: "OEM Partners",
      description: "Supporting private-label and OEM membrane manufacturing programs."
    }
  ];

  // Use CMS cards or fallback
  const impactCards = water_impact_cards && water_impact_cards.length > 0 
    ? water_impact_cards 
    : fallbackImpactCards;

  return (
    <section className="bg-white py-12 md:py-14">
      <div className=" mx-[40px] xl:mx-[60px] 2xl:mx-[90px]">

        {/* ================= TOP HEADING ================= */}

        <div className="mb-14">

          {/* Title - Left */}
          <div>
            <h2
              className="text-[30px] md:text-[48px] lg:text-[60px] font-semibold text-[#3E4095] leading-snug text-center md:text-left">
              " {translatedMainHeading} "
            </h2>
          </div>

          {/* Paragraphs - Right */}
          <div>
            <p
              className="mt-5 text-[16px] md:text-[18px] xl:text-[28px] text-gray-600 font-medium text-center md:text-end">
              {translatedParagraph1}
            </p>

            <p
              className="mt-5 text-[16px] md:text-[18px] xl:text-[28px] text-gray-600 font-medium text-center md:text-end">
              {translatedParagraph2}
            </p>
          </div>

        </div>

        {/* ================= GLOBAL IMPACT ================= */}
        <div className="mb-16">
          <h3 className="text-[30px] md:text-[48px] font-bold text-[#3E4095] mb-10 mx-[40px] text-center md:text-left">
            {translatedImpactHeading}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {impactCards.map((card) => {
              const { translatedText: translatedLabel } = useTranslateContent(card.label);
              const { translatedText: translatedDescription } = useTranslateContent(card.description);

              return (
                <div key={card.id} className="flex flex-col items-center max-w-[350px] w-full">
                  <div
                    className="bg-white rounded-[48px]
                    shadow-[0_2px_30px_rgba(0,0,0,0.1)] px-6 py-10 text-center w-full">

                    <div className="text-[74px] md:text-[82px] lg:text-[90px] font-bold text-[#A8CF45] leading-none mb-3">
                      {card.value}
                    </div>

                    <p className="text-[#A8CF45] text-[22px] md:text-[16px] lg:text-[22px] font-medium mt-8">
                      {translatedLabel}
                    </p>
                  </div>

                  <p className="text-[#58585B] text-[15px] md:text-[16px] lg:text-[18px] font-medium text-center mt-5">
                    {translatedDescription}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM QUOTE ================= */}
        <div className="relative max-w-[980px] mx-auto text-center py-10">
          {/* Green Quote – aligned with heading start */}
          <div className="absolute -left-1 sm:-left-5 md:-left-5">
            <img
              src="/assets/images/about/GreenQuotes.svg"
              alt=""
              className="w-[28px] sm:w-[36px] md:w-[44px] lg:w-[50px]"
            />
          </div>
          <h3
            className="text-[18px] md:text-[22px] lg:text-[36px] font-semibold text-[#3D3E96] leading-relaxed px-10">
            {translatedBottomQuote}
          </h3>
          {/* Blue Quote – aligned with heading end */}
          <div className="absolute -right-2 top-[145px]">
            <img
              src="/assets/images/about/BlueQuotes.svg"
              alt=""
             className="w-[80px] sm:w-[110px] md:w-[140px] lg:w-[168px] rotate-[180deg] opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWaterPowers;
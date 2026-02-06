import React from "react";
import { useTranslateContent } from '../../hooks/useTranslateContent';

const AboutWaterPowers: React.FC = () => {
  // Text content
  const mainHeadingText = "Water Powers Every Industry.";
  const paragraph1Text = "Clean and reliable water is essential across industries—from drinking water production to complex industrial processes.";
  const paragraph2Text = "Our reverse osmosis membranes are designed to perform consistently across a wide range of applications, supporting sustainable operations and efficient water management worldwide.";
  const impactHeadingText = "Our Global Impact";

  const bottomQuoteText = "More than 10% of RO membrane OEMs worldwide rely on Hi-Tech Membranes directly or indirectly as a trusted manufacturing partner.";

  // Translation hooks - Main content
  const { translatedText: translatedMainHeading } = useTranslateContent(mainHeadingText);
  const { translatedText: translatedParagraph1 } = useTranslateContent(paragraph1Text);
  const { translatedText: translatedParagraph2 } = useTranslateContent(paragraph2Text);
  const { translatedText: translatedImpactHeading } = useTranslateContent(impactHeadingText);
  const { translatedText: translatedBottomQuote } = useTranslateContent(bottomQuoteText);

  // Translation hooks - Impact cards (moved inside component)
  const { translatedText: translatedCountriesLabel } = useTranslateContent("Countries");
  const { translatedText: translatedCountriesDesc } = useTranslateContent("Supplying RO membrane solutions to diverse markets worldwide.");
  const { translatedText: translatedDistributorsLabel } = useTranslateContent("Distributors");
  const { translatedText: translatedDistributorsDesc } = useTranslateContent("Partnering with system integrators and distributors globally.");
  const { translatedText: translatedOEMLabel } = useTranslateContent("OEM Partners");
  const { translatedText: translatedOEMDesc } = useTranslateContent("Supporting private-label and OEM membrane manufacturing programs.");

  // Impact cards data with values only
  const impactData = [
    { value: "22+" },
    { value: "100+" },
    { value: "50+" },
  ];

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
            {/* Card 1 - Countries */}
            <div className="flex flex-col items-center max-w-[350px] w-full">
              <div
                className="bg-white rounded-[48px]
                shadow-[0_2px_30px_rgba(0,0,0,0.1)] px-6 py-10 text-center w-full">

                <div className="text-[74px] md:text-[82px] lg:text-[90px] font-bold text-[#A8CF45] leading-none mb-3">
                  {impactData[0].value}
                </div>

                <p className="text-[#A8CF45] text-[22px] md:text-[16px] lg:text-[22px] font-medium mt-8">
                  {translatedCountriesLabel}
                </p>
              </div>

              <p className="text-[#58585B] text-[15px] md:text-[16px] lg:text-[18px] font-medium text-center mt-5">
                {translatedCountriesDesc}
              </p>
            </div>

            {/* Card 2 - Distributors */}
            <div className="flex flex-col items-center max-w-[350px] w-full">
              <div
                className="bg-white rounded-[48px]
                shadow-[0_2px_30px_rgba(0,0,0,0.1)] px-6 py-10 text-center w-full">

                <div className="text-[74px] md:text-[82px] lg:text-[90px] font-bold text-[#A8CF45] leading-none mb-3">
                  {impactData[1].value}
                </div>

                <p className="text-[#A8CF45] text-[22px] md:text-[16px] lg:text-[22px] font-medium mt-8">
                  {translatedDistributorsLabel}
                </p>
              </div>

              <p className="text-[#58585B] text-[15px] md:text-[16px] lg:text-[18px] font-medium text-center mt-5">
                {translatedDistributorsDesc}
              </p>
            </div>

            {/* Card 3 - OEM Partners */}
            <div className="flex flex-col items-center max-w-[350px] w-full">
              <div
                className="bg-white rounded-[48px]
                shadow-[0_2px_30px_rgba(0,0,0,0.1)] px-6 py-10 text-center w-full">

                <div className="text-[74px] md:text-[82px] lg:text-[90px] font-bold text-[#A8CF45] leading-none mb-3">
                  {impactData[2].value}
                </div>

                <p className="text-[#A8CF45] text-[22px] md:text-[16px] lg:text-[22px] font-medium mt-8">
                  {translatedOEMLabel}
                </p>
              </div>

              <p className="text-[#58585B] text-[15px] md:text-[16px] lg:text-[18px] font-medium text-center mt-5">
                {translatedOEMDesc}
              </p>
            </div>
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
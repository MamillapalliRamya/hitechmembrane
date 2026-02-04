import React from "react";
import { useTranslateContent } from '../../hooks/useTranslateContent';

const AboutOurStory: React.FC = () => {
  // Text content
  const headingText = "Access to clean water is a human right, and technology can make it possible for everyone.";
  const subHeadingText = "Advancing water purification through membrane technology.";
  const paragraph1Text = "Hi-Tech Membranes is a dedicated reverse osmosis membrane manufacturer focused on delivering reliable water purification solutions for diverse applications worldwide.";
  const paragraph2Text = "With decades of experience in membrane manufacturing, we support customers across residential, commercial, industrial, and desalination sectors through consistent performance, controlled processes, and application-driven design.";

  // Translation hooks
  const { translatedText: translatedHeading } = useTranslateContent(headingText);
  const { translatedText: translatedSubHeading } = useTranslateContent(subHeadingText);
  const { translatedText: translatedParagraph1 } = useTranslateContent(paragraph1Text);
  const { translatedText: translatedParagraph2 } = useTranslateContent(paragraph2Text);

  return (
    <section className="relative w-full bg-white overflow-hidden py-6 md:py-8">
      <div className=" relative">

        {/* Green Vector Line */}
        <div className="absolute left-0 right-0  pointer-events-none z-0">
          <img
            src="/assets/images/about/GreenVectorLine.svg"
            alt=""
            className="w-full object-contain opacity-80"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">

          {/* Heading Wrapper */}
          <div className="relative max-w-[1100px]">

            {/* Green Quote – aligned with heading start */}
            <div className="absolute -left-10 top-[10px]">
              <img
                src="/assets/images/about/GreenQuotes.svg"
                alt=""
                className="w-[44px]"
              />
            </div>

            <h2 className="mx-[20px] text-[28px] mt-8 md:text-[36px] lg:text-[44px] font-bold text-[#3D3E96] leading-snug">
              {translatedHeading}
            </h2>
            <p className="mx-[20px] text-center text-[#58585B] mb-12 text-[22.02px] mt-5 font-medium">
              {translatedSubHeading}
            </p>

            {/* Blue Quote – aligned with heading end */}
            <div className="absolute -right-20 top-[82px]">
              <img
                src="/assets/images/about/BlueQuotes.svg"
                alt=""
                className="w-[168px] rotate-[180] opacity-60"
              />
            </div>
          </div>

          {/* Logo */}
          <div className="mt-10 mb-6 w-[200px] md:w-[240px]">
            <img
              src="/assets/images/about/AboutLogo.svg"
              alt="Hi-Tech Logo"
              className="w-full object-contain"
            />
          </div>

          {/* Text */}
          <div className="max-w-[900px] space-y-6 text-center">
            <p className="text-[20px] md:text-[18px] font-medium text-[#58585B] leading-relaxed">
              {translatedParagraph1}
            </p>

            <p className="text-[20px] md:text-[18px] font-medium text-[#58585B] leading-relaxed">
              {translatedParagraph2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOurStory;
import React from "react";
import { useTranslateContent } from '../../hooks/useTranslateContent';

const AboutAwards: React.FC = () => {
   const headingText = " Awards";
   const { translatedText: translatedHeading } = useTranslateContent(headingText);
  return (
    <section className="pb-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[#3E4095] text-center mb-12">
         {translatedHeading}
        </h2>

        {/* Awards Grid */}
        <div className="flex flex-col items-center gap-10">

          {/* Row 1 – 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full max-w-[900px]">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-[#F4F4F4] rounded-[24px] aspect-[206/226] flex items-center justify-center">
                <img
                  src={item === 2 ? "/assets/images/award2.png" : "/assets/images/award1.png"}
                  alt={`Award ${item}`}
                  className="h-[75%] w-auto object-contain"
                />
              </div>
            ))}

          </div>

          {/* Row 2 – 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 w-full max-w-[600px]">

            {[4, 5].map((item) => (
              <div
                key={item}
                className="bg-[#F4F4F4] rounded-[24px] aspect-[206/226] flex items-center justify-center">
                <img
                  src={item === 4 ? "/assets/images/award2.png" : "/assets/images/award1.png"}
                  alt={`Award ${item}`}
                  className="h-[75%] w-auto object-contain"
                />
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAwards;

import React from "react";

const AboutWaterPowers: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-14">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        {/* ================= TOP HEADING ================= */}
        <div className="mb-14">
          <div className="max-w-[1100px] mx-auto">
            <h2
              className="inline-block text-[38px] md:text-[48px] lg:text-[60px] font-semibold text-[#3E4095] leading-snug">
              “Water Powers Every Industry.”
            </h2>
            <p
              className="mt-3 text-[16px] md:text-[18px] lg:text-[20px] text-[#2A2A2A] max-w-[420px] ml-auto font-medium">
              It flows through every process – moving,<br /> cooling, cleansing, and fueling progress.
            </p>
          </div>
        </div>

        {/* ================= GLOBAL IMPACT ================= */}
        <div className="mb-16">
          <h3 className="text-[28px] md:text-[32px] font-bold text-[#3E4095] mb-10 text-center md:text-left max-w-[1100px] mx-auto">
            Our Global Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
            {[
              { value: "22", label: "Countries" },
              { value: "100", label: "Billions of Gallons of\nClean water produced" },
              { value: "50+", label: "Clients Impacted" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[48px]
                  shadow-[0_2px_30px_rgba(0,0,0,0.1)] px-6 py-10 text-center max-w-[260px] w-full">
                <div className="text-[74px] md:text-[82px] lg:text-[90px] font-bold text-[#A8CF45] leading-none mb-3">
                  {item.value}
                </div>
                <p className="text-[#A8CF45] text-[15px] md:text-[16px] lg:text-[18px] font-medium whitespace-pre-line">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM QUOTE ================= */}
        <div className="relative max-w-[980px] mx-auto text-center py-10">
          <span
            className="absolute -left-8 top-0 text-[80px] md:text-[100px] lg:text-[150px] font-bold text-[#A8CF45] leading-none">
            “
          </span>
          <h3
            className="text-[18px] md:text-[22px] lg:text-[36px] font-semibold text-[#3D3E96] leading-relaxed px-10">
            More than 30% of RO membrane OEMs worldwide rely <br />
            on Hi-Tech Membranes — directly or indirectly — <br />
            as their trusted partner.
          </h3>
          <span
            className="absolute -right-8 top-10 text-[120px] md:text-[140px] lg:text-[350px] font-bold text-[#3D3E96] opacity-10 leading-none">
            ”
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutWaterPowers;

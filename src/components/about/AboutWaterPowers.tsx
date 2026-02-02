import React from "react";

const AboutWaterPowers: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-14">
      <div className=" mx-[40px] xl:mx-[60px] 2xl:mx-[90px]">

        {/* ================= TOP HEADING ================= */}
       
        <div className="mb-14">

  {/* Title - Left */}
  <div>
    <h2
      className="text-[38px] md:text-[48px] lg:text-[60px] font-semibold text-[#3E4095] leading-snug">
      "Water Powers Every Industry."
    </h2>
  </div>

  {/* Paragraphs - Right */}
  <div>
    <p
      className="mt-5 text-[16px] md:text-[18px] xl:text-[28px] text-gray-600 font-medium text-end">
      Clean and reliable water is essential across industries—from drinking water <br></br>production to complex industrial processes.
    </p>

    <p
      className="mt-5 text-[16px] md:text-[18px] xl:text-[28px] text-gray-600 font-medium text-end">
      Our reverse osmosis membranes are designed to perform consistently across a <br></br>wide range of applications, supporting sustainable operations and efficient <br></br>water management worldwide.
    </p>
  </div>

</div>




        {/* ================= GLOBAL IMPACT ================= */}
<div className="mb-16">
  <h3 className="text-[40px] md:text-[48px] font-bold text-[#3E4095] mb-10 mx-[40px]">
    Our Global Impact
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
    {[
      { value: "22+", label: "Countries", description: "“Supplying RO membrane solutions to diverse markets worldwide.”" },
      { value: "100+", label: "Distributors", description: "“Partnering with system integrators and distributors globally.”" },
      { value: "50+", label: "OEM Partners", description: "“Supporting private-label and OEM membrane manufacturing programs.”" },
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center max-w-[350px] w-full">
        
        {/* CARD */}
        <div
          className="bg-white rounded-[48px]
          shadow-[0_2px_30px_rgba(0,0,0,0.1)] px-6 py-10 text-center w-full">
          
          <div className="text-[74px] md:text-[82px] lg:text-[90px] font-bold text-[#A8CF45] leading-none mb-3">
            {item.value}
          </div>

          <p className="text-[#A8CF45] text-[22px] md:text-[16px] lg:text-[22px] font-medium mt-8">
            {item.label}
          </p>
        </div>

        {/* DESCRIPTION OUTSIDE CARD */}
        <p className="text-[#58585B] text-[15px] md:text-[16px] lg:text-[18px] font-medium text-center mt-5">
          {item.description}
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
            {/* More than 30% of RO membrane OEMs worldwide rely <br />
            on Hi-Tech Membranes — directly or indirectly — <br />
            as their trusted partner. */}
            More than 10% of RO membrane OEMs worldwide rely on Hi-Tech Membranes directly or indirectly as a trusted manufacturing partner.
          </h3>
          <span
            className="mt-8 mr-28 absolute -right-8 top-10 text-[120px] md:text-[140px] lg:text-[350px] font-bold text-[#3D3E96] opacity-10 leading-none">
            ”
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutWaterPowers;

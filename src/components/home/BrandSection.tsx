import React from "react";
import image1 from "../../../src/assets/images/wetransfer_hitech/KVQA_logo.jpeg";
import image2 from "../../../src/assets/images/wetransfer_hitech/norsk-akkreditering-logo.png";
import image3 from "../../../src/assets/images/wetransfer_hitech/IWWA_logo.png";
import image4 from "../../../src/assets/images/wetransfer_hitech/MIWQA_LOGO.jpg";

const BrandSection = () => {
  // Using public directory paths for images
  const brands = [
    {
      id: 1,
      name: "KQA",
      image: image1,
      effect: "hover:brightness-125",
      width: 180,
      height: 80,
    },
    
    {
      id: 3,
      name: "KVGA",
      image: image3,
      effect: "hover:scale-110 transform origin-center",
      width: 150,
      height: 80,
    },
    {
      id: 2,
      name: "NRSK",
      image: image2,
      effect: "hover:scale-110 transform origin-center",
      width: 155,
      height: 80,
    },
    {
      id: 4,
      name: "MMBER INDIAN WATER QUALITY ASSOCIATION",
      image: image4,
      effect: "hover:scale-110 transform origin-center",
      width: 220,
      height: 80,
    },
  ];

  // no Duplicate brands 
 const visibleBrands = brands.slice(1, 4);

  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2
          className="text-[48px] leading-[1] font-semibold text-left mb-12 text-[#3E4095] font-clash"
        >
          Partners
        </h2>

        <div className="relative  overflow-hidden"
        >
          {/* First row (left to right) */}
          <div className="flex  items-center  flex-nowrap">
          {visibleBrands.map((brand) => (
              <div
                 key={brand.id}
                className={`inline-flex items-center justify-center h-full transition-all duration-300 mx-8 ${brand.effect}`}
                style={{ 
                  width: "450px", 
                  height: "288px", 
                  background: "#F6F6F6",
                  // position: "relative",
                  // top: "949px",
                  // left: "520px",
                  padding: "10px" 
                }}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Second row (right to left) */}
          {/* <div className="absolute flex animate-marquee2 whitespace-nowrap items-center mt-20">
            {[...duplicatedBrands].reverse().map((brand, index) => (
              <div
                key={`second-${brand.id}-${index}`}
                className={`inline-flex items-center justify-center h-full transition-all duration-300 mx-8 ${brand.effect}`}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style> */}
    </section>
  );
};

export default BrandSection;
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
      id: 2,
      name: "NRSK",
      image: image2,
      effect: "hover:scale-110 transform origin-center",
      width: 120,
      height: 80,
    },
    {
      id: 3,
      name: "KVGA",
      image: image3,
      effect: "opacity-80 hover:opacity-100",
      width: 150,
      height: 80,
    },
    {
      id: 4,
      name: "MMBER INDIAN WATER QUALITY ASSOCIATION",
      image: image4,
      effect: "hover:brightness-125",
      width: 220,
      height: 80,
    },
  ];

  // Duplicate brands for seamless animation
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Trusted Partners
        </h2>

        <div className="relative h-40 overflow-hidden">
          {/* First row (left to right) */}
          <div className="absolute flex animate-marquee whitespace-nowrap items-center">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`first-${brand.id}-${index}`}
                className={`inline-flex items-center justify-center h-full transition-all duration-300 mx-8 ${brand.effect}`}
                style={{ width: "200px", height: "150px", padding: "10px" }}
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

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default BrandSection;

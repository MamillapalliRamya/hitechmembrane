import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../src/assets/images/wetransfer_hitech/KVQA_logo.jpeg";
import image2 from "../../../src/assets/images/wetransfer_hitech/norsk-akkreditering-logo.png";
import image3 from "../../../src/assets/images/wetransfer_hitech/IWWA_logo.png";
import image4 from "../../../src/assets/images/wetransfer_hitech/MIWQA_LOGO.jpg";

const BrandSection = () => {
  const brands = [
    { id: 1, name: "KQA", image: image1, width: 180, height: 80 },
    { id: 3, name: "KVGA", image: image3, width: 150, height: 80 },
    { id: 2, name: "NRSK", image: image2, width: 155, height: 80 },
    { id: 4, name: "INDIAN WATER QUALITY ASSOCIATION", image: image4, width: 220, height: 80 },
  ];

  const visibleBrands = brands.slice(1, 4);

  const brandCardVariant = {
    hidden: { scale: 0.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1], // smooth, natural zoom
      },
    },
  };

  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading animation */}
        <motion.h2
          className="text-[48px] leading-[1] font-semibold text-left mb-12 text-[#3E4095] font-clash"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Partners
        </motion.h2>

        {/* Brand cards scale up smoothly all at once */}
        <div className="flex items-center flex-nowrap gap-8 justify-start">
          {visibleBrands.map((brand) => (
            <motion.div
              key={brand.id}
              className="inline-flex items-center justify-center transition-all duration-300"
              style={{
                width: "450px",
                height: "288px",
                background: "#F6F6F6",
                padding: "10px",
                borderRadius: "12px",
              }}
              variants={brandCardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={brand.image}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;

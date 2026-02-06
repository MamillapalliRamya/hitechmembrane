import { useState } from "react";
import { motion } from "framer-motion";
import { Droplets, Factory, Recycle, Waves, Coffee, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslateContent } from "../../hooks/useTranslateContent";

const EventsSection = () => {
  // Separate state for each product's image carousel
  const [residentialIndex, setResidentialIndex] = useState(0);
  const [industrialIndex, setIndustrialIndex] = useState(0);
  const [seaWaterIndex, setSeaWaterIndex] = useState(0);

  /* ---------------- TRANSLATABLE TEXTS ---------------- */
  const waterSolutionsTitle = "Our Water Solutions";
  const waterSolutionsDesc =
    "Advanced RO membrane solutions engineered for diverse water treatment applications.";

  const applicationsTitle = "Applications";
  const applicationsDesc =
    "RO membrane solutions designed for diverse water treatment applications.";

  const exploreButton = "Explore Our RO Elements";

  // Product Names
  const residentialName = "Residential Membranes";
  const industrialName = "Industrial Membranes";
  const seaWaterName = "Sea Water Membranes";

  // Product Features
  const residentialFeatures = [
    "Stable rejection performance",
    "Long membrane life",
    "Compatible with standard RO systems"
  ];
  const industrialFeatures = [
    "High salt rejection",
    "Consistent flux under variable conditions",
    "Optimized for continuous operation"
  ];
  const seaWaterFeatures = [
    "Excellent salt rejection",
    "Energy-efficient performance",
    "Suitable for large-scale desalination plants"
  ];

  /* ---------------- TRANSLATION HOOKS ---------------- */
  const { translatedText: tWaterTitle } = useTranslateContent(waterSolutionsTitle);
  const { translatedText: tWaterDesc } = useTranslateContent(waterSolutionsDesc);
  const { translatedText: tAppTitle } = useTranslateContent(applicationsTitle);
  const { translatedText: tAppDesc } = useTranslateContent(applicationsDesc);
  const { translatedText: tExploreBtn } = useTranslateContent(exploreButton);

  const { translatedText: tResidential } = useTranslateContent(residentialName);
  const { translatedText: tIndustrial } = useTranslateContent(industrialName);
  const { translatedText: tSeaWater } = useTranslateContent(seaWaterName);

  const tResFeatures = residentialFeatures.map(f => useTranslateContent(f).translatedText);
  const tIndFeatures = industrialFeatures.map(f => useTranslateContent(f).translatedText);
  const tSeaFeatures = seaWaterFeatures.map(f => useTranslateContent(f).translatedText);
  /* --------------------------------------------------- */

  // Multiple images for each product
  const products = [
    { 
      id: 1, 
      name: tResidential, 
      images: [
        "/assets/images/MembraneTube3.png",
        "/assets/images/MembraneTube2.png", // Add your additional images
        "/assets/images/MembraneTube1.png",
      ],
      features: tResFeatures,
      currentIndex: residentialIndex,
      setIndex: setResidentialIndex
    },
    { 
      id: 2, 
      name: tIndustrial, 
      images: [
        "/assets/images/MembraneTube2.png",
        "/assets/images/MembraneTube1.png", // Add your additional images
        "/assets/images/MembraneTube3.png",
      ],
      features: tIndFeatures,
      currentIndex: industrialIndex,
      setIndex: setIndustrialIndex
    },
    { 
      id: 3, 
      name: tSeaWater, 
      images: [
        "/assets/images/MembraneTube1.png",
        "/assets/images/MembraneTube2.png", // Add your additional images
        "/assets/images/MembraneTube3.png",
      ],
      features: tSeaFeatures,
      currentIndex: seaWaterIndex,
      setIndex: setSeaWaterIndex
    },
  ];

  const handlePrevImage = (product: { id?: number; name?: string; images: any; features?: string[]; currentIndex: any; setIndex: any; }) => {
    const newIndex = (product.currentIndex - 1 + product.images.length) % product.images.length;
    product.setIndex(newIndex);
  };

  const handleNextImage = (product: { id?: number; name?: string; images: any; features?: string[]; currentIndex: any; setIndex: any; }) => {
    const newIndex = (product.currentIndex + 1) % product.images.length;
    product.setIndex(newIndex);
  };

  /* ---------------- APPLICATIONS DATA ---------------- */
  const ICON_PROPS = { size: 32, color: '#9EE872', strokeWidth: 2 };
  const applications = [
    {
      icon: <Droplets {...ICON_PROPS} />,
      title: "Residential Water Treatment",
      description:
        "Reliable RO membranes for drinking water production and large-scale municipal systems."
    },
    {
      icon: <Factory {...ICON_PROPS} />,
      title: "Industrial Process Water",
      description:
        "High-performance RO membranes for manufacturing, power plants, and industrial operations."
    },
    {
      icon: <Recycle {...ICON_PROPS} />,
      title: "Wastewater Reuse & Recycling",
      description:
        "Advanced membrane solutions enabling safe water reuse and sustainable resource management."
    },
    {
      icon: <Waves {...ICON_PROPS} />,
      title: "Seawater Desalination",
      description:
        "RO membranes engineered for high-pressure seawater desalination applications."
    },
    {
      icon: <Coffee {...ICON_PROPS} />,
      title: "Food & Beverage Processing",
      description:
        "Consistent water quality solutions meeting hygiene and production standards."
    },
    {
      icon: <Building2 {...ICON_PROPS} />,
      title: "Commercial & Infrastructure",
      description:
        "RO membranes for hotels, hospitals, commercial buildings, and infrastructure projects."
    }
  ];

  // Translate application titles and descriptions
  const translatedApplications = applications.map(app => ({
    ...app,
    title: useTranslateContent(app.title).translatedText,
    description: useTranslateContent(app.description).translatedText
  }));

  return (
    <section className="bg-white w-full overflow-hidden">

      {/* ---------------- WATER SOLUTIONS SECTION ---------------- */}
      <section className="py-10 bg-white relative overflow-hidden">
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-[48px] 2xl:text-[56px] text-[#3E4095] text-center mb-6"
          style={{ fontFamily: "Diodrum Cyrillic, sans-serif", fontWeight: "500" }}
        >
          {tWaterTitle}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center text-gray-600 mt-4 text-base sm:text-lg lg:text-xl px-4"
        >
          {tWaterDesc}
        </motion.p>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative px-4 sm:px-6 lg:px-12 mt-12 2xl:mt-[90px] mx-[40px]"
        >
          <div className="flex justify-center items-center flex-wrap sm:flex-nowrap gap-8 sm:gap-12 lg:gap-24 3xl:gap-[230px] py-8">
            {products.map((product) => {
              return (
                <div 
                  key={product.id} 
                  className="flex flex-col items-center gap-6 sm:gap-[45px] 2xl:gap-[60px] min-w-[150px] sm:min-w-[200px] lg:min-w-[280px] xl:min-w-[320px]"
                >
                  {/* Image carousel for each product */}
                  <div className="relative mb-6 flex items-center justify-center group">
                    <div className="bg-[#A8CF45] w-[160px] h-[140px] rounded-bl-[25%] rounded-br-[121%] rounded-tl-[121%] rounded-tr-[25%] opacity-20 2xl:w-[301px] 2xl:h-[226px] 2xl:rounded-br-[147%] 2xl:rounded-tl-[147%] 2xl:rotate-[-5deg]"></div>
                    
                    {/* Left Arrow for each image */}
                    <button
                      onClick={() => handlePrevImage(product)}
                      className="absolute left-[-20px] sm:left-[-30px] top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 sm:w-6 sm:h-6 text-[#3E4095]" />
                    </button>

                    {/* Image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={product.images[product.currentIndex]} 
                        alt={`${product.name} - Image ${product.currentIndex + 1}`} 
                        className="object-contain w-[120px] sm:w-[160px] lg:w-[195px] 2xl:w-[237px] transition-opacity duration-300" 
                      />
                    </div>

                    {/* Right Arrow for each image */}
                    <button
                      onClick={() => handleNextImage(product)}
                      className="absolute right-[-20px] sm:right-[-30px] top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#3E4095]" />
                    </button>

                    {/* Image indicator dots */}
                    {/* <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                      {product.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => product.setIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === product.currentIndex 
                              ? 'bg-[#3E4095] w-6' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div> */}
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-[20px] 2xl:text-[24px] font-semibold text-[#323232] text-center whitespace-nowrap">
                    {product.name}
                  </h3>

                  <div className="flex flex-col gap-3 w-full max-w-[320px]">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="bg-[#F6F6F6] font-semibold rounded-lg px-4 py-3 text-center text-sm sm:text-base xl:text-[18px] 2xl:text-[21px] text-[#58585B] shadow-[1px_4px_4px_0px_#00000026]">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }} viewport={{ once: true, amount: 0.2 }} className="text-center mt-8 sm:mt-[50px]">
          <button className="w-[220px] sm:w-[260px] lg:w-[307px] 2xl:w-[340px] h-[55px] sm:h-[60px] lg:h-[69px] bg-[#A8CF45] text-[#3E4095] px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-lg 2xl:text-2xl shadow-lg cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#98C135]">
            {tExploreBtn}
          </button>
        </motion.div>
      </section>

      {/* ---------------- APPLICATIONS SECTION ---------------- */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="relative mx-[40px] xl:mx-[80px] 2xl:mx-[112px]">
          <div className="mb-12 text-center lg:mb-14">
            <h2 className="mb-10 text-4xl font-semibold tracking-tight text-[#3E4095] lg:text-[40px] xl:text-[48px] 2xl:text-[54px]">
              {tAppTitle}
            </h2>
            <p className="mx-auto text-lg text-[#6F6F6F] lg:text-[22px] xl:text-[20px] 2xl:text-[24px]">
              {tAppDesc}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {translatedApplications.map((app, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8">
                <div className="absolute inset-0" />
                <div className="relative">
                  <div className="mb-4 xl:mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#3d4a9d]">{app.icon}</div>
                  <h3 className="mb-4 xl:mb-6 text-xl font-bold leading-tight text-[#161616] lg:text-[22px] xl:text-[24px] 2xl:text-[35px]">{app.title}</h3>
                  <p className="leading-relaxed text-[#454545] lg:text-[16px] 2xl:text-[22px]">
                    {app.description.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.img
          src="/assets/images/isometrics/isometric_3.svg"
          alt="Isometric Tube"
          initial={{ opacity: 0, x: 380, y: -380, scale: 0.92 }}
          whileInView={{ opacity: [0, 1], x: [380, 0], y: [-380, 0], scale: [0.92, 1] }}
          transition={{ duration: 1.8, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="hidden lg:block absolute right-0 lg:bottom-[477px] xl:bottom-[573px] 2xl:bottom-[573px] w-[350px] md:w-[420px] lg:w-[300px] xl:w-[342px] 2xl:w-[460px] opacity-70 pointer-events-none z-0"
        />
      </section>
    </section>
  );
};

export default EventsSection;
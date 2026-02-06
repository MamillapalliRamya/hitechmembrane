import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Droplets, Factory, Recycle, Waves, Coffee, Building2 } from 'lucide-react';
import { useTranslateContent } from "../../hooks/useTranslateContent";

interface EventsSectiondata {
  homepage?: {
    water_solutions_title?: string;
    water_solutions_desc?: string;
    application_title?: string;
    application_desc?: string;
    explore_button_text?: string;
    explore_button_link?: string;
  };
  products?: {
    id: number;
    name: string;
    image: string | null;
    features: string[];
  }[];
}

// Separate component for translated text
const TranslatedText = ({ text }: { text: string }) => {
  const { translatedText } = useTranslateContent(text);
  return <>{translatedText}</>;
};

const EventsSection = ({ homepage, products = [] }: EventsSectiondata) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsData, setProductsData] = useState<any[]>([]);

  /* ---------------- TRANSLATABLE TEXTS ---------------- */
  const waterSolutionsTitle = homepage?.water_solutions_title || "Our Water Solutions";
  const waterSolutionsDesc = homepage?.water_solutions_desc || "Advanced RO membrane solutions engineered for diverse water treatment applications.";
  const applicationsTitle = homepage?.application_title || "Applications";
  const applicationsDesc = homepage?.application_desc || "RO membrane solutions designed for diverse water treatment applications.";
  const exploreButton = homepage?.explore_button_text || "Explore Our RO Elements";
  const exploreButtonLink = homepage?.explore_button_link || "/products";

  // Translate main texts
  const { translatedText: tWaterTitle } = useTranslateContent(waterSolutionsTitle);
  const { translatedText: tWaterDesc } = useTranslateContent(waterSolutionsDesc);
  const { translatedText: tAppTitle } = useTranslateContent(applicationsTitle);
  const { translatedText: tAppDesc } = useTranslateContent(applicationsDesc);
  const { translatedText: tExploreBtn } = useTranslateContent(exploreButton);

  // Fallback products
  const fallbackProducts = [
    {
      id: 1,
      name: "Residential Membranes",
      image: "/assets/images/MembraneTube3.png",
      features: [
        "Stable rejection performance",
        "Long membrane life",
        "Compatible with standard RO systems",
      ],
    },
    {
      id: 2,
      name: "Commercial Membranes",
      image: "/assets/images/MembraneTube2.png",
      features: [
        "High rejection rate",
        "Energy efficient design",
        "Durable and reliable",
      ],
    },
    {
      id: 3,
      name: "Industrial Membranes",
      image: "/assets/images/MembraneTube1.png",
      features: [
        "Designed for heavy duty use",
        "Long operational life",
        "Cost effective performance",
      ],
    },
  ];

  // Set products data once
  useEffect(() => {
    if (products && products.length > 0) {
      const mapped = products.map((p) => ({
        id: p.id,
        name: p.name,
        image: p.image
          ? p.image.startsWith("http")
            ? p.image
            : `http://65.0.77.32:8000${p.image}`
          : "/assets/images/MembraneTube3.png",
        features: p.features || [],
      }));
      setProductsData(mapped);
    } else {
      setProductsData(fallbackProducts);
    }
  }, [products.length]); // Only re-run if products length changes

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % productsData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + productsData.length) % productsData.length);

  /* ---------------- APPLICATIONS DATA ---------------- */
  const ICON_PROPS = { size: 32, color: '#9EE872', strokeWidth: 2 };
  const applications = [
    {
      icon: <Droplets {...ICON_PROPS} />,
      title: "Residential Water Treatment",
      description: "Reliable RO membranes for drinking water production and large-scale municipal systems."
    },
    {
      icon: <Factory {...ICON_PROPS} />,
      title: "Industrial Process Water",
      description: "High-performance RO membranes for manufacturing, power plants, and industrial operations."
    },
    {
      icon: <Recycle {...ICON_PROPS} />,
      title: "Wastewater Reuse & Recycling",
      description: "Advanced membrane solutions enabling safe water reuse and sustainable resource management."
    },
    {
      icon: <Waves {...ICON_PROPS} />,
      title: "Seawater Desalination",
      description: "RO membranes engineered for high-pressure seawater desalination applications."
    },
    {
      icon: <Coffee {...ICON_PROPS} />,
      title: "Food & Beverage Processing",
      description: "Consistent water quality solutions meeting hygiene and production standards."
    },
    {
      icon: <Building2 {...ICON_PROPS} />,
      title: "Commercial & Infrastructure",
      description: "RO membranes for hotels, hospitals, commercial buildings, and infrastructure projects."
    }
  ];

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
          {productsData.length > 3 && (
            <>
              <button onClick={prevSlide} className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20">
                <img src="/assets/images/arrowLeft.png" alt="Previous" className="h-[40px] sm:h-[54px] w-auto" />
              </button>

              <button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20">
                <img src="/assets/images/arrowRight.png" alt="Next" className="h-[40px] sm:h-[54px] w-auto" />
              </button>
            </>
          )}

          <div className="flex justify-center items-center flex-wrap sm:flex-nowrap gap-8 sm:gap-12 lg:gap-24 3xl:gap-[230px] py-8">
            {productsData.map((product, index) => {
              let scale = "";
              let opacity = "";

              if (index === currentSlide) {
                scale = "scale-110";
                opacity = "opacity-100";
              } else if (
                index === (currentSlide - 1 + productsData.length) % productsData.length ||
                index === (currentSlide + 1) % productsData.length
              ) {
                scale = "scale-100";
                opacity = "opacity-80";
              } else {
                scale = "scale-90";
                opacity = "opacity-40";
              }

              return (
                <div key={product.id} className={`flex flex-col items-center gap-6 sm:gap-[45px] 2xl:gap-[60px] min-w-[150px] sm:min-w-[200px] lg:min-w-[280px] xl:min-w-[320px]`}>
                  <div className="relative mb-6 flex items-center justify-center">
                    <div className="bg-[#A8CF45] w-[160px] h-[140px] rounded-bl-[25%] rounded-br-[121%] rounded-tl-[121%] rounded-tr-[25%] opacity-20 2xl:w-[301px] 2xl:h-[226px] 2xl:rounded-br-[147%] 2xl:rounded-tl-[147%] 2xl:rotate-[-5deg]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={product.image} alt={product.name} className="object-contain w-[120px] sm:w-[160px] lg:w-[195px] 2xl:w-[237px]" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-[20px] 2xl:text-[24px] font-semibold text-[#323232] text-center whitespace-nowrap">
                    <TranslatedText text={product.name} />
                  </h3>

                  <div className="flex flex-col gap-3 w-full max-w-[320px]">
                    {product.features.map((feature: string, idx: number) => (
                      <div key={idx} className="bg-[#F6F6F6] font-semibold rounded-lg px-4 py-3 text-center text-sm sm:text-base xl:text-[18px] 2xl:text-[21px] text-[#58585B] shadow-[1px_4px_4px_0px_#00000026]">
                        <TranslatedText text={feature} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 60, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }} 
          viewport={{ once: true, amount: 0.2 }} 
          className="text-center mt-8 sm:mt-[50px]"
        >
          <a href={exploreButtonLink}>
            <button className="w-[220px] sm:w-[260px] lg:w-[307px] 2xl:w-[340px] h-[55px] sm:h-[60px] lg:h-[69px] bg-[#A8CF45] text-[#3E4095] px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-lg 2xl:text-2xl shadow-lg cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#98C135]">
              {tExploreBtn}
            </button>
          </a>
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
            {applications.map((app, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8">
                <div className="absolute inset-0" />
                <div className="relative">
                  <div className="mb-4 xl:mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#3d4a9d]">
                    {app.icon}
                  </div>
                  <h3 className="mb-4 xl:mb-6 text-xl font-bold leading-tight text-[#161616] lg:text-[22px] xl:text-[24px] 2xl:text-[35px]">
                    <TranslatedText text={app.title} />
                  </h3>
                  <p className="leading-relaxed text-[#454545] lg:text-[16px] 2xl:text-[22px]">
                    <TranslatedText text={app.description} />
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
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Factory,
  Recycle,
  Waves,
  Coffee,
  Building2
} from 'lucide-react';

const EventsSection = () => {
  /* ---------------- WATER SOLUTIONS LOGIC ---------------- */
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    { id: 1, name: "Residential Membranes", image: "/assets/images/MembraneTube3.png" },
    { id: 2, name: "Industrial Membranes", image: "/assets/images/MembraneTube2.png" },
    { id: 3, name: "Sea Water Membranes", image: "/assets/images/MembraneTube1.png" },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

  /* ---------------- APPLICATIONS DATA ---------------- */
  const ICON_PROPS = { size: 32, color: '#9EE872', strokeWidth: 2 };

const applications = [
  {
    icon: <Droplets {...ICON_PROPS} />,
    title: 'Residential Water Treatment',
    description:
      'Reliable RO membranes for drinking water production and large-scale municipal systems.'
  },
  {
    icon: <Factory {...ICON_PROPS} />,
    title: 'Industrial Process Water',
    description:
      'High-performance RO membranes for manufacturing, power plants, and industrial operations.'
  },
  {
    icon: <Recycle {...ICON_PROPS} />,
    title: 'Wastewater Reuse & Recycling',
    description:
      'Advanced membrane solutions enabling safe water reuse and sustainable resource management.'
  },
  {
    icon: <Waves {...ICON_PROPS} />,
    title: 'Seawater Desalination',
    description:
      'RO membranes engineered for high-pressure seawater desalination applications.'
  },
  {
    icon: <Coffee {...ICON_PROPS} />,
    title: 'Food & Beverage Processing',
    description:
      'Consistent water quality solutions meeting hygiene and production standards.'
  },
  {
    icon: <Building2 {...ICON_PROPS} />,
    title: 'Commercial & Infrastructure',
    description:
      'RO membranes for hotels, hospitals, commercial buildings, and infrastructure projects.'
  }
];

  return (
    <section className="bg-white w-full overflow-hidden">

      {/* -----------------------------------------------------------
            WATER SOLUTIONS SECTION
      ----------------------------------------------------------- */}
      <section className="py-10 bg-white relative overflow-hidden">
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-[48px] 2xl:text-[56px] text-[#3E4095] text-center mb-6"
          style={{ fontFamily: "Diodrum Cyrillic, sans-serif", fontWeight: "500" }}
        >
          Our Water Solutions
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center text-gray-600 mt-4 text-base sm:text-lg lg:text-xl px-4"
        >
          Advanced RO membrane solutions engineered for diverse <br /> water treatment applications.
        </motion.p>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative px-4 sm:px-6 lg:px-12 mt-12 2xl:mt-[90px] mx-[40px]"
        >
          {products.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20"
              >
                <img src="/assets/images/arrowLeft.png" alt="Previous" className="h-[40px] sm:h-[54px] w-auto" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20"
              >
                <img src="/assets/images/arrowRight.png" alt="Next" className="h-[40px] sm:h-[54px] w-auto" />
              </button>
            </>
          )}

          <div className="flex justify-center items-center flex-wrap sm:flex-nowrap 
            gap-8 sm:gap-12 lg:gap-24 3xl:gap-[230px] py-8">
            {products.map((product, index) => {
              let scale = "";
              let opacity = "";

              if (index === currentSlide) {
                scale = "scale-110";
                opacity = "opacity-100";
              } else if (
                index === (currentSlide - 1 + products.length) % products.length ||
                index === (currentSlide + 1) % products.length
              ) {
                scale = "scale-100";
                opacity = "opacity-80";
              } else {
                scale = "scale-90";
                opacity = "opacity-40";
              }

              // Define features for each product
              const productFeatures = {
                "Residential Membranes": [
                  "Stable rejection performance",
                  "Long membrane life",
                  "Compatible with standard RO systems"
                ],
                "Industrial Membranes": [
                  "High salt rejection",
                  "Consistent flux under variable conditions",
                  "Optimized for continuous operation"
                ],
                "Sea Water Membranes": [
                  "Excellent salt rejection",
                  "Energy-efficient performance",
                  "Suitable for large-scale desalination plants"
                ]
              };

              return (
                <div
                  key={product.id}
                  className={`flex flex-col items-center 
                  gap-6 sm:gap-[45px] 2xl:gap-[60px]
                  min-w-[150px] sm:min-w-[200px] lg:min-w-[280px] xl:min-w-[320px]`}
                >
                  <div className="relative mb-6 flex items-center justify-center">
                    <div className=" bg-[#A8CF45] w-[160px] h-[140px] rounded-bl-[25%] rounded-br-[121%] rounded-tl-[121%] rounded-tr-[25%]
                                opacity-20 2xl:w-[301px] 2xl:h-[226px] 2xl:rounded-br-[147%] 2xl:rounded-tl-[147%] 2xl:rotate-[-5deg]"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-contain w-[120px] sm:w-[160px] lg:w-[195px] 2xl:w-[237px]"
                      />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-[20px] 2xl:text-[24px] font-semibold text-[#323232] text-center whitespace-nowrap">
                    {product.name}
                  </h3>

                  {/* Feature blocks */}
                  <div className="flex flex-col gap-3 w-full max-w-[320px]">
                    {productFeatures[product.name as keyof typeof productFeatures]?.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-[#F6F6F6] font-semibold rounded-lg px-4 py-3 text-center text-sm sm:text-base xl:text-[18px] 2xl:text-[21px] text-[#58585B] shadow-[1px_4px_4px_0px_#00000026]"
                      >
                        {feature}
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
          <button className="
          w-[220px] sm:w-[260px] lg:w-[307px] 2xl:w-[340px]
          h-[55px] sm:h-[60px] lg:h-[69px] 
          bg-[#A8CF45] text-[#3E4095] 
          px-6 sm:px-8 py-3 rounded-lg 
          font-medium text-sm sm:text-lg 2xl:text-2xl
          hover:bg-[#98C135] transition-colors duration-200">
            Explore Our RO Elements
          </button>
        </motion.div>
      </section>

      {/* -----------------------------------------------------------
            APPLICATIONS SECTION
      ----------------------------------------------------------- */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="relative mx-[40px] xl:mx-[80px] 2xl:mx-[112px]">

          {/* Section Header */}
          <div className="mb-12 text-center lg:mb-14">
            <h2 className="mb-10 text-4xl font-semibold tracking-tight text-[#3E4095] lg:text-[40px] xl:text-[48px] 2xl:text-[54px]">
              Applications
            </h2>
            <p className="mx-auto text-lg text-[#6F6F6F] lg:text-[22px] xl:text-[20px] 2xl:text-[24px]">
              RO membrane solutions designed for diverse water treatment applications.
            </p>
          </div>

          {/* Applications Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 "
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 " />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4 xl:mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#3d4a9d]">
                    {app.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 xl:mb-6 text-xl font-bold leading-tight text-[#161616] lg:text-[22px] xl:text-[24px] 2xl:text-[35px]">
                    {app.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed text-[#454545] lg:text-[16px] 2xl:text-[22px]">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ISOMETRIC IMAGE FOR APPLICATIONS SECTION ↙ */}
        <motion.img
          src="/assets/images/isometrics/isometric_3.svg"
          alt="Isometric Tube"
          initial={{
            opacity: 0,
            x: 380,   // start off-screen RIGHT 
            y: -380,  // start off-screen TOP
            scale: 0.92,
          }}
          whileInView={{
            opacity: [0, 1, 1, 1, 1, 1],    // fade in and stay visible
            x: [380, 0, 15, -8, 4, 0],      // bounce horizontally (right to left with overshoot)
            y: [-380, 0, -15, 8, -4, 0],    // bounce vertically (top to bottom with overshoot)
            scale: [0.92, 1, 1.02, 0.98, 1.01, 1], // subtle scale bounce
          }}
          transition={{
            duration: 1.8,    // total animation time
            delay: 1.2,       // delay to wait for event images to load
            ease: [0.34, 1.56, 0.64, 1], // bouncy easing
            times: [0, 0.5, 0.65, 0.8, 0.9, 1], // control timing of each keyframe
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="
            hidden lg:block
            absolute
            right-0
            lg:bottom-[477px]
            xl:bottom-[573px]
            2xl:bottom-[573px]
            3xl:bottom-[573px]
            w-[350px]
            md:w-[420px]
            lg:w-[300px]
            xl:w-[342px]
            2xl:w-[460px]
            3xl:w-[600px]
            opacity-70
            pointer-events-none
            z-0
          "
        />
      </section>

    </section>
  );
};

export default EventsSection;
// src/components/WaterParticles.tsx
import { useEffect } from "react";

declare global {
  interface Window {
    particlesJS: any;
  }
}

const WaterParticles = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#90cdf4", // light water blue
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 4,
            random: true,
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "top",
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div id="particles-js" className="absolute inset-0 w-full h-full z-0" />
  );
};

export default WaterParticles;



// events section code  

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const EventsSection = () => {
//   /* ---------------- WATER SOLUTIONS LOGIC ---------------- */
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const products = [
//     { id: 1, name: "Residential Membranes", image: "/assets/images/MembraneTube3.png" },
//     { id: 2, name: "Industrial Membranes", image: "/assets/images/MembraneTube2.png" },
//     { id: 3, name: "Sea Water Membranes", image: "/assets/images/MembraneTube1.png" },
//   ];

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

//   /* ---------------- EVENTS LOGIC ---------------- */
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const events = [
//     { id: 1, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2016" },
//     { id: 2, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2017" },
//     { id: 3, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2018" },
//     { id: 4, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2019" },
//     { id: 5, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2020" },
//     { id: 6, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2021" },
//   ];

//   const itemsPerView = 3;
//   const maxIndex = Math.max(0, events.length - itemsPerView);

//   const handlePrevious = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
//   const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

//   const visibleEvents = events.slice(currentIndex, currentIndex + itemsPerView);

//   return (
//     <section className="bg-white w-full overflow-hidden">

//       {/* -----------------------------------------------------------
//             WATER SOLUTIONS SECTION
//       ----------------------------------------------------------- */}
//       <section className="py-10 bg-white relative overflow-hidden">
//         <motion.h2
//           initial={{ y: -40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.1 }}
//           className="text-3xl sm:text-4xl lg:text-[48px] 2xl:text-[56px] text-[#3E4095] text-center"
//           style={{ fontFamily: "Diodrum Cyrillic, sans-serif", fontWeight: "500" }}
//         >
//           Our Water Solutions
//         </motion.h2>

//         <motion.div
//           initial={{ y: 60, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mt-12 2xl:mt-[90px]"
//         >
//           {products.length > 3 && (
//             <>
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20"
//               >
//                 <img src="/assets/images/arrowLeft.png" alt="Previous" className="h-[40px] sm:h-[54px] w-auto" />
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20"
//               >
//                 <img src="/assets/images/arrowRight.png" alt="Next" className="h-[40px] sm:h-[54px] w-auto" />
//               </button>
//             </>
//           )}

//           <div className="flex justify-center items-center flex-wrap sm:flex-nowrap 
//             gap-8 sm:gap-12 lg:gap-24 3xl:gap-[230px] py-8">
//             {products.map((product, index) => {
//               let scale = "";
//               let opacity = "";

//               if (index === currentSlide) {
//                 scale = "scale-110";
//                 opacity = "opacity-100";
//               } else if (
//                 index === (currentSlide - 1 + products.length) % products.length ||
//                 index === (currentSlide + 1) % products.length
//               ) {
//                 scale = "scale-100";
//                 opacity = "opacity-80";
//               } else {
//                 scale = "scale-90";
//                 opacity = "opacity-40";
//               }

//               return (
//                 <div
//                   key={product.id}
//                   className={`flex flex-col items-center 
//                   gap-6 sm:gap-[45px] 2xl:gap-[60px]
//                   min-w-[150px] sm:min-w-[200px] lg:min-w-[240px]`}
//                 >
//                   <div className="relative mb-6 flex items-center justify-center">
//                     <div className=" bg-[#A8CF45] w-[160px] h-[140px] rounded-bl-[25%] rounded-br-[121%] rounded-tl-[121%] rounded-tr-[25%]
//                                 opacity-20 2xl:w-[301px] 2xl:h-[226px] 2xl:rounded-br-[147%] 2xl:rounded-tl-[147%] 2xl:rotate-[-5deg]"></div>

//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="object-contain w-[120px] sm:w-[160px] lg:w-[195px] 2xl:w-[237px]"
//                       />
//                     </div>
//                   </div>

//                   <h3 className="text-base sm:text-lg lg:text-[20px] 2xl:text-[24px] font-medium text-[#323232] text-center whitespace-nowrap">
//                     {product.name}
//                   </h3>
//                 </div>
//               );
//             })}
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ y: 60, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="text-center mt-8 sm:mt-[50px]"
//         >
//           <button className="
//           w-[220px] sm:w-[260px] lg:w-[307px]
//           h-[55px] sm:h-[60px] lg:h-[69px] 
//           bg-[#A8CF45] text-[#3E4095] 
//           px-6 sm:px-8 py-3 rounded-lg 
//           font-medium text-sm sm:text-lg 2xl:text-2xl
//           hover:bg-[#98C135] transition-colors duration-200">
//             View All Products
//           </button>
//         </motion.div>
      

//       {/* -----------------------------------------------------------
//             EVENTS SECTION
//       ----------------------------------------------------------- */}
//       {/* <section className="py-16 bg-white relative overflow-hidden"> */}
//         <motion.h2
//           initial={{ y: -80, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.3, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.5 }}
//           className="text-3xl pt-16 sm:text-4xl lg:text-[48px] 2xl:text-[60px] text-[#333333] text-center mb-12 2xl:mb-16 "
//           style={{ fontFamily: "Diodrum Cyrillic, sans-serif" }}
//         >
//           Events
//         </motion.h2>

//         <motion.div
//           initial={{ x: -200, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//           className="flex justify-between gap-10 mx-[40px] xl:mx-[80px] 2xl:mx-[112px] 3xl:gap-[72px] overflow-hidden pt-4 z-20 
//     relative"
//         >
//           {visibleEvents.map((event) => (
//             <div
//               key={event.id}
//               className="relative flex items-center justify-center h-[320px] sm:h-[380px] lg:h-auto 3xl:h-[553px] 
//               w-[90%] sm:w-[300px] lg:w-auto 3xl:w-[516px]
//               overflow-hidden rounded-lg shadow-md 2xl:w-auto 2xl:h-auto"
//             >
//               <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//               <div
//                 className="absolute bottom-4 text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px] left-5 text-white drop-shadow-lg"
//                 style={{ fontFamily: "Diodrum Cyrillic, sans-serif", fontWeight: "700" }}
//               >
//                 {event.title}
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         <div className="flex justify-center items-center gap-4 mt-10">
//           <button
//             onClick={handlePrevious}
//             disabled={currentIndex === 0}
//             className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${currentIndex === 0
//                 ? "border-gray-300 text-gray-300 cursor-not-allowed"
//                 : "border-[#A8CF45] text-[#A8CF45] hover:bg-[#A8CF45] hover:text-white"
//               }`}
//           >
//             <ChevronLeft size={20} />
//           </button>

//           <button
//             onClick={handleNext}
//             disabled={currentIndex >= maxIndex}
//             className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${currentIndex >= maxIndex
//                 ? "border-gray-300 text-gray-300 cursor-not-allowed"
//                 : "border-[#A8CF45] text-[#A8CF45] hover:bg-[#A8CF45] hover:text-white"
//               }`}
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>
//         {/* ---------------- ISOMETRIC SIDE IMAGE ---------------- */}
        

//   {/* ISOMETRIC IMAGE FOR EVENTS SECTION ↙ */}
// {/* ISOMETRIC IMAGE FOR EVENTS SECTION ↙ */}
// <motion.img
//   src="/assets/images/isometrics/isometric_3.svg"
//   alt="Isometric Tube"
//   initial={{
//     opacity: 0,
//     x: 380,   // start off-screen RIGHT 
//     y: -380,  // start off-screen TOP
//     scale: 0.92,
//   }}
//   whileInView={{
//     opacity: [0, 1, 1, 1, 1, 1],    // fade in and stay visible
//     x: [380, 0, 15, -8, 4, 0],      // bounce horizontally (right to left with overshoot)
//     y: [-380, 0, -15, 8, -4, 0],    // bounce vertically (top to bottom with overshoot)
//     scale: [0.92, 1, 1.02, 0.98, 1.01, 1], // subtle scale bounce
//   }}
//   transition={{
//     duration: 1.8,    // total animation time
//     delay: 1.2,       // delay to wait for event images to load
//     ease: [0.34, 1.56, 0.64, 1], // bouncy easing
//     times: [0, 0.5, 0.65, 0.8, 0.9, 1], // control timing of each keyframe
//   }}
//   viewport={{ once: true, amount: 0.2 }}
//   className="
//     hidden lg:block
//     absolute
//     right-0
//     lg:bottom-[477px]
//     xl:bottom-[573px]
//     2xl:bottom-[573px]
//     3xl:bottom-[573px]
//     w-[350px]
//     md:w-[420px]
//     lg:w-[300px]
//     xl:w-[342px]
//     2xl:w-[460px]
//     3xl:w-[600px]
//     opacity-70
//     pointer-events-none
//     z-0
//   "
// />

//       </section>

//     </section>
//   );
// };

// export default EventsSection;

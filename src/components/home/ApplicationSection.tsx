import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslateContent } from "../../hooks/useTranslateContent"; // adjust path

const Applications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const events = [
    { id: 1, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2016" },
    { id: 2, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2017" },
    { id: 3, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2018" },
    { id: 4, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2019" },
    { id: 5, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2020" },
    { id: 6, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2021" },
  ];

  // ✅ Call hooks at the top level
  const translatedTitle = useTranslateContent("Events");
  const translatedEvents = events.map(event => useTranslateContent(event.title));

  // Responsive itemsPerView logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerView(1);
      else if (width < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, events.length - itemsPerView);
  const handlePrevious = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  const visibleEvents = events.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="bg-white w-full overflow-hidden">
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Section Title */}
        <motion.h2
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[40px] md:pt-16 sm:text-4xl lg:text-[48px] 2xl:text-[60px] text-[#333333] text-center md:mb-12 2xl:mb-16"
          style={{ fontFamily: "Diodrum Cyrillic, sans-serif" }}
        >
          {translatedTitle.translatedText}
        </motion.h2>

        {/* Events Slider */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className={`flex gap-10 mx-[40px] xl:mx-[80px] 2xl:mx-[112px] 3xl:gap-[72px] overflow-hidden pt-4 z-20 relative ${
            itemsPerView === 1 ? "justify-center" : itemsPerView === 2 ? "justify-center" : "justify-between"
          }`}
        >
          {visibleEvents.map((event) => {
            const index = events.indexOf(event); // get index in translatedEvents
            return (
              <div
                key={event.id}
                className="relative flex items-center justify-center h-[250px] sm:h-[380px] lg:h-auto 3xl:h-[553px] 
                            sm:w-[300px] lg:w-auto 3xl:w-[516px]
                            overflow-hidden rounded-lg shadow-md 2xl:w-auto 2xl:h-auto"
              >
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div
                  className="absolute bottom-4 text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px] left-5 text-white drop-shadow-lg"
                  style={{ fontFamily: "Diodrum Cyrillic, sans-serif", fontWeight: "700" }}
                >
                  {translatedEvents[index].translatedText} {/* ✅ use precomputed value */}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0
                ? "border-gray-300 text-gray-300 cursor-not-allowed"
                : "border-[#A8CF45] text-[#A8CF45] hover:bg-[#A8CF45] hover:text-white"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              currentIndex >= maxIndex
                ? "border-gray-300 text-gray-300 cursor-not-allowed"
                : "border-[#A8CF45] text-[#A8CF45] hover:bg-[#A8CF45] hover:text-white"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Applications;

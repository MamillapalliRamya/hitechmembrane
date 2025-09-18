import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    { id: 1, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2016" },
    { id: 2, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2017" },
    { id: 3, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2018" },
    { id: 4, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2019" },
    { id: 5, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2020" },
    { id: 6, image: "/assets/images/Hitech-Viet-2016.png", title: "HITECH VIET 2021" },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, events.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleEvents = events.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Section Title */}
      <motion.h2
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-3xl sm:text-4xl lg:text-[48px]  text-[#3E4095] text-center mb-12"
        style={{ fontFamily: "Diodrum Cyrillic, sans-serif" }}
      >
        Events
      </motion.h2>

      {/* Events Carousel */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap justify-center gap-6 sm:gap-8"
      >
        {visibleEvents.map((event) => (
          <div
            key={event.id}
            className="relative flex items-center justify-center w-[90%] sm:w-[300px] lg:w-[400px] h-[320px] sm:h-[380px] lg:h-[428px] overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={event.image}
              alt={`Event ${event.id}`}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Event Title */}
            <div
              className="absolute bottom-6 left-6 text-white drop-shadow-lg"
              style={{
                fontFamily: "Diodrum Cyrillic, sans-serif",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              {event.title}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Navigation Arrows */}
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
  );
};

export default EventsSection;

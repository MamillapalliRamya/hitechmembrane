import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const events = [
        {
            id: 1,
            image: "/assets/images/Hitech-Viet-2016.png"
        },
        {
            id: 2,
            image: "/assets/images/Hitech-Viet-2016.png"
        },
        {
            id: 3,
            image: "/assets/images/Hitech-Viet-2016.png"
        },
        {
            id: 4,
            image: "/assets/images/Hitech-Viet-2016.png"
        },
        {
            id: 5,
            image: "/assets/images/Hitech-Viet-2016.png"
        },
        {
            id: 6,
            image: "/assets/images/Hitech-Viet-2016.png"
        }
    ];

    const itemsPerView = 3;
    const maxIndex = Math.max(0, events.length - itemsPerView);

    const handlePrevious = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    const visibleEvents = events.slice(currentIndex, currentIndex + itemsPerView);

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Section Title */}
            <h2 className="text-[48px] text-[#3E4095] text-center"
                style={{
                    fontFamily: 'Diodrum Cyrillic, sans-serif',
                    fontWeight: '500',
                }}>
                Events
            </h2>

            {/* Events Carousel */}
            <div className="flex justify-center gap-8 mt-12">
                {visibleEvents.map((event) => (
                    <div
                        key={event.id}
                        className="relative flex items-center justify-center"
                        style={{
                            width: "400px",
                            height: "428px",
                            overflow: "hidden"
                        }}
                    >
                        <img
                            src={event.image}
                            alt={`Event ${event.id}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Text */}
                        <div 
                            className="mt-[360px] ml-8 absolute inset-0 flex items-center justify-center text-white text-center white-space-nowrap"
                            style={{
                                fontFamily: 'Diodrum Cyrillic, sans-serif',
                                fontWeight: '700',
                                fontSize: '35px',
                                // lineHeight: '28px',
                                // letterSpacing: '1px',
                                width: '306px',
                                height: '28px',
                                // margin: 'auto'
                            }}
                        >
                            HITECH VIET 2016
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        currentIndex === 0
                            ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                            : 'border-[#A8CF45] text-[#A8CF45] hover:bg-[#A8CF45] hover:text-white'
                    }`}
                >
                    <ChevronLeft size={20} />
                </button>
                
                <button
                    onClick={handleNext}
                    disabled={currentIndex >= maxIndex}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        currentIndex >= maxIndex
                            ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                            : 'border-[#A8CF45] text-[#A8CF45] hover:bg-[#A8CF45] hover:text-white'
                    }`}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default EventsSection;
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import { countriesData } from './Globalvoicesoftrust';

interface Testimonial {
    id: number;
    rating: number;
    text: string;
    company: string;
    name: string;
    avatar?: string;
    countryCode: string;
}

const TestimonialsHero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: Testimonial[] = countriesData.flatMap(country =>
        country.reviews.map(review => ({
            ...review,
            countryCode: country.code,
        }))
    );

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                fill={index < rating ? '#FF8800' : 'none'}
                stroke={index < rating ? '#FF8800' : '#D1D5DB'}
                strokeWidth="2"
            />
        ));
    };

    return (
        <section className="py-16 md:py-24 lg:py-32 xl:py-40 bg-white relative overflow-hidden">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-14 xl:px-16 2xl:px-28 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="md:pr-4 lg:pr-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E4095] mb-4 lg:mb-6">
                            What Our Clients Say
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#404040] mb-6 lg:mb-8 leading-relaxed" style={{ fontFamily: 'Nato, sans-serif' }}>
                            Trusted by industries, municipalities,
                            <br />
                            and distributors across the globe.
                        </p>

                        <div className="flex space-x-3 lg:space-x-4">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#8ABF03] rounded-lg flex items-center justify-center transition-colors hover:bg-[#7AA003]"
                                aria-label="Previous testimonial"
                            >
                                <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4095]" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#8ABF03] rounded-lg flex items-center justify-center transition-colors hover:bg-[#7AA003]"
                                aria-label="Next testimonial"
                            >
                                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4095]" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CONTENT - TESTIMONIAL CARD */}
                    
<div className="relative flex justify-center">

  {/* CARD CURVES (BOUND TO CARD SIZE) */}
  {/* <svg
    className="absolute z-0 w-[130%] h-[130%]"
    style={{
      top: '20%',
      left: '50%',
      transform: 'translate(-100%, -30%)',
    }}
    viewBox="0 0 1200 400"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 80 C 300 40, 900 140, 1200 100"
      stroke="#C9CCF5"
      strokeOpacity="0.6"
      strokeWidth="1"
    />
    <path
      d="M0 140 C 320 120, 920 220, 1200 180"
      stroke="#C9CCF5"
      strokeOpacity="0.55"
      strokeWidth="1"
    />
    <path
      d="M0 200 C 360 200, 960 320, 1200 280"
      stroke="#C9CCF5"
      strokeOpacity="0.5"
      strokeWidth="1"
    />
  </svg> */}

  {/* TESTIMONIAL CARD */}
  <div className="relative z-10 bg-white rounded-2xl lg:rounded-3xl shadow-xl border-4 md:border-6 lg:border-8 border-[#A8CF454D] p-5 sm:p-6 lg:p-8 max-w-xl w-full">


                            {/* Country Flag */}
                            <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                                <div className="w-8 h-6 sm:w-9 sm:h-7 lg:w-10 lg:h-8 rounded-md overflow-hidden shadow-md">
                                    <img
                                        src={`https://flagcdn.com/w80/${testimonials[currentIndex].countryCode}.png`}
                                        alt="Country flag"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Rating Stars */}
                            <div className="flex space-x-1 mb-4 lg:mb-6">
                                {renderStars(testimonials[currentIndex].rating)}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-900 leading-relaxed mb-6 lg:mb-8 pr-8 lg:pr-12 font-inter">
                                {testimonials[currentIndex].text}
                            </p>

                            {/* User Info */}
                            <div className="flex items-center space-x-3 mb-6 lg:mb-8">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center text-white font-bold text-base lg:text-lg flex-shrink-0">
                                    {testimonials[currentIndex].name.charAt(0)}
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm lg:text-base truncate">
                                        {testimonials[currentIndex].company}
                                    </p>
                                    <p className="text-sm text-gray-600 truncate">
                                        {testimonials[currentIndex].name}
                                    </p>
                                </div>
                            </div>

                            {/* Quotation Mark */}
                            <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
                                <Quote className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#E2E3FF]" />
                            </div>

                            {/* Pagination Dots */}
                            <div className="flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-2 rounded-full transition-all ${index === currentIndex
                                                ? 'w-6 bg-blue-900'
                                                : 'w-2 bg-gray-300'
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsHero;
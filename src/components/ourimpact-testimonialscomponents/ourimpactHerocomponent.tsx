import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { useTranslateContent } from '../../hooks/useTranslateContent';
import vector12 from "../../assets/card-curves/Vector 12.svg"
import vector8 from "../../assets/card-curves/Vector 8.svg"
import vector9 from "../../assets/card-curves/Vector 9.svg"

interface Testimonial {
    id: number;
    rating: number;
    text: string;
    company: string;
    name: string;
    countryCode: string;
}

const TestimonialsHero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [heroContent, setHeroContent] = useState({
        heading: "",
        sub_heading: ""
    });

    useEffect(() => {
        fetch("http://65.0.77.32:8000/api/our-impact-page/")
            .then(res => res.json())
            .then(data => {
                // Set hero text from CMS
                setHeroContent(data.testimonials_hero);

                // Convert countries + reviews into flat testimonials list
                const allReviews = data.global_voices_of_trust.countries.flatMap((country: any) =>
                    country.reviews.map((review: any) => ({
                        ...review,
                        countryCode: country.code,
                    }))
                );

                setTestimonials(allReviews);
            });
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const { translatedText: translatedHeading } = useTranslateContent(heroContent.heading || "What Our Clients Say");
    const { translatedText: translatedSubHeading } = useTranslateContent(
        heroContent.sub_heading || "Trusted by industries, municipalities, and distributors across the globe."
    );

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
        <section className="py-16 md:py-24 lg:py-32 xl:py-40 bg-white relative overflow-hidden z-0">
            <div>
                <img
                    src={vector12}
                    alt=""
                    className="w-full object-contain opacity-40 absolute"
                    style={{
                        transform: 'rotate(-5deg)',
                        top: "-305px",
                        left: '18px',
                    }}
                />

                <img
                    src={vector8}
                    alt=""
                    className="w-full object-contain opacity-40 absolute"
                    style={{
                        transform: 'rotate(-7deg)',
                        top: '65px',
                    }}
                />
                <img
                    src={vector9}
                    alt=""
                    className="absolute w-full object-contain opacity-40 pointer-events-none"
                    style={{
                        top: '225px',
                        left: '-2px',
                        transform: 'rotate(-1.8deg)',
                    }}
                />
            </div>

            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-14 xl:px-16 2xl:px-28 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="md:pr-4 lg:pr-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:ml-[30px] font-bold text-[#3E4095] mb-4 lg:mb-6 2xl:mb-8">
                            {translatedHeading}
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl xl:ml-[30px] text-[#404040] mb-6 lg:mb-8 leading-relaxed">
                            {translatedSubHeading}
                        </p>

                        <div className="flex space-x-3 lg:space-x-4 xl:ml-[30px]">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#8ABF03] rounded-lg flex items-center justify-center"
                            >
                                <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4095]" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#8ABF03] rounded-lg flex items-center justify-center"
                            >
                                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4095]" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CONTENT - TESTIMONIAL CARD */}
                    <div className="relative flex justify-center">
                        <div className="relative z-10 bg-white rounded-2xl lg:rounded-3xl shadow-xl w-[600px] xl:w-[742px] 2xl:w-[800px]">
                            <img
                                src="/assets/images/ourimpact_img.png"
                                alt="Testimonial"
                                className="w-full h-auto rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsHero;
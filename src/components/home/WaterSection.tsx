import React, { useState } from 'react';

const WaterSolutionsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const products = [
        {
            id: 1,
            name: "ES-1812-75 RO Membrane",
            image: "/assets/images/MembraneTube3.png"
        },
        {
            id: 2,
            name: "ES-1812-75 RO Membrane",
            image: "/assets/images/MembraneTube2.png"
        },
        {
            id: 3,
            name: "ES-1812-75 RO Membrane",
            image: "/assets/images/MembraneTube1.png"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Section Title */}
            <h2 className="text-[48px] text-[#3E4095] text-center"
                style={{
                    fontFamily: 'Diodrum Cyrillic, sans-serif',
                    fontWeight: '500',
                }}>
                Our Water Solutions
            </h2>

            {/* Product Carousel */}
            <div className="relative mx-[130px] mt-[50px]">
                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 mt-[120px] transform -translate-y-1/2 z-20 transition-shadow duration-300"
                >
                    <img
                        src="/assets/images/arrowLeft.png"
                        alt="Previous"
                        style={{
                            width: 'full',
                            height: '54px'
                        }}
                    />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 mt-[120px] transform -translate-y-1/2 z-20 transition-shadow duration-300"
                >
                    <img
                        src="/assets/images/arrowRight.png"
                        alt="Next"
                        style={{
                            width: 'full',
                            height: '54px'
                        }}
                    />
                </button>

                {/* Products Container */}
                <div className="flex justify-center items-center py-8 gap-[173px]">
                    {products.map((product, index) => {
                        let scale = '';
                        let opacity = '';

                        if (index === currentSlide) {
                            scale = 'scale-110';
                            opacity = 'opacity-100';
                        } else if (
                            index === (currentSlide - 1 + products.length) % products.length ||
                            index === (currentSlide + 1) % products.length
                        ) {
                            scale = 'scale-100';
                            opacity = 'opacity-80';
                        } else {
                            scale = 'scale-90';
                            opacity = 'opacity-40';
                        }

                        return (
                            <div
                                key={product.id}
                                className={`transition-all duration-500 transform ${scale} ${opacity} flex flex-col items-center gap-[45px]`}
                            >
                                {/* Product Image Container */}
                                <div className="relative mb-6 flex items-center justify-center gap-[173px]">
                                    
                                    <div className="bg-[#A8CF45]" style={{
                                        width: '195px',
                                        height: '176px',
                                        transform: 'rotate(0deg)',
                                        borderBottomLeftRadius: '25%',
                                        borderBottomRightRadius: '121%',
                                        borderTopLeftRadius: '121%',
                                        borderTopRightRadius: '25%',
                                        opacity: '0.2'
                                    }}>
                                    </div>

                                    {/* Product Image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="object-contain"
                                            style={{
                                                width: 'full',
                                                height: 'full'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Product Name */}
                                <h3 className="text-[20px] font-medium text-[#323232] text-center whitespace-nowrap">
                                    {product.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* View All Products Button */}
            <div className="text-center mt-[50px]">
                <button className="w-[307px] h-[69px] bg-[#A8CF45] text-[#3E4095] px-8 py-3 rounded-lg font-medium text-lg hover:bg-[#98C135] transition-colors duration-300">
                    View All Products
                </button>
            </div>

        </section>
    );
};

export default WaterSolutionsSection;
import React from 'react';

const JoinPartnersSection: React.FC = () => {
    return (
        <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-34  relative z-10">
                <div className="bg-[#6E70B4] rounded-3xl shadow-2xl 
                                p-6 sm:p-10 md:p-16 lg:p-28 
                                relative overflow-hidden">

                    {/* Content */}
                    <div className="relative z-10 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 
                                       font-bold text-white mb-4 leading-tight">
                            Join our global partners who trust Hi-Tech
                            <br className="hidden sm:block" />
                            Membranes for their water treatment needs.
                        </h2>

                        <button className="mt-6 sm:mt-8 px-6 sm:px-7 py-2 
                                           bg-[#A8CF45] text-[#3E4095] 
                                           font-semibold rounded-lg">
                            Contact Us
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                        <img
                            src="/logo-1 (1).png"
                            alt="Hi-Tech Logo"
                            className="h-8 sm:h-10 md:h-12"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinPartnersSection;

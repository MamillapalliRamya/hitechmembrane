import React, { useEffect, useState } from 'react';
import { useTranslateContent } from '../../hooks/useTranslateContent';

const JoinPartnersSection: React.FC = () => {
    const [cmsData, setCmsData] = useState({
        heading: "",
        button_text: "",
        button_link: "",
        logo: null as string | null
    });

    useEffect(() => {
        fetch("http://65.0.77.32:8000/api/our-impact-page/")
            .then(res => res.json())
            .then(data => {
                setCmsData(data.join_partners_section);
            });
    }, []);

    const { translatedText: translatedHeading } = useTranslateContent(
        cmsData.heading || "Join our global partners who trust Hi-Tech Membranes for their water treatment needs."
    );
    const { translatedText: translatedButton } = useTranslateContent(cmsData.button_text || "Let's Talk");

    return (
        <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-28 relative z-10">
                <div className="bg-[#3E4095] rounded-3xl shadow-2xl p-6 sm:p-10 md:p-16 lg:p-28 relative overflow-hidden">

                    <div className="relative z-10 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 2xl:leading-[60px]">
                            {translatedHeading}
                        </h2>
                        <a href={cmsData.button_link || '/contact'}>
                            <button className="mt-6 sm:mt-8 px-6 sm:px-7 py-2 w-[150px]
                                           bg-[#A8CF45] text-[#3E4095] 
                                           font-semibold rounded-lg shadow-lg cursor-pointer
                                           transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#98C135]">
                                {translatedButton}
                            </button>
                        </a>
                    </div>

                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                        <img
                            src={cmsData.logo || "/logo-1 (1).png"}
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

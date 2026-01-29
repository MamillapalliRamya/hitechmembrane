import React from 'react';
import {
    Award,
    TrendingUp,
    Users,
    Globe,
    DollarSign,
    Headphones
} from 'lucide-react';


interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const WhyChoose: React.FC = () => {
    const features: Feature[] = [
        {
            icon: <Award size={32} color="#3d4a9d" strokeWidth={2} />,
            title: 'Proven Manufacturing Expertise',
            description: 'Over three decades of experience in reverse osmosis membrane manufacturing and process control.'
        },
        {
            icon: <TrendingUp size={32} color="#3d4a9d" strokeWidth={2} />,
            title: 'Consistent Product Performance',
            description: 'RO membranes engineered for stable flux, high rejection rates, and reliable long-term operation.'
        },
        {
            icon: <Users size={32} color="#3d4a9d" strokeWidth={2} />,
            title: 'OEM & Private Label Capabilities',
            description: 'Flexible manufacturing solutions supporting OEM partners and private-label requirements.'
        },
        {
            icon: <Globe size={32} color="#3d4a9d" strokeWidth={2} />,
            title: 'Global Application Experience',
            description: 'Trusted by customers across industrial, commercial, and municipal water treatment projects worldwide.'
        },
        {
            icon: <DollarSign size={32} color="#3d4a9d" strokeWidth={2} />,
            title: 'Competitive Total Cost of Ownership',
            description: 'Designed to deliver reliable performance while optimizing operating and lifecycle costs.'
        },
        {
            icon: <Headphones size={32} color="#3d4a9d" strokeWidth={2} />,
            title: 'Responsive Technical Support',
            description: 'Application-focused technical assistance from membrane selection through system operation.'
        }
    ];


    return (
        <section className="relative overflow-hidden bg-[#403E91] py-20 lg:py-11 2xl:py-20">
            <div className="relative mx-[40px] xl:mx-[80px] 2xl:mx-[112px]">
                {/* Section Header */}
                <div className="mb-12 text-center lg:mb-14">
                    <h2 className="mb-7 text-4xl font-bold tracking-tight text-white lg:text-[38px] xl:text-[48px] 2xl:text-[52px]">
                        Why Choose Hi-Tech Membranes
                    </h2>
                    <p className="mx-auto max-w-4xl text-lg text-white/90 lg:text-[20px] xl:text-[20px] 2xl:text-[21px]">
                        A trusted RO membrane manufacturer delivering performance, reliability and long term value.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 2xl:gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-white/20
                                       bg-white/10 p-8 backdrop-blur-sm xl:flex-row xl:items-start"
                        >

                            {/* Icon */}
                            <div className="flex shrink-0 items-center justify-center rounded-xl bg-[#9EE872]
                                            h-16 w-16 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16">
                                {feature.icon}
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col">
                                <h3 className="mb-2 text-xl font-bold leading-tight text-white lg:text-[21px] xl:text-[23px] 2xl:text-[28px]">
                                    {feature.title}
                                </h3>

                                <p className="leading-relaxed text-white/80 lg:text-[15px] xl:text-[15px] 2xl:text-[19px]">
                                    {feature.description}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
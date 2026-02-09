import React from 'react';
import {
    Award,
    TrendingUp,
    Users,
    Globe,
    DollarSign,
    Headphones
} from 'lucide-react';
import { useTranslateContent } from '../../hooks/useTranslateContent';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface CMSFeature {
    id: number;
    title: string | null;
    description: string | null;
    icon?: string | null;
}

interface Props {
    homepage?: any;
    why_choose_us?: CMSFeature[];
}

const WhyChoose: React.FC<Props> = ({ homepage, why_choose_us }) => {

    // ======= CMS + FALLBACK TEXTS =======
    const sectionTitle =
        homepage?.why_choose_title ||
        'Why Choose Hi-Tech Membranes';

    const sectionSubtitle =
        homepage?.why_choose_subtitle ||
        'A trusted RO membrane manufacturer delivering performance, reliability and long term value.';

    // Translate section title and subtitle ONCE at the top level
    const translatedTitle = useTranslateContent(sectionTitle).translatedText;
    const translatedSubtitle = useTranslateContent(sectionSubtitle).translatedText;

    // --------- ICON MAPPER (CMS → Lucide Icons) ----------
    const getIcon = (iconName: string | null | undefined) => {
        switch (iconName) {
            case "Award":
                return <Award size={32} color="#3d4a9d" strokeWidth={2} />;
            case "TrendingUp":
                return <TrendingUp size={32} color="#3d4a9d" strokeWidth={2} />;
            case "Users":
                return <Users size={32} color="#3d4a9d" strokeWidth={2} />;
            case "Globe":
                return <Globe size={32} color="#3d4a9d" strokeWidth={2} />;
            case "DollarSign":
                return <DollarSign size={32} color="#3d4a9d" strokeWidth={2} />;
            case "Headphones":
                return <Headphones size={32} color="#3d4a9d" strokeWidth={2} />;
            default:
                return <Award size={32} color="#3d4a9d" strokeWidth={2} />; 
        }
    };

    // --------- YOUR ORIGINAL UI DATA (UNCHANGED) ----------
    const fallbackFeatures: Feature[] = [
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

    // --------- CMS FEATURES FROM API ----------
    const cmsFeatures: CMSFeature[] = why_choose_us || [];

    // --------- CHECK IF CMS DATA HAS VALID CONTENT ----------
    const validCMSFeatures = cmsFeatures.filter(
        (f) => (f.title && f.title.trim() !== "") || (f.description && f.description.trim() !== "")
    );

    // If there are NO valid CMS entries, show ALL 6 fallback cards
    const finalFeatures: Feature[] =
        validCMSFeatures.length === 0
            ? fallbackFeatures  
            : validCMSFeatures.map((f, i) => ({  
                icon: f.icon
                    ? getIcon(f.icon)
                    : fallbackFeatures[i % fallbackFeatures.length].icon,

                title:
                    f.title && f.title.trim() !== ""
                        ? f.title
                        : fallbackFeatures[i % fallbackFeatures.length].title,

                description:
                    f.description && f.description.trim() !== ""
                        ? f.description
                        : fallbackFeatures[i % fallbackFeatures.length].description,
            }));

    return (
        <section className="relative overflow-hidden bg-[#403E91] py-20 lg:py-11 2xl:py-20">
            <div className="relative mx-[40px] xl:mx-[80px] 2xl:mx-[112px]">

                {/* Section Header */}
                <div className="mb-12 text-center lg:mb-14">
                    <h2 className="mb-7 text-4xl font-bold tracking-tight text-white lg:text-[38px] xl:text-[48px] 2xl:text-[52px]">
                        {translatedTitle}
                    </h2>

                    <p className="mx-auto max-w-4xl text-lg text-white/90 lg:text-[20px] xl:text-[20px] 2xl:text-[21px]">
                        {translatedSubtitle}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 2xl:gap-12">
                    {finalFeatures.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>

            </div>
        </section>
    );
};

// Separate component for each feature card to handle translations properly
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
    // Now hooks are called consistently for each card
    const translatedTitle = useTranslateContent(feature.title).translatedText;
    const translatedDescription = useTranslateContent(feature.description).translatedText;

    return (
        <div
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
                    {translatedTitle}
                </h3>

                <p className="leading-relaxed text-white/80 lg:text-[15px] xl:text-[15px] 2xl:text-[19px]">
                    {translatedDescription}
                </p>
            </div>
        </div>
    );
};

export default WhyChoose;
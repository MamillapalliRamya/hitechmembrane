import React, { useState, useEffect } from "react";
import { ChevronRight } from 'lucide-react';
import { useTranslateContent } from '../hooks/useTranslateContent';
import icon1 from "../assets/images/wetransfer_hitech/Icon1.svg"
import icon2 from "../assets/images/wetransfer_hitech/Icon2.svg"
import icon3 from "../assets/images/wetransfer_hitech/Icon3.svg"
import vector from "../assets/images/wetransfer_hitech/Vector.svg"
import vecteezy_pool from "../assets/images/wetransfer_hitech/vecteezy_pool-water-background.svg"
import vecteezy_clear from "../assets/images/wetransfer_hitech/vecteezy_clear_body.svg"
import Portfolio1 from "../assets/images/wetransfer_hitech/Residential_Membrane.svg"
import Portfolio2 from "../assets/images/wetransfer_hitech/commercial-ro-membranes.svg"
import Portfolio3 from "../assets/images/wetransfer_hitech/Industrial_Membrane.svg"
import Portfolio4 from "../assets/images/wetransfer_hitech/Sea_Water_Membrane.svg"
import heroBg from "../assets/images/wetransfer_hitech/innovation_bg.jpg";
import GlobalPresenceSection from "../components/home/GlobalPresence";
import { apiService, InnovationPageData } from "../services/api";




// Helper components to avoid hooks in loops
const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const { translatedText } = useTranslateContent(label);
  return (
    <div className="bg-white rounded-xl shadow-lg px-6 py-5 sm:px-8 sm:py-6 flex flex-col justify-center">
      <div className="text-[#B8D332] text-4xl sm:text-5xl font-bold mb-2">{value}</div>
      <div className="text-[#3D3B8E] font-bold font-['Diodrum Cyrillic']">{translatedText}</div>
    </div>
  );
};




const PillarCard: React.FC<{ pillar: any }> = ({ pillar }) => {
  const { translatedText: translatedTitle } = useTranslateContent(pillar.title);
  const { translatedText: translatedDescription } = useTranslateContent(pillar.description);
  const { translatedText: translatedMetricLabel } = useTranslateContent(pillar.metric_label);


  return (
    <div className="bg-white rounded-lg p-8 transition shadow-[0px_0px_6px_-1px_rgba(0,0,0,0.08),0px_0px_12px_-2px_rgba(0,0,0,0.12)] hover:shadow-xl">
      <div
        className="flex items-center justify-center mb-5 bg-[#B8D3321A]"
        style={{
          width: "60.0869px",
          height: "60.0869px",
          padding: "5px",
          opacity: 1,
          borderRadius: "9999px",
        }}
      >
        <img src={pillar.icon} alt="" className="w-9 h-9 object-contain" />
      </div>
      <h3 className="text-[25.03px] font-bold text-[#3D3B8E] mb-3 font-['Diodrum Cyrillic]">{translatedTitle}</h3>
      <p className="text-[#4A5565] mb-6 text-[18.02px]">{translatedDescription}</p>
      <div className=' border border-gray-100'> </div>
      <div className="text-[40.05px] font-bold text-[#B8D332] mb-2">{pillar.metric}</div>
      <div className="text-gray-600 text-[17.52px]">{translatedMetricLabel}</div>
    </div>
  );
};

const TimelineEvent: React.FC<{ event: any; index: number }> = ({ event, index }) => {
  const { translatedText: translatedTitle } = useTranslateContent(event.title);
  const { translatedText: translatedDescription } = useTranslateContent(event.description);

  return (
    <div
      className={`relative mb-12 flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
    >
      <div
        className={`
          w-[85%] sm:w-[90%] md:w-5/12 ml-14 sm:ml-16 md:ml-0
          ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}
          text-left md:text-center bg-white
          shadow-[0px_0px_6px_-1px_rgba(0,0,0,0.08),0px_0px_12px_-2px_rgba(0,0,0,0.12)]
          rounded-[14px] px-4 py-4 sm:px-5 sm:py-5 md:p-[20px]
        `}
      >
        <div className="text-4xl font-bold text-[#B8D332] mb-2">{event.year}</div>
        <h3 className="text-[20px] font-bold text-[#3D3B8E] mb-2">{translatedTitle}</h3>
        <p className="text-[#4A5565] text-[15px] font-Regular">{translatedDescription}</p>
      </div>
      <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-[#B8D332] rounded-full border-4 border-white shadow-lg z-10 top-6"></div>
      <div className="w-full md:w-5/12"></div>
    </div>
  );
};

const TeamStat: React.FC<{ stat: any }> = ({ stat }) => {
  const { translatedText } = useTranslateContent(stat.label);
  return (
    <div className="text-center">
      <div className="text-[60px] xl:text-[75px] 2xl:text-[80px] font-bold text-[#FFFFFF] mb-2">{stat.value}</div>
      <div className="text-[#3D3B8E] font-semibold text-[20px] xl:text-[22.02px] 2xl:text-[24.02px]">{translatedText}</div>
    </div>
  );
};

const PortfolioCard: React.FC<{ product: any; learnMoreText: string }> = ({ product, learnMoreText }) => {
  const { translatedText: translatedTitle } = useTranslateContent(product.title);
  const { translatedText: translatedDescription } = useTranslateContent(product.description);
  const { translatedText: translatedLearnMore } = useTranslateContent(learnMoreText);

   const handleLearnMore = () => {
    const fallbackMedia = Portfolio1; // ✅ use any existing imported image/file
    const mediaUrl = product.learn_more_link || product.image || fallbackMedia;
    window.open(mediaUrl, "_blank");
  };

  return (
    <div className="bg-white text-gray-800 rounded-[17.52px] overflow-hidden shadow-lg">
      <div className="w-full overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-[20.02px] font-['Diodrum_Cyrillic'] text-[#3D3B8E] mb-2">{translatedTitle}</h3>
        <p className="text-gray-600 text-[17px]">{translatedDescription}</p>
      </div>
      <button
        onClick={handleLearnMore}
        className="p-6 group inline-flex items-center gap-2 text-[#B8D332] font-semibold text-[20.02px]"
      >
        {translatedLearnMore}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          <ChevronRight className="mt-[4px] mr-3" />
        </span>
      </button>
    </div>
  );
};

// Fallback data
const fallbackInnovationData = {
  hero: {
    title: "Innovation Drives Our Purpose",
    description: "At Hi-Tech Membranes, innovation isn't just about developing new products—it's about creating sustainable water solutions that address the world's most pressing challenges.",
    button_text: "Explore",
    background_image: heroBg
  },
  stats: {
    background_image: vecteezy_pool,
    quote_text: "Clean water is a human right, and technology can make it possible for everyone",
    quote_author: "Hi-Tech Membranes Mission Statement",
    items: [
      { value: "30+", label: "Years of Experience" },
      { value: "100+", label: "Awards in Technology and Innovation" },
      { value: "50+", label: "Patents Acquired" }
    ]
  },
  pillars: {
    heading: "Our Innovation Pillars",
    subtext: "Three core principles guide our commitment to advancing water purification technology",
    items: [
      {
        icon: icon1,
        title: "Revolutionary RO Technology",
        description: "Our advanced reverse osmosis membranes deliver exceptional performance with industry-leading filtration efficiency and durability.",
        metric: "99.9%",
        metric_label: "Filtration Rate"
      },
      {
        icon: icon2,
        title: "Sustainable Manufacturing",
        description: "We prioritize eco-friendly production processes that minimize environmental impact while maximizing product quality.",
        metric: "50%",
        metric_label: "Reduced Carbon Footprint"
      },
      {
        icon: icon3,
        title: "Customer-Centric Solutions",
        description: "Every innovation is driven by real-world customer needs, ensuring practical solutions for diverse water treatment challenges.",
        metric: "24/7",
        metric_label: "Technical Support"
      }
    ]
  },
  timeline: {
    heading: "Our Innovation Journey",
    subtext: "Three decades of continuous advancement in water purification technology",
    events: [
      { year: "1995", title: "Hi-Tech Membranes Founded", description: "Our journey began with a vision to revolutionize water purification technology" },
      { year: "2000", title: "First International Expansion", description: "Extended our reach to serve customers across multiple continents" },
      { year: "2005", title: "Revolutionary RE Series Launch", description: "Introduced groundbreaking residential membrane technology" },
      { year: "2010", title: "200+ Claims Worldwide", description: "Achieved major milestone in global customer partnerships" },
      { year: "2015", title: "Advanced ES Series Membranes", description: "Launched high-efficiency commercial-grade membrane solutions" },
      { year: "2020", title: "Sustainability Certifications Achieved", description: "Recognized for environmental excellence and sustainable practices" },
      { year: "2025", title: "Next-Gen Sea Water Membranes", description: "Pioneering desalination technology for coastal communities" }
    ]
  },
  team: {
    heading: "The Minds Behind Innovation",
    subtext: "Meet our team of engineers, scientists, and water treatment experts",
    background_image: vecteezy_clear,
    stats: [
      { value: "50+", label: "Engineers & Scientists" },
      { value: "100+", label: "Patents & Innovations" },
      { value: "25+", label: "Average Years of Experience" }
    ]
  },
  portfolio: {
    heading: "Our Innovation Portfolio",
    subtext: "Cutting-edge membrane technology designed for every water treatment need",
    learn_more_text: "Learn More",
    items: [
      { title: "Residential Membrane Element", description: "High-performance RO membranes for home water purification systems", image: Portfolio1 },
      { title: "Commercial Membrane Element", description: "Reliable membranes for restaurants, hospitals, and businesses", image: Portfolio2 },
      { title: "Industrial Membrane Element", description: "Heavy-duty filtration solutions for large-scale water treatment", image: Portfolio3 },
      { title: "Sea Water Membrane Element", description: "Advanced desalination technology for coastal applications", image: Portfolio4 }
    ]
  },
  // ✅ Updated: now matches CMS shape with section_title + cards
  global_presence: {
    section_title: "Innovation Hubs Worldwide",
    cards: [
      { value: "3", title: "Innovation Centers", subtitle: "USA, Europe, Asia" },
      { value: "22", title: "Countries Served", subtitle: "Global partnerships" },
      { value: "5", title: "Continents", subtitle: "Worldwide presence" }
    ]
  }
};

const Innovation: React.FC = () => {
  const [innovationData, setInnovationData] = useState<InnovationPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCMS = async () => {
      try {
        const data = await apiService.getInnovationPageData();
        console.log("Innovation CMS:", data);
        setInnovationData(data);
      } catch (error) {
        console.error("CMS Error:", error);
        setInnovationData(fallbackInnovationData as any);
      } finally {
        setLoading(false);
      }
    };

    fetchCMS();
  }, []);



  const data = innovationData ?? fallbackInnovationData;

  // Process images
  const heroBgImage = data.hero.background_image?.startsWith?.('http')
    ? data.hero.background_image
    : data.hero.background_image?.startsWith?.('/media')
      ? `http://65.0.77.32:8000${data.hero.background_image}`
      : heroBg;

  const statsBgImage = data.stats.background_image?.startsWith?.('http')
    ? data.stats.background_image
    : data.stats.background_image?.startsWith?.('/media')
      ? `http://65.0.77.32:8000${data.stats.background_image}`
      : vecteezy_pool;

  const teamBgImage = data.team.background_image?.startsWith?.('http')
    ? data.team.background_image
    : data.team.background_image?.startsWith?.('/media')
      ? `http://65.0.77.32:8000${data.team.background_image}`
      : vecteezy_clear;

  const processedPillars = data.pillars.items.map((pillar, index) => ({
    ...pillar,
    icon: pillar.icon?.startsWith?.('http')
      ? pillar.icon
      : pillar.icon?.startsWith?.('/media')
        ? `http://65.0.77.32:8000${pillar.icon}`
        : [icon1, icon2, icon3][index]
  }));

  const portfolioItems =
    data.portfolio.items && data.portfolio.items.length > 0
      ? data.portfolio.items
      : fallbackInnovationData.portfolio.items;

  const processedPortfolio = portfolioItems.map((item, index) => ({
    ...item,
    image: item.image?.startsWith?.('http')
      ? item.image
      : item.image?.startsWith?.('/media')
        ? `http://65.0.77.32:8000${item.image}`
        : [Portfolio1, Portfolio2, Portfolio3, Portfolio4][index]
  }));

  // ✅ Read global_presence from CMS, fall back to fallback data
  const globalPresenceSection =
    (data as any).global_presence ?? fallbackInnovationData.global_presence;

  // ✅ Normalize CMS card shape { value, title, subtitle }
  //    → GlobalPresenceSection shape { value, label, country }
  const globalPresenceCards = (
    globalPresenceSection.cards?.length > 0
      ? globalPresenceSection.cards
      : fallbackInnovationData.global_presence.cards
  ).map((card: any) => ({
    value: card.value,
    label: card.title,
    country: card.subtitle,
  }));

  const Data = innovationData ?? fallbackInnovationData;

  const { translatedText: translatedHeroTitle } = useTranslateContent(Data.hero.title);
  const { translatedText: translatedHeroDescription } = useTranslateContent(Data.hero.description);
  const { translatedText: translatedHeroButtonText } = useTranslateContent(Data.hero.button_text);
  const { translatedText: translatedQuoteText } = useTranslateContent(Data.stats.quote_text);
  const { translatedText: translatedQuoteAuthor } = useTranslateContent(Data.stats.quote_author);
  const { translatedText: translatedPillarsHeading } = useTranslateContent(Data.pillars.heading);
  const { translatedText: translatedPillarsSubtext } = useTranslateContent(Data.pillars.subtext);
  const { translatedText: translatedTimelineHeading } = useTranslateContent(Data.timeline.heading);
  const { translatedText: translatedTimelineSubtext } = useTranslateContent(Data.timeline.subtext);
  const { translatedText: translatedTeamHeading } = useTranslateContent(Data.team.heading);
  const { translatedText: translatedTeamSubtext } = useTranslateContent(Data.team.subtext);
  const { translatedText: translatedPortfolioHeading } = useTranslateContent(Data.portfolio.heading);
  const { translatedText: translatedPortfolioSubtext } = useTranslateContent(Data.portfolio.subtext);
  // ✅ Title now comes from CMS global_presence.section_title
  const { translatedText: translatedGlobalHeading } = useTranslateContent(
    globalPresenceSection.section_title ?? "Innovation Hubs Worldwide"
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20 px-4 overflow-hidden h-[637px]">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${heroBgImage})` }}></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-['Diodrum_Cyrillic'] font-bold text-[36px] leading-[42px] sm:text-[44px] sm:leading-[50px] md:text-[56px] md:leading-[60px] lg:text-[55px] lg:leading-[68px] xl:text-[60.07px] xl:leading-[100px] tracking-[0px] text-center mb-6 mt-16">
            {translatedHeroTitle}
          </h1>
          <p className="font-['Diodrum_Cyrillic'] font-medium text-[16px] leading-[26px] sm:text-[18px] sm:leading-[30px] md:text-[20px] md:leading-[34px] lg:text-[22px] lg:leading-[38px] xl:text-[22.02px] xl:leading-[40.66px] tracking-[0px] text-center opacity-90 max-w-3xl mx-auto mb-8">
            {translatedHeroDescription}
          </p>
          <button
            onClick={() => {
              const section = document.getElementById("innovation-pillars");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-['Clash Grotesk'] w-[200px] h-[52px] sm:w-[240px] md:w-[283px] md:h-[74px] bg-[#A8CF45] text-[#3D3E96] rounded-[12px] text-[24px] md:text-[28px] font-medium opacity-100 transition shadow-lg cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#98C135]"
          >
            {translatedHeroButtonText}
          </button>

        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${statsBgImage})` }} />
        <div className="relative mx-[20px] lg:[40px] 2xl:mx-[90px] xl:mx-[60px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <img src={vector} className="text-white text-6xl leading-none mb-4" />
            <p className="font-['Diodrum_Cyrillic'] font-bold text-[28px] leading-[36px] sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] xl:text-[45.04px] xl:leading-[56.3px] text-indigo-900">
              "{translatedQuoteText}"
            </p>
            <p className="font-['Noto_Sans'] font-normal text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] md:text-[20px] md:leading-[32px] xl:text-[20.52px] xl:leading-[35.03px] text-gray-700 mt-6">
              {translatedQuoteAuthor}
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full sm:w-[350px] 2xl:w-[450px] mx-auto lg:mx-0 lg:ml-auto">
            {data.stats.items.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Pillars */}
      <section id="innovation-pillars" className="py-16 px-4 bg-white scroll-mt-24">
        <div className="lg:mx-[40px] 2xl:mx-[90px] xl:mx-[60px]">
          <h2 className="font-['Diodrum_Cyrillic'] font-bold text-center text-[#3D3B8E] tracking-[0px] leading-[60.05px] text-[32px] sm:text-[40px] sm:leading-[44px] md:text-[48px] md:leading-[52px] lg:text-[50.05px] lg:leading-[60.05px] mb-4">
            {translatedPillarsHeading}
          </h2>
          <p className="text-center text-[#4A5565] mb-12 max-w-3xl mx-auto text-[22.02px]">
            {translatedPillarsSubtext}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-20">
            {processedPillars.map((pillar, index) => (
              <PillarCard key={index} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Journey Timeline */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Diodrum_Cyrillic'] font-bold text-center text-[#3D3B8E] tracking-[0px] leading-[60.05px] text-[32px] sm:text-[40px] sm:leading-[44px] md:text-[48px] md:leading-[52px] lg:text-[50.05px] lg:leading-[60.05px] mb-4">
            {translatedTimelineHeading}
          </h2>
          <p className="text-center text-[#4A5565] mb-12 max-w-3xl mx-auto text-[22.02px]">
            {translatedTimelineSubtext}
          </p>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1 bg-[#B8D332]"></div>
            {data.timeline.events.map((event, index) => (
              <TimelineEvent key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16 px-4 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${teamBgImage})` }}>
        <div className="relative lg:mx-[40px] xl:mx-[60px] 2xl:mx-[90px] text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#3D3B8E] mb-8">{translatedTeamHeading}</h2>
          <p className="text-center text-[#4A5565] lg:mb-12 max-w-3xl mx-auto text-[24.02px]">{translatedTeamSubtext}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full mt-10">
            {data.team.stats.map((stat, index) => (
              <TeamStat key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Portfolio */}
      <section className="py-16 px-4 bg-[#3D3B8E] text-white">
        <div className="mx-[20px] lg:mx-[40px] 2xl:mx-[90px]">
          <h2 className="text-3xl md:text-[45px] font-bold text-center mb-4">{translatedPortfolioHeading}</h2>
          <p className="text-center opacity-90 mb-12 max-w-3xl mx-auto text-[22px] mt-5">{translatedPortfolioSubtext}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processedPortfolio.map((product, index) => (
              <PortfolioCard key={index} product={product} learnMoreText={data.portfolio.learn_more_text} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      {/* ✅ title and cards now driven by CMS global_presence data */}
      <GlobalPresenceSection
        title={translatedGlobalHeading}
        showDescription={false}
        showCards={true}
        cards={globalPresenceCards}
      />
    </div>
  );
};

export default Innovation;
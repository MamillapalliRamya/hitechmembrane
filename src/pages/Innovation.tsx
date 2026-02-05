import React, { useState } from "react";
import { Cloud } from "lucide-react";
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
import { ChevronRight } from 'lucide-react';
import heroBg from "../assets/images/wetransfer_hitech/innovation_bg.jpg";
import GlobalPresenceSection from "../components/home/GlobalPresence";


// Data in JSON format
const innovationData = {
  hero: {
    title: "Innovation Drives Our Purpose",
    description: "At Hi-Tech Membranes, innovation isn't just about developing new products—it's about creating sustainable water solutions that address the world's most pressing challenges.",
    buttonText: "Explore",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"

  },
  stat: {
    backgroundImage1: vecteezy_pool,
    backgroundImage2: vecteezy_clear,

  },
  stats: [
    { value: "30+", label: "Years of Experience" },
    { value: "100+", label: "Awards in Technology and Innovation" },
    { value: "50+", label: "Patents Acquired" }
  ],
  quote: {
    text: "Clean water is a human right, and technology can make it possible for everyone",
    author: "Hi-Tech Membranes Mission Statement"
  },
  pillars: [
    {
      icon: icon1,
      title: "Revolutionary RO Technology",
      description: "Our advanced reverse osmosis membranes deliver exceptional performance with industry-leading filtration efficiency and durability.",
      metric: "99.9%",
      metricLabel: "Filtration Rate"
    },
    {
      icon: icon2,
      title: "Sustainable Manufacturing",
      description: "We prioritize eco-friendly production processes that minimize environmental impact while maximizing product quality.",
      metric: "50%",
      metricLabel: "Reduced Carbon Footprint"
    },
    {
      icon: icon3,
      title: "Customer-Centric Solutions",
      description: "Every innovation is driven by real-world customer needs, ensuring practical solutions for diverse water treatment challenges.",
      metric: "24/7",
      metricLabel: "Technical Support"
    }
  ],
  timeline: [
    { year: "1995", title: "Hi-Tech Membranes Founded", description: "Our journey began with a vision to revolutionize water purification technology" },
    { year: "2000", title: "First International Expansion", description: "Extended our reach to serve customers across multiple continents" },
    { year: "2005", title: "Revolutionary RE Series Launch", description: "Introduced groundbreaking residential membrane technology" },
    { year: "2010", title: "200+ Claims Worldwide", description: "Achieved major milestone in global customer partnerships" },
    { year: "2015", title: "Advanced ES Series Membranes", description: "Launched high-efficiency commercial-grade membrane solutions" },
    { year: "2020", title: "Sustainability Certifications Achieved", description: "Recognized for environmental excellence and sustainable practices" },
    { year: "2025", title: "Next-Gen Sea Water Membranes", description: "Pioneering desalination technology for coastal communities" }
  ],
  team: [
    { value: "50+", label: "Engineers & Scientists" },
    { value: "100+", label: "Patents & Innovations" },
    { value: "25+", label: "Average Years of Experience" }
  ],
  portfolio: [
    { title: "Residential Membrane Element", description: "High-performance RO membranes for home water purification systems" },
    { title: "Commercial Membrane Element", description: "Reliable membranes for restaurants, hospitals, and businesses" },
    { title: "Industrial Membrane Element", description: "Heavy-duty filtration solutions for large-scale water treatment" },
    { title: "Sea Water Membrane Element", description: "Advanced desalination technology for coastal applications" }
  ],
  globalPresence: [
    { value: "3", label: "Innovation Centers", country: "USA, Europe, Asia" },
    { value: "22", label: "Countries Served", country: "Global partnerships" },
    { value: "5", label: "Continents", country: "Worldwide presence" }
  ]
};

const portfolioImages = [
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
];

const Innovation: React.FC = () => {
  // Translation content
  const heroTitle = innovationData.hero.title;
  const heroDescription = innovationData.hero.description;
  const heroButtonText = innovationData.hero.buttonText;

  // Stats labels
  const stat1Label = innovationData.stats[0].label;
  const stat2Label = innovationData.stats[1].label;
  const stat3Label = innovationData.stats[2].label;

  // Quote section
  const quoteText = innovationData.quote.text;
  const quoteAuthor = innovationData.quote.author;

  // Innovation Pillars
  const pillarsHeading = "Our Innovation Pillars";
  const pillarsSubtext = "Three core principles guide our commitment to advancing water purification technology";
  const pillar1Title = innovationData.pillars[0].title;
  const pillar1Description = innovationData.pillars[0].description;
  const pillar1MetricLabel = innovationData.pillars[0].metricLabel;
  const pillar2Title = innovationData.pillars[1].title;
  const pillar2Description = innovationData.pillars[1].description;
  const pillar2MetricLabel = innovationData.pillars[1].metricLabel;
  const pillar3Title = innovationData.pillars[2].title;
  const pillar3Description = innovationData.pillars[2].description;
  const pillar3MetricLabel = innovationData.pillars[2].metricLabel;

  // Timeline
  const timelineHeading = "Our Innovation Journey";
  const timelineSubtext = "Three decades of continuous advancement in water purification technology";

  // Team section
  const teamHeading = "The Minds Behind Innovation";
  const teamSubtext = "Meet our team of engineers, scientists, and water treatment experts";
  const team1Label = innovationData.team[0].label;
  const team2Label = innovationData.team[1].label;
  const team3Label = innovationData.team[2].label;

  // Portfolio
  const portfolioHeading = "Our Innovation Portfolio";
  const portfolioSubtext = "Cutting-edge membrane technology designed for every water treatment need";
  const learnMoreText = "Learn More";

  // Global Presence
  const globalHeading = "Innovation Hubs Worldwide";

  // Translation hooks - Hero Section
  const { translatedText: translatedHeroTitle } = useTranslateContent(heroTitle);
  const { translatedText: translatedHeroDescription } = useTranslateContent(heroDescription);
  const { translatedText: translatedHeroButtonText } = useTranslateContent(heroButtonText);

  // Translation hooks - Stats
  const { translatedText: translatedStat1Label } = useTranslateContent(stat1Label);
  const { translatedText: translatedStat2Label } = useTranslateContent(stat2Label);
  const { translatedText: translatedStat3Label } = useTranslateContent(stat3Label);

  // Translation hooks - Quote
  const { translatedText: translatedQuoteText } = useTranslateContent(quoteText);
  const { translatedText: translatedQuoteAuthor } = useTranslateContent(quoteAuthor);

  // Translation hooks - Pillars
  const { translatedText: translatedPillarsHeading } = useTranslateContent(pillarsHeading);
  const { translatedText: translatedPillarsSubtext } = useTranslateContent(pillarsSubtext);
  const { translatedText: translatedPillar1Title } = useTranslateContent(pillar1Title);
  const { translatedText: translatedPillar1Description } = useTranslateContent(pillar1Description);
  const { translatedText: translatedPillar1MetricLabel } = useTranslateContent(pillar1MetricLabel);
  const { translatedText: translatedPillar2Title } = useTranslateContent(pillar2Title);
  const { translatedText: translatedPillar2Description } = useTranslateContent(pillar2Description);
  const { translatedText: translatedPillar2MetricLabel } = useTranslateContent(pillar2MetricLabel);
  const { translatedText: translatedPillar3Title } = useTranslateContent(pillar3Title);
  const { translatedText: translatedPillar3Description } = useTranslateContent(pillar3Description);
  const { translatedText: translatedPillar3MetricLabel } = useTranslateContent(pillar3MetricLabel);

  // Translation hooks - Timeline
  const { translatedText: translatedTimelineHeading } = useTranslateContent(timelineHeading);
  const { translatedText: translatedTimelineSubtext } = useTranslateContent(timelineSubtext);

  // Translate timeline items
  const translatedTimeline1Title = useTranslateContent(innovationData.timeline[0].title).translatedText;
  const translatedTimeline1Desc = useTranslateContent(innovationData.timeline[0].description).translatedText;
  const translatedTimeline2Title = useTranslateContent(innovationData.timeline[1].title).translatedText;
  const translatedTimeline2Desc = useTranslateContent(innovationData.timeline[1].description).translatedText;
  const translatedTimeline3Title = useTranslateContent(innovationData.timeline[2].title).translatedText;
  const translatedTimeline3Desc = useTranslateContent(innovationData.timeline[2].description).translatedText;
  const translatedTimeline4Title = useTranslateContent(innovationData.timeline[3].title).translatedText;
  const translatedTimeline4Desc = useTranslateContent(innovationData.timeline[3].description).translatedText;
  const translatedTimeline5Title = useTranslateContent(innovationData.timeline[4].title).translatedText;
  const translatedTimeline5Desc = useTranslateContent(innovationData.timeline[4].description).translatedText;
  const translatedTimeline6Title = useTranslateContent(innovationData.timeline[5].title).translatedText;
  const translatedTimeline6Desc = useTranslateContent(innovationData.timeline[5].description).translatedText;
  const translatedTimeline7Title = useTranslateContent(innovationData.timeline[6].title).translatedText;
  const translatedTimeline7Desc = useTranslateContent(innovationData.timeline[6].description).translatedText;

  // Translation hooks - Team
  const { translatedText: translatedTeamHeading } = useTranslateContent(teamHeading);
  const { translatedText: translatedTeamSubtext } = useTranslateContent(teamSubtext);
  const { translatedText: translatedTeam1Label } = useTranslateContent(team1Label);
  const { translatedText: translatedTeam2Label } = useTranslateContent(team2Label);
  const { translatedText: translatedTeam3Label } = useTranslateContent(team3Label);

  // Translation hooks - Portfolio
  const { translatedText: translatedPortfolioHeading } = useTranslateContent(portfolioHeading);
  const { translatedText: translatedPortfolioSubtext } = useTranslateContent(portfolioSubtext);
  const { translatedText: translatedLearnMoreText } = useTranslateContent(learnMoreText);

  // Translate portfolio items
  const translatedPortfolio1Title = useTranslateContent(innovationData.portfolio[0].title).translatedText;
  const translatedPortfolio1Desc = useTranslateContent(innovationData.portfolio[0].description).translatedText;
  const translatedPortfolio2Title = useTranslateContent(innovationData.portfolio[1].title).translatedText;
  const translatedPortfolio2Desc = useTranslateContent(innovationData.portfolio[1].description).translatedText;
  const translatedPortfolio3Title = useTranslateContent(innovationData.portfolio[2].title).translatedText;
  const translatedPortfolio3Desc = useTranslateContent(innovationData.portfolio[2].description).translatedText;
  const translatedPortfolio4Title = useTranslateContent(innovationData.portfolio[3].title).translatedText;
  const translatedPortfolio4Desc = useTranslateContent(innovationData.portfolio[3].description).translatedText;

  // Translation hooks - Global Presence
  const { translatedText: translatedGlobalHeading } = useTranslateContent(globalHeading);

  // Prepare translated timeline array
  const translatedTimelineData = [
    { year: "1995", title: translatedTimeline1Title, description: translatedTimeline1Desc },
    { year: "2000", title: translatedTimeline2Title, description: translatedTimeline2Desc },
    { year: "2005", title: translatedTimeline3Title, description: translatedTimeline3Desc },
    { year: "2010", title: translatedTimeline4Title, description: translatedTimeline4Desc },
    { year: "2015", title: translatedTimeline5Title, description: translatedTimeline5Desc },
    { year: "2020", title: translatedTimeline6Title, description: translatedTimeline6Desc },
    { year: "2025", title: translatedTimeline7Title, description: translatedTimeline7Desc }
  ];

  // Prepare translated portfolio array
  const translatedPortfolioData = [
    { title: translatedPortfolio1Title, description: translatedPortfolio1Desc },
    { title: translatedPortfolio2Title, description: translatedPortfolio2Desc },
    { title: translatedPortfolio3Title, description: translatedPortfolio3Desc },
    { title: translatedPortfolio4Title, description: translatedPortfolio4Desc }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20 px-4 overflow-hidden h-[637px]">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1
            className="
                font-['Diodrum_Cyrillic']
                font-bold
                text-[36px]
                leading-[42px]

                sm:text-[44px] sm:leading-[50px]
                md:text-[56px] md:leading-[60px]
                lg:text-[55px] lg:leading-[68px]
                xl:text-[60.07px] xl:leading-[100px]
                tracking-[0px]
                text-center
                mb-6
                mt-16
            "
          >
            {translatedHeroTitle}
          </h1>

          <p className="
                font-['Diodrum_Cyrillic']
                font-medium
                text-[16px]
                leading-[26px]

                sm:text-[18px] sm:leading-[30px]
                md:text-[20px] md:leading-[34px]
                lg:text-[22px] lg:leading-[38px]
                xl:text-[22.02px] xl:leading-[40.66px]

                tracking-[0px]
                text-center
                opacity-90
                max-w-3xl
                mx-auto
                mb-8
            "
          >
            {translatedHeroDescription}
          </p>

          <button
            className="
            font-['Clash Grotesk']
            w-[200px]
            h-[52px]
            sm:w-[240px]
            md:w-[283px]
            md:h-[74px]
            bg-[#A8CF45]
            text-[#3D3E96]
            rounded-[12px]
            text-[24px]
            md:text-[28px] font-medium
            opacity-100 transition shadow-lg cursor-pointer
            transform
            transition-all duration-300 ease-in-out
            hover:scale-105
            hover:bg-[#98C135]
                "
          >
            {translatedHeroButtonText}
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${innovationData.stat.backgroundImage1})`,
          }}
        />

        {/* Content */}
        <div className="relative mx-[20px] lg:[40px] 2xl:mx-[90px] xl:mx-[60px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Quote Section */}
          <div className="text-left  ">
            <img src={vector} className="text-white text-6xl leading-none mb-4" />
            <p
              className="
                font-['Diodrum_Cyrillic']
                font-bold
                text-[28px] leading-[36px]
                sm:text-[32px] sm:leading-[40px]
                md:text-[36px] md:leading-[46px]
                lg:text-[40px] lg:leading-[50px]
                xl:text-[45.04px] xl:leading-[56.3px]
                text-indigo-900
                "
            >
              "{translatedQuoteText}"
            </p>

            <p
              className="
                font-['Noto_Sans']
                font-normal
                text-[16px] leading-[26px]
                sm:text-[18px] sm:leading-[28px]
                md:text-[20px] md:leading-[32px]
                xl:text-[20.52px] xl:leading-[35.03px]
                text-gray-700
                mt-6
                "
            >
              — {translatedQuoteAuthor}
            </p>
          </div>

          {/* RIGHT: Stats Cards */}
          <div
            className="
                flex flex-col gap-6
                w-full
                sm:w-[350px]
                2xl:w-[450px]
                mx-auto
                lg:mx-0
                lg:ml-auto
            "
          >
            {/* Stat 1 */}
            <div className="bg-white rounded-xl shadow-lg px-6 py-5 sm:px-8 sm:py-6 flex flex-col justify-center">
              <div className="text-[#B8D332] text-4xl sm:text-5xl font-bold mb-2">
                {innovationData.stats[0].value}
              </div>
              <div className="text-[#3D3B8E] font-bold font-['Diodrum Cyrillic']">
                {translatedStat1Label}
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-xl shadow-lg px-6 py-5 sm:px-8 sm:py-6 flex flex-col justify-center">
              <div className="text-[#B8D332] text-4xl sm:text-5xl font-bold mb-2">
                {innovationData.stats[1].value}
              </div>
              <div className="text-[#3D3B8E] font-bold font-['Diodrum Cyrillic']">
                {translatedStat2Label}
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-xl shadow-lg px-6 py-5 sm:px-8 sm:py-6 flex flex-col justify-center">
              <div className="text-[#B8D332] text-4xl sm:text-5xl font-bold mb-2">
                {innovationData.stats[2].value}
              </div>
              <div className="text-[#3D3B8E] font-bold font-['Diodrum Cyrillic']">
                {translatedStat3Label}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Innovation Pillars */}
      <section className="py-16 px-4 bg-white">
        <div className="lg:mx-[40px] 2xl:mx-[90px] xl:mx-[60px]">
          <h2
            className=" font-['Diodrum_Cyrillic'] font-bold text-center text-[#3D3B8E] tracking-[0px] leading-[60.05px] text-[32px] sm:text-[40px] sm:leading-[44px] md:text-[48px] md:leading-[52px] lg:text-[50.05px] lg:leading-[60.05px] mb-4"
          >
            {translatedPillarsHeading}
          </h2>

          <p className="text-center text-[#4A5565] mb-12 max-w-3xl mx-auto text-[22.02px]">
            {translatedPillarsSubtext}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-20">
            {/* Pillar 1 */}
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
                <img
                  src={innovationData.pillars[0].icon}
                  alt=""
                  className="w-9 h-9 object-contain"
                />
              </div>

              <h3 className="text-[25.03px] font-bold text-[#3D3B8E] mb-3 font-['Diodrum Cyrillic]">{translatedPillar1Title}</h3>
              <p className="text-[#4A5565] mb-6 text-[18.02px]">{translatedPillar1Description}</p>
              <div className=' border border-gray-100'> </div>
              <div className="text-[40.05px] font-bold text-[#B8D332] mb-2">{innovationData.pillars[0].metric}</div>
              <div className="text-gray-600 text-[17.52px]">{translatedPillar1MetricLabel}</div>
            </div>

            {/* Pillar 2 */}
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
                <img
                  src={innovationData.pillars[1].icon}
                  alt=""
                  className="w-9 h-9 object-contain"
                />
              </div>

              <h3 className="text-[25.03px] font-bold text-[#3D3B8E] mb-3 font-['Diodrum Cyrillic]">{translatedPillar2Title}</h3>
              <p className="text-[#4A5565] mb-6 text-[18.02px]">{translatedPillar2Description}</p>
              <div className=' border border-gray-100'> </div>
              <div className="text-[40.05px] font-bold text-[#B8D332] mb-2">{innovationData.pillars[1].metric}</div>
              <div className="text-gray-600 text-[17.52px]">{translatedPillar2MetricLabel}</div>
            </div>

            {/* Pillar 3 */}
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
                <img
                  src={innovationData.pillars[2].icon}
                  alt=""
                  className="w-9 h-9 object-contain"
                />
              </div>

              <h3 className="text-[25.03px] font-bold text-[#3D3B8E] mb-3 font-['Diodrum Cyrillic]">{translatedPillar3Title}</h3>
              <p className="text-[#4A5565] mb-6 text-[18.02px]">{translatedPillar3Description}</p>
              <div className=' border border-gray-100'> </div>
              <div className="text-[40.05px] font-bold text-[#B8D332] mb-2">{innovationData.pillars[2].metric}</div>
              <div className="text-gray-600 text-[17.52px]">{translatedPillar3MetricLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Journey Timeline */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className=" font-['Diodrum_Cyrillic'] font-bold text-center text-[#3D3B8E] tracking-[0px] leading-[60.05px] text-[32px] sm:text-[40px] sm:leading-[44px] md:text-[48px] md:leading-[52px] lg:text-[50.05px] lg:leading-[60.05px] mb-4"
          >
            {translatedTimelineHeading}
          </h2>
          <p className="text-center text-[#4A5565] mb-12 max-w-3xl mx-auto text-[22.02px]">
            {translatedTimelineSubtext}
          </p>

          <div className="relative ">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-[#B8D332] hidden md:block"></div>

            {translatedTimelineData.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 flex  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col items-center `}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-5/12  ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                    } text-center    bg-white
                   shadow-[0px_0px_6px_-1px_rgba(0,0,0,0.08),0px_0px_12px_-2px_rgba(0,0,0,0.12)]

                    rounded-[12.51px] p-[20px] `}
                >
                  <div className="text-4xl font-bold text-[#B8D332] mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-[20px] font-bold text-[#3D3B8E] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#4A5565] text-[15px] font-Regular">{item.description}</p>
                </div>

                {/* ✅ PERFECTLY CENTERED DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#B8D332] rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Spacer */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="relative py-16 px-4 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${innovationData.stat.backgroundImage2})`,
        }}
      >
        <div className="relative lg:mx-[40px] xl:mx-[60px] 2xl:mx-[90px] text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#3D3B8E] mb-8">
            {translatedTeamHeading}
          </h2>
          <p className="text-center text-[#4A5565] lg:mb-12 max-w-3xl mx-auto text-[24.02px]">
            {translatedTeamSubtext}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full mt-10">
            {/* Team Item 1 */}
            <div className="text-center">
              <div className="text-[60px] xl:text-[75px] 2xl:text-[80px] font-bold text-[#FFFFFF] mb-2">
                {innovationData.team[0].value}
              </div>
              <div className="text-[#3D3B8E] font-semibold text-[20px] xl:text-[22.02px] 2xl:text-[24.02px]">
                {translatedTeam1Label}
              </div>
            </div>

            {/* Team Item 2 */}
            <div className="text-center">
              <div className="text-[60px] xl:text-[75px] 2xl:text-[80px] font-bold text-[#FFFFFF] mb-2">
                {innovationData.team[1].value}
              </div>
              <div className="text-[#3D3B8E] font-semibold text-[20px] xl:text-[22.02px] 2xl:text-[24.02px]">
                {translatedTeam2Label}
              </div>
            </div>

            {/* Team Item 3 */}
            <div className="text-center">
              <div className="text-[60px] xl:text-[75px] 2xl:text-[80px] font-bold text-[#FFFFFF] mb-2">
                {innovationData.team[2].value}
              </div>
              <div className="text-[#3D3B8E] font-semibold text-[20px] xl:text-[22.02px] 2xl:text-[24.02px]">
                {translatedTeam3Label}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Portfolio */}
      <section className="py-16 px-4 bg-[#3D3B8E] text-white">
        <div className="mx-[20px] lg:mx-[40px] 2xl:mx-[90px]">
          <h2 className="text-3xl md:text-[45px] font-bold text-center mb-4">
            {translatedPortfolioHeading}
          </h2>
          <p className="text-center opacity-90 mb-12 max-w-3xl mx-auto text-[22px] mt-5">
            {translatedPortfolioSubtext}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {translatedPortfolioData.map((product, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-[17.52px] overflow-hidden shadow-lg">
                <div className=" w-full overflow-hidden">
                  <img
                    src={portfolioImages[index]}
                    alt={product.title}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[20.02px] font-['Diodrum_Cyrillic'] text-[#3D3B8E] mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-[17px]">{product.description}</p>
                </div>
                <button className=" p-6 group inline-flex items-center gap-2 text-[#B8D332] font-semibold text-[20.02px] ">
                  {translatedLearnMoreText}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ChevronRight className='mt-[4px] mr-3' />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section - Using the common component */}
      <GlobalPresenceSection 
        title={translatedGlobalHeading}
        showDescription={false}
        showCards={true}
        cards={innovationData.globalPresence}
      />
    </div>
  );
};

export default Innovation;
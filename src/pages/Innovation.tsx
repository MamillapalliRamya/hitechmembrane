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
import { X, Star } from "lucide-react";
import image1 from "../assets/images/wetransfer_hitech/logo-1.png";
import heroBg from "../assets/images/wetransfer_hitech/innovation_bg.jpg";


interface Review {
  name: string;
  rating: number;
  text: string;
}

interface Location {
  id: number;
  country: string;
  x: number;
  y: number;
  countryCode: string;
  type: "main" | "warehouse" | "site";
  reviews?: Review[];
}


// Data in JSON format
const innovationData = {
  hero: {
    title: "Innovation Drives Our Purpose",
    description: "At Hi-Tech Membranes, innovation isn't just about developing new products—it's about creating sustainable water solutions that address the world's most pressing challenges.",
    buttonText: "Explore",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"

  },
 stat:{
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
    { value: "3", label: "Innovation Centers" ,country: "USA, Europe, Asia" },
    { value: "22", label: "Countries Served",country: "Global partnerships" },
    { value: "5", label: "Continents",country: "Worldwide presence" }
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
  const globalSubtext = "Our global network of research and development centers";
  const mapInfo1 = "Multiple Export Markets Served";
  const mapInfo2 = "30+ Years of Manufacturing Experience";
  const mapInfo3 = "OEM & Private Label Partners Worldwide";
  const mapInfo4 = "200+ Global Customers";
  const clickToKnowMore = "Click to know more";
  const reviewsHeading = "Reviews";
  const warehouseText = "Warehouse";
  const siteText = "Site";
  
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
  const { translatedText: translatedGlobalSubtext } = useTranslateContent(globalSubtext);
  const { translatedText: translatedMapInfo1 } = useTranslateContent(mapInfo1);
  const { translatedText: translatedMapInfo2 } = useTranslateContent(mapInfo2);
  const { translatedText: translatedMapInfo3 } = useTranslateContent(mapInfo3);
  const { translatedText: translatedMapInfo4 } = useTranslateContent(mapInfo4);
  const { translatedText: translatedClickToKnowMore } = useTranslateContent(clickToKnowMore);
  const { translatedText: translatedReviewsHeading } = useTranslateContent(reviewsHeading);
  const { translatedText: translatedWarehouseText } = useTranslateContent(warehouseText);
  const { translatedText: translatedSiteText } = useTranslateContent(siteText);
  
  // Translate global presence items
  const translatedGlobal1Label = useTranslateContent(innovationData.globalPresence[0].label).translatedText;
  const translatedGlobal1Country = useTranslateContent(innovationData.globalPresence[0].country).translatedText;
  const translatedGlobal2Label = useTranslateContent(innovationData.globalPresence[1].label).translatedText;
  const translatedGlobal2Country = useTranslateContent(innovationData.globalPresence[1].country).translatedText;
  const translatedGlobal3Label = useTranslateContent(innovationData.globalPresence[2].label).translatedText;
  const translatedGlobal3Country = useTranslateContent(innovationData.globalPresence[2].country).translatedText;

  /* ---------- Map States ---------- */
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [selectedLocation, setSelectedLocation] =
    useState<Location | null>(null);
  const [imageLoadFailed, setImageLoadFailed] = useState<Record<number, boolean>>(
    {}
  );
  const [mapTransform, setMapTransform] = useState(
    "translate(0, 0) scale(1)"
  );

 const locations: Location[] = [
    // Original locations
    {
      id: 1,
      country: 'India',
      x: 66,
      y: 22,
      countryCode: 'in',
      type: 'main',
      reviews: [
        {
          name: 'Raj Patel',
          rating: 5,
          text: "Hi-Tech's RO membranes offer great filtration efficiency and durability for reliable water purification."
        },
        {
          name: 'Priya Sharma',
          rating: 4,
          text: "Excellent membrane technology for water purification systems. Very satisfied with the quality."
        }
      ]
    },
    {
      id: 2,
      country: 'Thailand',
      x: 72,
      y: 21,
      countryCode: 'th',
      type: 'main',
      reviews: [
        {
          name: 'Alex Johnson',
          rating: 4,
          text: "Hi-Tech's RO membranes offer great filtration efficiency and durability for reliable water purification."
        },
        {
          name: 'Jordan Smith',
          rating: 5,
          text: "Hi-Tech's RO membranes offer great filtration efficiency and durability for reliable water purification."
        },
        {
          name: 'Scarlett James',
          rating: 4,
          text: "Hi-Tech's RO membranes offer great filtration efficiency and durability for reliable water purification."
        },
        {
          name: 'Tyler Perry',
          rating: 4,
          text: "Hi-Tech's RO membranes offer great filtration efficiency and durability for reliable water purification."
        }
      ]
    },
    {
      id: 3,
      country: 'UAE',
      x: 57,
      y: 18,
      countryCode: 'ae',
      type: 'main',
      reviews: [
        {
          name: 'Ahmed Al-Rashid',
          rating: 5,
          text: "Outstanding membrane technology with excellent customer support and fast delivery."
        },
        {
          name: 'Sarah Davis',
          rating: 4,
          text: "Very satisfied with the quality and performance of Hi-Tech membranes."
        }
      ]
    },
    {
      id: 7,
      country: 'China',
      x: 75,
      y: 14,
      countryCode: 'cn',
      type: 'main',
      reviews: [
        {
          name: 'Li Wei',
          rating: 5,
          text: "Great membrane solutions for water treatment facilities. Exceptional quality membranes."
        },
        {
          name: 'Zhang Ming',
          rating: 4,
          text: "Perfect for industrial applications. Very reliable membrane technology."
        }
      ]
    },
    // New locations
    {
      id: 8,
      country: 'Egypt',
      x: 52,
      y: 20,
      countryCode: 'eg',
      type: 'main',
      reviews: [
        {
          name: 'Omar Hassan',
          rating: 5,
          text: "Excellent water treatment solutions for our industrial needs. Outstanding performance and reliability."
        },
        {
          name: 'Fatima El-Sayed',
          rating: 4,
          text: "Hi-Tech membranes have significantly improved our water quality. Highly recommended for commercial use."
        }
      ]
    },
    {
      id: 9,
      country: 'Vietnam',
      x: 74,
      y: 23,
      countryCode: 'vn',
      type: 'main',
      reviews: [
        {
          name: 'Nguyen Van',
          rating: 5,
          text: "Superior membrane technology with excellent durability. Perfect for our manufacturing facility."
        },
        {
          name: 'Tran Thi',
          rating: 4,
          text: "Great filtration efficiency and cost-effective solution for water purification systems."
        }
      ]
    },
    {
      id: 10,
      country: 'Pakistan',
      x: 63,
      y: 18,
      countryCode: 'pk',
      type: 'main',
      reviews: [
        {
          name: 'Muhammad Ali',
          rating: 5,
          text: "Outstanding RO membrane quality with excellent technical support. Very satisfied with the performance."
        },
        {
          name: 'Ayesha Khan',
          rating: 4,
          text: "Reliable water treatment solutions for our commercial operations. Highly effective membranes."
        }
      ]
    },
    {
      id: 11,
      country: 'Saudi Arabia',
      x: 57,
      y: 21,
      countryCode: 'sa',
      type: 'main',
      reviews: [
        {
          name: 'Abdullah Al-Fahad',
          rating: 5,
          text: "Exceptional membrane technology for seawater desalination. Perfect quality and performance."
        },
        {
          name: 'Nora Al-Rashid',
          rating: 4,
          text: "High-quality membranes with excellent salt rejection rates. Great for industrial applications."
        }
      ]
    },
    {
      id: 12,
      country: 'Indonesia',
      x: 78,
      y: 26,
      countryCode: 'id',
      type: 'main',
      reviews: [
        {
          name: 'Budi Santoso',
          rating: 5,
          text: "Excellent membrane solutions for tropical climate conditions. Very durable and efficient."
        },
        {
          name: 'Sari Dewi',
          rating: 4,
          text: "Great water purification technology with reliable performance. Perfect for our facility needs."
        }
      ]
    },
    {
      id: 13,
      country: 'Iran',
      x: 60,
      y: 16,
      countryCode: 'ir',
      type: 'main',
      reviews: [
        {
          name: 'Reza Hosseini',
          rating: 5,
          text: "Superior quality membranes with excellent chemical resistance. Perfect for industrial water treatment."
        },
        {
          name: 'Maryam Ahmadi',
          rating: 4,
          text: "High-performance RO membranes with great efficiency. Very satisfied with the results."
        }
      ]
    },
    {
      id: 14,
      country: 'Jordan',
      x: 54,
      y: 17,
      countryCode: 'jo',
      type: 'main',
      reviews: [
        {
          name: 'Khaled Al-Zahra',
          rating: 5,
          text: "Outstanding membrane technology for water scarcity solutions. Excellent quality and durability."
        },
        {
          name: 'Layla Mansour',
          rating: 4,
          text: "Great filtration performance with reliable long-term operation. Highly recommended membranes."
        }
      ]
    },
    {
      id: 15,
      country: 'Australia',
      x: 85,
      y: 33,
      countryCode: 'au',
      type: 'main',
      reviews: [
        {
          name: 'James Mitchell',
          rating: 5,
          text: "Excellent membrane technology meeting Australian standards. Outstanding performance and reliability."
        },
        {
          name: 'Emma Thompson',
          rating: 4,
          text: "High-quality RO membranes with great efficiency. Perfect for commercial water treatment applications."
        }
      ]
    },
    {
      id: 16,
      country: 'Philippines',
      x: 79,
      y: 23,
      countryCode: 'ph',
      type: 'main',
      reviews: [
        {
          name: 'Maria Santos',
          rating: 5,
          text: "Exceptional water treatment solutions for island applications. Great membrane quality and performance."
        },
        {
          name: 'Jose Reyes',
          rating: 4,
          text: "Reliable membrane technology with excellent salt rejection. Perfect for our coastal facility."
        }
      ]
    },
    {
      id: 17,
      country: 'South Africa',
      x: 51,
      y: 34,
      countryCode: 'za',
      type: 'main',
      reviews: [
        {
          name: 'Thabo Mthembu',
          rating: 5,
          text: "Outstanding membrane solutions for African water challenges. Excellent durability and efficiency."
        },
        {
          name: 'Sarah van der Merwe',
          rating: 4,
          text: "High-quality RO membranes with great performance. Very satisfied with the water treatment results."
        }
      ]
    },
    {
      id: 18,
      country: 'Nepal',
      x: 69,
      y: 17,
      countryCode: 'np',
      type: 'main',
      reviews: [
        {
          name: 'Ram Sharma',
          rating: 5,
          text: "Excellent membrane technology for mountain region applications. Great quality and reliability."
        },
        {
          name: 'Sita Gurung',
          rating: 4,
          text: "High-performance water treatment solutions. Perfect for our community water purification needs."
        }
      ]
    },
    {
      id: 19,
      country: 'United States',
      x: 16,
      y: 18,
      countryCode: 'us',
      type: 'main',
      reviews: [
        {
          name: 'Robert Johnson',
          rating: 5,
          text: "Superior membrane technology meeting strict US standards. Exceptional quality and performance."
        },
        {
          name: 'Jennifer Davis',
          rating: 4,
          text: "Excellent RO membranes with great efficiency. Perfect for industrial water treatment applications."
        }
      ]
    },
    {
      id: 20,
      country: 'United Kingdom',
      x: 43,
      y: 12,
      countryCode: 'gb',
      type: 'main',
      reviews: [
        {
          name: 'David Wilson',
          rating: 5,
          text: "Outstanding membrane quality meeting European standards. Excellent durability and filtration efficiency."
        },
        {
          name: 'Sophie Brown',
          rating: 4,
          text: "High-quality water treatment solutions with reliable performance. Very satisfied with the results."
        }
      ]
    }
  ];


  /* ---------- Helpers ---------- */
  const handleImageError = (id: number) =>
    setImageLoadFailed((p) => ({ ...p, [id]: true }));

  const handleLocationClick = (location: Location) => {
    if (location.reviews) {
      setSelectedLocation(location);
      setMapTransform("translate(-120px, 0px) scale(0.8)");
    }
  };

  const closePanel = () => {
    setSelectedLocation(null);
    setMapTransform("translate(0, 0) scale(1)");
  };

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));

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
            <h2  className=" font-['Diodrum_Cyrillic'] font-bold text-center text-[#3D3B8E] tracking-[0px] leading-[60.05px] text-[32px] sm:text-[40px] sm:leading-[44px] md:text-[48px] md:leading-[52px] lg:text-[50.05px] lg:leading-[60.05px] mb-4"
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
                className={`relative mb-12 flex  ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col items-center `}
                >
                {/* Content */}
                <div
                    className={`w-full md:w-5/12  ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
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
            {/* Optional overlay for readability */}
            {/* <div className="absolute inset-0 bg-white/70" /> */}

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
                    <ChevronRight className='mt-[4px] mr-3'/>
                </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

         {/* ---------------- Global Presence ---------------- */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#3D3B8E]">
            {translatedGlobalHeading}
          </h2>
          <p className="text-[#4A5565] text-[22px] mt-4 mb-10">
            {translatedGlobalSubtext}
          </p>

          <div className="relative mb-12 overflow-hidden rounded-lg" >
          <div className="relative w-full max-w-6xl mx-auto">
            {/* World Map Container with smooth transitions */}
            <div
              className="relative transition-transform duration-1000 ease-in-out origin-center"
              style={{
                transform: mapTransform,
                willChange: 'transform'
              }}
            >
              {/* World Map Image */}
              <img
                src="assets/images/worldMapviolet.png"
                alt="World Map"
                className="w-full h-auto"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                  }
                }}
              />

              {/* Info Boxes on Map */}
              <div className="hidden sm:block absolute inset-0 pointer-events-none">
                {/* Multiple Export Markets Served - Top Left */}
                <div 
                  className="absolute bg-[#a8d96e] text-gray-800 px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap"
                  style={{ 
                    // left: '12%', 
                    top: '24%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  {translatedMapInfo1}
                </div>

                {/* 30+ Years of Manufacturing Experience - Top Right */}
                <div 
                  className="absolute bg-[#a8d96e] text-gray-800 px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap"
                  style={{ 
                    right: '1%', 
                    top: '17%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  {translatedMapInfo2}
                </div>

                {/* OEM & Private Label Partners Worldwide - Right Side */}
                <div 
                  className="absolute bg-[#a8d96e] text-gray-800 px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap"
                  style={{ 
                    right: '-3%', 
                    top: '48%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  {translatedMapInfo3}
                </div>

                {/* 200+ Global Customers - Bottom Left */}
                <div 
                  className="absolute bg-[#a8d96e] text-gray-800 px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap"
                  style={{ 
                    left: '20%', 
                    bottom: '18%',
                  }}
                >
                  {translatedMapInfo4}
                </div>
              </div>

              {/* Location Markers Overlay */}
              <div className="absolute inset-0">
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-full"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  {locations.map((location) => (
                    <g key={location.id}>
                      {/* Green map pin marker image for main offices */}
                      {location.type === 'main' && !imageLoadFailed[location.id] && (
                        <foreignObject
                          x={location.x * 10 - 20}
                          y={location.y * 10 - 35}
                          width="40"
                          height="48"
                          onMouseEnter={() => setHoveredLocation(location)}
                          onMouseLeave={() => setHoveredLocation(null)}
                          onClick={() => handleLocationClick(location)}
                          style={{ cursor: 'pointer', overflow: 'visible' }}
                        >
                          <img
                            src="assets/images/blue-pin-marker.png"
                            alt="Location marker"
                            className="transition-transform duration-200"
                            style={{
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                              pointerEvents: 'none',
                              transform: hoveredLocation?.id === location.id ? 'scale(1.4)' : 'scale(1)',
                              transformOrigin: 'center center',
                              width: '20px',
                              height: '24px'
                            }}
                            onError={() => handleImageError(location.id)}
                          />
                        </foreignObject>
                      )}

                     
                    </g>
                  ))}
                </svg>
              </div>

              {/* Enhanced Tooltip for Main Offices */}
              {hoveredLocation && hoveredLocation.type === 'main' && !selectedLocation && (
                <>
                  {/* Flag + Country (above marker) */}
                  <div
                    className="absolute z-20 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 pointer-events-none flex items-center space-x-2"
                    style={{
                      left: `${(hoveredLocation.x * 10) * (100 / 1000)}%`,
                      top: `${(hoveredLocation.y * 10) * (100 / 500)}%`,
                      transform: 'translate(-50%, -180%)', // above marker
                    }}
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-300">
                      <img
                        src={`https://flagcdn.com/w40/${hoveredLocation.countryCode.toLowerCase()}.png`}
                        alt={`${hoveredLocation.country} flag`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          if (e.currentTarget.nextElementSibling) {
                            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                          }
                        }}
                      />
                      <div
                        className="w-full h-full flex items-center justify-center text-sm"
                        style={{ display: 'none' }}
                      >
                        🏳️
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                      {hoveredLocation.country}
                    </span>
                  </div>

                  {/* Click to know more (below marker) */}
                  <div
                    className="absolute z-20 bg-yellow-200 text-gray-800 px-3 py-1 rounded-md shadow border border-green-300 pointer-events-none text-xs font-medium"
                    style={{
                      left: `${(hoveredLocation.x * 10) * (100 / 1000)}%`,
                      top: `${(hoveredLocation.y * 10) * (100 / 500)}%`,
                      transform: 'translate(-50%, 10px)', // below marker
                    }}
                  >
                    {translatedClickToKnowMore}
                  </div>
                </>
              )}

              {/* Original Tooltip for Warehouse and Site Locations */}
              {hoveredLocation && (hoveredLocation.type === 'warehouse' || hoveredLocation.type === 'site') && !selectedLocation && (
                <div
                  className="absolute z-10 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 pointer-events-none"
                  style={{
                    left: `${(hoveredLocation.x * 10) * (100 / 1000)}%`,
                    top: `${(hoveredLocation.y * 10) * (100 / 500)}%`,
                    transform: 'translate(15px, -12px)',
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img
                        src={image1}
                        alt="HiTech Logo"
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          if (e.currentTarget.nextElementSibling) {
                            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                          }
                        }}
                      />
                      <span className="text-gray-800 text-xs font-bold" style={{ display: 'none' }}>
                        HT
                      </span>
                    </div>

                    <span className="text-sm font-semibold text-gray-800">
                      {hoveredLocation.type === 'warehouse' ? translatedWarehouseText : translatedSiteText}
                    </span>
                  </div>

                  {/* Tooltip Arrow pointing left */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-r-2 border-transparent border-r-white"></div>
                </div>
              )}
            </div>
          </div>

                    {/* Mobile text blocks - below map */}
<div className="sm:hidden mt-6 space-y-3 text-center px-4">
  <div className="bg-[#a8d96e] text-gray-800 px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
    {translatedMapInfo1}
  </div>
  <div className="bg-[#a8d96e] text-gray-800 px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
    {translatedMapInfo2}
  </div>
  <div className="bg-[#a8d96e] text-gray-800 px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
    {translatedMapInfo3}
  </div>
  <div className="bg-[#a8d96e] text-gray-800 px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
    {translatedMapInfo4}
  </div>
</div>

          {/* Reviews Side Panel */}
          {selectedLocation && (
        <div
            className="
            absolute top-3 right-0 
            w-full max-w-[250px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px]
            bg-white rounded-2xl shadow-2xl border border-blue-900 z-30
            md:max-h-[450px]  max-h-[190px] overflow-hidden
            mx-2 
            "
        >
            {/* Header */}
            <div
            className="
                flex items-center justify-between
                px-2 sm:px-3 
                py-2 sm:py-3
                border-b border-blue-900
                bg-gradient-to-r from-blue-50 to-purple-50
            "
            >
            <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-blue-900 shadow-sm">
                <img
                    src={`https://flagcdn.com/w40/${selectedLocation.countryCode.toLowerCase()}.png`}
                    alt={`${selectedLocation.country} flag`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.nextElementSibling) {
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                    }
                    }}
                />
                <div
                    className="w-full h-full flex items-center justify-center text-base"
                    style={{ display: "none" }}
                >
                    🏳️
                </div>
                </div>

                <h3 className="text-sm sm:text-lg font-bold text-blue-900">
                {selectedLocation.country}
                </h3>
            </div>

            <button
                onClick={closePanel}
                className="
                p-1 sm:p-2 rounded-full 
                hover:bg-white hover:bg-opacity-50
                transition-all duration-200
                "
            >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
            </div>

            {/* Reviews Section */}
            <div className="px-2 py-2 sm:px-3 sm:py-3">
            <h4 className="text-[10px] sm:text-xs font-semibold text-gray-800 mb-2 sm:mb-3 uppercase tracking-wide">
                {translatedReviewsHeading}
            </h4>

            <div className="space-y-2 max-h-[170px] md:max-h-[] sm:max-h-[340px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                {selectedLocation.reviews?.map((review, index) => (
                <div
                    key={index}
                    className="
                    bg-gray-50 rounded-xl p-2 sm:p-3 
                    hover:bg-gray-100 transition-colors duration-200
                    "
                >
                    <div className="flex gap-2 sm:gap-3">
                    {/* Avatar */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-white shadow-md">
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-[10px] sm:text-xs text-white font-bold">
                            {review.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                        </div>
                    </div>

                    {/* Review Content */}
                    <div className="flex-1" style={{ fontFamily: "Diodrum Cyrillic" }}>
                        <div className="flex items-center justify-between mb-1">
                        <h5 className="font-semibold text-gray-900 text-xs sm:text-sm">
                            {review.name}
                        </h5>
                        <div className="flex space-x-0.5 scale-90 sm:scale-100">{renderStars(review.rating)}</div>
                        </div>

                        <p className="text-gray-700 text-[10px] sm:text-xs leading-snug " style={{ fontFamily: "Diodrum Cyrillic" }}>
                        {review.text}
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        )} 
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
            {/* Global Presence Item 1 */}
            <div className="bg-[#F8F8F8] rounded-[20px] flex flex-col items-center justify-center text-center px-2 py-5">
              <div className="text-5xl font-bold text-[#B8D332] mb-2 " >
                {innovationData.globalPresence[0].value} 
              </div>
              <div className="text-[#3D3B8E] font-bold text-xl mb-2">
                {translatedGlobal1Label} 
              </div> 
              <div className="text-gray-600">
               {translatedGlobal1Country}
              </div>
            </div>
            
            {/* Global Presence Item 2 */}
            <div className="bg-[#F8F8F8] rounded-[20px] flex flex-col items-center justify-center text-center px-2 py-5">
              <div className="text-5xl font-bold text-[#B8D332] mb-2 " >
                {innovationData.globalPresence[1].value} 
              </div>
              <div className="text-[#3D3B8E] font-bold text-xl mb-2">
                {translatedGlobal2Label} 
              </div> 
              <div className="text-gray-600">
               {translatedGlobal2Country}
              </div>
            </div>
            
            {/* Global Presence Item 3 */}
            <div className="bg-[#F8F8F8] rounded-[20px] flex flex-col items-center justify-center text-center px-2 py-5">
              <div className="text-5xl font-bold text-[#B8D332] mb-2 " >
                {innovationData.globalPresence[2].value} 
              </div>
              <div className="text-[#3D3B8E] font-bold text-xl mb-2">
                {translatedGlobal3Label} 
              </div> 
              <div className="text-gray-600">
               {translatedGlobal3Country}
              </div>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
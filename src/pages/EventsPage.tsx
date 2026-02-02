import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import ProductInnovation from "../assets/images/wetransfer_hitech/Product-Innovation_img.svg";
import Industry_News from "../assets/images/wetransfer_hitech/Industry_News.svg";
import Sustainability from "../assets/images/wetransfer_hitech/Sustainability.svg";
import Case_Study from "../assets/images/wetransfer_hitech/Case_Study.svg";


interface Event {
    id: number;
    location: string;
    title: string;
    date: string;
    description: string;
    image: string;
    booth?: string;
}
interface Article {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
}

interface PastEvent extends Event {
    day: string;
}

const EventsPage: React.FC = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>('September');
     const [selectedFilter, setSelectedFilter] = useState('All Articles');
     const [selectedYear, setSelectedYear] = useState('2025');

    const upcomingEvents: Event[] = [
        {
            id: 1,
            location: 'Amsterdam, Netherlands',
            title: 'Aquatech Amsterdam 2025',
            date: 'Nov 11 - Nov 14',
            description: 'Join us at Booth #XXXX as we showcase our latest RO membrane innovations and sustainable water solutions.',
            image: '/assets/images/events_bg.svg',
            booth: 'Booth #15495'
        },
        {
            id: 2,
            location: 'Amsterdam, Netherlands',
            title: 'Aquatech Amsterdam 2025',
            date: 'Nov 11 - Nov 14',
            description: 'Join us at Booth #XXXX as we showcase our latest RO membrane innovations and sustainable water solutions.',
            image: '/assets/images/events_bg.svg',
            booth: 'Booth #15495'
        }
    ];

    const pastEvents: PastEvent[] = [
        {
            id: 1,
            day: 'Dec',
            location: 'Amsterdam, Netherlands',
            title: 'Aquatech Amsterdam 2025',
            date: 'Nov 11 - Nov 14',
            description: 'Join us at Booth #XXXX as we showcase our latest RO membrane innovations and sustainable water solutions.',
            image: '/assets/images/upcoming_events_bg.svg'
        },
        {
            id: 2,
            day: 'Oct',
            location: 'Berlin, Germany',
            title: 'Water Tech Europe 2025',
            date: 'Oct 15 - Oct 18',
            description: 'Explore our cutting-edge filtration technologies at Booth #YYYY, where clean water meets innovation.',
            image: '/assets/images/events_bg.svg'
        },
        {
            id: 3,
            day: 'Sep',
            location: 'Tokyo, Japan',
            title: 'Japan Water Expo 2025',
            date: 'Sep 20 - Sep 23',
            description: 'Visit Booth #ZZZZ to discover our advanced desalination systems and eco-friendly practices in water management.',
            image: '/assets/images/events_bg.svg'
        }
    ];
     const articles: Article[] = [
    {
      id: 1,
      title: "Hi-Tech Membranes Launches Revolutionary Nano-Filtration Technology",
      date: "January 15, 2026",
      description: "Our latest breakthrough in nano-filtration technology sets new industry standards for water purification efficiency and sustainability.",
      category: "Product Innovation",
      image: ProductInnovation,
      featured: true
    },
    {
      id: 2,
      title: "Industry Insights: The Future of Reverse Osmosis Technology",
      date: "December 28, 2025",
      description: "Explore the latest trends and innovations shaping the future of RO membrane technology and water treatment.",
      category: "Industry News",
      image: Industry_News,
    },
    {
      id: 3,
      title: "Sustainability Report 2025: Our Journey Towards Carbon Neutrality",
      date: "December 18, 2025",
      description: "Discover our achievements and ongoing commitments to environmental sustainability and carbon reduction.",
      category: "Sustainability",
      image: Sustainability,
    },
    {
      id: 4,
      title: "Customer Success Story: Transforming Industrial Water Treatment",
      date: "December 16, 2025",
      description: "How a leading manufacturing company achieved 40% cost savings with our advanced membrane solutions.",
      category: "Case Study",
      image: Case_Study,
    }
  ];

  const filters = ['All Articles', 'Innovation', 'Research', 'Sustainability'];
  const years = ['2025', '2024', '2023'];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

    return (
        <div className="min-h-screen w-full bg-white">
            {/* Hero Section */}
            <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-[140px] mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-[100px] rounded-[20px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[434px] w-full shadow-lg">
                        <img
                            src="/assets/images/events_bg.svg"
                            alt="Events background"
                            className="w-full h-full object-cover"
                            style={{ borderRadius: 'inherit' }}
                        />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[100px]">
                        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-[30px] xl:text-[36px] font-semibold text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl leading-6 sm:leading-8 md:leading-10 lg:leading-[48px]">
                            At Hi-Tech Membranes, events are more than exhibitions – they are opportunities to connect with partners, showcase innovation, and contribute to shaping the global water industry.
                        </h1>
                    </div>
                </div>
            </section>

             {/* News & Articles */}
            <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-[40px] xl:mx-[60px] 2xl:mx-[140px]">
                {/* Header */}
                <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
                    News & Articles
                </h1>
                <p className="text-[#6F6F6F] text-[18.96px]">
                    Stay updated with the latest innovations, insights, and stories from Hi-Tech Membranes
                </p>
                </div>

                {/* Featured Article */}
                {featuredArticle && (
                <div className="mb-12 bg-white rounded-[18.96px] shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                        <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[#A8CF45] text-[#3D3E96] px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                        </span>
                        </div>
                        <img 
                        src={featuredArticle.image} 
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                        <span className="inline-block bg-[#3E4095] text-white px-4 py-3 rounded-full text-sm font-semibold mb-4 w-fit">
                        {featuredArticle.category}
                        </span>
                        <h2 className="text-[34.12px] sm:text-[34.12px] font-bold text-[#161616] mb-4">
                        {featuredArticle.title}
                        </h2>
                        <div className="flex items-center text-[#6F6F6F] text-[15.17px] mb-4 font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{featuredArticle.date}</span>
                        </div>
                        <p className="text-[#454545] text-[17.06px] mb-6 leading-relaxed">
                        {featuredArticle.description}
                        </p>
                        <button className="flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                    </div>
                </div>
                )}

                {/* Filter Buttons and Year Selector */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="flex flex-wrap gap-2">
                    {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={`px-4 py-2 rounded-full font-medium transition-colors ${
                        selectedFilter === filter
                            ? 'bg-[#3E4095] text-white'
                            : 'bg-white text-gray-700 text-[15.17px] hover:bg-gray-100 border '
                        }`}
                    >
                        {filter}
                    </button>
                    ))}
                </div>
                <div className="relative">
                    <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    >
                    {years.map((year) => (
                        <option key={year} value={year}>
                        {year}
                        </option>
                    ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    </div>
                </div>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularArticles.map((article) => (
                    <div 
                    key={article.id}
                    className="bg-white rounded-[18.96px] shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                    <div className="relative h-48">
                        <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <span className="inline-block bg-[#3E4095] text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                        {article.category}
                        </span>
                        <h3 className="text-[20.85px] font-bold text-[#161616] mb-3 line-clamp-2">
                        {article.title}
                        </h3>
                        <div className="flex items-center text-[#6F6F6F] text-[13.27px] mb-3 font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{article.date}</span>
                        </div>
                        <p className="text-gray-600 text-[13.27px] mb-4 line-clamp-3 font-medium">
                        {article.description}
                        </p>
                        <button className="flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>

            {/* Upcoming Events Section */}
            <section className="mt-6 lg:mt-9 mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-center text-[#3E4095] text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[48px] 2xl:text-[54px] font-semibold mb-6 sm:mb-8 lg:mb-12 px-4">
                    Upcoming Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 px-[80px] sm:px-[160px] md:px-12 lg:px-16 xl:px-24 2xl:px-[112px]">
                    {upcomingEvents.map((event) => (
                        <div
                            key={event.id}
                            className=" bg-white w-full"
                        >
                            <div className="relative h-[200px] sm:h-[220px] md:h-[250px] 2xl:h-[300px] overflow-hidden mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                                {event.booth && (
                                    <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#C4F34A] text-[#3E4095] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                                        {event.booth}
                                    </span>
                                )}
                            </div>
                            <div className="px-2">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                                    <span className=" bg-[#3E4095] text-white px-7 py-1.5 rounded-[45px] text-sm lg:text-base xl:text-lg font-medium whitespace-nowrap">
                                        {event.location}
                                    </span>

                                    <span className=" text-[#6F6F6F] text-sm sm:text-sm lg:text-xl xl:text-lg 2xl:text-xl whitespace-nowrap">
                                        {event.date}
                                    </span>
                                </div>

                                <h3 className=" text-[36px] sm:text-xl md:text-2xl lg:text-[36px] xl:text-[36px] font-bold text-[#161616] mb-4 leading-tight ">
                                    {event.title}
                                </h3>
                                <p className=" text-[#454545] text-[16px] sm:text-[16px] lg:text-[16px] xl:text-lg 2xl:text-[16px] leading-relaxed line-clamp-3 ">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Past Highlights Section */}
            <section className="py-8 sm:py-12 lg:py-16" style={{ fontFamily: "Diodrum Cyrillic" }}>
                <h2 className="text-center text-[#3E4095] text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[48px] 2xl:text-[54px] font-semibold mb-6 sm:mb-8 lg:mb-12 px-4">
                    Past Highlights
                </h2>
                <div className="">
                    <div className=" relative mb-6 sm:mb-8 lg:mb-10 ml-4 sm:ml-8 md:ml-12 lg:ml-[60px] w-full max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[300px]">
                        <select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            className=" text-black appearance-none w-full px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 border border-gray-300 rounded-xl sm:rounded-[16px] text-base sm:text-lg md:text-xl lg:text-[24px] bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ">
                            <option value="September">2025</option>
                            <option value="October">2026</option>
                            <option value="November">2024</option>
                        </select>

                        {/* Dropdown Icon */}
                        <ChevronDown
                            className=" absolute right-4 sm:right-5 md:right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-lg sm:text-xl md:text-2xl " />
                    </div>


                    <div className="relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[112px]">
                        {/* Continuous Timeline Line - runs through entire section */}
                        <div className="absolute left-9 sm:left-10 md:left-[84px] lg:left-[100px] xl:left-[132px] 2xl:left-[150px] top-0 bottom-0 w-0.5 sm:w-1 bg-[#3E4095]" />

                        {pastEvents.map((event) => (
                            <div key={event.id} className="flex gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 lg:mb-10 relative">
                                {/* Timeline Date */}
                                <div className="relative w-12 sm:w-16 md:w-20 flex-shrink-0">
                                    <div
                                        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#A8CF45] rounded-full flex items-center justify-center text-[#3D3E96] text-xs sm:text-sm md:text-base lg:text-lg font-semibold shadow-md z-10">
                                        {event.day}
                                    </div>
                                </div>


                                {/* Event Card */}
                                <div className="flex-1">
                                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-9 border border-[#AFAFAF] flex flex-col xl:flex-row gap-6">

                                        <div className="flex-1">
                                            <span className="inline-flex justify-center items-center max-w-[200px] xl:max-w-[240px] 2xl:w-[280px] h-8 sm:h-9 md:h-10 xl:h-11 2xl:h-12 bg-[#3E4095] text-white px-4 rounded-full text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl font-medium mb-4 2xl:mb-6 whitespace-nowrap ">
                                                {event.location}
                                            </span>

                                            <h3 className=" text-lg sm:text-xl md:text-2xl lg:text-[40px] xl:text-[36px] 2xl:text-[46px] font-bold text-[#161616] mb-4 2xl:mb-6 leading-tight">
                                                {event.title}
                                            </h3>

                                            <p className="text-[#454545] font-medium text-[18px] sm:text-[16px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-relaxed 2xl:leading-[36px] max-w-[95%] ">
                                                {event.description}
                                            </p>

                                        </div>

                                        <div className="flex-shrink-0 w-full h-auto min-h-[180px] sm:min-h-[200px] md:min-h-[220px] xl:w-[420px] 2xl:w-[480px] 3xl:w-[600px] h-[180px] 2xl:h-[220px] 3xl:h-[250px] rounded-[28px]  lg:rounded-[40px] xl:rounded-3xl overflow-hidden">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl">
                {/* Background Pattern/Texture */}
                <div className="absolute inset-0 bg-indigo-900 opacity-50"></div>
                
                {/* Content Container */}
                <div className="relative z-10 py-16 px-6 sm:py-20 sm:px-12 lg:py-24 lg:px-16 text-center">
                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                    Want to meet us at an upcoming event?
                    </h2>
                    
                    {/* Subheading with Email */}
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 max-w-4xl mx-auto">
                    Contact our team at{' '}
                    <a 
                        href="mailto:sales@hitechmembranes.com"
                        className="underline hover:text-lime-300 transition-colors font-medium"
                    >
                        sales@hitechmembranes.com
                    </a>{' '}
                    to schedule a meeting.
                    </p>
                    
                    {/* CTA Button */}
                    <a href="/contact">
                    <button className="bg-lime-400 hover:bg-lime-500 text-indigo-900 font-bold text-lg px-8 py-3 sm:px-10 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Contact Us
                    </button>
                    </a>
                </div>
                
                {/* Logo in Bottom Right */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-10 w-14 sm:w-16 md:w-20 opacity-90">
                            <img
                                src="/logo-1 (1).png"
                                alt="Hi-Tech Membranes"
                                className="w-full h-auto"
                            />
                        </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default EventsPage;
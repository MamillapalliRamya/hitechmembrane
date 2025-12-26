import React, { useState } from 'react';
import { Star} from 'lucide-react';

export interface Review {
  id: number;
  rating: number;
  text: string;
  company: string;
  name: string;
  avatar?: string;
}

export interface Country {
  name: string;
  code: string;
  reviewCount: number;
  reviews: Review[];
}

export const countriesData: Country[] = [
    {
      name: 'Thailand',
      code: 'th',
      reviewCount: 2,
      reviews: [
        {
          id: 1,
          rating: 5,
          text: "Fully satisfied with the delivery & installation, though only a week old. Very convenient, as it stores the water after filtration. Ideal for homes where municipal water is available",
          company: "Company 1",
          name: "John"
        },
        {
          id: 2,
          rating: 5,
          text: "Fully satisfied with the delivery & installation, though only a week old. Very convenient, as it stores the water after filtration.",
          company: "Company 1",
          name: "John"
        },
        {
          id: 3,
          rating: 5,
          text: "Product arrived as described and works perfectly. The setup was straightforward and customer support was helpful.",
          company: "Company 2",
          name: "Emily"
        },
        {
          id: 4,
          rating: 5,
          text: "Fully satisfied with the delivery & installation, though only a week old. Very convenient, as it stores the water after filtration.",
          company: "Company 1",
          name: "John"
        },
        {
          id: 5,
          rating: 5,
          text: "The quality of the product exceeded my expectations, and the setup was hassle-free. I'm impressed with the quality.",
          company: "Company 2",
          name: "Emily"
        },
        {
          id: 6,
          rating: 5,
          text: "The product met all my expectations and was easy to set up. I've noticed a significant improvement in water quality since using it.",
          company: "Company 2",
          name: "Sara"
        }
      ]
    },
    {
      name: 'UAE',
      code: 'ae',
      reviewCount: 2,
      reviews: [
        {
          id: 1,
          rating: 5,
          text: "Outstanding membrane technology with excellent customer support and fast delivery.",
          company: "Company 1",
          name: "Ahmed"
        },
        {
          id: 2,
          rating: 4,
          text: "Very satisfied with the quality and performance of Hi-Tech membranes.",
          company: "Company 2",
          name: "Sarah"
        }
      ]
    },
    {
      name: 'India',
      code: 'in',
      reviewCount: 2,
      reviews: [
        {
          id: 1,
          rating: 5,
          text: "Hi-Tech's RO membranes offer great filtration efficiency and durability for reliable water purification.",
          company: "Company 1",
          name: "Raj"
        },
        {
          id: 2,
          rating: 4,
          text: "Excellent membrane technology for water purification systems. Very satisfied with the quality.",
          company: "Company 2",
          name: "Priya"
        }
      ]
    },
    {
      name: 'USA',
      code: 'us',
      reviewCount: 2,
      reviews: [
        {
          id: 1,
          rating: 5,
          text: "Superior membrane technology meeting strict US standards. Exceptional quality and performance.",
          company: "Company 1",
          name: "Robert"
        },
        {
          id: 2,
          rating: 4,
          text: "Excellent RO membranes with great efficiency. Perfect for industrial water treatment applications.",
          company: "Company 2",
          name: "Jennifer"
        }
      ]
    },
    {
      name: 'China',
      code: 'cn',
      reviewCount: 2,
      reviews: [
        {
          id: 1,
          rating: 5,
          text: "Great membrane solutions for water treatment facilities. Exceptional quality membranes.",
          company: "Company 1",
          name: "Li Wei"
        },
        {
          id: 2,
          rating: 4,
          text: "Perfect for industrial applications. Very reliable membrane technology.",
          company: "Company 2",
          name: "Zhang"
        }
      ]
    },
    {
      name: 'Egypt',
      code: 'eg',
      reviewCount: 2,
      reviews: []
    },
    {
      name: 'South Africa',
      code: 'za',
      reviewCount: 2,
      reviews: []
    },
    {
      name: 'Vietnam',
      code: 'vn',
      reviewCount: 2,
      reviews: []
    },
    {
      name: 'Nepal',
      code: 'np',
      reviewCount: 2,
      reviews: []
    },
    {
      name: 'Pakistan',
      code: 'pk',
      reviewCount: 2,
      reviews: []
    },
    {
      name: 'Saudi Arabia',
      code: 'sa',
      reviewCount: 2,
      reviews: []
    },
    {
      name: 'Indonesia',
      code: 'id',
      reviewCount: 2,
      reviews: []
    },
    {
      name: 'Iran',
      code: 'ir',
      reviewCount: 2,
      reviews: []
    },
    {
      name: 'Jordan',
      code: 'jo',
      reviewCount: 2,
      reviews: []
    },
    {
      name: 'Australia',
      code: 'au',
      reviewCount: 2,
      reviews: []
    },
    {
      name: 'Philippines',
      code: 'ph',
      reviewCount: 2,
      reviews: []
    },
    {
      name: 'UK',
      code: 'gb',
      reviewCount: 2,
      reviews: []
    }
  ];

const GlobalVoicesOfTrust: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('Thailand');

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star key={index}
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                      fill={index < rating ? "#FF8800" : "none"}
                      stroke={index < rating ? "#FF8800" : "#D1D5DB"}
                      strokeWidth="2"
                      viewBox="0 0 24 24" />
    ));
  };

  const selectedCountryData = countriesData.find(c => c.name === selectedCountry);
  const displayReviews = selectedCountryData?.reviews.slice(0, 6) || [];

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-22 xl:py-30 relative overflow-hidden bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-34  relative z-10">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3E4095] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Global Voices of Trust
        </h2>

        {/* Country Tabs - First Row */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2 md:gap-3 lg:gap-6 xl:gap-8 2xl:gap-10 3xl:gap-20 mb-2 sm:mb-3 md:mb-4">
          {countriesData.slice(0, 9).map((country) => (
            <button
              key={country.name}
              onClick={() => setSelectedCountry(country.name)}
              className={`px-1 sm:px-1.5 md:px-2 py-1 sm:py-1.5 md:py-2 text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl 3xl:text-3xl font-semibold transition-all whitespace-nowrap ${
                selectedCountry === country.name
                  ? 'text-blue-900 border-b-2 sm:border-b-3 md:border-b-4 border-lime-400'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
              style={{ fontFamily: 'Diodrum Cyrillic, sans-serif' }}
            >
              {country.name}
            </button>
          ))}
        </div>

        {/* Country Tabs - Second Row */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2 md:gap-3 lg:gap-6 xl:gap-8 2xl:gap-10 3xl:gap-20 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {countriesData.slice(9).map((country) => (
            <button
              key={country.name}
              onClick={() => setSelectedCountry(country.name)}
              className={`px-1 sm:px-1.5 md:px-2 py-1 sm:py-1.5 md:py-2 text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl 3xl:text-3xl font-semibold transition-all whitespace-nowrap ${
                selectedCountry === country.name
                  ? 'text-blue-900 border-b-2 sm:border-b-3 md:border-b-4 border-lime-400'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
              style={{ fontFamily: 'Diodrum Cyrillic, sans-serif' }}
            >
              {country.name}
            </button>
          ))}
        </div>

        {/* Review Count */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8">
          Showing {displayReviews.length} out of {selectedCountryData?.reviews.length || 0} reviews
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {displayReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg sm:rounded-xl border-2 border-gray-200 p-4 sm:p-5 md:p-6 lg:p-7 hover:shadow-lg transition-shadow"
            >
              {/* Country Flag */}
              <div className="flex justify-between items-start mb-3 sm:mb-4 md:mb-5">
                <div className="flex space-x-0.5 sm:space-x-1">
                  {renderStars(review.rating)}
                </div>
                <div className="w-7 h-5 sm:w-8 sm:h-6 md:w-9 md:h-7 rounded-sm overflow-hidden flex-shrink-0">
                  <img
                    src={`https://flagcdn.com/w80/${selectedCountryData?.code}.png`}
                    alt={`${selectedCountry} flag`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-900 text-sm sm:text-base md:text-md lg:text-md xl:text-lg  mb-4 sm:mb-5 md:mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {review.text}
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-2 sm:space-x-3 ">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs sm:text-sm md:text-base">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">{review.company}</p>
                  <p className="text-gray-600 text-xs sm:text-sm truncate">{review.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalVoicesOfTrust;
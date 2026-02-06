import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useTranslateContent } from '../../hooks/useTranslateContent';

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

const TranslatedReview: React.FC<{ review: Review; countryCode: string }> = ({ review, countryCode }) => {
  const { translatedText: translatedReviewText } = useTranslateContent(review.text);
  const { translatedText: translatedCompany } = useTranslateContent(review.company);

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-5 hover:shadow-lg transition-shadow">
      <div className="flex justify-between mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4" fill="#FF8800" stroke="#FF8800" />
          ))}
        </div>
        <img
          src={`https://flagcdn.com/w80/${countryCode}.png`}
          className="w-8 h-6 object-cover rounded-sm"
        />
      </div>

      <p className="text-gray-800 text-sm mb-4">{translatedReviewText}</p>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-lime-500 flex items-center justify-center text-white font-bold">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm">{translatedCompany}</p>
          <p className="text-xs text-gray-500">{review.name}</p>
        </div>
      </div>
    </div>
  );
};

const GlobalVoicesOfTrust: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('Thailand');

  const { translatedText: translatedHeading } = useTranslateContent('Global Voices of Trust');
  const { translatedText: translatedShowing } = useTranslateContent('Showing');
  const { translatedText: translatedOutOf } = useTranslateContent('out of');
  const { translatedText: translatedReviews } = useTranslateContent('reviews');

  const selectedCountryData = countriesData.find(c => c.name === selectedCountry);
  const displayReviews = selectedCountryData?.reviews.slice(0, 6) || [];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-semibold text-[#3E4095] text-center mb-8">
          {translatedHeading}
        </h2>

        {/* 🔹 MOBILE – Single combined list */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:hidden">
          {countriesData.map(country => (
            <button
              key={country.name}
              onClick={() => setSelectedCountry(country.name)}
              className={`px-1 py-1 text-xs font-semibold whitespace-nowrap ${
                selectedCountry === country.name
                  ? 'text-blue-900 border-b-2 border-lime-400'
                  : 'text-gray-600'
              }`}
            >
              {country.name}
            </button>
          ))}
        </div>

        {/* 🔹 DESKTOP – Row 1 */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 mb-4">
          {countriesData.slice(0, 9).map(country => (
            <button
              key={country.name}
              onClick={() => setSelectedCountry(country.name)}
              className={`text-xl font-semibold whitespace-nowrap ${
                selectedCountry === country.name
                  ? 'text-blue-900 border-b-4 border-lime-400'
                  : 'text-gray-600'
              }`}
            >
              {country.name}
            </button>
          ))}
        </div>

        {/* 🔹 DESKTOP – Row 2 */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 mb-10">
          {countriesData.slice(9).map(country => (
            <button
              key={country.name}
              onClick={() => setSelectedCountry(country.name)}
              className={`text-xl font-semibold whitespace-nowrap ${
                selectedCountry === country.name
                  ? 'text-blue-900 border-b-4 border-lime-400'
                  : 'text-gray-600'
              }`}
            >
              {country.name}
            </button>
          ))}
        </div>

        <p className="text-gray-600 mb-6">
          {translatedShowing} {displayReviews.length} {translatedOutOf} {selectedCountryData?.reviews.length || 0} {translatedReviews}
        </p>

       {/* 📱 MOBILE – show 2 reviews with vertical scroll */}
<div className="sm:hidden max-h-[420px] overflow-y-auto space-y-4 pr-1">
  {displayReviews.slice(0).map(review => (
    <TranslatedReview
      key={review.id}
      review={review}
      countryCode={selectedCountryData?.code || ''}
    />
  ))}
</div>

{/* 💻 TABLET & DESKTOP – normal grid */}
<div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {displayReviews.map(review => (
    <TranslatedReview
      key={review.id}
      review={review}
      countryCode={selectedCountryData?.code || ''}
    />
  ))}
</div>


      </div>
    </section>
  );
};

export default GlobalVoicesOfTrust;

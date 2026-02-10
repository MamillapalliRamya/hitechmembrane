import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useTranslateContent } from '../../hooks/useTranslateContent';

export interface Review {
  id: number;
  rating: number;
  text: string;
  company: string;
  name: string;
}

export interface Country {
  name: string;
  code: string;
  review_count: number;
  reviews: Review[];
}

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
  const [countriesData, setCountriesData] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  useEffect(() => {
    fetch("http://65.0.77.32:8000/api/our-impact-page/")
      .then(res => res.json())
      .then(data => {
        setCountriesData(data.global_voices_of_trust.countries);
        setSelectedCountry(data.global_voices_of_trust.countries[0].name);
      });
  }, []);

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

        {/* MOBILE */}
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

        {/* DESKTOP ROW 1 */}
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

        {/* DESKTOP ROW 2 */}
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

        {/* MOBILE */}
        <div className="sm:hidden max-h-[420px] overflow-y-auto space-y-4 pr-1">
          {displayReviews.map(review => (
            <TranslatedReview
              key={review.id}
              review={review}
              countryCode={selectedCountryData?.code || ''}
            />
          ))}
        </div>

        {/* DESKTOP */}
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

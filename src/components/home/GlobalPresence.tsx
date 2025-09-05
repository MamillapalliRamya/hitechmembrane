import React, { useState } from 'react';
import { X, Star } from 'lucide-react';
import image1 from "../../../src/assets/images/wetransfer_hitech/logo-1.png";

interface Location {
  id: number;
  country: string;
  x: number;
  y: number;
  countryCode: string;
  type: 'main' | 'warehouse' | 'site';
  reviews?: Review[];
}

interface Review {
  name: string;
  avatar?: string;
  rating: number;
  text: string;
}

const GlobalPresenceSection = () => {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [imageLoadFailed, setImageLoadFailed] = useState<{ [key: number]: boolean }>({});
  const [mapTransform, setMapTransform] = useState('translate(0, 0) scale(1)');

  const locations: Location[] = [
    { 
      id: 1, 
      country: 'India', 
      x: 50, 
      y: 25, 
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
      x: 73, 
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
      y: 15, 
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
    // Add warehouse and site locations with white dots
    { id: 8, country: 'Mumbai Warehouse', x: 49, y: 27, countryCode: 'in', type: 'warehouse' },
    { id: 9, country: 'Bangkok Warehouse', x: 71, y: 19, countryCode: 'th', type: 'warehouse' },
    { id: 10, country: 'Dubai Warehouse', x: 57, y: 18, countryCode: 'ae', type: 'warehouse' },
    { id: 11, country: 'Delhi Site', x: 48, y: 23, countryCode: 'in', type: 'site' },
    { id: 12, country: 'Shanghai Site', x: 77, y: 13, countryCode: 'cn', type: 'site' }
  ];

  const handleImageError = (locationId: number) => {
    setImageLoadFailed(prev => ({
      ...prev,
      [locationId]: true
    }));
  };

  const handleLocationClick = (location: Location) => {
    if (location.type === 'main' && location.reviews) {
      setSelectedLocation(location);
      
      // Scale down the entire map to show complete view while making room for panel
      // Move map slightly left to center it better with the panel open
      setMapTransform(`translate(-120px, 0px) scale(0.8)`);
    }
  };

  const closePanel = () => {
    setSelectedLocation(null);
    setMapTransform('translate(0, 0) scale(1)');
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-700 mb-8">
            Our Global Presence
          </h2>
        </div>

        <div className="relative mb-12 overflow-hidden rounded-lg" style={{ minHeight: '400px' }}>
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

              {/* Fallback background if image doesn't load */}
              <div
                className="w-full aspect-[2/1] bg-gradient-to-br from-blue-100 to-purple-200 rounded-lg"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 25%, #a5b4fc  50%, #8b5cf6 75%, #7c3aed 100%)',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                  display: 'none'
                }}
              />

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
                          x={location.x * 10 - 15}
                          y={location.y * 10 - 30}
                          width="22"
                          height="28"
                          onMouseEnter={() => setHoveredLocation(location)}
                          onMouseLeave={() => setHoveredLocation(null)}
                          onClick={() => handleLocationClick(location)}
                          style={{ cursor: 'pointer' }}
                        >
                          <img
                            src="assets/images/green-pin-marker.png"
                            alt="Location marker"
                            className="w-full h-full hover:scale-110 transition-transform duration-200"
                            style={{
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                              pointerEvents: 'none'
                            }}
                            onError={() => handleImageError(location.id)}
                          />
                        </foreignObject>
                      )}

                      {/* White dots for warehouse and site locations */}
                      {(location.type === 'warehouse' || location.type === 'site') && (
                        <g
                          transform={`translate(${location.x * 10}, ${location.y * 10})`}
                          onMouseEnter={() => setHoveredLocation(location)}
                          onMouseLeave={() => setHoveredLocation(null)}
                          style={{ cursor: 'pointer' }}
                        >
                          {/* Different styles for warehouse vs site */}
                          {location.type === 'warehouse' ? (
                            // White circle for warehouse
                            <circle
                              cx="0"
                              cy="0"
                              r="6"
                              fill="#ffffff"
                              stroke="#ffffff"
                              strokeWidth="1"
                              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                              className="hover:r-8 transition-all duration-200"
                            />
                          ) : (
                            // Blue circle for site
                            <circle
                              cx="0"
                              cy="0"
                              r="6"
                              fill="#3b82f6"
                              stroke="#3b82f6"
                              strokeWidth="1"
                              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                              className="hover:r-8 transition-all duration-200"
                            />
                          )}
                        </g>
                      )}

                      {/* Fallback SVG marker for main offices if image fails to load */}
                      {location.type === 'main' && imageLoadFailed[location.id] && (
                        <g
                          transform={`translate(${location.x * 10}, ${location.y * 10})`}
                          onMouseEnter={() => setHoveredLocation(location)}
                          onMouseLeave={() => setHoveredLocation(null)}
                          onClick={() => handleLocationClick(location)}
                          style={{ cursor: 'pointer' }}
                          className="marker-hover"
                        >
                          <path
                            d="M0,-20 C-8,-20 -15,-13 -15,-5 C-15,3 0,20 0,20 C0,20 15,3 15,-5 C15,-13 8,-20 0,-20 Z"
                            fill="#84cc16"
                            stroke="#ffffff"
                            strokeWidth="2"
                          />
                          <circle cx="0" cy="-5" r="4" fill="#ffffff" />
                        </g>
                      )}
                    </g>
                  ))}
                </svg>
              </div>

              {/* Enhanced Tooltip for Main Offices */}
              {/* Tooltip for Main Offices (Flag + Country above, Click hint below) */}
{hoveredLocation && hoveredLocation.type === 'main' && !selectedLocation && (
  <>
    {/* Flag + Country (above marker) */}
    <div
      className="absolute z-20 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 pointer-events-none flex items-center space-x-2"
      style={{
        left: `${(hoveredLocation.x * 10) * (100/1000)}%`, 
        top: `${(hoveredLocation.y * 10) * (100/500)}%`,   
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
        left: `${(hoveredLocation.x * 10) * (100/1000)}%`, 
        top: `${(hoveredLocation.y * 10) * (100/500)}%`,   
        transform: 'translate(-50%, 10px)', // below marker
      }}
    >
      Click to know more
    </div>
  </>
)}


              {/* Original Tooltip for Warehouse and Site Locations */}
              {hoveredLocation && (hoveredLocation.type === 'warehouse' || hoveredLocation.type === 'site') && !selectedLocation && (
                <div
                  className="absolute z-10 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 pointer-events-none"
                  style={{
                    left: `${(hoveredLocation.x * 10) * (100/1000)}%`, 
                    top: `${(hoveredLocation.y * 10) * (100/500)}%`,   
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
                      {hoveredLocation.type === 'warehouse' ? 'Warehouse' : 'Site'}
                    </span>
                  </div>

                  {/* Tooltip Arrow pointing left */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-r-2 border-transparent border-r-white"></div>
                </div>
              )}
            </div>
          </div>

          {/* Reviews Side Panel */}
          {selectedLocation && (
            <div className="absolute top-4 right-0 w-[460px] bg-white rounded-2xl shadow-2xl border border-blue-900 z-30 max-h-[500px] overflow-hidden">
              {/* Panel Header */}
              <div className="flex items-center justify-between px-3 py-4 border-b border-blue-900 bg-gradient-to-r from-blue-50 to-purple-50">
                <h3 className="text-xl font-bold text-blue-900">{selectedLocation.country}</h3>
                <button
                  onClick={closePanel}
                  className="p-2 hover:bg-white hover:bg-opacity-50 rounded-full transition-all duration-200"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Reviews Section */}
              <div className="px-3 py-2">
                <h4 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">Reviews</h4>
                <div className="space-y-2 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                  {selectedLocation.reviews?.map((review, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex gap-3">
                        {/* Avatar with realistic profile image styling */}
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white shadow-md">
                          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        
                        {/* Review Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-gray-900 text-sm">{review.name}</h5>
                            <div className="flex space-x-0.5">
                              {renderStars(review.rating)}
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Hi-Tech has successfully maintained its global presence thanks to a robust network of skilled
            associates. By prioritizing customer interests, the company continually adapts its work
            methodology to achieve outstanding results. With competitive pricing, efficient resource
            management, and a commitment to fulfilling promises, Hi-Tech has garnered accolades not
            just from clients but also from esteemed authorities across the nation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
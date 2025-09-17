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
                          width="20"
                          height="24"
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
                    Click to know more
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
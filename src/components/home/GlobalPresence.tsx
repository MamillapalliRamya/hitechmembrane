import React, { useState } from 'react';
import image1 from "../../../src/assets/images/wetransfer_hitech/logo-1.png";

interface Location {
  id: number;
  country: string;
  x: number;
  y: number;
  countryCode: string;
  type: 'main' | 'warehouse' | 'site';
}

const GlobalPresenceSection = () => {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [imageLoadFailed, setImageLoadFailed] = useState<{ [key: number]: boolean }>({});

  const locations: Location[] = [
    { id: 1, country: 'India', x: 50, y: 25, countryCode: 'in', type: 'main' },
    { id: 2, country: 'Thailand', x: 73, y: 21, countryCode: 'th', type: 'main' },
    { id: 3, country: 'UAE', x: 57, y: 18, countryCode: 'ae', type: 'main' },
    { id: 7, country: 'China', x: 75, y: 15, countryCode: 'cn', type: 'main' },
    // Add warehouse and site locations with white dots
    { id: 8, country: 'Mumbai Warehouse', x: 49, y: 27, countryCode: 'in', type: 'warehouse' },
    { id: 9, country: 'Bangkok Warehouse', x: 71, y: 19, countryCode: 'th', type: 'warehouse' },
    { id: 10, country: 'Dubai Warehouse', x: 57, y: 18, countryCode: 'ae', type: 'warehouse' },
    { id: 11, country: 'Delhi Site', x: 48, y: 23, countryCode: 'in', type: 'site' },
    { id: 12, country: 'Shanghai Site', x: 77, y: 13, countryCode: 'cn', type: 'site' },

     // { id: 1, country: 'United States', x: 20, y: 35, countryCode: 'us' },
    // { id: 2, country: 'Canada', x: 18, y: 25, countryCode: 'ca' },
    // { id: 3, country: 'United Kingdom', x: 48, y: 28, countryCode: 'gb' },
    // { id: 4, country: 'Germany', x: 51, y: 28, countryCode: 'de' },
    // { id: 5, country: 'France', x: 47, y: 32, countryCode: 'fr' },
    // { id: 6, country: 'India', x: 74, y: 38, countryCode: 'in' },
    // { id: 7, country: 'China', x: 78, y: 32, countryCode: 'cn' },
    // { id: 8, country: 'Japan', x: 85, y: 34, countryCode: 'jp' },
    // { id: 9, country: 'Australia', x: 82, y: 72, countryCode: 'au' },
    // { id: 10, country: 'Brazil', x: 32, y: 55, countryCode: 'br' },
    // { id: 11, country: 'South Africa', x: 53, y: 68, countryCode: 'za' },
    // { id: 12, country: 'Mexico', x: 15, y: 42, countryCode: 'mx' },
    // { id: 13, country: 'Russia', x: 68, y: 22, countryCode: 'ru' },
    // { id: 14, country: 'UAE', x: 60, y: 42, countryCode: 'ae' },
    // { id: 15, country: 'Singapore', x: 78, y: 52, countryCode: 'sg' },
    // { id: 16, country: 'South Korea', x: 84, y: 34, countryCode: 'kr' },
    // { id: 17, country: 'Thailand', x: 76, y: 45, countryCode: 'th' },
    // { id: 18, country: 'Italy', x: 51, y: 35, countryCode: 'it' },
    // { id: 19, country: 'Spain', x: 44, y: 35, countryCode: 'es' },
    // { id: 20, country: 'Netherlands', x: 49, y: 26, countryCode: 'nl' }
  ];

  const handleImageError = (locationId: number) => {
    setImageLoadFailed(prev => ({
      ...prev,
      [locationId]: true
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            Our Global Presence
          </h2>
        </div>

        <div className="relative mb-12">
          <div className="relative w-full max-w-6xl mx-auto">
            {/* World Map Container */}
            <div className="relative">
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
                          style={{ cursor: 'pointer' }}
                        >
                          <img
                            src="assets/images/green-pin-marker.png"
                            alt="Location marker"
                            className="w-full h-full"
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
                          style={{ cursor: 'pointer' }}
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

              {/* Tooltip */}
              {hoveredLocation && (
                <div
                  className="absolute z-10 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 pointer-events-none"
                  style={{
                    left: `${(hoveredLocation.x * 10) * (100/1000)}%`, 
                    top: `${(hoveredLocation.y * 10) * (100/500)}%`,   
                    transform: 'translate(15px, -12px)', 
                  }}
                >
                  <div className="flex items-center space-x-2">
                    {(hoveredLocation.type === 'warehouse' || hoveredLocation.type === 'site') && (
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
                    )}

                    {/* Country Flag for main offices */}
                    {hoveredLocation.type === 'main' && (
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
                        <div className="w-full h-full flex items-center justify-center text-sm" style={{ display: 'none' }}>
                          🏳️
                        </div>
                      </div>
                    )}

                    <span className="text-sm font-semibold text-gray-800">
                      {hoveredLocation.type === 'main'
                        ? hoveredLocation.country
                        : hoveredLocation.type === 'warehouse'
                          ? 'Warehouse'
                          : 'Site'
                      }
                    </span>
                  </div>

                  {/* Tooltip Arrow pointing left */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-r-2 border-transparent border-r-white"></div>
                </div>
              )}
            </div>
          </div>
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
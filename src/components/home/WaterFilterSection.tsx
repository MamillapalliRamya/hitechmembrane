import React from 'react';

const WhyChooseMembranes = () => {
  const productStrengths = [
    "Fully Automated Robotic Plant",
    "No Human Touch",
    "Well Engineered",
    "High Quality",
    "High Salt Rejection",
    "Low Energy",
    "High Treated Water Recovery",
    "High Durability"
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto" style={{ maxWidth: "95rem" }}>
        {/* Centered Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-indigo-700 leading-tight">
            Why To Choose Our Water Filter Membranes?
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            
            {/* Description Paragraph */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-base">
                Hi-Tech is given ISO 9001:2008, 14001-2004, 18001-2007 certification for its quality 
                management system by KVQA. Being a member of Water Quality Association of USA 
                since 1993 and Indian Water Works Association since 1999, the company has started 
                its work-frame value with Quality, Credibility, and Efficient Teamwork. Our association 
                with the USA and Japan-based water treatment companies for procurement of 
                components and designs of best RO Water Purification System makes us apply the 
                membrane technology to develop our products in a better way. We are well-known 
                water filter dealer Thailand for its skilled team and well-engineered product 
                activities.
              </p>
            </div>

            {/* Product Strengths Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Product Strengths:
              </h3>
              
              {/* Two Column List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {productStrengths.map((strength, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                Read More
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:pl-8">
            <div className="relative">
              {/* Blue Border Frame */}
              <div className="">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="hitech-water-filter-membranes.png"
                    alt="Water Filter Membranes and RO Systems"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  
                  {/* Water Effect Overlay - Optional decorative element */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 to-transparent rounded-lg"></div>
                  
                  {/* Floating Elements - Optional decorative bubbles */}
                  {/* <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute top-12 right-8 w-2 h-2 bg-blue-300 rounded-full opacity-40 animate-pulse delay-75"></div>
                  <div className="absolute top-8 right-12 w-1 h-1 bg-blue-200 rounded-full opacity-30 animate-pulse delay-150"></div> */}
                </div>
              </div>
              
              {/* Additional decorative water droplets around the frame */}
              {/* <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute top-10 -left-2 w-3 h-3 bg-blue-300 rounded-full opacity-20 animate-bounce delay-100"></div>
              <div className="absolute bottom-10 -right-3 w-2 h-2 bg-blue-500 rounded-full opacity-40 animate-bounce delay-200"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMembranes;
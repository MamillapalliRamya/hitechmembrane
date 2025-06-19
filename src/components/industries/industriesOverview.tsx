import React from 'react';
import House from "../../assets/images/wetransfer_hitech/House.png";
import Health from "../../assets/images/wetransfer_hitech/Healthcare.png";
import Replacement from "../../assets/images/wetransfer_hitech/Replacementmarkets.png";
import Municipal from "../../assets/images/wetransfer_hitech/muncipal.png";
import Textile from "../../assets/images/wetransfer_hitech/textile.png";
import FoodAndBeverage from "../../assets/images/wetransfer_hitech/food.png";
import ProcessIndustries from "../../assets/images/wetransfer_hitech/processindustries.png";
import CommercialInstitutions from "../../assets/images/wetransfer_hitech/commercialinstitute.png";

const IndustriesOverview = () => {
  const industries = [
    {
      id: 1,
      title: "House",
      description: "Hitech's RO elements for drinking water perform consistently at low pressure for POU systems. Our bestsellers are 50 GPD, 75 GPD, and 100 GPD.",
      icon: House,
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Health-Care",
      description: "The Health-Care Industry needs pure water for Dialysis Machines. Our XLE series meets these needs and is energy efficient.",
      icon: Health,
      bgColor: "bg-pink-50"
    },
    {
      id: 3,
      title: "Replacement Markets",
      description: "Our network allows replacing old RO elements with Hitech Membrane Elements, providing support and competitive pricing.",
      icon: Replacement,
      bgColor: "bg-blue-50"
    },
    {
      id: 4,
      title: "Municipal",
      description: "Municipalities of all sizes accept our elements, appearing on approved brands lists for tenders.",
      icon: Municipal,
      bgColor: "bg-red-50"
    },
    {
      id: 5,
      title: "Textile",
      description: "Textile and Dying houses need high RO elements for consistent performance at high temperatures. Our CP range of 4040 and 8040 RO elements meets these needs.",
      icon: Textile,
      bgColor: "bg-purple-50"
    },
    {
      id: 6,
      title: "Food & Beverage",
      description: "Be it Bottled water manufacturers or food and beverage processors we have specific solutions with our specialty elements.",
      icon: FoodAndBeverage,
      bgColor: "bg-blue-50"
    },
    {
      id: 7,
      title: "Process Industries",
      description: "Our BW and ES range offers benefits like low fouling and high recovery. Our 4040 and 8040 RO elements are recognized for sustainable solutions.",
      icon: ProcessIndustries,
      bgColor: "bg-green-50"
    },
    {
      id: 8,
      title: "Commercial Institutions",
      description: "Our RO elements use Hi-Tech's low energy ES series. Vending machines, offices, and hospitals utilize our 150, 300, and 400 GPD models for higher flux and low energy.",
      icon: CommercialInstitutions,
      bgColor: "bg-gray-50"
    }
  ];

 return (
    <section className="min-h-screen bg-white py-16 px-4 ml-2">
    <div className="ml-[100px] mr-[100px]">
            {/* Header */}
        <div className="mb-16">
          <h1 className="text-[48px] md:text-5xl font-bold text-[#3E4095] mb-2">
            Industries
          </h1>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div key={industry.id} className="group cursor-pointer">
              {/* Number */}
              <div className="mb-4">
                <span className="text-[40px] text-[#A8CF45] font-bold pb-1">
                  {industry.id}.
                </span>
                <div className="w-[54px] h-[4px] bg-[#A8CF45]"></div>
              </div>

              {/* Icon Container */}
              <div className={`bg-[#F4F4F4] w-[295px] h-[210px] rounded-2xl p-8 mb-6 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                <img 
                  src={industry.icon} 
                  alt={industry.title}
                  className="w-[209px] h-[209px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-[24px] font-medium leading-none tracking-[0px] align-middle text-[#000000]">
                  {industry.title}
                </h3>
                <p className="w-[268px] text-[14px] font-normal leading-none tracking-[0px] align-middle text-[#58585B]">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesOverview;
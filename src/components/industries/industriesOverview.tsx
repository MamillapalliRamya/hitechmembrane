import React from 'react';
import { motion } from 'framer-motion';
import House from "../../assets/images/wetransfer_hitech/House.png";
import Health from "../../assets/images/wetransfer_hitech/Healthcare.png";
import Replacement from "../../assets/images/wetransfer_hitech/Replacementmarkets.png";
import Municipal from "../../assets/images/wetransfer_hitech/muncipal.png";
import Textile from "../../assets/images/wetransfer_hitech/textile.png";
import FoodAndBeverage from "../../assets/images/wetransfer_hitech/food.png";
import ProcessIndustries from "../../assets/images/wetransfer_hitech/processindustries.png";
import CommercialInstitutions from "../../assets/images/wetransfer_hitech/commercialinstitute.png";

// Animation: group-level only
const groupFadeIn = (direction: 'left' | 'right', delay = 0) => {
  const x = direction === 'left' ? -400 : 400;
  return {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay },
    },
  };
};

const IndustriesOverview = () => {
  const industries = [
    { id: 1, title: "House", description: "Hitech's RO elements...", icon: House },
    { id: 2, title: "Health-Care", description: "The Health-Care Industry...", icon: Health },
    { id: 3, title: "Replacement Markets", description: "Our network allows...", icon: Replacement },
    { id: 4, title: "Municipal", description: "Municipalities of all sizes...", icon: Municipal },
    { id: 5, title: "Textile", description: "Textile and Dying houses...", icon: Textile },
    { id: 6, title: "Food & Beverage", description: "Be it Bottled water...", icon: FoodAndBeverage },
    { id: 7, title: "Process Industries", description: "Our BW and ES range...", icon: ProcessIndustries },
    { id: 8, title: "Commercial Institutions", description: "Our RO elements use...", icon: CommercialInstitutions }
  ];

  const firstRow = industries.slice(0, 4);
  const secondRow = industries.slice(4, 8);

  const renderCard = (industry: any) => (
    <div key={industry.id} className="group cursor-pointer">
      {/* Number */}
      <div className="mb-4">
        <span className="text-[40px] text-[#A8CF45] font-bold pb-1">{industry.id}.</span>
        <div className="w-[54px] h-[4px] bg-[#A8CF45]"></div>
      </div>
      {/* Icon */}
      <div className="bg-[#F4F4F4] w-[295px] h-[210px] rounded-2xl p-8 mb-6 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
        <img src={industry.icon} alt={industry.title} className="w-[209px] h-[209px] object-contain" />
      </div>
      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-[24px] font-medium text-[#000000]">{industry.title}</h3>
        <p className="w-[268px] text-[14px] text-[#58585B]">{industry.description}</p>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-white py-16 px-4 ml-2">
      <div className="ml-[100px] mr-[100px]">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={groupFadeIn('left')}
          className="mb-16"
        >
          <h1 className="text-[48px] md:text-5xl font-bold text-[#3E4095] mb-2">
            Industries
          </h1>
        </motion.div>

        {/* Row 1 - Slide all from Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={groupFadeIn('left')}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {firstRow.map(renderCard)}
        </motion.div>

        {/* Row 2 - Slide all from Right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={groupFadeIn('right', 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {secondRow.map(renderCard)}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesOverview;

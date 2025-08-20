import React from 'react';
import { motion } from 'framer-motion';
import TitleSection from '../components/Titlesection';
import GroupCompanies from '../components/home/GroupCompanies';
import image1 from '../assets/images/wetransfer_hitech/Reverse-Osmosis-Membrane.png';

import iconDesign from '../assets/icons/design.png';
import iconSupport from '../assets/icons/support.png';
import iconManuals from '../assets/icons/design.png';``
import iconEngineering from '../assets/icons/support.png';
import iconLab from '../assets/icons/design.png';
import iconSales from '../assets/icons/support.png';
import iconTroubleshoot from '../assets/icons/design.png';

const servicesData = [
  {
    iconImage: iconDesign,
    title: "Design Services",
    description:
      "At Hi-Tech, our mechanical and structural engineering team boasts extensive experience in designing, modeling, and analyzing membrane products. Our design engineers collaborate closely with fabrication and field service experts to incorporate operational improvements based on field operations and customer feedback. We prioritize reliability, quality, and affordability in our equipment. Our meticulous process begins with initial designs and culminates in precise manufacturing, ensuring that client requirements are seamlessly integrated into the final product.",
  },
  {
    iconImage: iconSupport,
    title: "Technical Engineering Support Services",
    description:
      "The credibility that we hold in our products, the wide range of membrane production is done keeping its longevity in mind. We strive to make the finest of each part required in a membrane. Any product of any industry would have an expiry period mentioned. In a similar way, the service period that we recommend for any product is mentioned. Some products might get out-dated after a certain time period. Thus, to keep the membrane function as per the needs, we look after its maintenance on regular intervals.",
  },
  {
    iconImage: iconManuals,
    title: "Training and O&M Manuals",
    description:
      "Success is rooted in knowledge. At Hi-Tech, our team participates in comprehensive training on membrane systems, covering everything from the basics to advanced techniques. We also provide O&M Manuals tailored to client needs, detailing the membrane systems and compatible equipment. It's essential for clients to understand the components and spare parts they will use, ensuring their requirements are fully met.",
  },
  {
    iconImage: iconEngineering,
    title: "Technical Engineering Support",
    description:
      "Our product is built on a foundation of technical expertise and support. RO Membranes feature intricate designs that require careful attention. We address every client query promptly and thoroughly to prevent future issues with product performance. We recommend timely service to ensure optimal functionality. All complaints are logged and resolved as quickly as possible, as this is crucial to our commitment to customer satisfaction. Water is essential for life, and any system that disrupts its flow must be serviced without delay.",
  },
  {
    iconImage: iconLab,
    title: "Analytical Lab",
    description:
      "Our final output meets our high standards through rigorous testing and refinement. Before packaging, each RO membrane undergoes performance testing and is re-evaluated during use to address any issues. We conduct essential pressure tests and filtration checks in our specialized labs for both dry and wet membranes. Wet membranes must pass a mandatory quality check, while additional tests ensure our products remain up-to-date and meet our quality goals. Membranes that fail testing are analyzed to identify and resolve potential issues.",
  },
  {
    iconImage: iconSales,
    title: "After Market Sales",
    description:
      "Rectify, Repair and Replace. In case, any issue arises during the use of RO membrane, Hi-Tech provides its clients assistance in rectifying the exact problem. If it calls for a repair or replacement, the company gets it done within the time committed. Our proficient employees are always available to be contacted in case of any issue. We hand over the responsibility to our personnel to solve all the queries of our clients, with us, in back, to guide them.",
  },
  {
    iconImage: iconTroubleshoot,
    title: "Troubleshooting",
    description:
      "In-case an RO service is not able to rectify the exact matter of concern, then, Hi-Tech provides a service of expertise. We help the agency troubleshoot the problem within a quick span of time. With well equipped robotic machineries, our products do not incur major issues. In-case of any such scenario, we ensure to rectify the error in time.",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Top Title Banner */}
      <TitleSection
        title="Services"
        backgroundImage={image1}
        overlay={true}
        overlayOpacity={0.4}
        textColor="text-white"
      />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8" style={{ maxWidth: '95rem' }}>
          {/* Intro Paragraph */}
          <div className="mb-16 text-center flex justify-center align-items-center">
            <p className="text-gray-700 text-base leading-relaxed max-w-3xl">
              At Hi-Tech, our greatest learning comes from customer feedback, which drives our commitment to excellence.
              We believe that continuous improvement transforms the good into the great, and the great into the exceptional.
              Our focus on precision in every service sets us apart from the competition.
              We view our customers as partners in achieving our mission, and we know that success is only possible when we eliminate negligence.
              With this dedication, Hi-Tech consistently enhances its capabilities, performance, and goals.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2, delayChildren: index * 0.15 }}
                className="flex flex-col items-start"
              >
                {/* Animated Icon */}
                <motion.div
                  variants={{
                    hidden: { scale: 0.5, opacity: 0 },
                    visible: { scale: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="mb-8"
                >
                  <div
                    className="w-[165px] h-[83px] bg-[#3E4095] flex items-center justify-center"
                    style={{
                      borderRadius: "50% / 50%",
                      transform: "rotate(-35deg)",
                    }}
                  >
                    <img
                      src={service.iconImage}
                      alt={service.title}
                      className="w-11 h-11 object-contain"
                      style={{ transform: "rotate(35deg)" }}
                    />
                  </div>
                </motion.div>

                {/* Text Animation */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="text-left"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Companies Footer Section */}
      <GroupCompanies />
    </div>
  );
};

export default ServicesPage;

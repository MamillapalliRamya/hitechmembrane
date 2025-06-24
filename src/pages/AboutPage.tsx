import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TitleSection from '../components/Titlesection.tsx';
import image1 from '../assets/images/wetransfer_hitech/Company_overview.png';
import hitechLogo from '../assets/images/wetransfer_hitech/hitech_logo.png';
import GroupCompanies from '../components/home/GroupCompanies';
import ourPromise from '../assets/images/wetransfer_hitech/ourPromise.png';
import ourTeam1 from '../assets/images/wetransfer_hitech/ourteam1.png';
import ourTeam2 from '../assets/images/wetransfer_hitech/ourteam2.png';
import FAQSection from '../components/Faq';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutPage: React.FC = () => {

  return (
    <div>
      {/* Services Section */}
      <TitleSection
        title="Company Overview"
        backgroundImage={image1}
        overlay={false}
        overlayOpacity={0.4}
        textColor="text-white"
        noBgColor={true}
      />




      {/* Company Overview */}
      <section className=" bg-white ml-[135px] mr-[100px]">

        <div className="grid md:grid-cols-2 items-center mx-[100px] mt-[94px]">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#58585B] w-[701px] h-[136px] text-[24px]"
          >
            Since its establishment in 1995, Hi-Tech has prioritized the well-being of individuals.
            Over the past decade, we have expanded our global presence and strengthened our relationships
            with stakeholders, focusing on delivering an optimal product-price mix.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <img
              src={hitechLogo}
              alt="Hi-Tech Membranes Facility"
              className=" w-[162px] h-[136px] ml-[537px]"
            />
          </motion.div>
        </div>

      </section>


      {/* Awards Section */}
      <section className="py-16 bg-white-50">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[41px] flex flex-col items-center"
        >
          <h1 className="text-[48px] text-[#3E4095] font-bold">Our Awards</h1>
          <p className="w-[441px] h-[50px] text-[20px] text-[#58585B]">
            We have won consecutive awards for our range of products that have proven to be prudent enough.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="container mx-[100px] px-4">
          <div className="grid md:grid-cols-2 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white-50 pt-4 pr-8 pb-8 pl-[96px] w-[464px] h-[307px] rounded-[4px] mx-auto flex flex-col"
            >
              <div className="flex justify-center items-center mb-4">
                <img src="/assets/images/award1.png" alt="award1" className="w-[198px] h-[163px]" />
                <img src="/assets/images/award3.png" alt="award3" className="w-[179px] h-[163px]" />
              </div>
              <h3 className="text-xl font-bold mb-2 mt-2 text-center text-[22px] text-[#000000]">
                The Water Digest
              </h3>
              <p className="text-[#3E4095] text-[20px] text-center">Read more →</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white-50 pt-2 pr-8 pb-8 pl-[96px] w-[464px] h-[307px] rounded-[4px] mx-auto flex flex-col"
            >
              <div className="flex justify-center items-center mb-4">
                <img src="/assets/images/award2.png" alt="award2" className="w-[154px] h-[188px]" />
                <img src="/assets/images/award4.png" alt="award4" className="w-[127px] h-[188px]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-[22px] text-[#000000]">
                Best Membrane Technology Award
              </h3>
              <p className="text-[#3E4095] text-[20px] text-center">Read more →</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Global Grid */}
      <section className="bg-white-50 mb-[80px]">
        <div className="container mx-[150px] px-4 h-full">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-[80px]"
          >
            <h2 className="text-[48px] font-bold text-[#3E4095] mb-12 px-6">Our Global Presence</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center items-center gap-[244px] mb-12"
            >
              {[
                { name: "Thailand", src: "/assets/images/Thailand.png" },
                { name: "China", src: "/assets/images/China.png" },
                { name: "UAE", src: "/assets/images/UAE.png" },
                { name: "USA", src: "/assets/images/USA.png" }
              ].map((country) => (
                <motion.div
                  key={country.name}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-[160px] h-[160px] mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <img
                      src={country.src}
                      alt={`${country.name} Flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-[#3A3A3A] text-[32px] font-bold">{country.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[920px] h-[170px] mx-auto text-center"
          >
            <p className="text-[24px] text-[#4B4B4B] leading-relaxed">
              Hi-Tech has successfully maintained its global presence thanks to a robust network of
              skilled associates. By prioritizing customer interests, the company continually adapts its
              work methodology to achieve outstanding results. With competitive pricing, efficient
              resource management, and a commitment to fulfilling promises, Hi-Tech has garnered
              accolades not just from clients but also from esteemed authorities across the nation.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Automated precision */}
      <section className="relative w-full h-[488px]">

        <div className="w-full h-[488px] absolute top-0 left-0 bg-cover bg-center">
          <img src="/assets/images/Automated_precision.png" alt="precision" />
        </div>

        {/* Animated Block */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="absolute mt-[60px] ml-[150px] pl-6 w-[579px] z-10"
        >
          <div className="w-[104%] bg-white p-8">
            <h2 className="text-[36px] font-bold text-[#3E4095] mb-4">Automated Precision</h2>
            <p className="text-[20px] text-[#4B4B4B]">
              Our latest Thailand production unit has been equipped with robotically controlled machines requiring no human touch,
              resulting in the accurate manufacturing of fine-blanking membranes to meet the global demand.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-[48px] font-bold text-[#3E4095] text-center mb-16">Our Philosophy</h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-12 gap-8 items-center mb-16">
              {/* Pyramid Structure */}
              <div className="col-span-5 items-center flex flex-col">
                {/* Mission - Top Triangle */}
                <div className=" mb-4 w-[107.72px] h-[98.34px]">
                  <img
                    src="/assets/images/Vector1.png"
                    alt="Mission Block"
                    className=" mx-auto"
                  />
                </div>

                {/* Vision - Middle Trapezoid */}
                <div className=" mb-4 w-[205.59px] h-[80.17px]">
                  <img
                    src="/assets/images/Vector2.png"
                    alt="Vision Block"
                    className=" mx-auto"
                  />
                </div>

                {/* Values - Bottom Rectangle */}
                <div className=" mb-8 w-[304.02px] h-[80.17px]">
                  <img
                    src="/assets/images/Vector3.png"
                    alt="Values Block"
                    className=" mx-auto"
                  />
                </div>

                <h3 className="text-[#7A7A7A] text-xl text-center font-medium">Our Pyramid of Promise</h3>
              </div>

              {/* Content */}
              <div className="col-span-7 space-y-8">
                {/* Mission */}
                <div className="flex items-center gap-4">
                  <img src="/assets/images/mission-icon.png" alt="Mission Icon" className="w-10 h-10" />
                  <h3 className="text-3xl font-semibold text-[#666666] min-w-[120px]">Mission</h3>
                  <p className="text-[#999999] text-xl leading-relaxed flex-1">
                    Ensuring customer satisfaction is our top priority.
                  </p>
                </div>

                {/* Vision */}
                <div className="flex items-center gap-4">
                  <img src="/assets/images/vision-icon.png" alt="Vision Icon" className="w-10 h-10" />
                  <h3 className="text-3xl font-semibold text-[#666666] min-w-[120px]">Vision</h3>
                  <p className="text-[#999999] text-xl leading-relaxed flex-1">
                    To provide the country with its most essential resource: Clean Water.
                  </p>
                </div>

                {/* Values */}
                <div className="flex items-center gap-4">
                  <img src="/assets/images/values-icon.png" alt="Values Icon" className="w-10 h-10" />
                  <h3 className="text-3xl font-semibold text-[#666666] min-w-[120px]">Values</h3>
                  <p className="text-[#999999] text-xl leading-relaxed flex-1">
                    Excellence, Trustworthiness, and Collaboration create a significant impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


                                                                      {/* our promises */}
      <section className="bg-white">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[48px] font-bold text-[#3E4095] ml-[150px] px-6"
        >
          Our Promise
        </motion.h2>

        <div className="grid md:grid-cols-2 items-center ml-[150px] mt-[30px]">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center px-12"
          >
            <p className="text-[#4B4B4B] w-[612px] h-[168px] text-[20px] mb-[30px]">
              Founded decades ago, Hi-Tech has effectively harnessed its efforts to improve access to clean and safe water in rural
              and underserved areas through collaboration with the government. This initiative has garnered significant appreciation
              for the company's vision. With a large-scale production cycle, Hi-Tech consistently meets the demand for RO products,
              membranes, and related components.
            </p>
            <p className="text-[#4B4B4B] w-[612px] h-[140px] text-[20px]">
              The ladder of innovation, challenges, and creation at Hi-Tech has no end. With safety being prioritized,
              the Pyramid of Promise is the keynote of each member at the company to excel well. Deliver the demands,
              Amaze the anticipation, Treat for Trust, Work with Will and Give to Gain, sums up the ethics of our Corporate Philosophy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[555px] h-[370px] ml-[100px]"
          >
            <img
              src={ourPromise}
              alt="Hi-Tech Membranes Facility"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

                                                     {/* Quality Policy Section */}
      <section className="bg-white mt-[100px]">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[48px] font-bold text-[#3E4095] ml-[150px] px-6"
        >
          Our Quality Policy
        </motion.h2>

        <div className="ml-[100px] mr-[150px] mt-[50px] mb-[53px] px-14">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full grid grid-cols-5 gap-[95px] justify-items-center"
          >
            {[
              { src: "/assets/images/certificate1.png", alt: "CE Marking Certification" },
              { src: "/assets/images/certificate2.png", alt: "CE Marking Certification" },
              { src: "/assets/images/certificate3.png", alt: "ISO Certification" },
              { src: "/assets/images/certificate4.png", alt: "ISO Certification" },
              { src: "/assets/images/certificate5.png", alt: "Quality Certification" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <img src={cert.src} alt={cert.alt} className="w-[181px] h-[244px]" />
                <p className="text-[16px] text-[#424242] mt-[10px] text-center">CE Marking Certification</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="text-[#4B4B4B] w-[707px] text-[20px] text-center mb-[30px]">
            Apart from a wish for your wellness, Hi-Tech sets up the bar of qualitative
            production of membranes. The agility to present you the best of the rest has made
            the company get recognition and certifications. Ergonomically proven RO
            membranes by Hi-Tech are efficiently sustainable, qualitative and economical.
          </p>
          <p className="text-[#4B4B4B] w-[707px] text-[20px] text-center">
            Hi-tech always keeps up to its promise of high quality standards, customer
            satisfaction and giving an unmatchable service.
          </p>
        </motion.div>
      </section>


      <section className="bg-white mt-[80px] mb-[100px]">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[48px] font-bold text-[#3E4095] text-center"
        >
          Our Team
        </motion.h2>

        <div className="grid md:grid-cols-2 items-center ml-[150px] mt-[30px] mb-[60px] px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[555px] h-[268px]"
          >
            <img
              src={ourTeam1}
              alt="Hi-Tech Team at Exhibition"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center ml-[100px]"
          >
            <p className="text-[#4B4B4B] w-[612px] text-[20px] leading-relaxed">
              An efficient team is the backbone of a company's success, and at Hi-Tech, every member has stepped up. From directors to engineers to factory workers, everyone collaborates to ensure the final product speaks for itself. The team is dedicated to meeting your needs and delivering exceptional results.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 items-center ml-[150px] mt-[40px] px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#4B4B4B] w-[612px] text-[20px] leading-relaxed mb-[30px]">
              What keeps us motivated is the belief that "To perspire is a pearl in harbor." This mindset drives us to deliver our best and exceed our own creations. It's not just our qualifications that matter, but the individuals who lead our team with self-motivation and confidence. Each member brings unique skills that complement one another, fostering compassion and cooperation. Together, we strive to expand our reach and serve more communities.
            </p>
            <p className="text-[#4B4B4B] w-[612px] text-[20px] leading-relaxed">
              At Hi-tech, our team has become more efficient under the guidance of inspiring leaders who have paved our path to excellence and credibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-[455px] h-[409px] ml-[100px]"
          >
            <img
              src={ourTeam2}
              alt="Hi-Tech Factory Team Working"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-[40px] mt-[100px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-[275.79px] h-[231px]"
          >
            <img
              src={hitechLogo}
              alt="Hi-Tech Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="w-[950px] h-full text-[#4B4B4B] text-[36px] text-center mx-auto font-bold">
            We are growing stronger year-on-year by widening our footprints globally. Hi-Tech believes in strengthening their network of associates to deliver qualitative and state-of-the-art membrane technology.
          </p>
        </motion.div>
      </section>


      <FAQSection />
      <GroupCompanies />
    </div>
  );
};

export default AboutPage;
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  Factory,
  Globe,
  Shield,
  Droplet,
  // Gauge,
  ArrowRight,
  Building,
  Home,
  FlaskRound as Flask,
} from "lucide-react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import IndustriesComp from "../components/industries/IndustriesComp";
import BrandSection from "../components/home/BrandSection";
import HeadingSection from "../components/home/HeadingSection";
import GroupCompanies from "../components/home/GroupCompanies";
import WaterFilterSection from "../components/home/WaterFilterSection";
// import BackgroundBoxes from "../components/home/backgroundboxes";
import ProductsPage1 from "../components/home/ProductsPage1";
// import HomeSlidePage from "../components/homeslide/HomeSlidePage";
import WaterParticles from "../components/waterdrops";
// import ClientPage from '../components/newfeatures/client/ClientPage';
const HomePage: React.FC = () => {
  const industries = [
    {
      title: "Household",
      description: "Low-pressure POU RO systems (50/75/100 GPD)",
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: "Municipal",
      description: "Approved for global tender processes",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "Healthcare",
      description: "Ultra-pure water for dialysis (XLE Series)",
      icon: <Flask className="w-6 h-6" />,
    },
    {
      title: "Textile",
      description: "High-temp CP Series (4040/8040)",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: "Food & Beverage",
      description: "Specialty elements for bottling & processing",
      icon: <Droplet className="w-6 h-6" />,
    },
    {
      title: "Commercial",
      description: "ES Series: Low-energy, high-flux (150-400 GPD)",
      icon: <Building className="w-6 h-6" />,
    },
  ];

  const strengths = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Certified Excellence",
      description:
        "ISO 9001, 14001, 18001 | Member of WQA (USA) & Indian Water Works Association",
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Cutting-Edge Manufacturing",
      description:
        "Fully automated robotic plant ensures zero defects, high salt rejection, and low energy use",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Partnerships",
      description: "Collaborations with USA/Japan for advanced membrane tech",
    },
  ];

  return (
    <GoogleReCaptchaProvider reCaptchaKey="YOUR_RECAPTCHA_KEY">
      <div className="w-full">
        {/* Hero Section */}
        {/* <section className=" flex  relative h-screen max-h-[800px] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black/30 "></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                World-Leading Water Filter Membrane Solutions Since 1995
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Acclaimed for excellence in membrane technology, delivering
                quality, credibility, and well-engineered water filter membranes
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all flex items-center justify-center gap-2 group"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-md transition-all flex items-center justify-center gap-2"
                >
                  View Our Products
                </Link>
              </div>
            </motion.div>
          </div>
         
        </section> */}

      

        <section className="relative h-screen max-h-[800px] bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
          {/* Particle Background */}
          <WaterParticles />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/30 z-10" />

          {/* Foreground Content */}
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                World-Leading Water Filter Membrane Solutions Since 1995
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Acclaimed for excellence in membrane technology, delivering
                quality, credibility, and well-engineered water filter
                membranes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all flex items-center justify-center gap-2 group"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-md transition-all flex items-center justify-center gap-2"
                >
                  View Our Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Brand Section */}
        <BrandSection />
        {/* Heading Section */}
        <HeadingSection />
        {/* Awards Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Award-Winning Excellence
              </h2>
              <p className="text-gray-600">
                Recognized globally for our innovative membrane technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 p-8 rounded-lg"
              >
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Water Digest Water Awards
                </h3>
                <p className="text-gray-600">Best Membrane (2014-2016)</p>
                <p className="text-sm text-blue-600 mt-2">UNESCO-supported</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-blue-50 p-8 rounded-lg"
              >
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Best Membrane Technology Award
                </h3>
                <p className="text-gray-600">Dubai 2015</p>
                <p className="text-sm text-blue-600 mt-2">
                  Industry Excellence
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Industries Section */}
        {/* <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-gray-600">
                Precision Solutions for Every Need
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-blue-600">{industry.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/applications"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Explore All Markets
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section> */}
        <IndustriesComp />
        {/* Products Section */}
        <ProductsPage1 />

        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Products</h2>
              <p className="text-gray-600">
                Engineered for Performance & Sustainability
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <Home className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Residential RO Elements
                </h3>
                <p className="text-gray-600 mb-4">
                  Eliminate salts and impurities with precision
                </p>
                <Link
                  to="/products/residential-ro-membranes"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <Building className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Commercial RO Elements
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe water for schools, offices, and hospitals
                </p>
                <Link
                  to="/products/commercial-ro-membranes"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <Factory className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Industrial RO Elements
                </h3>
                <p className="text-gray-600 mb-4">
                  Pharma-grade solutions for labs and industries
                </p>
                <Link
                  to="/products/industrial-ro-membranes"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section> */}
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Hi-Tech?</h2>
              <p className="text-gray-600">
                Industry-leading expertise and innovation
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <div className="text-blue-600">{strength.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{strength.title}</h3>
                  <p className="text-gray-600">{strength.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Water Filter Section */}
        <WaterFilterSection />
        {/* Comapamies  Section */}
        <GroupCompanies />
        {/* CTA Section */}
        {/* <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Upgrade to Award-Winning Membranes Today!
            </h2>
            <p className="text-xl mb-8">
              Experience the difference with Hi-Tech Membranes
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+66038109396"
                className="px-8 py-4 bg-white text-blue-900 font-medium rounded-md hover:bg-blue-50 transition-colors"
              >
                Call +66 (0) 3810 9396
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section> */}
        {/* <BackgroundBoxes /> */}
        {/* <HomeSlidePage /> */}
        {/* featureSection */}
        {/* <ClientPage/> */}
      </div>
    </GoogleReCaptchaProvider>
  );

  // return (
  //     <GoogleReCaptchaProvider reCaptchaKey="YOUR_RECAPTCHA_KEY">
  //       <div className="w-full">
  //         {/* Hero Section */}
  //         <section className="relative h-screen max-h-[800px] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
  //           <div className="absolute inset-0 bg-black/30"></div>
  //           <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
  //             <motion.div
  //               initial={{ opacity: 0, y: 20 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               className="max-w-3xl"
  //             >
  //               <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
  //                 World-Leading Water Filter Membrane Solutions Since 1995
  //               </h1>
  //               <p className="text-xl md:text-2xl mb-8 text-blue-100">
  //                 Acclaimed for excellence in membrane technology, delivering quality, credibility, and well-engineered water filter membranes
  //               </p>
  //               <div className="flex flex-col sm:flex-row gap-4">
  //                 <Link
  //                   to="/contact"
  //                   className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all flex items-center justify-center gap-2 group"
  //                 >
  //                   Get Started Today
  //                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  //                 </Link>
  //                 <Link
  //                   to="/products"
  //                   className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-md transition-all flex items-center justify-center gap-2"
  //                 >
  //                   View Our Products
  //                 </Link>
  //               </div>
  //             </motion.div>
  //           </div>
  //         </section>

  //         {/* Awards Section */}
  //         <section className="py-16 bg-white">
  //           <div className="container mx-auto px-4">
  //             <div className="text-center mb-12">
  //               <h2 className="text-3xl font-bold mb-4">Award-Winning Excellence</h2>
  //               <p className="text-gray-600">Recognized globally for our innovative membrane technology</p>
  //             </div>
  //             <div className="grid md:grid-cols-2 gap-8">
  //               <motion.div
  //                 initial={{ opacity: 0, y: 20 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 className="bg-blue-50 p-8 rounded-lg"
  //               >
  //                 <Award className="w-12 h-12 text-blue-600 mb-4" />
  //                 <h3 className="text-xl font-bold mb-2">Water Digest Water Awards</h3>
  //                 <p className="text-gray-600">Best Membrane (2014-2016)</p>
  //                 <p className="text-sm text-blue-600 mt-2">UNESCO-supported</p>
  //               </motion.div>
  //               <motion.div
  //                 initial={{ opacity: 0, y: 20 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 transition={{ delay: 0.2 }}
  //                 className="bg-blue-50 p-8 rounded-lg"
  //               >
  //                 <Award className="w-12 h-12 text-blue-600 mb-4" />
  //                 <h3 className="text-xl font-bold mb-2">Best Membrane Technology Award</h3>
  //                 <p className="text-gray-600">Dubai 2015</p>
  //                 <p className="text-sm text-blue-600 mt-2">Industry Excellence</p>
  //               </motion.div>
  //             </div>
  //           </div>
  //         </section>

  //         {/* Industries Section */}
  //         <section className="py-16 bg-gray-50">
  //           <div className="container mx-auto px-4">
  //             <div className="text-center mb-12">
  //               <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
  //               <p className="text-gray-600">Precision Solutions for Every Need</p>
  //             </div>
  //             <div className="grid md:grid-cols-3 gap-6">
  //               {industries.map((industry, index) => (
  //                 <motion.div
  //                   key={index}
  //                   initial={{ opacity: 0, y: 20 }}
  //                   animate={{ opacity: 1, y: 0 }}
  //                   transition={{ delay: index * 0.1 }}
  //                   className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
  //                 >
  //                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
  //                     <div className="text-blue-600">{industry.icon}</div>
  //                   </div>
  //                   <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
  //                   <p className="text-gray-600">{industry.description}</p>
  //                 </motion.div>
  //               ))}
  //             </div>
  //             <div className="text-center mt-8">
  //               <Link
  //                 to="/applications"
  //                 className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
  //               >
  //                 Explore All Markets
  //                 <ArrowRight className="w-5 h-5 ml-2" />
  //               </Link>
  //             </div>
  //           </div>
  //         </section>

  //         {/* Products Section */}
  //         <section className="py-16 bg-white">
  //           <div className="container mx-auto px-4">
  //             <div className="text-center mb-12">
  //               <h2 className="text-3xl font-bold mb-4">Our Products</h2>
  //               <p className="text-gray-600">Engineered for Performance & Sustainability</p>
  //             </div>
  //             <div className="grid md:grid-cols-3 gap-8">
  //               <motion.div
  //                 initial={{ opacity: 0, y: 20 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 className="bg-gray-50 p-8 rounded-lg"
  //               >
  //                 <Home className="w-12 h-12 text-blue-600 mb-4" />
  //                 <h3 className="text-xl font-bold mb-2">Residential RO Elements</h3>
  //                 <p className="text-gray-600 mb-4">Eliminate salts and impurities with precision</p>
  //                 <Link
  //                   to="/products/residential-ro-membranes"
  //                   className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
  //                 >
  //                   Learn More
  //                   <ArrowRight className="w-5 h-5 ml-2" />
  //                 </Link>
  //               </motion.div>
  //               <motion.div
  //                 initial={{ opacity: 0, y: 20 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 transition={{ delay: 0.2 }}
  //                 className="bg-gray-50 p-8 rounded-lg"
  //               >
  //                 <Building className="w-12 h-12 text-blue-600 mb-4" />
  //                 <h3 className="text-xl font-bold mb-2">Commercial RO Elements</h3>
  //                 <p className="text-gray-600 mb-4">Safe water for schools, offices, and hospitals</p>
  //                 <Link
  //                   to="/products/commercial-ro-membranes"
  //                   className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
  //                 >
  //                   Learn More
  //                   <ArrowRight className="w-5 h-5 ml-2" />
  //                 </Link>
  //               </motion.div>
  //               <motion.div
  //                 initial={{ opacity: 0, y: 20 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 transition={{ delay: 0.4 }}
  //                 className="bg-gray-50 p-8 rounded-lg"
  //               >
  //                 <Factory className="w-12 h-12 text-blue-600 mb-4" />
  //                 <h3 className="text-xl font-bold mb-2">Industrial RO Elements</h3>
  //                 <p className="text-gray-600 mb-4">Pharma-grade solutions for labs and industries</p>
  //                 <Link
  //                   to="/products/industrial-ro-membranes"
  //                   className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
  //                 >
  //                   Learn More
  //                   <ArrowRight className="w-5 h-5 ml-2" />
  //                 </Link>
  //               </motion.div>
  //             </div>
  //           </div>
  //         </section>

  //         {/* Why Choose Us Section */}
  //         <section className="py-16 bg-gray-50">
  //           <div className="container mx-auto px-4">
  //             <div className="text-center mb-12">
  //               <h2 className="text-3xl font-bold mb-4">Why Choose Hi-Tech?</h2>
  //               <p className="text-gray-600">Industry-leading expertise and innovation</p>
  //             </div>
  //             <div className="grid md:grid-cols-3 gap-8">
  //               {strengths.map((strength, index) => (
  //                 <motion.div
  //                   key={index}
  //                   initial={{ opacity: 0, y: 20 }}
  //                   animate={{ opacity: 1, y: 0 }}
  //                   transition={{ delay: index * 0.2 }}
  //                   className="bg-white p-6 rounded-lg shadow-md"
  //                 >
  //                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
  //                     <div className="text-blue-600">{strength.icon}</div>
  //                   </div>
  //                   <h3 className="text-xl font-bold mb-2">{strength.title}</h3>
  //                   <p className="text-gray-600">{strength.description}</p>
  //                 </motion.div>
  //               ))}
  //             </div>
  //           </div>
  //         </section>

  //         {/* CTA Section */}
  //         <section className="py-16 bg-blue-900 text-white">
  //           <div className="container mx-auto px-4 text-center">
  //             <h2 className="text-3xl font-bold mb-6">Upgrade to Award-Winning Membranes Today!</h2>
  //             <p className="text-xl mb-8">Experience the difference with Hi-Tech Membranes</p>
  //             <div className="flex flex-col sm:flex-row justify-center gap-4">
  //               <a
  //                 href="tel:+66038109396"
  //                 className="px-8 py-4 bg-white text-blue-900 font-medium rounded-md hover:bg-blue-50 transition-colors"
  //               >
  //                 Call +66 (0) 3810 9396
  //               </a>
  //               <Link
  //                 to="/contact"
  //                 className="px-8 py-4 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
  //               >
  //                 Contact Us
  //               </Link>
  //             </div>
  //           </div>
  //         </section>
  //       </div>
  //     </GoogleReCaptchaProvider>
  //   );
};

export default HomePage;

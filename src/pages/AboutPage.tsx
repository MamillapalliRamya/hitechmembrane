import React from 'react';
import { motion } from 'framer-motion';
import { Award, Factory, Globe, Users, CheckCircle2, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const awards = [
    {
      title: "The Water Digest Water Awards",
      description: "Best Membrane (2014-2016)",
      subtitle: "Supported by UNESCO"
    },
    {
      title: "Best Membrane Technology Award",
      description: "Dubai 2015",
      subtitle: "Industry Excellence"
    }
  ];

  const values = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
      title: "Quality First",
      description: "Delivering state-of-the-art membrane technology"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Customer-Centric Innovation",
      description: "Tailoring solutions to meet evolving needs"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Sustainable Growth",
      description: "Expanding globally while maintaining ethical practices"
    }
  ];

  const faqs = [
    {
      question: "What sets Hi-Tech apart?",
      answer: "Award-winning quality, affordable pricing, and a global support network."
    },
    {
      question: "Where are your products used?",
      answer: "Industrial, commercial, and residential water purification systems worldwide."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Hi-Tech Membranes
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-2xl"
          >
            Innovating Membrane Technology for Global Wellness Since 1995
          </motion.p>
        </div>
      </motion.div>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-6">
                Since its inception in 1995, Hi-Tech Membranes has been driven by a mission to advance global wellness through cutting-edge membrane solutions. With a decade-spanning legacy, we've grown organically into a trusted leader, backed by stakeholders and a relentless focus on delivering the optimal product-price mix.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                alt="Hi-Tech Membranes Facility"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Award-Winning Excellence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
                <p className="text-sm text-blue-600 mt-2">{award.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">State-of-the-Art Manufacturing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Thailand production facility features robotic precision manufacturing, ensuring zero-human-error production of fine-blanking membranes to meet worldwide demand.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <Factory className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Robotic Automation</h3>
              <p className="text-gray-600">Precision manufacturing with zero human error</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Standards</h3>
              <p className="text-gray-600">ISO certified manufacturing processes</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled engineers and technicians</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-6"
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8">Discover how Hi-Tech Membranes can transform your water treatment needs</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="tel:+66038109396" className="flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5" />
              +66 (0) 3810 9396
            </a>
            <a href="mailto:sales@hitechmembranes.com" className="flex items-center gap-2 text-lg">
              <Mail className="w-5 h-5" />
              sales@hitechmembranes.com
            </a>
          </div>
          <div className="mt-8">
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-white text-blue-900 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
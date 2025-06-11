import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Ruler, Wrench, BookOpen, Headphones, FlaskConical, ShoppingBag, 
  AlertCircle, ArrowRight, Phone, Mail, Users, Shield, Award 
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Ruler className="w-12 h-12" />,
      title: "Design Services",
      description: "Our mechanical and structural engineering team leverages cutting-edge tools for custom membrane product design & 3D modeling.",
      features: [
        "Custom membrane product design",
        "3D modeling & simulation",
        "Performance analysis",
        "Collaborative prototyping"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Membrane Support Services",
      description: "Precision manufacturing and optimization services to ensure extended product life and reduced maintenance costs.",
      features: [
        "Precision manufacturing",
        "Component optimization",
        "Maintenance planning",
        "Performance monitoring"
      ]
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Training & O&M Manuals",
      description: "Comprehensive training programs and documentation for optimal system operation and maintenance.",
      features: [
        "Tiered training programs",
        "Hands-on sessions",
        "Custom O&M manuals",
        "Video tutorials"
      ]
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "Technical Engineering Support",
      description: "24/7 expert support for troubleshooting and system optimization.",
      features: [
        "24/7 troubleshooting",
        "Design validation",
        "Performance audits",
        "Remote assistance"
      ]
    },
    {
      icon: <FlaskConical className="w-12 h-12" />,
      title: "Analytical Lab",
      description: "State-of-the-art testing facilities ensuring quality and compliance.",
      features: [
        "Pre-delivery testing",
        "Quality assurance",
        "Performance validation",
        "Compliance testing"
      ]
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "After-Market Sales",
      description: "Comprehensive after-sales support including repairs and replacements.",
      features: [
        "On-site assistance",
        "Repair programs",
        "Replacement parts",
        "Upgrade options"
      ]
    },
    {
      icon: <AlertCircle className="w-12 h-12" />,
      title: "Troubleshooting",
      description: "Expert diagnostics and rapid resolution for system issues.",
      features: [
        "Expert diagnostics",
        "Rapid response",
        "System optimization",
        "Preventive maintenance"
      ]
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
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-2xl"
          >
            Precision-Driven Support for Unmatched Membrane Performance
          </motion.p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      to={`/contact?service=${service.title}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Hi-Tech's Services Stand Out?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We transform "better" into "best" through accuracy, expertise, and relentless improvement
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer-Centric</h3>
              <p className="text-gray-600">Your feedback shapes our upgrades</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">End-to-End Support</h3>
              <p className="text-gray-600">From design to post-sales</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Expertise</h3>
              <p className="text-gray-600">ISO/WQA-backed quality protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Optimize Your Water Solutions Together!</h2>
          <p className="text-xl mb-8">Contact our team to discuss your specific needs</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a 
              href="tel:+66038109396" 
              className="flex items-center gap-2 text-lg hover:text-blue-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +66 (0) 3810 9396
            </a>
            <a 
              href="mailto:sales@hitechmembranes.com" 
              className="flex items-center gap-2 text-lg hover:text-blue-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
              sales@hitechmembranes.com
            </a>
          </div>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-900 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
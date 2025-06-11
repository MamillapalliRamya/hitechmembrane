import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Droplet, Shield, Gauge } from "lucide-react";

const ResidentialProductsPage: React.FC = () => {
  const products = [
    {
      id: "es-2012-150",
      model: "ES-2012-150",
      name: "Hi-Tech RO Membrane ES-2012-150",
      image: "../../public/assets/images/wetransfer_hitech/ES-150-2012.jpg",
      specs: {
        saltRejection: "97-98%",
        flow: "150 GPD",
        pressure: "70 psi",
        temperature: "77°F (25°C)",
      },
    },
    {
      id: "es-1812-75",
      model: "ES-1812-75",
      name: "Hi-Tech RO Membrane ES-1812-75",
      image:
        "../../public/assets/images/wetransfer_hitech/es1812-75-dry_2-500x500.webp",
      specs: {
        saltRejection: "97-98%",
        flow: "75 GPD",
        pressure: "60 psi",
        temperature: "113°F (45°C)",
      },
    },
    {
      id: "es-2012-50",
      model: "ES-2012-50",
      name: "Hi-Tech RO Membrane ES-2012-50",
      image:
        "../../public/assets/images/wetransfer_hitech/ES-2012-50-600x600.png",
      specs: {
        saltRejection: "97-98%",
        flow: "60 GPD",
        pressure: "70 psi",
        temperature: "77°F (25°C)",
      },
    },
    {
      id: "  TFC-2012-80",
      model: "TFC-2012-80",
      name: "Hi-Tech RO Membrane TFC-2012-80",
      image:
        "../../public/assets/images/wetransfer_hitech/TFC201280_900x900-600x600.png",
      specs: {
        saltRejection: "97-98%",
        flow: "80 GPD",
        pressure: "70 psi",
        temperature: "77°F (25°C)",
      },
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Advanced TFC Technology",
      description:
        "Thin-Film Composite membrane envelopes for superior contaminant rejection",
    },
    {
      icon: <Droplet className="w-8 h-8 text-blue-600" />,
      title: "High Recovery Rate",
      description: "15% recovery rate under standard testing conditions",
    },
    {
      icon: <Gauge className="w-8 h-8 text-blue-600" />,
      title: "Optimal Performance",
      description: "Tested at 225 psi (1.55 MPa) with 2000 ppm NaCl solution",
    },
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
            Residential RO Membranes
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-2xl"
          >
            High-performance spiral-wound TFC membranes designed for home and
            small office water purification systems
          </motion.p>
        </div>
      </motion.div>

      {/* Technology Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Standard Testing Conditions
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Test Parameters</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span>Solution: 2000 ppm NaCl</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span>Pressure: 225 psi (1.55 MPa)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span>Temperature: 25°C (77°F)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Operating Conditions</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span>Recovery Rate: 15%</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span>pH Range: 6.5–7.0</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span>Max Operating Pressure: 150 psi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Available Models
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-white text-xl font-bold">
                      {product.model}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Salt Rejection:</span>
                      <span className="font-medium">
                        {product.specs.saltRejection}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Flow Rate:</span>
                      <span className="font-medium">{product.specs.flow}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Test Pressure:</span>
                      <span className="font-medium">
                        {product.specs.pressure}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors group"
                  >
                    View Details
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentialProductsPage;

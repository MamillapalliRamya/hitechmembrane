import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, FlaskConical, Beaker, Factory, Droplet, Shield, Gauge, CheckCircle2, Building, Hotel, Home, FlaskRound as Flask, Italic as Hospital, Car, Waves, Coffee, Leaf, Sprout, Droplets, Warehouse, Dumbbell, Microscope } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    city: '',
    country: '',
    message: '',
    quantity: '10'
  });

  // Sample data for dropdowns
  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany", 
    "France", "Japan", "China", "India", "Brazil"
  ];

  const citiesByCountry: { [key: string]: string[] } = {
    "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    "Canada": ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Liverpool", "Glasgow"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
    "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
    "Japan": ["Tokyo", "Osaka", "Nagoya", "Sapporo", "Fukuoka"],
    "China": ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu"],
    "India": ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"],
    "Brazil": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza"]
  };

  const [availableCities, setAvailableCities] = useState<string[]>([]);

  const handleCountryChange = (country: string) => {
    setFormData(prev => ({
      ...prev,
      country,
      city: '' // Reset city when country changes
    }));
    setAvailableCities(citiesByCountry[country] || []);
  };

  const performanceData = [
    { parameter: 'Permeate Flow Rate', value: '150 GPD (567 L/D)' },
    { parameter: 'Salt Rejection', value: '97% (min. 95%)' },
    { parameter: 'Operating Pressure', value: '125 psig (8.6 bar)' },
    { parameter: 'Max Temperature', value: '113°F (45°C)' },
    { parameter: 'pH Range', value: '3-10 (continuous)' }
  ];

  const testingConditions = [
    { parameter: 'Test Solution', value: '2500 ppm NaCl' },
    { parameter: 'Test Pressure', value: '60 psi (4.1 bar)' },
    { parameter: 'Test Temperature', value: '77°F (25°C)' },
    { parameter: 'pH Range', value: '6.5–7.0' },
    { parameter: 'Feed Water Quality', value: 'SDI <5.0, Turbidity <1.0 NTU' }
  ];

  const dimensions = [
    { parameter: 'Total Length', value: '11.74" (298 mm)' },
    { parameter: 'Element Diameter', value: '1.75" (44.5 mm)' },
    { parameter: 'Tube Diameter', value: '0.68" (17 mm)' },
    { parameter: 'Weight', value: '0.42 lbs (0.19 kg)' },
    { parameter: 'Pressure Drop/Element', value: '10 psi' }
  ];

  const features = [
    "Uses the most advanced membrane film technology and manufacturing processes",
    "Provides high rejection stability even with high TDS",
    "Manufactured in our ISO 9001:2008 Certified Facilities",
    "Less fouling, Less frequency cleaning and More consistent",
    "100% Performance and Quality Tested",
    "Backed by our Experienced Technical Support Staff",
    "High Quality for Consistent and Reliable Performance",
    "Standard dimensions to fit in commonly available housings",
    "Lower consumption of chemical and longer life"
  ];

  const applications = [
    { name: 'Restaurants', icon: <Coffee className="w-6 h-6" /> },
    { name: 'Aquariums', icon: <Waves className="w-6 h-6" /> },
    { name: 'Whole House', icon: <Home className="w-6 h-6" /> },
    { name: 'Office', icon: <Building className="w-6 h-6" /> },
    { name: 'Institutions', icon: <Building className="w-6 h-6" /> },
    { name: 'Hotels', icon: <Hotel className="w-6 h-6" /> },
    { name: 'Hospitals', icon: <Hospital className="w-6 h-6" /> },
    { name: 'Spot Free Rinse/Car Wash', icon: <Car className="w-6 h-6" /> },
    { name: 'Labs', icon: <Flask className="w-6 h-6" /> },
    { name: 'Pharmaceutical', icon: <FlaskConical className="w-6 h-6" /> },
    { name: 'Humidification', icon: <Droplets className="w-6 h-6" /> },
    { name: 'Misting', icon: <Droplets className="w-6 h-6" /> },
    { name: 'Manufacturing', icon: <Factory className="w-6 h-6" /> },
    { name: 'Rinse Water', icon: <Droplet className="w-6 h-6" /> },
    { name: 'Bottled Water', icon: <Droplet className="w-6 h-6" /> },
    { name: 'Beverage', icon: <Coffee className="w-6 h-6" /> },
    { name: 'Food Processing', icon: <Warehouse className="w-6 h-6" /> },
    { name: 'Ice Makers', icon: <Droplet className="w-6 h-6" /> },
    { name: 'Commercial Water Treatment', icon: <Factory className="w-6 h-6" /> }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/products/residential-ro-membranes" className="hover:text-blue-600">Residential RO Membranes</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">ES-2012-150</span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-2">ES-2012-150 RO MEMBRANE</h1>
              <p className="text-xl text-gray-600 mb-6">Model: Hi-Tech RO Membrane ES-2012-150</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white-50 rounded-lg p-8 flex items-center justify-center"
            >
              <img 
                src="../../src/assets/images/wetransfer_hitech/ES-2012-50-600x600.png"
                alt="ES-2012-150 RO Membrane"
                className="max-w-full h-auto rounded-lg shadow-lg"
               style={{
                maxWidth: '100%',
                height: 'auto',
               
               }}/>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Performance Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 bg-blue-600 text-white">
                <h2 className="text-xl font-semibold">Performance Specifications</h2>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody>
                    {performanceData.map((item, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-4 text-gray-600">{item.parameter}</td>
                        <td className="py-4 text-gray-900 font-medium text-right">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Testing Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 bg-blue-600 text-white">
                <h2 className="text-xl font-semibold">Testing Conditions</h2>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody>
                    {testingConditions.map((item, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-4 text-gray-600">{item.parameter}</td>
                        <td className="py-4 text-gray-900 font-medium text-right">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Physical Dimensions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 bg-blue-600 text-white">
                <h2 className="text-xl font-semibold">Physical Dimensions</h2>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody>
                    {dimensions.map((item, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-4 text-gray-600">{item.parameter}</td>
                        <td className="py-4 text-gray-900 font-medium text-right">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Applications</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{app.icon}</div>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{app.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Send your message to this supplier</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country*</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.country}
                    onChange={(e) => handleCountryChange(e.target.value)}
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City*</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    disabled={!formData.country}
                  >
                    <option value="">Select City</option>
                    {availableCities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email id"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile No.*</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message*</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter your inquiry details such as product name, color, size, MOQ, FOB, etc."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity*</label>
                <input
                  type="number"
                  required
                  min="10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
                <p className="mt-1 text-sm text-gray-500">Piece/Pieces</p>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
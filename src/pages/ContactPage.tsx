import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactPage: React.FC = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = React.useState({
    firstName: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const countries = [
    { code: "TH", name: "Thailand", dialCode: "+66" },
    { code: "US", name: "USA", dialCode: "+1" },
    { code: "AE", name: "UAE", dialCode: "+971" },
    { code: "CN", name: "China", dialCode: "+86" },
    { code: "MM", name: "Myanmar", dialCode: "+95" },
    { code: "In", name: "Others", dialCode: "+91" },
    { code: "OT", name: "Others", dialCode: "" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) return;

    try {
      const token = await executeRecaptcha("contact");
      // Handle form submission with reCAPTCHA token
      console.log("Form submitted with token:", token);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="pt-20">
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
            Contact Hi-Tech Membranes
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-2xl"
          >
            Have questions or need support? Our team is here to help.
          </motion.p>
        </div>
      </motion.div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <div className="flex">
                    <select className="w-24 px-2 py-2 border border-r-0 border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      {countries.map((country) => (
                        <option key={country.code} value={country.dialCode}>
                          {country.dialCode}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      required
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    Reply within 24 hours
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">
                        Headquarters
                      </h3>
                      <p className="mt-2 text-gray-600">
                        700/273 AMATA CITY CHONBURI INDUSTRIAL ESTATE,
                        <br />
                        MOO 1, TAMBON BANKAO, AMPHUR PHANTHONG,
                        <br />
                        CHONBURI, THAILAND 20160
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <a
                        href="tel:+66038109396"
                        className="mt-1 text-gray-600 hover:text-blue-600"
                      >
                        +66 (0) 3810 9396
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <a
                        href="mailto:sales@hitechmembranes.com"
                        className="mt-1 text-gray-600 hover:text-blue-600"
                      >
                        sales@hitechmembranes.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">
                        Global Support
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Available in multiple languages
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Location</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7503493314584!2d101.07234611482008!3d13.170899990731698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102dd8d5d7e1c69%3A0x2c46bf5c5c07b945!2sAmata%20City%20Chonburi!5e0!3m2!1sen!2sth!4v1645508123456!5m2!1sen!2sth"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

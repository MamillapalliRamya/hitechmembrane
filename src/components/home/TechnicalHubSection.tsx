import React, { useState } from "react";
import {
  Search,
  Download,
  BookOpen,
  FileText,
  BarChart2,
  Beaker,
} from "lucide-react";

const TechnicalHubSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("resources");

  const resources = [
    {
      id: "1",
      title: "Membrane Selection Guide",
      type: "Whitepaper",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      downloads: 1245,
    },
    {
      id: "2",
      title: "Chemical Compatibility Chart",
      type: "Technical Guide",
      icon: <Beaker className="w-5 h-5 text-blue-600" />,
      downloads: 3089,
    },
    {
      id: "3",
      title: "Installation Guide - CeraFlow Series",
      type: "Installation Guide",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      downloads: 876,
    },
    {
      id: "4",
      title: "Performance Data - Pharmaceutical Applications",
      type: "Data Sheet",
      icon: <BarChart2 className="w-5 h-5 text-blue-600" />,
      downloads: 1632,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Engineering Hub
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access comprehensive resources and smart tools designed for
            engineers and technical professionals
          </p>
        </div>

        {/* Smart Search */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask a technical question (e.g., 'Which membrane for high-viscosity solvents?')"
              className="w-full py-4 pl-5 pr-14 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b">
          <button
            className={`px-5 py-3 font-medium transition-colors relative ${
              activeTab === "resources"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("resources")}
          >
            Resource Library
          </button>
          <button
            className={`px-5 py-3 font-medium transition-colors relative ${
              activeTab === "tools"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("tools")}
          >
            Engineering Tools
          </button>
          <button
            className={`px-5 py-3 font-medium transition-colors relative ${
              activeTab === "studies"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("studies")}
          >
            Case Studies
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-lg p-6">
          {activeTab === "resources" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Technical Documents
                </h3>
                <div className="flex gap-2">
                  <select className="p-2 border border-gray-300 rounded-md text-sm bg-white">
                    <option>All Document Types</option>
                    <option>Whitepapers</option>
                    <option>Technical Guides</option>
                    <option>Installation Guides</option>
                    <option>CAD Files</option>
                  </select>
                  <select className="p-2 border border-gray-300 rounded-md text-sm bg-white">
                    <option>Most Recent</option>
                    <option>Most Downloaded</option>
                    <option>Alphabetical</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="p-4 bg-white rounded-md shadow-sm flex justify-between items-center hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-md">
                        {resource.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {resource.title}
                        </h4>
                        <p className="text-sm text-gray-500">{resource.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">
                        {resource.downloads} downloads
                      </span>
                      <button className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="px-5 py-2.5 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors">
                  View All Resources
                </button>
              </div>
            </div>
          )}

          {activeTab === "tools" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Chemical Compatibility Calculator
                </h3>
                <p className="text-gray-600 mb-4">
                  Input your chemical concentration and temperature to get
                  material recommendations.
                </p>
                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Chemical Type
                    </label>
                    <select className="w-full p-2.5 border border-gray-300 rounded-md">
                      <option>Select a chemical</option>
                      <option>Hydrochloric Acid</option>
                      <option>Sodium Hydroxide</option>
                      <option>Ethanol</option>
                      <option>Sulfuric Acid</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Concentration (%)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2.5 border border-gray-300 rounded-md"
                      placeholder="Enter concentration"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Temperature (°C)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2.5 border border-gray-300 rounded-md"
                      placeholder="Enter temperature"
                    />
                  </div>
                </div>
                <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                  Calculate Compatibility
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Membrane Lifetime Estimator
                </h3>
                <p className="text-gray-600 mb-4">
                  Project the expected lifespan of your membrane based on
                  operating conditions.
                </p>
                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Membrane Type
                    </label>
                    <select className="w-full p-2.5 border border-gray-300 rounded-md">
                      <option>Select membrane type</option>
                      <option>CeraFlow™ Ultra</option>
                      <option>PolyPure™ PVDF</option>
                      <option>HiTemp™ Ceramic</option>
                      <option>DuraFlow™ PES</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Operating Pressure (bar)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2.5 border border-gray-300 rounded-md"
                      placeholder="Enter pressure"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cleaning Frequency (days)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2.5 border border-gray-300 rounded-md"
                      placeholder="Enter frequency"
                    />
                  </div>
                </div>
                <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                  Estimate Lifetime
                </button>
              </div>
            </div>
          )}

          {activeTab === "studies" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img
                    src="https://images.pexels.com/photos/13083777/pexels-photo-13083777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Pharmaceutical Case Study"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    99.9% Protein Recovery in Biopharma Process
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How a leading pharmaceutical manufacturer achieved
                    near-perfect protein recovery using our Ceramic 0.2µm
                    Membrane.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium px-3 py-1 bg-green-50 text-green-700 rounded-full">
                      ROI: 8 months
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read Case Study
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img
                    src="https://images.pexels.com/photos/19461148/pexels-photo-19461148/free-photo-of-river-with-waterfall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Wastewater Case Study"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Doubled Cleaning Cycles in Wastewater Treatment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Municipal wastewater facility achieves 2x longer cleaning
                    cycles with our Anti-clog PVDF Series membranes.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium px-3 py-1 bg-green-50 text-green-700 rounded-full">
                      40% OPEX Reduction
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnicalHubSection;

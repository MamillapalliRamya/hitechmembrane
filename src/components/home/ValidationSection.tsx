import React from 'react';
import { Award, FileBarChart, ChevronRight, Building, Play } from 'lucide-react';

const ValidationSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Validation & Trust</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Backed by rigorous testing, global installations, and prestigious research partnerships
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Live Data Counter */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">12,741+</div>
            <div className="text-lg text-gray-600 mb-4">Membranes in operation worldwide</div>
            <div className="text-sm text-gray-500">
              Data updated daily from our IoT-connected installations
            </div>
          </div>
          
          {/* Testing & Certification */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Certifications & Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>ISO 9001:2015 Certified Manufacturing</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>FDA 21 CFR Compliant Materials</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>USP Class VI Tested</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>ASME BPE Standards Compliant</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mx-auto">
                View All Certifications
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Research Partnerships */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileBarChart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Research Partnerships</h3>
            <p className="text-gray-600 mb-6 text-center">
              Collaborating with leading institutions to advance membrane technology
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                <div className="font-semibold text-gray-700">MIT</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                <div className="font-semibold text-gray-700">Stanford</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                <div className="font-semibold text-gray-700">ETH Zurich</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                <div className="font-semibold text-gray-700">Max Planck</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mx-auto">
                View Research Papers
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Testing Videos Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Laboratory Testing & Demonstrations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://example.com/images/videos/chemical-resistance-test.jpg"
                  alt="Chemical Resistance Test"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-gray-900 mb-2">Extreme pH Resistance Test</h4>
                <p className="text-sm text-gray-600">
                  Watch our ceramic membranes withstand pH 1-14 conditions in accelerated testing.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://example.com/images/videos/temperature-stress-test.jpg"
                  alt="Temperature Stress Test"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-gray-900 mb-2">High Temperature Stress Test</h4>
                <p className="text-sm text-gray-600">
                  See our HiTemp™ membranes perform at 220°C under continuous operation.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://example.com/images/videos/flow-visualization.jpg"
                  alt="Flow Visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-gray-900 mb-2">Flow Visualization Study</h4>
                <p className="text-sm text-gray-600">
                  Advanced imaging shows our patented flow channels in action reducing fouling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection;
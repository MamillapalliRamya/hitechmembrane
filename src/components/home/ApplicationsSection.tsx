import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';

interface ApplicationData {
  id: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: string;
  diagram: string;
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
}

const ApplicationsSection: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  
  const applications: ApplicationData[] = [
    {
      id: '1',
      industry: 'Biopharma',
      challenge: 'Protein retention',
      solution: 'Ceramic 0.2µm Membrane',
      metrics: '≥99.9% recovery rate',
      diagram: 'https://example.com/images/diagrams/biopharma-flow.svg',
      testimonial: {
        quote: "Hi-Tech Membranes' Ceramic 0.2µm solution revolutionized our protein separation process. We're seeing unprecedented recovery rates while maintaining structural integrity.",
        author: 'Dr. Sarah Chen',
        position: 'Process Development Director',
        company: 'BioPharma Solutions Inc.'
      }
    },
    {
      id: '2',
      industry: 'Wastewater',
      challenge: 'Fouling resistance',
      solution: 'Anti-clog PVDF Series',
      metrics: '2x longer cleaning cycles',
      diagram: 'https://example.com/images/diagrams/wastewater-flow.svg',
      testimonial: {
        quote: "After installing the Anti-clog PVDF membranes, our maintenance schedule was cut in half. The fouling resistance even in our high-solids application is remarkable.",
        author: 'Michael Rodriguez',
        position: 'Operations Manager',
        company: 'Metro Water Authority'
      }
    },
    {
      id: '3',
      industry: 'Oil & Gas',
      challenge: 'High temperature stability',
      solution: 'HiTemp™ Ceramic Series',
      metrics: 'Operational at 220°C',
      diagram: 'https://example.com/images/diagrams/oilgas-flow.svg',
      testimonial: {
        quote: "The HiTemp Ceramic membranes have transformed our separation process. We're operating reliably at temperatures that would destroy conventional membranes.",
        author: 'James Worthington',
        position: 'Chief Engineer',
        company: 'PetroTech Solutions'
      }
    },
    {
      id: '4',
      industry: 'Chemical',
      challenge: 'Aggressive pH environment',
      solution: 'ChemGuard™ Series',
      metrics: 'pH 1-14 stability',
      diagram: 'https://example.com/images/diagrams/chemical-flow.svg',
      testimonial: {
        quote: "We've tried every membrane on the market for our caustic recovery process. Only the ChemGuard series has withstood our aggressive pH environment long-term.",
        author: 'Dr. Anita Patel',
        position: 'Technology Director',
        company: 'Advanced Chemical Industries'
      }
    }
  ];
  
  const toggleRow = (id: string) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Industry Application Matrix</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover how our precision membranes solve critical separation challenges across industries
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-4 px-6 text-left">Industry</th>
                <th className="py-4 px-6 text-left">Key Challenge</th>
                <th className="py-4 px-6 text-left">Hi-Tech Solution</th>
                <th className="py-4 px-6 text-left">Performance Metrics</th>
                <th className="py-4 px-6 text-left sr-only">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <React.Fragment key={app.id}>
                  <tr 
                    className={`border-b border-gray-800 hover:bg-gray-800/50 cursor-pointer transition-colors ${expandedRow === app.id ? 'bg-gray-800/50' : ''}`}
                    onClick={() => toggleRow(app.id)}
                  >
                    <td className="py-4 px-6">
                      <div className="font-medium">{app.industry}</div>
                    </td>
                    <td className="py-4 px-6">{app.challenge}</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                        {app.solution}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-green-400 font-medium">{app.metrics}</td>
                    <td className="py-4 px-6 text-right">
                      {expandedRow === app.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </td>
                  </tr>
                  
                  {/* Expanded Row */}
                  {expandedRow === app.id && (
                    <tr className="bg-gray-800/30">
                      <td colSpan={5} className="py-6 px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Process Flow Diagram */}
                          <div>
                            <h4 className="text-lg font-medium mb-4">Process Flow Diagram</h4>
                            <div className="bg-gray-700/50 p-4 rounded-lg h-60 flex items-center justify-center">
                              <img 
                                src={app.diagram} 
                                alt={`${app.industry} Process Flow`}
                                className="max-w-full max-h-full"
                              />
                            </div>
                          </div>
                          
                          {/* Client Testimonial */}
                          <div>
                            <h4 className="text-lg font-medium mb-4">Client Testimonial</h4>
                            <div className="bg-gray-700/50 p-6 rounded-lg">
                              <blockquote className="text-gray-300 italic mb-4">
                                "{app.testimonial.quote}"
                              </blockquote>
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold text-white">
                                  {app.testimonial.author.charAt(0)}
                                </div>
                                <div>
                                  <div className="font-medium">{app.testimonial.author}</div>
                                  <div className="text-sm text-gray-400">
                                    {app.testimonial.position}, {app.testimonial.company}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4">
                                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                  <Play className="w-4 h-4" />
                                  Watch Full Interview
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors">
            View All Applications
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
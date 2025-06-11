import React, { useState } from 'react';
import { Calendar, Users, ChevronRight, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [projectType, setProjectType] = useState('');
  
  const nextStep = () => {
    setFormStep(formStep + 1);
  };
  
  const selectProjectType = (type: string) => {
    setProjectType(type);
    nextStep();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With Our Engineering Team</h2>
            <p className="text-lg text-gray-600">
              Get expert guidance on your specific separation challenges
            </p>
          </div>
          
          {/* Multi-step form */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Progress Indicator */}
            <div className="bg-blue-600 p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'} font-semibold`}>
                    1
                  </div>
                  <span className="text-white font-medium hidden sm:block">Project Type</span>
                </div>
                <div className="flex-grow mx-4 h-1 bg-blue-500">
                  <div className={`h-full bg-white transition-all ${formStep >= 2 ? 'w-full' : 'w-0'}`}></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'} font-semibold`}>
                    2
                  </div>
                  <span className="text-white font-medium hidden sm:block">Project Details</span>
                </div>
                <div className="flex-grow mx-4 h-1 bg-blue-500">
                  <div className={`h-full bg-white transition-all ${formStep >= 3 ? 'w-full' : 'w-0'}`}></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 3 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'} font-semibold`}>
                    3
                  </div>
                  <span className="text-white font-medium hidden sm:block">Engineer Matching</span>
                </div>
              </div>
            </div>
            
            {/* Form Steps */}
            <div className="p-8">
              {/* Step 1: Project Type */}
              {formStep === 1 && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">What can we help you with?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <button 
                      className="p-6 border-2 rounded-lg text-left hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                      onClick={() => selectProjectType('quote')}
                    >
                      <div className="w-12 h-12 mb-4 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-medium mb-2 text-gray-900">Request a Quote</h4>
                      <p className="text-gray-600 text-sm">
                        Get pricing and specifications for your custom membrane solution
                      </p>
                      <div className="mt-4 flex justify-end">
                        <ChevronRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                    
                    <button 
                      className="p-6 border-2 rounded-lg text-left hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                      onClick={() => selectProjectType('support')}
                    >
                      <div className="w-12 h-12 mb-4 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-medium mb-2 text-gray-900">Technical Support</h4>
                      <p className="text-gray-600 text-sm">
                        Troubleshooting or optimization for existing installations
                      </p>
                      <div className="mt-4 flex justify-end">
                        <ChevronRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                    
                    <button 
                      className="p-6 border-2 rounded-lg text-left hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                      onClick={() => selectProjectType('partnership')}
                    >
                      <div className="w-12 h-12 mb-4 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-medium mb-2 text-gray-900">Research Partnership</h4>
                      <p className="text-gray-600 text-sm">
                        Collaborate on custom development or research projects
                      </p>
                      <div className="mt-4 flex justify-end">
                        <ChevronRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Project Details (Conditional based on project type) */}
              {formStep === 2 && (
                <div className="animate-fadeIn">
                  {projectType === 'quote' && (
                    <>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Custom Solution Quote</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Name*</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name*</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                          <input type="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <input type="tel" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Industry*</label>
                          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Industry</option>
                            <option value="Water Treatment">Water Treatment</option>
                            <option value="Pharmaceutical">Pharmaceutical</option>
                            <option value="Chemical">Chemical</option>
                            <option value="Oil & Gas">Oil & Gas</option>
                            <option value="Food & Beverage">Food & Beverage</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Budget Range: <span className="font-normal">$10,000</span>
                          </label>
                          <input
                            type="range"
                            min="10000"
                            max="1000000"
                            step="10000"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>$10k</span>
                            <span>$1M+</span>
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Project Requirements*</label>
                          <textarea 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                            placeholder="Describe your application, fluid properties, operating conditions, and performance requirements"
                          ></textarea>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {projectType === 'support' && (
                    <>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Support Request</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Name*</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name*</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                          <input type="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <input type="tel" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Product Model/Series*</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Support Priority</label>
                          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="Standard">Standard (24-48 hours)</option>
                            <option value="Urgent">Urgent (Same day)</option>
                            <option value="Emergency">Emergency (Immediate)</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Issue Description*</label>
                          <textarea 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                            placeholder="Describe the issue you're experiencing, including any error codes or symptoms"
                          ></textarea>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Upload System Schematics or Error Reports</label>
                          <div className="border-2 border-dashed border-gray-300 p-8 rounded-md text-center">
                            <svg className="w-10 h-10 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="text-gray-600 mb-2">Drag & drop files here, or click to browse</p>
                            <p className="text-xs text-gray-500">Accepts PDF, JPG, PNG (max 10MB)</p>
                            <input type="file" className="hidden" />
                            <button className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium transition-colors">
                              Select Files
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {projectType === 'partnership' && (
                    <>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Research Partnership Inquiry</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Name*</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name*</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                          <input type="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <input type="tel" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type*</label>
                          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Type</option>
                            <option value="Academic">Academic Institution</option>
                            <option value="Research">Research Institute</option>
                            <option value="Industry">Industry</option>
                            <option value="Government">Government</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Research Field*</label>
                          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Field</option>
                            <option value="Materials Science">Materials Science</option>
                            <option value="Chemical Engineering">Chemical Engineering</option>
                            <option value="Environmental Engineering">Environmental Engineering</option>
                            <option value="Biotechnology">Biotechnology</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Research Project Description*</label>
                          <textarea 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                            placeholder="Describe your research goals, timeline, and potential collaboration areas"
                          ></textarea>
                        </div>
                      </div>
                    </>
                  )}
                  
                  <div className="mt-8 flex justify-end">
                    <button 
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
                      onClick={nextStep}
                    >
                      Next: Engineer Matching
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Engineer Matching */}
              {formStep === 3 && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Select Your Application</h3>
                  <p className="text-gray-600 mb-6">
                    We'll match you with the engineering team most experienced with your specific application
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <button className="p-5 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
                      <h4 className="font-medium text-gray-900 mb-1">Water Treatment</h4>
                      <p className="text-sm text-gray-600">Filtration, purification, wastewater</p>
                    </button>
                    <button className="p-5 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
                      <h4 className="font-medium text-gray-900 mb-1">Pharmaceutical</h4>
                      <p className="text-sm text-gray-600">API, biologics, sterile filtration</p>
                    </button>
                    <button className="p-5 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
                      <h4 className="font-medium text-gray-900 mb-1">Chemical Processing</h4>
                      <p className="text-sm text-gray-600">Specialty chemicals, reagents</p>
                    </button>
                    <button className="p-5 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
                      <h4 className="font-medium text-gray-900 mb-1">Oil & Gas</h4>
                      <p className="text-sm text-gray-600">Produced water, hydrocarbon separation</p>
                    </button>
                    <button className="p-5 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
                      <h4 className="font-medium text-gray-900 mb-1">Food & Beverage</h4>
                      <p className="text-sm text-gray-600">Clarification, sterilization</p>
                    </button>
                    <button className="p-5 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
                      <h4 className="font-medium text-gray-900 mb-1">Other Industry</h4>
                      <p className="text-sm text-gray-600">Electronics, automotive, etc.</p>
                    </button>
                  </div>
                  
                  {/* Engineering Team */}
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
                    <h4 className="font-semibold text-blue-900 mb-4">Your Engineering Team</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-2 overflow-hidden">
                          <img 
                            src="https://example.com/images/team/engineer1.jpg" 
                            alt="Dr. Michael Chen"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-sm font-medium">Dr. Michael Chen</div>
                        <div className="text-xs text-gray-600">Lead Engineer</div>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-2 overflow-hidden">
                          <img 
                            src="https://example.com/images/team/engineer2.jpg" 
                            alt="Sarah Johnson"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-sm font-medium">Sarah Johnson</div>
                        <div className="text-xs text-gray-600">Applications Specialist</div>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-2 overflow-hidden">
                          <img 
                            src="https://example.com/images/team/engineer3.jpg" 
                            alt="Dr. James Wong"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-sm font-medium">Dr. James Wong</div>
                        <div className="text-xs text-gray-600">R&D Director</div>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-2 overflow-hidden">
                          <img 
                            src="https://example.com/images/team/engineer4.jpg" 
                            alt="Lisa Martinez"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-sm font-medium">Lisa Martinez</div>
                        <div className="text-xs text-gray-600">Technical Support</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Schedule Options */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Schedule a Consultation</h4>
                    <div className="flex flex-col md:flex-row gap-4">
                      <button className="flex-1 p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <div className="text-left">
                          <div className="font-medium text-gray-900">Video Consultation</div>
                          <div className="text-sm text-gray-600">30-minute technical discussion</div>
                        </div>
                      </button>
                      <button className="flex-1 p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <div className="text-left">
                          <div className="font-medium text-gray-900">Sales Engineering Call</div>
                          <div className="text-sm text-gray-600">Detailed project scoping</div>
                        </div>
                      </button>
                      <button className="flex-1 p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center gap-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div className="text-left">
                          <div className="font-medium text-gray-900">Quick Response</div>
                          <div className="text-sm text-gray-600">Email reply within 24 hours</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button 
                      className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-md text-gray-700 transition-colors"
                      onClick={() => setFormStep(2)}
                    >
                      Back
                    </button>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors">
                      Submit Request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600">
            <p>Your information is securely encrypted and will only be used to process your request.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
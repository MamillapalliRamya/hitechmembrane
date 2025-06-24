import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const faqs = [
    {
      question: "What is the expected life of the membranes?",
      answer: "Generally, the life of the membranes depends on the water quality but in normal cases or under standard parameters, you can expect 1.5 to 2 years for domestic and approximately, 3 years for commercial and industrial elements."
    },
    {
      question: "How to procure your membrane?",
      answer: "You can procure our membranes through our authorized dealers and distributors located across the country. You can also contact us directly through our website or customer service for bulk orders and commercial requirements."
    },
    {
      question: "What are the different sizes manufactured by Hi-Tech?",
      answer: "Hi-Tech manufactures membranes in various sizes including 1812, 2012, 2514, 3012, 4021, and 4040 configurations. We also provide custom sizes based on specific requirements for industrial and commercial applications."
    },
    {
      question: "How is Hi-Tech Membrane different from others?",
      answer: "Hi-Tech Membranes are manufactured using advanced thin-film composite technology with superior salt rejection rates, higher flux rates, and longer lifespan. Our membranes undergo rigorous quality testing and are designed to perform consistently across various water conditions."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="mb-[100px] bg-white">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[48px] text-[#3E4095] font-bold mb-[68px]">FAQ</h1>
        </div>
      <div className="container flex items-center justify-center w-full">

        {/* FAQ Items */}
        <div className="space-y-4 w-[1400px] ml-[350px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="ml-12">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
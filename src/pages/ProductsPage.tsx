import { Download } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import GroupCompanies from '../components/home/GroupCompanies';
import { ChevronDown } from 'lucide-react';

const productPage: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: "Residential",
      subtitle: "RO Membranes",
      video: "/assets/videos/residentialMembrane.mp4",
      alt: "Water tap with clean water flowing"
    },
    {
      id: 2,
      title: "Industrial",
      subtitle: "RO Membranes",
      image: "/assets/images/IndustryImage.png",
      alt: "Industrial factory with smokestacks"
    },
    {
      id: 3,
      title: "Commercial",
      subtitle: "RO Membranes",
      video: "/assets/videos/CommericialMembrane.mp4",
      alt: "Commercial water filtration equipment"
    },
    {
      id: 4,
      title: "Sea Water",
      subtitle: "RO Membranes",
      image: "/assets/images/waterBeach.png",
      alt: "Clear blue ocean water"
    }
  ];

  const handleProductDownload = (productModel: string) => {
    
    const link = document.createElement('a');
    link.href = '/assets/pdf/sample.pdf';
    link.download = `${productModel}-DataSheet.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto pt-4">
        {/* Download Button */}
        <div className="text-center mb-12 ">
          <a
            href="/assets/pdf/sample.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A8CF45] underline text-base sm:text-lg lg:text-[20px] inline-flex items-center gap-2 transition-colors duration-200 flex-wrap justify-center pt-24"
          >
            Download Hi-Tech RO Brochure
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              style={{ height: "250px", minHeight: "200px" }}
              onMouseEnter={(e) => {
                const currentTarget = e.currentTarget;
                const overlay = currentTarget.querySelector('.blue-overlay');
                const clickText = currentTarget.querySelector('.click-text');

                (currentTarget as any).isHovering = true;

                if (overlay) {
                  (overlay as HTMLElement).style.width = "100%";
                  setTimeout(() => {
                    if ((currentTarget as any).isHovering && clickText) {
                      (clickText as HTMLElement).style.opacity = "1";
                      (clickText as HTMLElement).style.transform = "translateX(0)";
                    }
                  }, 800); 
                }
              }}
              onMouseLeave={(e) => {
                const currentTarget = e.currentTarget;
                const overlay = currentTarget.querySelector('.blue-overlay');
                const clickText = currentTarget.querySelector('.click-text');

                // Clear the hovering flag
                (currentTarget as any).isHovering = false;

                if (overlay) (overlay as HTMLElement).style.width = "140px";
                if (clickText) {
                  (clickText as HTMLElement).style.opacity = "0";
                  (clickText as HTMLElement).style.transform = "translateX(-100px)";
                }
              }}
            >
              {/* Media Section (Video or Image) */}
              <div className="absolute inset-0 z-0">
                {category.video ? (
                  <video
                    src={category.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Animated Blue Overlay */}
              <div
                className="blue-overlay absolute inset-0 bg-[#3E4095] transition-all duration-500 ease-in-out z-10"
                style={{
                  width: "140px",
                  transformOrigin: "left"
                }}
              ></div>

              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 z-20">
                <h2
                  className="drop-shadow-lg font-[500] text-2xl sm:text-3xl lg:text-[40px] leading-[100%] tracking-[0px] text-white mb-1 sm:mb-2 font-[Diodrum_Cyrillic,sans-serif]"
                >
                  {category.title}
                </h2>
                <p
                  className="drop-shadow-lg font-[500] text-2xl sm:text-3xl lg:text-[40px] leading-[100%] tracking-[0px] text-white font-[Diodrum_Cyrillic,sans-serif]"
                >
                  {category.subtitle}
                </p>
              </div>

              {/* Enhanced Click Text Animation */}
              <div
                className="click-text absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 transition-all duration-300 ease-out hidden sm:block"
                style={{
                  opacity: "0",
                  transform: "translateX(-100px)"
                }}
              >
                <div className="flex items-center gap-2 text-[#A8CF45] rounded-full px-3 py-2 sm:px-4">
                  <span style={{
                    fontFamily: "Diodrum Cyrillic, sans-serif",
                    fontWeight: 500,
                    fontSize: "20px",
                    color: "#A8CF45"
                  }} className="text-lg sm:text-xl lg:text-[26px]">
                    Click for more
                  </span>
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Details Sections */}

        {/* Residential RO Membranes */}
        <div className="mt-12 lg:mt-16">
          <h2 className="!font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-[100%] mb-4 sm:mb-6 text-[#3E4095]">
            Residential RO Membranes
          </h2>
          <p className="font-[400] text-base sm:text-lg lg:text-[20px] leading-[1.5] lg:leading-[30px] tracking-[0.01em] text-[#464646] mb-8 sm:mb-10 !font-[Diodrum_Cyrillic,sans-serif]">
            An efficient RO Water Filter system needs a precise membrane to remove salts and impurities. Hi-Tech produces RO membranes for homes and offices that eliminate 95% to 98% of dissolved chemicals. These spiral membranes feature multiple TFC envelopes around a central tube, allowing permeate to flow into the envelope and spiral for collection.
          </p>

          {/* RE Series */}
          <h1 className="!font-semibold text-2xl sm:text-3xl lg:text-[32px] leading-[100%] mb-4 sm:mb-6 text-[#000000]">
            RE Series
          </h1>
          <div className="overflow-x-auto mb-8 sm:mb-12">
            <div className="min-w-[800px]">
              <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
                <thead style={{ backgroundColor: '#E8E9FA' }}>
                  <tr>
                    {['Models', 'Measurement', 'Active Area (FT²M)', 'Permeate Flow GPD (MJD)', 'Salt Rejection (%)', 'Layer', 'Data Sheet'].map((header) => (
                      <th
                        key={header}
                        className="text-[#3E4095] font-[Diodrum_Cyrillic,sans-serif] font-semibold text-sm lg:text-[16px] leading-[100%] px-2 sm:px-4 py-3 text-center border border-[#D1D5DB]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { model: 'RE 1812-50', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '50', layer: '50' },
                    { model: 'RE 1812-75', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '75', layer: '75' },
                    { model: 'TFC 2012-80', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '80', layer: '80' },
                    { model: 'RE 2012-100', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '100', layer: '100' }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.model}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.measurement}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.activeArea}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.flow}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.rejection}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.layer}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300">
                        <button
                          onClick={() => handleProductDownload(row.model)}
                          className="bg-[#A8CF45] text-[#3D3E96] rounded px-3 sm:px-7 py-2 sm:py-3 text-xs sm:text-[14px] font-medium border-none cursor-pointer flex items-center gap-1 sm:gap-2 mx-auto"
                        >
                          Download
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ES Series */}
          <h1 className="!font-semibold text-2xl sm:text-3xl lg:text-[32px] leading-[100%] mb-4 sm:mb-6 text-[#000000]">
            ES Series
          </h1>
          <div className="overflow-x-auto mb-12 lg:mb-16">
            <div className="min-w-[800px]">
              <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
                <thead style={{ backgroundColor: '#E8E9FA' }}>
                  <tr>
                    {['Models', 'Measurement', 'Active Area (FT²M)', 'Permeate Flow GPD (MJD)', 'Salt Rejection (%)', 'Layer', 'Data Sheet'].map((header) => (
                      <th
                        key={header}
                        className="text-[#3E4095] font-[Diodrum_Cyrillic,sans-serif] font-semibold text-sm lg:text-[16px] leading-[100%] px-2 sm:px-4 py-3 text-center border border-[#D1D5DB]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { model: 'RE 1812-50', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '50', layer: '50' },
                    { model: 'RE 1812-75', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '75', layer: '75' },
                    { model: 'TFC 2012-80', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '80', layer: '80' },
                    { model: 'RE 2012-100', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '100', layer: '100' }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.model}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.measurement}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.activeArea}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.flow}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.rejection}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.layer}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300">
                        <button
                          onClick={() => handleProductDownload(row.model)}
                          className="bg-[#A8CF45] text-[#3D3E96] rounded px-3 sm:px-7 py-2 sm:py-3 text-xs sm:text-[14px] font-medium border-none cursor-pointer flex items-center gap-1 sm:gap-2 mx-auto"
                        >
                          Download
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Industrial RO Membranes */}
        <div className="mt-12 lg:mt-16">
          <h1 className="!font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-[100%] mb-4 sm:mb-6 text-[#3E4095]">
            Industrial RO Membranes
          </h1>
          <p className="font-[400] text-base sm:text-lg lg:text-[20px] leading-[1.5] lg:leading-[30px] tracking-[0.01em] text-[#464646] mb-8 sm:mb-10 !font-[Diodrum_Cyrillic,sans-serif]">
            Industries like pharmaceuticals and bioengineering need large quantities of pure water. However, water pollution and cleaning costs are increasing. Hi-Tech provides top-notch industrial RO membranes that efficiently eliminate chemicals. Our BW brackish water membranes are favored for their high recovery rates, low energy use, and durability, rejecting 98-99% of impurities.
          </p>

          <div className="overflow-x-auto mb-12 lg:mb-16">
            <div className="min-w-[700px]">
              <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
                <thead style={{ backgroundColor: '#E8E9FA' }}>
                  <tr>
                    {['Models', 'Measurement', 'Active Area (FT²M)', 'Permeate Flow GPD (MJD)', 'Salt Rejection (%)', 'Data Sheet'].map((header) => (
                      <th
                        key={header}
                        className="text-[#3E4095] font-[Diodrum_Cyrillic,sans-serif] font-semibold text-sm lg:text-[16px] leading-[100%] px-2 sm:px-4 py-3 text-center border border-[#D1D5DB]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { model: 'RE 1812-50', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '50' },
                    { model: 'RE 1812-75', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '75' },
                    { model: 'TFC 2012-80', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '80' },
                    { model: 'RE 2012-100', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '100' }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.model}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.measurement}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.activeArea}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.flow}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.rejection}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300">
                        <button
                          onClick={() => handleProductDownload(row.model)}
                          className="bg-[#A8CF45] text-[#3D3E96] rounded px-3 sm:px-7 py-2 sm:py-3 text-xs sm:text-[14px] font-medium border-none cursor-pointer flex items-center gap-1 sm:gap-2 mx-auto"
                        >
                          Download
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Commercial RO Membranes */}
        <div className="mt-12 lg:mt-16">
          <h1 className="!font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-[100%] mb-4 sm:mb-6 text-[#3E4095]">
            Commercial RO Membranes
          </h1>
          <p className="font-[400] text-base sm:text-lg lg:text-[20px] leading-[1.5] lg:leading-[30px] tracking-[0.01em] text-[#464646] mb-8 sm:mb-10 !font-[Diodrum_Cyrillic,sans-serif]">
            Water is essential for life, especially in schools and colleges. Hi-tech's BW range water purifier rejects 95% of dissolved salts, ensuring safe drinking water for offices, industries, hospitals, and malls.
          </p>

          <div className="overflow-x-auto mb-12 lg:mb-16">
            <div className="min-w-[700px]">
              <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
                <thead style={{ backgroundColor: '#E8E9FA' }}>
                  <tr>
                    {['Models', 'Measurement', 'Active Area (FT²M)', 'Permeate Flow GPD (MJD)', 'Salt Rejection (%)', 'Data Sheet'].map((header) => (
                      <th
                        key={header}
                        className="text-[#3E4095] font-[Diodrum_Cyrillic,sans-serif] font-semibold text-sm lg:text-[16px] leading-[100%] px-2 sm:px-4 py-3 text-center border border-[#D1D5DB]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { model: 'RE 1812-50', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '50' },
                    { model: 'RE 1812-75', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '75' },
                    { model: 'TFC 2012-80', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '80' },
                    { model: 'RE 2012-100', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '100' }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.model}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.measurement}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.activeArea}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.flow}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.rejection}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300">
                        <button
                          onClick={() => handleProductDownload(row.model)}
                          className="bg-[#A8CF45] text-[#3D3E96] rounded px-3 sm:px-7 py-2 sm:py-3 text-xs sm:text-[14px] font-medium border-none cursor-pointer flex items-center gap-1 sm:gap-2 mx-auto"
                        >
                          Download
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sea Water Membranes */}
        <div className="mt-12 lg:mt-16">
          <h1 className="!font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-[100%] mb-4 sm:mb-6 text-[#3E4095]">
            Sea Water Membranes
          </h1>
          <p className="font-[400] text-base sm:text-lg lg:text-[20px] leading-[1.5] lg:leading-[30px] tracking-[0.01em] text-[#464646] mb-8 sm:mb-10 !font-[Diodrum_Cyrillic,sans-serif]">
            Seawater plays a crucial role in many sectors. This series seawater membrane system efficiently eliminates 95% of dissolved salts, ensuring safe and clean water for businesses, manufacturing plants, hospitals, and retail centers.
          </p>

          <div className="overflow-x-auto mb-12 lg:mb-16">
            <div className="min-w-[700px]">
              <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
                <thead style={{ backgroundColor: '#E8E9FA' }}>
                  <tr>
                    {['Models', 'Measurement', 'Active Area (FT²M)', 'Permeate Flow GPD (MJD)', 'Salt Rejection (%)', 'Data Sheet'].map((header) => (
                      <th
                        key={header}
                        className="text-[#3E4095] font-[Diodrum_Cyrillic,sans-serif] font-semibold text-sm lg:text-[16px] leading-[100%] px-2 sm:px-4 py-3 text-center border border-[#D1D5DB]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { model: 'RE 1812-50', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '50' },
                    { model: 'RE 1812-75', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '75' },
                    { model: 'TFC 2012-80', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '80' },
                    { model: 'RE 2012-100', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '100' }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.model}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.measurement}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.activeArea}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.flow}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 text-sm lg:text-base">{row.rejection}</td>
                      <td className="px-2 sm:px-4 py-3 text-center border border-gray-300 items-center justify-center">
                        <button
                          onClick={() => handleProductDownload(row.model)}
                          className="bg-[#A8CF45] text-[#3D3E96] rounded px-3 sm:px-7 py-2 sm:py-3 text-xs sm:text-[14px] font-medium border-none cursor-pointer flex items-center gap-1 sm:gap-2 mx-auto"
                        >
                          Download
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
      <GroupCompanies />
    </div>
  );

}
export default productPage;
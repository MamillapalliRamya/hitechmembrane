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
    // Download the sample PDF for all products
    const link = document.createElement('a');
    link.href = '/assets/pdf/sample.pdf';
    link.download = `${productModel}-DataSheet.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto pt-6">
        {/* Download Button */}
        <div className="text-center mb-12 ">
          <a
            href="/assets/pdf/sample.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A8CF45] underline text-[20px] inline-flex items-center gap-2 transition-colors duration-200"
          >
            Download Hi-Tech RO Brochure
            <Download size={23} />
          </a>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              style={{ height: "299px" }}
              onMouseEnter={(e) => {
                const currentTarget = e.currentTarget;
                const overlay = currentTarget.querySelector('.blue-overlay');
                const clickText = currentTarget.querySelector('.click-text');
                
                // Set a flag to track if we're still hovering
                (currentTarget as any).isHovering = true;
                
                if (overlay) {
                  (overlay as HTMLElement).style.width = "100%";
                  // Show click text after blue overlay animation completes (500ms) + additional delay (300ms)
                  setTimeout(() => {
                    // Only show text if we're still hovering over this specific block
                    if ((currentTarget as any).isHovering && clickText) {
                      (clickText as HTMLElement).style.opacity = "1";
                      (clickText as HTMLElement).style.transform = "translateX(0)";
                    }
                  }, 800); // 500ms for overlay + 300ms delay
                }
              }}
              onMouseLeave={(e) => {
                const currentTarget = e.currentTarget;
                const overlay = currentTarget.querySelector('.blue-overlay');
                const clickText = currentTarget.querySelector('.click-text');
                
                // Clear the hovering flag
                (currentTarget as any).isHovering = false;
                
                if (overlay) (overlay as HTMLElement).style.width = "180px";
                if (clickText) {
                  (clickText as HTMLElement).style.opacity = "0";
                  (clickText as HTMLElement).style.transform = "translateX(-100px)";
                }
              }}
            >
              {/* Media Section (Video or Image) - always visible in background */}
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
                  width: "180px",
                  transformOrigin: "left"
                }}
              ></div>

              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col justify-center px-8 z-20">
                <h2
                  style={{
                    fontFamily: "Diodrum Cyrillic, sans-serif",
                    fontWeight: 500,
                    fontSize: "40px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                    color: "#ffffff",
                    marginBottom: "8px",
                  }}
                  className="drop-shadow-lg"
                >
                  {category.title}
                </h2>
                <p
                  style={{
                    fontFamily: "Diodrum Cyrillic, sans-serif",
                    fontWeight: 500,
                    fontSize: "40px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                    color: "#ffffff",
                  }}
                  className="drop-shadow-lg"
                >
                  {category.subtitle}
                </p>
              </div>
            
              {/* Enhanced Click Text Animation */}
              <div 
                className="click-text absolute bottom-6 right-6 z-30 transition-all duration-300 ease-out"
                style={{
                  opacity: "0",
                  transform: "translateX(-100px)"
                }}
              >
                <div className="flex items-center gap-2 text-[#A8CF45] rounded-full px-4 py-2">
                  <span style={{
                    fontFamily: "Diodrum Cyrillic, sans-serif",
                    fontWeight: 500,
                    fontSize: "26px",
                    color:"#A8CF45"
                  }}>
                    Click for more
                  </span>
                  <ChevronDown size={26} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Details Sections */}

        {/* Residential RO Membranes */}
        <div className="mt-16">
          <h2 style={{
            color: '#3E4095',
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0px',
            marginBottom: '24px'
          }}>
            Residential RO Membranes
          </h2>
          <p style={{
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '1%',
            color: '#464646',
            marginBottom: '40px'
          }}>
            An efficient RO Water Filter system needs a precise membrane to remove salts and impurities. Hi-Tech produces RO membranes for homes and offices that eliminate 95% to 98% of dissolved chemicals. These spiral membranes feature multiple TFC envelopes around a central tube, allowing permeate to flow into the envelope and spiral for collection.
          </p>

          {/* RE Series */}
          <h3 style={{
            color: '#000000',
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '100%',
            marginBottom: '24px'
          }}>
            RE Series
          </h3>
          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
              <thead style={{ backgroundColor: '#E8E9FA' }}>
                <tr>
                  {['Models', 'Measurement', 'Active Area (FT²M)', 'Permeate Flow GPD (MJD)', 'Salt Rejection (%)', 'Layer', 'Data Sheet'].map((header) => (
                    <th key={header} style={{
                      color: '#3E4095',
                      fontFamily: 'Diodrum Cyrillic, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '100%',
                      padding: '12px 16px',
                      textAlign: 'center',
                      border: '1px solid #D1D5DB'
                    }}>
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
                    <td className="px-4 py-3 text-center border border-gray-300">{row.model}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.measurement}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.activeArea}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.flow}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.rejection}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.layer}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">
                      <button onClick={() => handleProductDownload(row.model)}
                      style={{
                        backgroundColor: '#A8CF45',
                        color: '#3D3E96',
                        borderRadius: '4px',
                        padding: '12px 28px',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        Download
                        <Download size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ES Series */}
          <h3 style={{
            color: '#000000',
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '100%',
            marginBottom: '24px'
          }}>
            ES Series
          </h3>
          <div className="overflow-x-auto mb-16">
            <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
              <thead style={{ backgroundColor: '#E8E9FA' }}>
                <tr>
                  {['Models', 'Measurement', 'Active Area (FT²M)', 'Permeate Flow GPD (MJD)', 'Salt Rejection (%)', 'Layer', 'Data Sheet'].map((header) => (
                    <th key={header} style={{
                      color: '#3E4095',
                      fontFamily: 'Diodrum Cyrillic, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '100%',
                      padding: '12px 16px',
                      textAlign: 'center',
                      border: '1px solid #D1D5DB'
                    }}>
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
                    <td className="px-4 py-3 text-center border border-gray-300">{row.model}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.measurement}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.activeArea}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.flow}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.rejection}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.layer}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">
                      <button onClick={() => handleProductDownload(row.model)}
                      style={{
                        backgroundColor: '#A8CF45',
                        color: '#3D3E96',
                        borderRadius: '4px',
                        padding: '12px 28px',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        Download
                        <Download size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Industrial RO Membranes */}
        <div className="mt-16">
          <h2 style={{
            color: '#3E4095',
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0px',
            marginBottom: '24px'
          }}>
            Industrial RO Membranes
          </h2>
          <p style={{
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '1%',
            color: '#464646',
            marginBottom: '32px'
          }}>
            Industries like pharmaceuticals and bioengineering need large quantities of pure water. However, water pollution and cleaning costs are increasing. Hi-Tech provides top-notch industrial RO membranes that efficiently eliminate chemicals. Our BW brackish water membranes are favored for their high recovery rates, low energy use, and durability, rejecting 98-99% of impurities.
          </p>

          <div className="overflow-x-auto mb-16">
            <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
              <thead style={{ backgroundColor: '#E8E9FA' }}>
                <tr>
                  {['Models', 'Measurement', 'Active Area (FT²M)', 'Permeate Flow GPD (MJD)', 'Salt Rejection (%)', 'Data Sheet'].map((header) => (
                    <th key={header} style={{
                      color: '#3E4095',
                      fontFamily: 'Diodrum Cyrillic, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '100%',
                      padding: '12px 16px',
                      textAlign: 'center',
                      border: '1px solid #D1D5DB'
                    }}>
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
                    <td className="px-4 py-3 text-center border border-gray-300">{row.model}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.measurement}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.activeArea}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.flow}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.rejection}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">
                      <button onClick={() => handleProductDownload(row.model)}
                      style={{
                        backgroundColor: '#A8CF45',
                        color: '#3D3E96',
                        borderRadius: '4px',
                        padding: '12px 28px',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        Download
                        <Download size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Commercial RO Membranes */}
        <div className="mt-16">
          <h2 style={{
            color: '#3E4095',
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0px',
            marginBottom: '24px'
          }}>
            Commercial RO Membranes
          </h2>
          <p style={{
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '1%',
            color: '#464646',
            marginBottom: '32px'
          }}>
            Water is essential for life, especially in schools and colleges. Hi-tech's BW range water purifier rejects 95% of dissolved salts, ensuring safe drinking water for offices, industries, hospitals, and malls.
          </p>

          <div className="overflow-x-auto mb-16">
            <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
              <thead style={{ backgroundColor: '#E8E9FA' }}>
                <tr>
                  {['Models', 'Measurement', 'Active Area (FT²M)', 'Permeate Flow GPD (MJD)', 'Salt Rejection (%)', 'Data Sheet'].map((header) => (
                    <th key={header} style={{
                      color: '#3E4095',
                      fontFamily: 'Diodrum Cyrillic, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '100%',
                      padding: '12px 16px',
                      textAlign: 'center',
                      border: '1px solid #D1D5DB'
                    }}>
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
                    <td className="px-4 py-3 text-center border border-gray-300">{row.model}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.measurement}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.activeArea}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.flow}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.rejection}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">
                      <button onClick={() => handleProductDownload(row.model)}
                      style={{
                        backgroundColor: '#A8CF45',
                        color: '#3D3E96',
                        borderRadius: '4px',
                        padding: '12px 28px',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        Download
                        <Download size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sea Water Membranes */}
        <div className="mt-16">
          <h2 style={{
            color: '#3E4095',
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0px',
            marginBottom: '24px'
          }}>
            Sea Water Membranes
          </h2>
          <p style={{
            fontFamily: 'Diodrum Cyrillic, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '1%',
            color: '#464646',
            marginBottom: '32px'
          }}>
            Seawater plays a crucial role in many sectors. This series seawater membrane system efficiently eliminates 95% of dissolved salts, ensuring safe and clean water for businesses, manufacturing plants, hospitals, and retail centers.
          </p>

          <div className="overflow-x-auto mb-16">
            <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
              <thead style={{ backgroundColor: '#E8E9FA' }}>
                <tr>
                  {['Models', 'Measurement', 'Active Area (FT²M)', 'Permeate Flow GPD (MJD)', 'Salt Rejection (%)', 'Data Sheet'].map((header) => (
                    <th key={header} style={{
                      color: '#3E4095',
                      fontFamily: 'Diodrum Cyrillic, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '100%',
                      padding: '12px 16px',
                      textAlign: 'center',
                      border: '1px solid #D1D5DB'
                    }}>
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
                    <td className="px-4 py-3 text-center border border-gray-300">{row.model}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.measurement}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.activeArea}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.flow}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">{row.rejection}</td>
                    <td className="px-4 py-3 text-center border border-gray-300">
                      <button onClick={() => handleProductDownload(row.model)}
                      style={{
                        backgroundColor: '#A8CF45',
                        color: '#3D3E96',
                        borderRadius: '4px',
                        padding: '12px 28px',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        Download
                        <Download size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <GroupCompanies />
    </div>
  );

}
export default productPage;
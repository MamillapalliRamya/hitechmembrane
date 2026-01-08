import { Download, ChevronDown } from 'lucide-react';
import React from 'react';
import GroupCompanies from '../components/home/GroupCompanies';

const ProductPage: React.FC = () => {
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
      <div className="max-w-8xl mx-[90px] pt-10">

        {/* Download Button */}
        <div className="text-center mb-16 pt-14">
          <a
            href="/assets/pdf/sample.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A8CF45] underline text-lg sm:text-xl lg:text-2xl inline-flex items-center gap-2 flex-wrap justify-center"
          >
            Download Hi-Tech RO Brochure
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8 mb-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative h-[230px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-xl shadow-lg group"
            >
              {/* Background */}
              <div className="absolute inset-0">
                {category.video ? (
                  <video
                    src={category.video}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={category.image}
                    className="w-full h-full object-cover"
                    alt={category.alt}
                  />
                )}
              </div>

              {/* Blue overlay */}
              <div
                className="absolute inset-0 bg-[#3E4095] transition-all duration-500 ease-in-out group-hover:w-full w-[140px]"
                style={{ transformOrigin: "left" }}
              />

              {/* Text */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center pl-6">
                <h2 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
                  {category.title}
                </h2>
                <p className="text-white font-semibold text-xl sm:text-2xl lg:text-4xl">
                  {category.subtitle}
                </p>
              </div>

              {/* Hover CTA */}
              <div className="absolute bottom-4 right-4 opacity-0 translate-x-[-40px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden sm:block">
                <div className="flex items-center gap-2 text-[#A8CF45]">
                  <span className="text-xl lg:text-2xl">Click for more</span>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RESIDENTIAL SECTION */}
        <SectionTitle text="Residential RO Membranes" />
        <SectionDescription text="An efficient RO Water Filter system needs a precise membrane to remove salts and impurities. Hi-Tech produces RO membranes for homes and offices that eliminate 95% to 98% of dissolved chemicals. These spiral membranes feature multiple TFC envelopes around a central tube, allowing permeate to flow into the envelope and spiral for collection." />

        <ProductTable
          title="RE Series"
          rows={[
            { model: 'RE 1812-50', measurement: '12 (1.8)', activeArea: '97-98', flow: '50 (75)', rejection: '97-98', layer: '50' },
            { model: 'RE 1812-75', measurement: '12 (1.8)', activeArea: '97-98', flow: '75 (75)', rejection: '97-98', layer: '75' },
            { model: 'TFC 2012-80', measurement: '12 (2)', activeArea: '97-98', flow: '80 (75)', rejection: '97-98', layer: '80' },
            { model: 'RE 2012-100', measurement: '12 (2)', activeArea: '97-98', flow: '100 (75)', rejection: '97-98', layer: '100' },
          ]}
          onDownload={handleProductDownload}
        />

        <ProductTable
          title="ES Series"
          rows={[
            { model: 'ES 1812-75', measurement: '12 (1.8)', activeArea: '97-98', flow: '50 (75)', rejection: '97-98', layer: '50' },
            { model: 'ES 2012-80', measurement: '12 (2)', activeArea: '97-98', flow: '80 (75)', rejection: '97-98', layer: '75' },
            { model: 'ES 2012-100', measurement: '12 (2)', activeArea: '97-98', flow: '100 (75)', rejection: '97-98', layer: '80' },
            { model: 'ES 2012-150', measurement: '12 (2)', activeArea: '97-98', flow: '150 (75)', rejection: '97-98', layer: '100' },
          ]}
          onDownload={handleProductDownload}
        />

        {/* INDUSTRIAL */}
        <SectionTitle text="Industrial RO Membranes" />
        <SectionDescription text="Industries like pharmaceuticals and bioengineering need large quantities of pure water. However, water pollution and cleaning costs are increasing. Hi-Tech provides top-notch industrial RO membranes that efficiently eliminate chemicals. Our BW brackish water membranes are favored for their high recovery rates, low energy use, and durability, rejecting 98-99% of impurities." />

        <ProductTable
          title=""
          rows={[
            { model: 'RE 1812-50', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '50' },
            { model: 'RE 1812-75', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '75' },
            { model: 'TFC 2012-80', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '80' },
            { model: 'RE 2012-100', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '100' },
          ]}
          onDownload={handleProductDownload}
        />

        {/* COMMERCIAL SECTION */}
        <SectionTitle text="Commercial RO Membranes" />
        <SectionDescription text="Water is essential for life, especially in schools and colleges. Hi-Tech's BW range water purifier rejects 95% of dissolved salts, ensuring safe drinking water for offices, industries, hospitals, and malls." />

        <ProductTable
          title=""
          rows={[
            { model: 'RE 1812-50', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '50' },
            { model: 'RE 1812-75', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '75' },
            { model: 'TFC 2012-80', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '80' },
            { model: 'RE 2012-100', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '100' },
          ]}
          onDownload={handleProductDownload}
        />

        {/* SEA WATER SECTION*/}
        <SectionTitle text="Sea Water RO Membranes" />
        <SectionDescription text="Seawater plays a crucial role in many sectors. This series seawater membrane system efficiently eliminates 95% of dissolved salts, ensuring safe and clean water for businesses, manufacturing plants, hospitals, and retail centers." />

        <ProductTable
          title=""
          rows={[
            { model: 'RE 1812-50', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '50' },
            { model: 'RE 1812-70', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '75' },
            { model: 'TFC 2012-80', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '80' },
            { model: 'RE 2012-100', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '100' },
          ]}
          onDownload={handleProductDownload}
        />
      </div>
      <GroupCompanies />
    </div>
  );
};

export default ProductPage;


/* ------------------------------ UTIL COMPONENTS ------------------------------ */

const SectionTitle = ({ text }: { text: string }) => (
  <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#3E4095] mt-14 mb-4">
    {text}
  </h2>
);

const SectionDescription = ({ text }: { text: string }) => (
  <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
    {text}
  </p>
);

/* ------------------------------ PRODUCT TABLE (DYNAMIC HEADERS) ------------------------------ */

const ProductTable = ({ title, rows, onDownload }: any) => {
  const showLayer = title === "RE Series" || title === "ES Series";

  const measurementLabel = showLayer
    ? "Measurement L (ID) inch"
    : "Measurement";

  return (
    <div className="mb-14">
      {title && <h3 className="font-semibold text-2xl sm:text-3xl mb-4">{title}</h3>}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] bg-white shadow-lg border border-gray-300 rounded-lg">
          <thead className="bg-[#E8E9FA]">
            <tr>
              <th className="px-4 py-3 text-center text-[#3E4095] border">Models</th>
              <th className="px-4 py-3 text-center text-[#3E4095] border">{measurementLabel}</th>
              <th className="px-4 py-3 text-center text-[#3E4095] border">Active Area (FT/M)</th>
              <th className="px-4 py-3 text-center text-[#3E4095] border">Permeate Flow GPD (M3D)</th>
              <th className="px-4 py-3 text-center text-[#3E4095] border">Salt Rejection (%)</th>

              {showLayer && (
                <th className="px-4 py-3 text-center text-[#3E4095] border">Layer</th>
              )}

              <th className="px-4 py-3 text-center text-[#3E4095] border">Data Sheet</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row: any, idx: number) => (
              <tr key={idx} className={idx % 2 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 text-center border text-black">{row.model}</td>
                <td className="px-4 py-3 text-center border text-black">{row.measurement}</td>
                <td className="px-4 py-3 text-center border text-black">{row.activeArea}</td>
                <td className="px-4 py-3 text-center border text-black">{row.flow}</td>
                <td className="px-4 py-3 text-center border text-black">{row.rejection}</td>

                {showLayer && (
                  <td className="px-4 py-3 text-center border">{row.layer}</td>
                )}

                <td className="px-4 py-3 text-center border">
                  <button
                    onClick={() => onDownload(row.model)}
                    className="bg-[#A8CF45] text-[#3D3E96] px-4 py-2 rounded-md flex items-center gap-2 mx-auto"
                  >
                    Download <Download className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

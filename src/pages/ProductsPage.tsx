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
      <div className="max-w-8xl mx-[90px] px-4 sm:px-6 pt-10">
        
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

        {/* Product Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8 mb-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative h-[230px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-xl shadow-lg group"
            >
              {/* Image/Video */}
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

              {/* Click for more */}
              <div className="absolute bottom-4 right-4 opacity-0 translate-x-[-40px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden sm:block">
                <div className="flex items-center gap-2 text-[#A8CF45]">
                  <span className="text-xl lg:text-2xl">Click for more</span>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        

        <SectionTitle text="Residential RO Membranes" />

        <SectionDescription text="An efficient RO Water Filter system needs a precise membrane to remove salts..." />

        <ProductTable
          title="RE Series"
          rows={[
            { model: 'RE 1812-50', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '50', layer: '50' },
            { model: 'RE 1812-75', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '75', layer: '75' },
          ]}
          onDownload={handleProductDownload}
        />

        <ProductTable
          title="ES Series"
          rows={[
            { model: 'TFC 2012-80', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '80', layer: '80' },
            { model: 'RE 2012-100', measurement: '97-98', activeArea: '97-98', flow: '2', rejection: '100', layer: '100' },
          ]}
          onDownload={handleProductDownload}
        />

        {/* Industrial Section */}
        <SectionTitle text="Industrial RO Membranes" />
        <SectionDescription text="Industries like pharmaceuticals and bioengineering need large quantities of pure water..." />

        <ProductTable
          title=""
          rows={[
            { model: 'RE 1812-50', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '50' },
            { model: 'RE 1812-75', measurement: '97-98', activeArea: '97-98', flow: '1.8', rejection: '75' },
          ]}
          onDownload={handleProductDownload}
        />

      </div>
    </div>
  );
};

export default ProductPage;

/* -------------------------
   REUSABLE COMPONENTS
-------------------------- */

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

const ProductTable = ({
  title,
  rows,
  onDownload,
}: any) => (
  <div className="mb-14">
    {title && <h3 className="font-semibold text-2xl sm:text-3xl mb-4">{title}</h3>}

    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px] bg-white shadow-lg border border-gray-300 rounded-lg">
        <thead className="bg-[#E8E9FA]">
          <tr>
            {Object.keys(rows[0]).map((c) => (
              <th key={c} className="px-4 py-3 text-center text-[#3E4095] font-medium border">
                {c.toUpperCase()}
              </th>
            ))}
            <th className="px-4 py-3 text-center text-[#3E4095] font-medium border">
              DATA SHEET
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row: any, idx: number) => (
            <tr key={idx} className={idx % 2 ? "bg-white" : "bg-gray-50"}>
              {Object.keys(row).map((col) => (
                <td key={col} className="px-4 py-3 text-center border">
                  {row[col]}
                </td>
              ))}

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

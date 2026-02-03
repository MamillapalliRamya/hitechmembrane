import { Download, ChevronDown } from 'lucide-react';
import React from 'react';
import GroupCompanies from '../components/home/GroupCompanies';

const SlidingImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1200); // <-- speed of sliding (change if you want)
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute w-full h-full object-cover transition-all duration-500 ${
            index === current
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        />
      ))}
    </div>
  );
};


const ProductPage: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: "Residential",
      subtitle: "RO Membranes",
      images: [
      "/assets/images/residential_image1.png",
      "/assets/images/residential_image2.jpg",
      "/assets/images/residential_image3.jpeg",
    ],
      alt: "Water tap with clean water flowing"
    },
    {
      id: 2,
      title: "Industrial",
      subtitle: "RO Membranes",
      images: [
        "/assets/images/industrial_image1.jpg",
        "/assets/images/industrial_image2.jpg",
        "/assets/images/industrial_image3.jpg",
      ],
      alt: "Industrial factory with smokestacks"
    },
    {
      id: 3,
      title: "Commercial",
      subtitle: "RO Membranes",
      images: [
        "/assets/images/commercial_image1.jpg",
        "/assets/images/commercial_image2.jpg",
        "/assets/images/commercial_image3.jpg",
      ],
      alt: "Commercial water filtration equipment"
    },
    {
      id: 4,
      title: "Sea Water",
      subtitle: "RO Membranes",
      images: [
        "/assets/images/Seawater_image1.png",
        "/assets/images/Seawater_image2.jpg",
        "/assets/images/Seawater_image3.png",
      ],
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
      <div className="mx-[20px] lg:mx-[40px] xl:mx-[60px] 2xl:mx-[90px] pt-10">
        <div className="text-center font-semibold mb-10 pt-14 text-[#3D3B8E] text-lg sm:text-xl lg:text-2xl xl:text-[30px] 2xl:text-[40px] mt-10">

          Reverse Osmosis Membrane Elements for Every Water Challenge

        </div>
       
        <div className="text-end mb-3 pt-14">
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
              {/* Background Slider */}
<div className="absolute inset-0">
  <SlidingImages images={category.images} />
</div>


              {/* Blue overlay */}
              <div
                className="absolute inset-0 bg-[#3E4095] transition-all duration-500 ease-in-out group-hover:w-full w-[140px] xl:w-[180px] 2xl:w-[260px]"
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
        <SectionDescription text="Hi-Tech Residential RO membranes are designed to deliver safe, clean drinking water through efficient removal of dissolved salts, heavy metals, and contaminants." />
        <SectionDescription text="Our RE and ES series membranes offer high rejection rates of 97-98%, ensuring optimal performance for household water purification systems." />

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
        <SectionDescription text="Hi-Tech Industrial RO membranes are designed for high-capacity water treatment systems operating under demanding conditions." />
        <SectionDescription text="These membranes are used in industries such as power generation, pharmaceuticals, food & beverage, textiles, and manufacturing—where consistent water quality and operational reliability are critical." />

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
        <SectionDescription text="Hi-Tech Commercial RO membrane elements are engineered for continuous operation in commercial water treatment systems." />
        <SectionDescription text="Suitable for hotels, restaurants, hospitals, office buildings, and packaged RO plants, these membranes provide reliable performance, reduced fouling tendencies, and consistent permeate quality." />

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
        <SectionDescription text="Hi-Tech Seawater RO membranes are specifically engineered to treat high-salinity seawater and brackish sources." />
        <SectionDescription text="Designed for desalination plants, coastal facilities, and offshore applications, these membranes deliver high rejection performance while maintaining operational efficiency under extreme conditions." />

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
        <div>
          <h1 className='text-center font-semibold mb-6 lg:mb-10 lg:text-[30px] xl:text-[35px] 2xl:text-[40px]'>
            Custom specifications and private-label options available <br></br>for OEM partners.</h1>
        </div>
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

import { Download, ChevronDown } from 'lucide-react';
import React from 'react';
import GroupCompanies from '../components/home/GroupCompanies';
import { useTranslateContent } from "../hooks/useTranslateContent";

const SlidingImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1200); 
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
            index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        />
      ))}
    </div>
  );
};

const ProductPage: React.FC = () => {
  /* -------------------------- TRANSLATIONS -------------------------- */
  const { translatedText: tMainTitle } = useTranslateContent(
    "Reverse Osmosis Membrane Elements for Every Water Challenge"
  );
  const { translatedText: tDownloadBrochure } = useTranslateContent(
    "Download Hi-Tech RO Brochure"
  );

  // PRODUCT CATEGORIES
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

  // Translate categories
  const translatedCategories = categories.map(cat => ({
    ...cat,
    title: useTranslateContent(cat.title).translatedText,
    subtitle: useTranslateContent(cat.subtitle).translatedText,
  }));

  // SECTION TITLES AND DESCRIPTIONS
  const { translatedText: tResidentialTitle } = useTranslateContent("Residential RO Membranes");
  const { translatedText: tResidentialDesc1 } = useTranslateContent(
    "Hi-Tech Residential RO membranes are designed to deliver safe, clean drinking water through efficient removal of dissolved salts, heavy metals, and contaminants."
  );
  const { translatedText: tResidentialDesc2 } = useTranslateContent(
    "Our RE and ES series membranes offer high rejection rates of 97-98%, ensuring optimal performance for household water purification systems."
  );

  const { translatedText: tIndustrialTitle } = useTranslateContent("Industrial RO Membranes");
  const { translatedText: tIndustrialDesc1 } = useTranslateContent(
    "Hi-Tech Industrial RO membranes are designed for high-capacity water treatment systems operating under demanding conditions."
  );
  const { translatedText: tIndustrialDesc2 } = useTranslateContent(
    "These membranes are used in industries such as power generation, pharmaceuticals, food & beverage, textiles, and manufacturing—where consistent water quality and operational reliability are critical."
  );

  const { translatedText: tCommercialTitle } = useTranslateContent("Commercial RO Membranes");
  const { translatedText: tCommercialDesc1 } = useTranslateContent(
    "Hi-Tech Commercial RO membrane elements are engineered for continuous operation in commercial water treatment systems."
  );
  const { translatedText: tCommercialDesc2 } = useTranslateContent(
    "Suitable for hotels, restaurants, hospitals, office buildings, and packaged RO plants, these membranes provide reliable performance, reduced fouling tendencies, and consistent permeate quality."
  );

  const { translatedText: tSeaWaterTitle } = useTranslateContent("Sea Water RO Membranes");
  const { translatedText: tSeaWaterDesc1 } = useTranslateContent(
    "Hi-Tech Seawater RO membranes are specifically engineered to treat high-salinity seawater and brackish sources."
  );
  const { translatedText: tSeaWaterDesc2 } = useTranslateContent(
    "Designed for desalination plants, coastal facilities, and offshore applications, these membranes deliver high rejection performance while maintaining operational efficiency under extreme conditions."
  );

  const { translatedText: tCustomNote } = useTranslateContent(
    "Custom specifications and private-label options available \nfor OEM partners."
  );

  const { translatedText: tDownloadBtn } = useTranslateContent("Download");
  const { translatedText: tModels } = useTranslateContent("Models");
  const { translatedText: tMeasurement } = useTranslateContent("Measurement L (ID) inch");
  const { translatedText: tActiveArea } = useTranslateContent("Active Area (FT/M)");
  const { translatedText: tFlow } = useTranslateContent("Permeate Flow GPD (M3D)");
  const { translatedText: tRejection } = useTranslateContent("Salt Rejection (%)");
  const { translatedText: tLayer } = useTranslateContent("Layer");
  const { translatedText: tDataSheet } = useTranslateContent("Data Sheet");

  /* -------------------------- DOWNLOAD FUNCTION -------------------------- */
  const handleProductDownload = (productModel: string) => {
    const link = document.createElement('a');
    link.href = '/assets/pdf/sample.pdf';
    link.download = `${productModel}-DataSheet.pdf`;
    link.click();
  };

  /* -------------------------- PRODUCT TABLE ROWS -------------------------- */
  const residentialRows = [
    { model: 'RE 1812-50', measurement: '12 (1.8)', activeArea: '97-98', flow: '50 (75)', rejection: '97-98', layer: '50' },
    { model: 'RE 1812-75', measurement: '12 (1.8)', activeArea: '97-98', flow: '75 (75)', rejection: '97-98', layer: '75' },
    { model: 'TFC 2012-80', measurement: '12 (2)', activeArea: '97-98', flow: '80 (75)', rejection: '97-98', layer: '80' },
    { model: 'RE 2012-100', measurement: '12 (2)', activeArea: '97-98', flow: '100 (75)', rejection: '97-98', layer: '100' },
  ];

  const residentialESRows = [
    { model: 'ES 1812-75', measurement: '12 (1.8)', activeArea: '97-98', flow: '50 (75)', rejection: '97-98', layer: '50' },
    { model: 'ES 2012-80', measurement: '12 (2)', activeArea: '97-98', flow: '80 (75)', rejection: '97-98', layer: '75' },
    { model: 'ES 2012-100', measurement: '12 (2)', activeArea: '97-98', flow: '100 (75)', rejection: '97-98', layer: '80' },
    { model: 'ES 2012-150', measurement: '12 (2)', activeArea: '97-98', flow: '150 (75)', rejection: '97-98', layer: '100' },
  ];

  const industrialRows = [
    { model: 'RE 1812-50', measurement: '1.8', activeArea: '97-98', flow: '50', rejection: '97-98' },
    { model: 'RE 1812-75', measurement: '1.8', activeArea: '97-98', flow: '75', rejection: '97-98' },
    { model: 'TFC 2012-80', measurement: '2', activeArea: '97-98', flow: '80', rejection: '97-98' },
    { model: 'RE 2012-100', measurement: '2', activeArea: '97-98', flow: '100', rejection: '97-98' },
  ];

  const commercialRows = industrialRows;
  const seaWaterRows = industrialRows;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-[20px] lg:mx-[40px] xl:mx-[60px] 2xl:mx-[90px] pt-10">

        {/* Main Title */}
        <div className="text-center font-semibold mb-10 pt-14 text-[#3D3B8E] text-lg sm:text-xl lg:text-2xl xl:text-[30px] 2xl:text-[40px] mt-10">
          {tMainTitle}
        </div>

        {/* Download Brochure */}
        <div className="text-end mb-3 pt-14">
          <a
            href="/assets/pdf/sample.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A8CF45] underline text-lg sm:text-xl lg:text-2xl inline-flex items-center gap-2 flex-wrap justify-center"
          >
            {tDownloadBrochure}
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8 mb-10">
          {translatedCategories.map((category) => (
            <div
              key={category.id}
              className="relative h-[230px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-xl shadow-lg group"
            >
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

        {/* ---------------- SECTIONS ---------------- */}
        <SectionTitle text={tResidentialTitle} />
        <SectionDescription text={tResidentialDesc1} />
        <SectionDescription text={tResidentialDesc2} />
        <ProductTable title="RE Series" rows={residentialRows} onDownload={handleProductDownload} />
        <ProductTable title="ES Series" rows={residentialESRows} onDownload={handleProductDownload} />

        <SectionTitle text={tIndustrialTitle} />
        <SectionDescription text={tIndustrialDesc1} />
        <SectionDescription text={tIndustrialDesc2} />
        <ProductTable title="" rows={industrialRows} onDownload={handleProductDownload} />

        <SectionTitle text={tCommercialTitle} />
        <SectionDescription text={tCommercialDesc1} />
        <SectionDescription text={tCommercialDesc2} />
        <ProductTable title="" rows={commercialRows} onDownload={handleProductDownload} />

        <SectionTitle text={tSeaWaterTitle} />
        <SectionDescription text={tSeaWaterDesc1} />
        <SectionDescription text={tSeaWaterDesc2} />
        <ProductTable title="" rows={seaWaterRows} onDownload={handleProductDownload} />

        {/* Custom Note */}
        <div>
          <h1 className='text-center font-semibold mb-6 lg:mb-10 lg:text-[30px] xl:text-[35px] 2xl:text-[40px]'>
            {tCustomNote.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </h1>
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

/* ------------------------------ PRODUCT TABLE ------------------------------ */
const ProductTable = ({ title, rows, onDownload }: any) => {
  const showLayer = title === "RE Series" || title === "ES Series";

  const { translatedText: tModels } = useTranslateContent("Models");
  const { translatedText: tMeasurement } = useTranslateContent(showLayer ? "Measurement L (ID) inch" : "Measurement");
  const { translatedText: tActiveArea } = useTranslateContent("Active Area (FT/M)");
  const { translatedText: tFlow } = useTranslateContent("Permeate Flow GPD (M3D)");
  const { translatedText: tRejection } = useTranslateContent("Salt Rejection (%)");
  const { translatedText: tLayer } = useTranslateContent("Layer");
  const { translatedText: tDataSheet } = useTranslateContent("Data Sheet");
  const { translatedText: tDownloadBtn } = useTranslateContent("Download");

  return (
    <div className="mb-14">
      {title && <h3 className="font-semibold text-2xl sm:text-3xl mb-4">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] bg-white shadow-lg border border-gray-300 rounded-lg">
          <thead className="bg-[#E8E9FA]">
            <tr>
              <th className="px-10 py-3 text-center border">{tModels}</th>
              <th className="px-4 py-3 text-center border">{tMeasurement}</th>
              <th className="px-4 py-3 text-center border">{tActiveArea}</th>
              <th className="px-4 py-3 text-center border">{tFlow}</th>
              <th className="px-4 py-3 text-center border">{tRejection}</th>
              {showLayer && <th className="px-4 py-3 text-center border">{tLayer}</th>}
              <th className="px-4 py-3 text-center border">{tDataSheet}</th>
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
                {showLayer && <td className="px-4 py-3 text-center border">{row.layer}</td>}
                <td className="px-4 py-3 text-center border">
                  <button
                    onClick={() => onDownload(row.model)}
                    className="bg-[#A8CF45] text-[#3D3E96] px-4 py-2 rounded-md flex items-center gap-2 mx-auto"
                  >
                    {tDownloadBtn} <Download className="w-4 h-4" />
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

import { Download, ChevronDown } from 'lucide-react';
import React from 'react';
import GroupCompanies from '../components/home/GroupCompanies';
import { useTranslateContent } from "../hooks/useTranslateContent";
const BACKEND_URL = "http://65.0.77.32:8000";


type CMSResponse = any;

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
  const [cmsData, setCmsData] = React.useState<CMSResponse | null>(null);

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

  /* -------------------------- FETCH CMS DATA -------------------------- */
  React.useEffect(() => {
    fetch("http://65.0.77.32:8000/api/product-page/")
      .then(res => res.json())
      .then(data => {
        console.log("CMS Data:", data);
        setCmsData(data);
      })
      .catch(err => {
        console.error("CMS fetch failed", err);
        setCmsData(null);
      });
  }, []);

  // Get category data with proper fallbacks
  const getCategory = (index: number) => {
    const fallbacks = [
      {
        title: "Residential",
        subtitle: "RO Membranes",
        images: ["/assets/images/residential_image1.png", "/assets/images/residential_image2.jpg", "/assets/images/residential_image3.jpeg"],
      },
      {
        title: "Industrial",
        subtitle: "RO Membranes",
        images: ["/assets/images/industrial_image1.jpg", "/assets/images/industrial_image2.jpg", "/assets/images/industrial_image3.jpg"],
      },
      {
        title: "Commercial",
        subtitle: "RO Membranes",
        images: ["/assets/images/commercial_image1.jpg", "/assets/images/commercial_image2.jpg", "/assets/images/commercial_image3.jpg"],
      },
      {
        title: "Sea Water",
        subtitle: "RO Membranes",
        images: ["/assets/images/Seawater_image1.png", "/assets/images/Seawater_image2.jpg", "/assets/images/Seawater_image3.png"],
      }
    ];

    const cmsCategories = cmsData?.categories || [];
    const cmsCat = cmsCategories[index];
    const fallback = fallbacks[index];

    // Get images for this category
    const categoryImages = cmsData?.category_images?.filter((img: any) => img.category_id === cmsCat?.id) || [];
    const images = categoryImages.length > 0
  ? categoryImages.map((img: any) =>
      img.image.startsWith("http")
        ? img.image
        : `${BACKEND_URL}${img.image}`
    )
  : fallback.images;


    return {
      title: cmsCat?.title || fallback.title,
      subtitle: fallback.subtitle,
      images: images,
    };
  };

  // Get section data with proper fallbacks
  const getSection = (index: number) => {
    const fallbacks = [
      {
        title: "Residential RO Membranes",
        desc1: "Hi-Tech Residential RO membranes are designed to deliver safe, clean drinking water through efficient removal of dissolved salts, heavy metals, and contaminants.",
        desc2: "Our RE and ES series membranes offer high rejection rates of 97-98%, ensuring optimal performance for household water purification systems.",
      },
      {
        title: "Industrial RO Membranes",
        desc1: "Hi-Tech Industrial RO membranes are designed for high-capacity water treatment systems operating under demanding conditions.",
        desc2: "These membranes are used in industries such as power generation, pharmaceuticals, food & beverage, textiles, and manufacturing—where consistent water quality and operational reliability are critical.",
      },
      {
        title: "Commercial RO Membranes",
        desc1: "Hi-Tech Commercial RO membrane elements are engineered for continuous operation in commercial water treatment systems.",
        desc2: "Suitable for hotels, restaurants, hospitals, office buildings, and packaged RO plants, these membranes provide reliable performance, reduced fouling tendencies, and consistent permeate quality.",
      },
      {
        title: "Sea Water RO Membranes",
        desc1: "Hi-Tech Seawater RO membranes are specifically engineered to treat high-salinity seawater and brackish sources.",
        desc2: "Designed for desalination plants, coastal facilities, and offshore applications, these membranes deliver high rejection performance while maintaining operational efficiency under extreme conditions.",
      },
    ];

    const cmsSections = cmsData?.category_sections || [];
    const cmsSection = cmsSections[index];
    const fallback = fallbacks[index];

    return {
      title: cmsSection?.title || fallback.title,
      desc1: cmsSection?.desc_1 || fallback.desc1,
      desc2: cmsSection?.desc_2 || fallback.desc2,
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-[20px] lg:mx-[40px] xl:mx-[60px] 2xl:mx-[90px] pt-10">

        {/* Main Title */}
        <MainTitle text={cmsData?.product_page?.product_main_title || "Reverse Osmosis Membrane Elements for Every Water Challenge"} />

        {/* Download Brochure */}
        <DownloadBrochure text={cmsData?.product_page?.download_brochure_text || "Download Hi-Tech RO Brochure"} />

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8 mb-10">
          {[0, 1, 2, 3].map((index) => {
            const cat = getCategory(index);
            return (
              <div
                key={index}
                className="relative h-[230px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-xl shadow-lg group"
              >
                <div className="absolute inset-0">
                  <SlidingImages images={cat.images} />
                </div>

                <div
                  className="absolute inset-0 bg-[#3E4095] transition-all duration-500 ease-in-out group-hover:w-full w-[140px] xl:w-[180px] 2xl:w-[260px]"
                  style={{ transformOrigin: "left" }}
                />

                <div className="absolute inset-0 z-20 flex flex-col justify-center pl-6">
                  <CategoryText title={cat.title} subtitle={cat.subtitle} />
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 translate-x-[-40px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden sm:block">
                  <div className="flex items-center gap-2 text-[#A8CF45]">
                    <span className="text-xl lg:text-2xl">Click for more</span>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Residential */}
        <SectionContent 
          title={getSection(0).title}
          desc1={getSection(0).desc1}
          desc2={getSection(0).desc2}
        />
        <ProductTable title="RE Series" rows={residentialRows} onDownload={handleProductDownload} />
        <ProductTable title="ES Series" rows={residentialESRows} onDownload={handleProductDownload} />

        {/* Industrial */}
        <SectionContent 
          title={getSection(1).title}
          desc1={getSection(1).desc1}
          desc2={getSection(1).desc2}
        />
        <ProductTable title="" rows={industrialRows} onDownload={handleProductDownload} />

        {/* Commercial */}
        <SectionContent 
          title={getSection(2).title}
          desc1={getSection(2).desc1}
          desc2={getSection(2).desc2}
        />
        <ProductTable title="" rows={commercialRows} onDownload={handleProductDownload} />

        {/* Sea Water */}
        <SectionContent 
          title={getSection(3).title}
          desc1={getSection(3).desc1}
          desc2={getSection(3).desc2}
        />
        <ProductTable title="" rows={seaWaterRows} onDownload={handleProductDownload} />

        {/* Custom Note */}
        <CustomNote text={cmsData?.product_page?.custom_note || "Custom specifications and private-label options available \nfor OEM partners."} />
      </div>

      <GroupCompanies cta={cmsData?.cta} />

    </div>
  );
};

export default ProductPage;

/* ------------------------------ UTIL COMPONENTS ------------------------------ */

const MainTitle = ({ text }: { text: string }) => {
  const { translatedText } = useTranslateContent(text);
  return (
    <div className="text-center font-semibold mb-10 pt-14 text-[#3D3B8E] text-lg sm:text-xl lg:text-2xl xl:text-[30px] 2xl:text-[40px] mt-10">
      {translatedText}
    </div>
  );
};

const DownloadBrochure = ({ text }: { text: string }) => {
  const { translatedText } = useTranslateContent(text);
  return (
    <div className="text-end mb-3 pt-14">
      <a
        href="/assets/pdf/sample.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#A8CF45] underline text-lg sm:text-xl lg:text-2xl inline-flex items-center gap-2 flex-wrap justify-center"
      >
        {translatedText}
        <Download className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
};

const SectionContent = ({ title, desc1, desc2 }: { title: string; desc1: string; desc2: string }) => {
  const { translatedText: translatedTitle } = useTranslateContent(title);
  const { translatedText: translatedDesc1 } = useTranslateContent(desc1);
  const { translatedText: translatedDesc2 } = useTranslateContent(desc2);

  return (
    <>
      <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#3E4095] mt-14 mb-4">
        {translatedTitle}
      </h2>
      <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
        {translatedDesc1}
      </p>
      <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
        {translatedDesc2}
      </p>
    </>
  );
};

const CategoryText = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const { translatedText: tTitle } = useTranslateContent(title);
  const { translatedText: tSubtitle } = useTranslateContent(subtitle);

  return (
    <>
      <h2 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
        {tTitle}
      </h2>
      <p className="text-white font-semibold text-xl sm:text-2xl lg:text-4xl">
        {tSubtitle}
      </p>
    </>
  );
};

const CustomNote = ({ text }: { text: string }) => {
  const { translatedText } = useTranslateContent(text);
  return (
    <div>
      <h1 className='text-center font-semibold mb-6 lg:mb-10 lg:text-[30px] xl:text-[35px] 2xl:text-[40px]'>
        {translatedText.split("\n").map((line: string, idx: number) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </h1>
    </div>
  );
};

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
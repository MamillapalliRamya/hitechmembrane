import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslateContent } from "../../hooks/useTranslateContent";

const BASE_URL = "http://65.0.77.32:8000";

interface AboutCMSData {
  about_title: string;
  about_para_1: string;
  about_para_2: string;
  about_button_text: string;
}

interface AboutImage {
  id: number;
  image: string | null;
  alt: string;
}

interface Props {
  cmsData?: any;
  about_us_images?: string[]; // raw CMS image paths
}

const AboutUsSection: React.FC<Props> = ({ cmsData: propCmsData, about_us_images }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  // CMS State
  const [cmsData, setCmsData] = useState<AboutCMSData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback content
  const fallbackData: AboutCMSData = {
    about_title: "About Us",
    about_para_1: `Hi-Tech Membranes is a trusted RO membrane element manufacturer with over 30+ years of experience in reverse osmosis technology. We supply high-quality membranes designed for industrial, commercial, and municipal applications worldwide.`,
    about_para_2: `Our RO membranes are built for stable performance, efficient operation, and long-term reliability, helping customers achieve clean water production while optimizing operating costs.`,
    about_button_text: "Learn More About Us",
  };

  // Fallback images
  const fallbackImages: AboutImage[] = [
    { id: 1, image: "/assets/images/Aboutus2.png", alt: "Laboratory equipment" },
    { id: 2, image: "/assets/images/Aboutus1.png", alt: "Water filtration system" },
  ];

  // Static translatable text
  const aboutexp1 = "Years of";
  const aboutexp2 = "Experience";
  const aboutcl1 = "Clients";
  const aboutcl2 = "Worldwide";

  // Normalize CMS images
  const normalizedCmsImages: AboutImage[] =
    about_us_images?.map((img, index) => ({
      id: index + 1,
      image: img,
      alt: `About Image ${index + 1}`,
    })) || [];

  // Fetch CMS Data (only if not provided via props)
  useEffect(() => {
    if (propCmsData) {
      const homepage = propCmsData.homepage || {};
      setCmsData({
        about_title: homepage.about_title || fallbackData.about_title,
        about_para_1: homepage.about_para_1 || fallbackData.about_para_1,
        about_para_2: homepage.about_para_2 || fallbackData.about_para_2,
        about_button_text: homepage.about_button_text || fallbackData.about_button_text,
      });
      setLoading(false);
    } else {
      const fetchCMSData = async () => {
        try {
          const response = await fetch(`${BASE_URL}/api/homepage/`);
          if (!response.ok) throw new Error('Failed to fetch CMS data');
          const data = await response.json();
          const homepage = data.homepage || {};
          setCmsData({
            about_title: homepage.about_title || fallbackData.about_title,
            about_para_1: homepage.about_para_1 || fallbackData.about_para_1,
            about_para_2: homepage.about_para_2 || fallbackData.about_para_2,
            about_button_text: homepage.about_button_text || fallbackData.about_button_text,
          });
        } catch (error) {
          console.error('Error fetching About CMS data:', error);
          setCmsData(fallbackData);
        } finally {
          setLoading(false);
        }
      };
      fetchCMSData();
    }
  }, [propCmsData]);

  // ======= FINAL IMAGES (CMS OR FALLBACK) =======
  let finalImages: AboutImage[] = [];
  if (normalizedCmsImages.length >= 2) finalImages = normalizedCmsImages.slice(0, 2);
  else if (normalizedCmsImages.length === 1) finalImages = [normalizedCmsImages[0], fallbackImages[1]];
  else finalImages = fallbackImages;

  const [image1, image2] = finalImages;

  // ======= IMAGE URL HANDLER =======
  const getImageUrl = (img: string | null) => {
    if (!img || img.trim() === "") return fallbackImages[0].image!;
    if (img.startsWith("http://") || img.startsWith("https://")) return img;
    if (img.startsWith("/media/")) return `${BASE_URL}${img}`;
    if (img.startsWith("/")) return img;
    return `${BASE_URL}${img}`;
  };
  // =================================

  // Use CMS data or fallback
  const aboutTitle = cmsData?.about_title || fallbackData.about_title;
  const aboutPara1 = cmsData?.about_para_1 || fallbackData.about_para_1;
  const aboutPara2 = cmsData?.about_para_2 || fallbackData.about_para_2;
  const aboutButton = cmsData?.about_button_text || fallbackData.about_button_text;

  // Translation hooks
  const { translatedText: tTitle } = useTranslateContent(aboutTitle);
  const { translatedText: tPara1 } = useTranslateContent(aboutPara1);
  const { translatedText: tPara2 } = useTranslateContent(aboutPara2);
  const { translatedText: tButton } = useTranslateContent(aboutButton);
  const { translatedText: texp1 } = useTranslateContent(aboutexp1);
  const { translatedText: texp2 } = useTranslateContent(aboutexp2);
  const { translatedText: tCl1 } = useTranslateContent(aboutcl1);
  const { translatedText: tCl2 } = useTranslateContent(aboutcl2);
  const { translatedText: tImage1Alt } = useTranslateContent(image1.alt);
  const { translatedText: tImage2Alt } = useTranslateContent(image2.alt);

  return (
    <section ref={sectionRef} className="pt-[88px] lg:pb-[184px] relative overflow-hidden">
      <div className="relative z-10 sm:ml-[40px] xl:mx-[80px] 2xl:ml-[112px] pr-3">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 xl:gap-16 2xl:gap-[128px]">
          
          {/* LEFT SIDE IMAGES + STATS */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 lg:gap-9"
          >
            {/* FIRST COLUMN */}
            <div className="flex flex-col gap-6 items-center mt-8 lg:mt-12">
              <div className="relative">
                <img
                  src={getImageUrl(image1.image)}
                  alt={tImage1Alt}
                  className="object-cover rounded-lg shadow-lg w-[220px] sm:w-[260px] xl:w-[300px] 2xl:w-[360px] 3xl:w-[385px] h-auto"
                />
              </div>
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="bg-white flex justify-center p-4 shadow-[1px_2px_16px_6px_#e0e0e0] text-start rounded-lg w-[160px] sm:w-[180px] xl:w-[216px] 3xl:w-[240px] h-[177px]"
                style={{ fontFamily: "Diodrum Cyrillic, sans-serif", flexDirection: "column" }}
              >
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">{tCl1}</div>
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">{tCl2}</div>
                <div className="text-[#A8CF45] text-[40px] sm:text-[50px] lg:text-[60px]">200+</div>
              </motion.div>
            </div>

            {/* SECOND COLUMN */}
            <div className="flex flex-col gap-6 items-center">
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                className="bg-white p-5 shadow-[1px_2px_16px_6px_#e0e0e0] h-[178px] text-start rounded-lg w-[150px] sm:w-[160px] xl:w-[169px] 3xl:w-[200px]"
                style={{ fontFamily: "Diodrum Cyrillic, sans-serif" }}
              >
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">{texp1}</div>
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#3E4095]">{texp2}</div>
                <div className="text-[#A8CF45] text-[38px] sm:text-[50px] lg:text-[60px]">30+</div>
              </motion.div>

              <div className="relative">
                <img
                  src={getImageUrl(image2.image)}
                  alt={tImage2Alt}
                  className="object-cover rounded-lg shadow-lg w-[220px] sm:w-[260px] xl:w-[300px] 2xl:w-[360px] 3xl:w-[385px] h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex-1 space-y-6 text-center lg:text-left flex flex-col justify-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl 2xl:text-[58px] 3xl:text-[64px] text-[#10111A] leading-tight">{tTitle}</h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg 2xl:text-[20px] 3xl:text-[20px] leading-relaxed max-w-2xl lg:mx-0 whitespace-normal break-words">{tPara1}</p>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg 2xl:text-[20px] 3xl:text-[20px] leading-relaxed max-w-2xl lg:mx-0 whitespace-normal break-words">{tPara2}</p>
            <button className="bg-[#A8CF45] text-[#3E4095] rounded-lg font-medium text-sm sm:text-base lg:text-lg 2xl:text-[20px] 3xl:text-[22px] shadow-lg cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#98C135] h-[45px] sm:h-[53px] w-[225px] 2xl:w-[240px] 3xl:w-[255px] mx-auto lg:mx-0">{tButton}</button>
          </motion.div>

        </div>
      </div>

      {/* ISOMETRIC IMAGE */}
      <motion.img
        src="/assets/images/isometrics/isometric_1.svg"
        alt="decor"
        initial={{ opacity: 0, x: -380, y: -380, scale: 0.92 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0, scale: [1, 1.03, 0.99, 1] } : {}}
        transition={{ duration: 1.6, delay: 0.8, scale: { duration: 1.0, delay: 1.0, ease: [0.22, 1, 0.36, 1] } }}
        className="hidden lg:block absolute opacity-90 w-[300px] sm:w-[450px] md:w-[600px] xl:w-[700px] 2xl:w-[780px] 3xl:w-[812px] lg:left-[-105px] xl:top-[-28px] lg:top-[23px] 3xl:left-[-47px] 3xl:top-[-30px]"
      />
    </section>
  );
};

export default AboutUsSection;

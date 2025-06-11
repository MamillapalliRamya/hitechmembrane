import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "framer-motion";
import { HomeSlideData } from "./HomeSlideData";

function HomeSlideComp() {
  const [index, setIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const backgroundImage = HomeSlideData[index].img;

  function indexUpdate(idx) {
    setIndex(idx);
  }

  const { t } = useTranslation();

  return (
    <div className="">
      <div
        className="h-[80vh] bg-center bg-no-repeat bg-auto transition-all duration-900 ease-in-out rounded-lg"
        style={{ backgroundImage: `url(${backgroundImage}) ` }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 h-full">
          {HomeSlideData.map((item, idx) => (
            <div
              key={idx}
              className="border lg:border-r h-full flex flex-col justify-end relative overflow-hidden"
              onMouseEnter={() => {
                indexUpdate(idx);
                setHoveredIndex(idx);
              }}
              onMouseLeave={() => {
                setHoveredIndex(0);
                setIndex(0);
              }}
            >
              <p
                className={`text-white md:tracking-wider text-3xl font-semibold bg-gradient-to-t from-[#f87005]/50 to-white/0 lg:text-5xl md:font-bold px-2 p-2 md:p-2 md:px-8 ${
                  hoveredIndex === idx ? "hidden" : "flex md:p-8 "
                }`}
              >
                {t(`${item.title}`)}
              </p>

              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                  y: hoveredIndex === idx ? "0%" : "100%",
                  opacity: hoveredIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute left-0 right-0 h-full flex flex-col justify-end"
              >
                <div className="flex flex-col gap-1 lg:gap-4 px-2 lg:px-12 justify-end h-full text-white bg-gradient-to-t from-black to-black/0 md:p-8">
                  <p className="bg-gradient-to-r from-[#f87005] to-[#ead799] bg-clip-text text-transparent tracking-wide text-2xl font-semibold md:text-3xl md:font-bold">
                    {t(`${item.title}`)}
                  </p>
                  <p className="lg:font-semibold">{t(`${item.content}`)}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSlideComp;
import { ClientData } from "./ClientData";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";

function ClientPage() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-black main_head"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      {ClientData.map((item) => {
        return (
          <motion.div
            key={item.id}
            className={`flex flex-col gap-6 md:flex-row md:items-center md:justify-center shadow-md md:gap-24 w-full ${
              item.id % 2 === 0
                ? "md:flex-row-reverse bg-[#141414]"
                : "md:flex-row"
            } `}
            variants={cardVariants}
          >
            <div className="text-center md:text-left flex flex-col gap-4 p-6 md:w-2/6 justify-center">
              <h5 className="font-semibold text-[#f87005]">
                {t(`${item.label}`)}
              </h5>
              <h1 className=" text-3xl font-semibold bg-gradient-to-r from-[#f87005] to-[#ecbe28] bg-clip-text text-transparent">
                {t(`${item.title}`)}
              </h1>
            </div>

            <div className="md:w-2/6 md:h-2/6 lg:w-2/6 lg:h-2/6 p-12 md:p-8 rounded-xl">
              <div className="overflow-hidden rounded-xl">
                <motion.img
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  src={item.img}
                  className="h-3/6 object-cover md:p-0 rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default ClientPage;
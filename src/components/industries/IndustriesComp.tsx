import { useEffect, useState } from "react";
import { IndustriesData, IndustriesIdData } from "./IndustriesData";
import { useTranslation } from "react-i18next";

function IndustriesComp() {
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(IndustriesData[0]);
  const { t } = useTranslation();

  useEffect(() => {
    setSelectedIndex(IndustriesData[index]);
  }, [index]);

  const handleClick = (clickedIndex: number) => {
    setIndex(clickedIndex);
  };

  const backgroundColor = IndustriesIdData[index].color;

  return (
    <div
      className="bg-[#FFf] flex flex-col justify-center items-center gap-12 p-8 min-h-screen max-w-screen overflow-hidden"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-3xl  text-bold bg-gradient-to-r from-[#1a2bff] to-[#89cff0] bg-clip-text text-transparent tracking-wide font-medium self-start">
          {t("Industries")}
        </h1>

        <div className="flex xl:justify-center  text-md max-w-full overflow-x-auto whitespace-nowrap hide-scrollbar">
          {IndustriesIdData.map((item, idx) => (
            <div
              key={item.id}
              className="flex items-start text-xl text-bold h-12 "
            >
              <p
                onClick={() => handleClick(idx)}
                className={`cursor-pointer px-3 py-1 text-center relative ${
                  index === idx
                    ? "font-bold border-b-2 border-[#1a2bff] text-[#1a2bff] after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-14px] after:w-0 after:h-0 after:border-l-8 after:border-r-8 after:border-t-8 after:border-transparent after:border-t-[#89cff0]"
                    : "border-b-2  text-slate-500"
                }`}
              >
                {t(`${item.name}`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        {selectedIndex.map((item, idx) => (
          <div
            key={idx}
            className="min-w-full flex flex-col lg:flex-row lg:items-start gap-14 lg:px-20 md:px-8"
          >
            <div className="flex justify-center items-center w-full lg:w-3/6">
              <img
                src={item.img}
                alt=""
                className="md:h-80 max-h-46 rounded-[10px]"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 lg:w-3/6 ">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-medium tracking-wide bg-gradient-to-r from-[#1a2bff] text-[#1a2bff] bg-clip-text text-transparent">
                  {t(`${item.title}`)}
                </p>
                {/* <h1 className="text-2xl font-medium tracking-wider text-slate-500">
                  {t(`${item.headLine}`)}
                </h1> */}
              </div>

              {item.content.map((contentItem, contentIdx) => (
                <div key={contentIdx} className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-4 text-sm tracking-wide text-black font-semibold">
                    <li className="">
                      <span className="px-2 font-bold text-[#1a2bff]text-2xl rounded-full">
                        &#10003;
                      </span>{" "}
                      {t(`${contentItem.list1}`)}
                    </li>
                    <li className="">
                      <span className="px-2 font-bold text-[#1a2bff] text-xl rounded-full">
                        &#10003;
                      </span>{" "}
                      {t(`${contentItem.list2}`)}
                    </li>
                    {/* <li className="">
                      <span className="px-2 font-bold text-[#1a2bff] text-xl rounded-full">
                        &#10003;
                      </span>{" "}
                      {t(`${contentItem.list3}`)}
                    </li> */}
                  </ul>
                  {/* <p className="text-[#89cff0] font-bold ">View More</p> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustriesComp;

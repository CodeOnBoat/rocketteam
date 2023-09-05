import React from "react";
import { useTranslation } from "react-i18next";
import { rocketWay } from "../assets/content/rocketWay";
import Logo from "../assets/images/header/rocketTeamLogo.png";
import { motion } from "framer-motion";
import { Meteorites3D } from "../components/Meteorites3D";

export const RocketWay = ({ rocketWayRef }) => {
  const { t } = useTranslation();

  return (
    <div className="z-10 px-2 md:px-10">
      <div className="h-2 z-10" ref={rocketWayRef}></div>
      <h2 className="md:text-left">{t("rocketWayTitle")}</h2>

      {/* <div className="flex w-full justify-center sm:justify-start items-center gap-2 z-10">
          <div className="absolute">
            <div className="orbit relative rounded">
              <img src={Logo} className="w-10 absolute right-0 rocket" />
            </div>
          </div>
        </div> */}
      <p>{t("rocketWaySubtitle")}</p>
      <div className="my-8 flex relative">
        <motion.ul className="md:w-1/2">
          {rocketWay.map((way, index) => (
            <motion.div
              viewport={{ once: true }}
              className="rocket-way z-20 flex gap-5 mb-4 items-center bg-gradientRocketWay rounded-full p-2 py-3 colorRotate  backdrop-blur-3xl"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="border border-white bg-white bg-opacity-50 p-3 rounded-full flex justify-center items-center h-10 w-10 ">
                <label
                  className="opacity-70"
                  style={{ fontFamily: "SequelSansHeavyHead" }}
                >
                  {index + 1}
                </label>
              </div>
              <label
                className="text-left text-sm md:text-xl"
                style={{ fontFamily: "SequelSansMediumHead" }}
              >
                {t(way)}
              </label>
            </motion.div>
          ))}
        </motion.ul>
        <Meteorites3D />
      </div>
    </div>
  );
};

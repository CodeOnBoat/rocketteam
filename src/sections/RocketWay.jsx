import React from "react";
import { useTranslation } from "react-i18next";
import { rocketWay } from "../assets/content/rocketWay";
import Logo from "../assets/images/rocket.png";
import { motion } from "framer-motion";

export const RocketWay = ({ rocketWayRef }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="h-2" ref={rocketWayRef}></div>

      <h2 className="text-center">
        <div className="flex w-full justify-center sm:justify-start items-center gap-2">
          {t("rocketWayTitle")}

          <div className="absolute">
            <div className="orbit relative rounded">
              <img src={Logo} className="w-10 absolute right-0 rocket" />
            </div>
          </div>
        </div>
      </h2>
      <p>{t("rocketWaySubtitle")}</p>
      <div className="my-8">
        <motion.ul>
          {rocketWay.map((way, index) => (
            <motion.div
              viewport={{ once: true }}
              className="shadow-sm shadow-white flex gap-5 mb-4 items-center bg-gradientRocketWay rounded-full p-2 py-3 colorRotate z-10 backdrop-blur-3xl"
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
                className="text-left"
                style={{ fontFamily: "SequelSansMediumHead" }}
              >
                {t(way)}
              </label>
            </motion.div>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

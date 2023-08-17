import React from "react";
import { useTranslation } from "react-i18next";
import { services } from "../assets/content/services";
import BGimage from "../assets/images/services/BGimage.webp";
import { motion } from "framer-motion";
import TickOutline from "../assets/images/services/tickOutline.png";
import Tick from "../assets/images/services/tick.png";

export const Services = ({ servicesRef }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden" ref={servicesRef}>
      <div className="h-14 sm:h-0"></div>
      <img
        src={BGimage}
        className="-z-10 absolute min-w-screen left-0 h-x sm:object-fill  lg:h-4/5 sm:w-full wave"
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2>{t("servicesTitle")}</h2>
        <p>{t("servicesSubtitle")}</p>
      </motion.div>
      <div className="flex flex-col  lg:flex-row gap-5 lg:gap-10  justify-center md:items-center w-full">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            key={index}
            viewport={{ once: true }}
            className=" bg-white rounded-lg shadow-md m-2 md:w-4/5 lg:w-full z-10 "
          >
            <div className="flex items-center justify-between m-2">
              <label
                className="text-2xl ml-3"
                style={{ fontFamily: "SequelSansHeavyHead" }}
              >
                {t(service.text)}
              </label>
              <img
                className="w-14 m-2 drop-shadow-2xl"
                src={service.image}
                alt={service.alt}
              />
            </div>
            <div className="p-3">
              {service.features.map((feature, index) => (
                <div className="flex gap-4 mb-5">
                  <img src={Tick} alt="" className="w-5 h-5 ml-3" />
                  <div>{t(feature)}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

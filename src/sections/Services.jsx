import React from "react";
import { useTranslation } from "react-i18next";
import { services } from "../assets/content/services";
import BGimage from "../assets/images/services/BGimage.webp";
import { motion } from "framer-motion";
import TickOutline from "../assets/images/services/tickOutline.png";
import Tick from "../assets/images/services/tick.png";
import { Tilt } from "react-tilt";
const defaultOptions = {
  reverse: true,
  max: 15,
  perspective: 1200,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export const Services = ({ servicesRef }) => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col gap-10 overflow-hidden z-10"
      ref={servicesRef}
    >
      <div className="h-14 sm:h-0"></div>
      <div className="">
        <img
          src={BGimage}
          className="absolute w-screen -z-10 h-3/4 md:h-full lg:h-4/6 left-0  opacity-50 lg:opacity-100 wave"
        />
        <img
          src={BGimage}
          className="absolute w-screen -z-10 h-x sm:h-5/6 left-0 mt-96  lg:hidden opacity-50"
        />
      </div>
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
          <Tilt options={defaultOptions} className="Tilt md:w-4/5 lg:w-full">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              key={index}
              viewport={{ once: true }}
              className=" bg-white rounded-3xl  shadow-md m-2"
            >
              <div className="flex items-center justify-between m-2 z-10">
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
                    <div className="text-left">{t(feature)}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import { services } from "../assets/content/services";
import BGimage from "../assets/images/services/BGimage.png";
import { motion } from "framer-motion";

export const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10">
      <div className="h-14 sm:h-0"></div>
      <img
        src={BGimage}
        className="-z-10 absolute min-w-screen object-cover left-0 h-x sm:object-fill sm:h-full md:h-5/6 lg:h-4/5 sm:w-full "
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
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex flex-col justify-center items-center gap-2"
            key={index}
            viewport={{ once: true }}
          >
            <label>{t(service.text)}</label>
            <img
              className="w-28 drop-shadow-2xl"
              src={service.image}
              alt={service.alt}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

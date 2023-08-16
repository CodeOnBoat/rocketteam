import React from "react";
import { useTranslation } from "react-i18next";
import { services } from "../assets/content/services";
import BGimage from "../assets/images/services/BGimage.webp";
import { motion } from "framer-motion";

export const Services = ({ servicesRef }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden" ref={servicesRef}>
      <div className="h-14 sm:h-0"></div>
      <img
        src={BGimage}
        className="-z-10 absolute min-w-screen object-cover left-0 h-x sm:object-fill sm:h-full md:h-5/6 lg:h-4/5 sm:w-full wave"
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            key={index}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <div className="">{t(service.text)}</div>
              <img
                className="w-20 drop-shadow-2xl"
                src={service.image}
                alt={service.alt}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

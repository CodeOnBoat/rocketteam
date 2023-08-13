import React from "react";
import { useTranslation } from "react-i18next";
import { services } from "../assets/content/services";
import BGimage from "../assets/images/services/BGimage.png";

export const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 ">
      <img
        src={BGimage}
        className="absolute w-screen left-0 h-x sm:h-5/6 md:h-3/5 "
      />
      <div>
        <h2>{t("servicesTitle")}</h2>
        <p>{t("servicesSubtitle")}</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            className="flex flex-col justify-center items-center gap-2"
            key={index}
          >
            <label>{t(service.text)}</label>
            <img className="w-20" src={service.image} alt={service.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

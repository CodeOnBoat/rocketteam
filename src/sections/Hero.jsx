import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import BGImage from "../assets/images/hero/heroWave.png";
import HeroCards from "../assets/content/hero";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-20">
      <img src={BGImage} className="absolute w-screen top-0 -z-10 h-3/5" />
      <h1>{t("heroTitle")}</h1>
      <p style={{ maxWidth: "30ch", textAlign: "center" }}>
        {t("heroSubtitle")}
      </p>
      <button className="bg-black text-white">{t("heroCTA")}</button>
      <div className="flex justify-center items-center gap-10 mt-20 invisible md:visible w-full">
        {HeroCards.map((card, i) => (
          <div
            key={i}
            className="flex sm:flex-col justify-center items-center gap-6 w-1/4"
          >
            <img src={card.image} className="w-40" />
            <label>{t(card.title)}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

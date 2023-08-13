import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BGImage from "../assets/images/hero/heroWave.png";
import HeroCards from "../assets/content/hero";
import { motion } from "framer-motion";

export const Hero = () => {
  const { t } = useTranslation();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-12 mt-5 sm:mt-20"
      style={{
        minHeight: "60vh",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={BGImage}
        className="absolute w-screen top-0 -z-10 h-4/6 sm:h-3/5"
        style={{
          transform: `translateY(${scroll * 0.2}px)`,
        }}
      />

      <h1 className="text-center">{t("heroTitle")}</h1>
      <p style={{ maxWidth: "34ch", textAlign: "center" }}>
        {t("heroSubtitle")}
      </p>
      <button className="bg-black text-white">{t("heroCTA")}</button>
      <div className="hidden justify-center items-center gap-10 mt-20 md:flex w-full">
        {HeroCards.map((card, i) => (
          <div
            key={i}
            className="flex sm:flex-col justify-center items-center gap-6 w-1/4"
          >
            <img src={card.image} className="w-28" />
            <label>{t(card.title)}</label>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

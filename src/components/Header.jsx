import React, { useEffect, useState } from "react";
import Logo from "../assets/images/header/rocketTeamLogo.png";
import { useTranslation } from "react-i18next";
import ItalyIcon from "../assets/images/header/italy.png";
import SpainIcon from "../assets/images/header/spain.png";
import SwedishIcon from "../assets/images/header/sweden.png";
import UKIcon from "../assets/images/header/england.png";
import { motion } from "framer-motion";

export const Header = ({ servicesRef, rocketWayRef, contactRef }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [showFlags, setShowFlags] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
    localStorage.setItem("lang", language);
    setShowFlags(false);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <header className="flex items-center py-2 px-4 justify-center mt-2 sm:mt-0">
      <div className="flex g-2 items-center">
        <img src={Logo} className=" w-14 md:w-12" />
        <div className="text-3xl md:text-2xl tracking-widest">Rocket Team</div>
      </div>
      <div className="flex-grow justify-end items-center gap-10 hidden lg:flex">
        <label
          className="hover:-translate-y-0.5 cursor-pointer duration-100"
          onClick={() => {
            servicesRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("services")}
        </label>
        <label
          className="hover:-translate-y-0.5 cursor-pointer duration-100"
          onClick={() => {
            rocketWayRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("development")}
        </label>
        <button
          style={{ padding: ".3em 1em", fontSize: "18px" }}
          onClick={() => {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("contact")}
        </button>
        <div>
          <img
            src={
              language === "es"
                ? SpainIcon
                : language === "en"
                ? UKIcon
                : language == "it"
                ? ItalyIcon
                : SwedishIcon
            }
            className="w-8 cursor-pointer rounded-xl"
            onClick={() => setShowFlags(!showFlags)}
          />
        </div>
        {showFlags && (
          <div className="absolute top-0 right-0 flex flex-col mt-12 mr-4">
            {language !== "es" && (
              <motion.img
                src={SpainIcon}
                className="w-8 cursor-pointer rounded-xl"
                onClick={() => changeLanguage("es")}
                value="es"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              />
            )}
            {language !== "en" && (
              <motion.img
                src={UKIcon}
                className="w-8 cursor-pointer rounded-xl"
                onClick={() => changeLanguage("en")}
                value="en"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              />
            )}
            {language !== "it" && (
              <motion.img
                src={ItalyIcon}
                className="w-8 cursor-pointer rounded-xl"
                onClick={() => changeLanguage("it")}
                value="it"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              />
            )}
            {language !== "se" && (
              <motion.img
                src={SwedishIcon}
                className="w-8 cursor-pointer rounded-xl"
                onClick={() => changeLanguage("se")}
                value="se"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              />
            )}
          </div>
        )}
      </div>
    </header>
  );
};

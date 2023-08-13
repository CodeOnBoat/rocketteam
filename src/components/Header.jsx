import React from "react";
import Logo from "../assets/images/header/rocketTeamLogo.png";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="flex items-center py-2 px-4 justify-center mt-2 sm:mt-0">
      <div className="flex g-2 items-center">
        <img src={Logo} className="w-14 md:w-12" />
        <div className="text-3xl md:text-2xl">Rocket Team</div>
      </div>
      <div className="flex-grow justify-end items-center gap-10 hidden md:flex">
        <label>{t("home")}</label>
        <label>{t("services")}</label>
        <label>{t("development")}</label>
        <label>{t("faq")}</label>
        <button className="py-2">{t("contact")}</button>
      </div>
    </header>
  );
};

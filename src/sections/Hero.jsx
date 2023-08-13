import React from "react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("heroTitle")}</h1>
      <p>{t("heroSubtitle")}</p>
      <button className="bg-black text-white">{t("heroCTA")}</button>
    </>
  );
};

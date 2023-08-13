import React from "react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t("heroTitle")}</div>
      <div>{t("heroSubtitle")}</div>
      <button className="bg-black text-white">{t("heroCTA")}</button>
    </>
  );
};

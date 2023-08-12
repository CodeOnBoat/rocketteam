import React from "react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return <div>{t("heroTitle")}</div>;
};

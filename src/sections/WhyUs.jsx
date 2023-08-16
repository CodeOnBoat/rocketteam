import React from "react";
import HeroCards from "../assets/content/hero";
import { Card } from "@mui/material";
import { useTranslation } from "react-i18next";

export const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <div
      className=" justify-center items-center  flex flex-row lg:flex-col gap-20"
      sx={{ borderRadius: "24px" }}
    >
      {HeroCards.map((card, i) => (
        <div key={i} className="gap-6 w-full hidden lg:flex items-center">
          <img src={card.image} className="w-16" />
          <label className="text-left">{t(card.title)}</label>
        </div>
      ))}
    </div>
  );
};

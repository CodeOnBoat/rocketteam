import React from "react";
import HeroCards from "../assets/content/hero";
import { Card } from "@mui/material";
import { useTranslation } from "react-i18next";

export const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div
        className=" justify-center items-center mt-40 flex flex-row lg:flex-col gap-20"
        sx={{ borderRadius: "24px" }}
      >
        {HeroCards.map((card, i) => (
          <div key={i} className="gap-6 w-full hidden lg:flex items-center">
            <img src={card.image} className="w-12" />
            <label className="text-left">{t(card.title)}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

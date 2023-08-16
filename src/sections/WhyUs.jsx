import React from "react";
import HeroCards from "../assets/content/hero";
import { Card } from "@mui/material";
import { useTranslation } from "react-i18next";

export const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <div
        elevation={10}
        className=" justify-evenly items-center m-10 w-5/6 lg:w-5/6  flex flex-col lg:flex-row p-8  gap-20"
        sx={{ borderRadius: "24px" }}
      >
        {HeroCards.map((card, i) => (
          <div
            key={i}
            className="flex sm:flex-col justify-center items-center gap-6 w-full"
          >
            <img src={card.image} className="w-14" />
            <label>{t(card.title)}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

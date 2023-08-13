import React from "react";
import Logo from "../assets/images/header/rocketTeamLogo.png";
import { useTranslation } from "react-i18next";
import { MenuItem, Select, FormControl } from "@mui/material";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);

  const changeLanguage = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };
  return (
    <header className="flex items-center py-2 px-4 justify-center mt-2 sm:mt-0">
      <div className="flex g-2 items-center">
        <img src={Logo} className=" w-14 md:w-12" />
        <div className="text-3xl md:text-2xl tracking-widest">Rocket Team</div>
      </div>
      <div className="flex-grow justify-end items-center gap-10 hidden lg:flex">
        <label className="hover:-translate-y-0.5 cursor-pointer duration-100">
          {t("home")}
        </label>
        <label className="hover:-translate-y-0.5 cursor-pointer duration-100">
          {t("services")}
        </label>
        <label className="hover:-translate-y-0.5 cursor-pointer duration-100">
          {t("development")}
        </label>
        <button style={{ padding: ".1em 1em", fontSize: "18px" }}>
          {t("contact")}
        </button>
        <FormControl variant="standard">
          <Select
            className="py-1"
            style={{ padding: "0em" }}
            value={language}
            onChange={changeLanguage}
          >
            <MenuItem value="en">Eng</MenuItem>
            <MenuItem value="es">Esp</MenuItem>
            <MenuItem value="it">Ita</MenuItem>
          </Select>
        </FormControl>
      </div>
    </header>
  );
};

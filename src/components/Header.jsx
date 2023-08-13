import React from "react";
import Logo from "../assets/images/header/rocketTeamLogo.png";

export const Header = () => {
  return (
    <header className="flex items-center py-2 px-4">
      <div className="flex g-2 items-center">
        <img src={Logo} className="w-10" />
        <div className="text-xl">Rocket Team</div>
      </div>

      <div className="flex flex-grow justify-end items-center gap-10">
        <label>Home</label>
        <label>Services</label>
        <label>Development</label>
        <label>FAQ</label>
        <button>Contact</button>
      </div>
    </header>
  );
};

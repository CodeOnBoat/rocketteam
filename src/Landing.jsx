import React from "react";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { RocketWay } from "./sections/RocketWay";
import { FAQ } from "./sections/FAQ";

export const Landing = () => {
  return (
    <div className="w-11/12 max-w-7xl m-auto flex flex-col gap-40">
      <Hero />
      <Services />
      <RocketWay />
      <FAQ />
    </div>
  );
};

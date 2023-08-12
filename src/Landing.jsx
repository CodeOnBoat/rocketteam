import React from "react";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { RocketWay } from "./sections/RocketWay";
import { FAQ } from "./sections/FAQ";

export const Landing = () => {
  return (
    <div>
      <Hero />
      <Services />
      <RocketWay />
      <FAQ />
    </div>
  );
};

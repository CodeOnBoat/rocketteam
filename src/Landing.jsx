import React from "react";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { RocketWay } from "./sections/RocketWay";
import { FAQ } from "./sections/FAQ";
import { Contact } from "./sections/Contact";
import { rocketWay } from "./assets/content/rocketWay";

export const Landing = ({ contactRef, servicesRef, rocketWayRef }) => {
  return (
    <div className="w-11/12 max-w-7xl m-auto flex flex-col gap-28 ">
      <Hero contactRef={contactRef} />
      <Services servicesRef={servicesRef} />
      <RocketWay rocketWayRef={rocketWayRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};

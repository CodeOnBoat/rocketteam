import React from "react";
import { useTranslation } from "react-i18next";
import { rocketWay } from "../assets/content/rocketWay";

export const RocketWay = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("rocketWayTitle")}</h2>
      <p>{t("rocketWaySubtitle")}</p>
      <div>
        {rocketWay.map((way, index) => (
          <div className="flex gap-5 mb-3 items-center bg-gradientRocketWay rounded-full p-2">
            <div className="bg-secondary bg-opacity-50 p-3 rounded-full flex justify-center items-center h-10 w-10">
              {index}
            </div>
            <div>{t(way)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

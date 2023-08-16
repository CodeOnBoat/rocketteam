import { useTranslation } from "react-i18next";
import BGimage from "../assets/images/footer/BGimage.webp";
import Logo from "../assets/images/header/rocketTeamLogo.png";

export const Footer = ({ contactRef, servicesRef, rocketWayRef }) => {
  const { t } = useTranslation();
  return (
    <>
      <img
        src={BGimage}
        className="absolute h-full w-screen -z-10 sm:h-3/5 wave"
        alt=""
      />

      <div className=" flex w-full justify-center mt-20  ">
        <div className="flex flex-col-reverse gap-20  w-8/12 justify-between sm:flex-row">
          <div className="flex flex-col-reverse sm:flex-col gap-5 text-center sm:text-start ">
            <div className="flex g-2 items-center justify-center">
              <img src={Logo} className="w-20" />
              <div className="text-3xl hidden sm:flex ">Rocket Team</div>
            </div>
            <div className="flex flex-col gap-5 ">
              <div>Tallin, Estonia</div>
              <a>hello@rocket-team.space</a>
              <div>+31 5855937563</div>
            </div>
          </div>
          <div className="flex flex-col gap-5  text-center sm:text-start">
            <label
              className="hover:-translate-y-0.5 cursor-pointer duration-100"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {t("home")}
            </label>
            <label
              className="hover:-translate-y-0.5 cursor-pointer duration-100"
              onClick={() => {
                servicesRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("services")}
            </label>
            <label
              className="hover:-translate-y-0.5 cursor-pointer duration-100"
              onClick={() => {
                rocketWayRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("development")}
            </label>
            <button
              className="py-2"
              onClick={() => {
                contactRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("contact")}
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-20">Copyright © Rocket Team 2023</div>
    </>
  );
};

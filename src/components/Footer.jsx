import { useTranslation } from "react-i18next";
import BGimage from "../assets/images/footer/BGimage.webp";
import Logo from "../assets/images/header/rocketTeamLogo.png";

export const Footer = ({ contactRef, servicesRef, rocketWayRef }) => {
  const { t } = useTranslation();
  return (
    <>
      <img
        src={BGimage}
        className="absolute h-screen w-screen -z-10 mt-10 sm:h-3/5 bot wave"
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
              <div>
                <a
                  href="mailto:hello@rocket-team.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" border-b border-black border-opacity-50 "
                >
                  hello@rocket-team.space
                </a>
              </div>
              <div>
                <a
                  href="tel:+315855937563"
                  className=" border-b border-black border-opacity-50"
                >
                  +31 5855937563
                </a>
              </div>
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
      <div className="text-center mt-16">Copyright © Rocket Team 2023</div>
    </>
  );
};

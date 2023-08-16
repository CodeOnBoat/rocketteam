import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BGImage from "../assets/images/hero/heroWave.webp";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const Hero = ({ contactRef }) => {
  const { t } = useTranslation();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const typewriterTexts = [
    t("heroTitleSoftware"),
    1500,
    t("heroTitleWebsites"),
    1500,
    t("heroTitlePhoneApps"),
    1500,
    t("heroTitleChatbots"),
    1500,
  ];
  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-12 mt-5 sm:mt-20"
      style={{
        minHeight: "60vh",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={BGImage}
        className="absolute w-screen top-0 -z-10 h-4/6 sm:h-3/5 wave"
        style={{
          transform: `translateY(${scroll * 0.2}px)`,
        }}
      />
      <h1 className="text-center">
        {t("heroTitle")}
        <br />
        <TypeAnimation
          sequence={typewriterTexts}
          speed={30}
          repeat={Infinity}
          cursor={false}
        />
        <br />
      </h1>
      <p style={{ maxWidth: "34ch", textAlign: "center" }}>
        {t("heroSubtitle")}
      </p>
      <button
        className="bg-black text-white"
        onClick={() => {
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {t("heroCTA")}
      </button>
    </motion.div>
  );
};

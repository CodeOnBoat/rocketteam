import { Card } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/header/rocketTeamLogo.png";
import { sendEmailRocketTeam, sendThanksEmailToProspect } from "../mail/mailJs";

export const Contact = ({ contactRef }) => {
  const { t } = useTranslation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  const handleSubmission = (e) => {
    e.preventDefault();
    sendEmailRocketTeam(name, email, phone, message);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    alert("Your Message has been sent");
    sendThanksEmailToProspect(email, name);
  };

  return (
    <>
    <div className="h-2" ref={contactRef}></div>
    <Card
      className="flex flex-col gap-5 m-auto w-full max-w-3xl px-5 sm:px-20 py-10 pt-20 mb-28 relative"
      style={{ borderRadius: "24px" }}
      elevation={2}
    >
      <div className="flex items-center w-full justify-center bg-gradientRocketWay absolute left-0 top-0 p-2 gap-3">
        <img src={Logo} className=" w-10 md:w-8" />
        <div className="text-xl md:text-md tracking-widest">Rocket Team</div>
      </div>
      <h2 className="text-center">{t("ContactUsTitle")}</h2>
      <input
        type="text"
        placeholder={t("ContactName")}
        value={name || ""}
        onChange={(event) => setName(event?.target?.value)}
        className=" p-2 rounded-md border-black border-opacity-30 border focus:outline-none focus:border-primary focus:border-opacity-30 focus:border-2 "
      />
      <input
        type="text"
        placeholder={t("ContactEmail")}
        value={email || ""}
        onChange={(event) => setEmail(event?.target?.value)}
        className=" p-2 rounded-md border-black border-opacity-30 border focus:outline-none focus:border-primary focus:border-opacity-30 focus:border-2 "
      />
      <input
        type="text"
        placeholder={t("ContactPhone")}
        value={phone || ""}
        onChange={(event) => setPhone(event?.target?.value)}
        className=" p-2 rounded-md border-black border-opacity-30 border focus:outline-none focus:border-primary focus:border-opacity-30 focus:border-2 "
      />
      <textarea
        type="text"
        placeholder={t("ContactMessage")}
        value={message || ""}
        onChange={(event) => setMessage(event?.target?.value)}
        className=" h-40 resize-none p-2 rounded-md border-black border-opacity-30 border focus:outline-none focus:border-primary focus:border-opacity-30 focus:border-2 "
      />
      <button onClick={handleSubmission} className="m-auto py-1">
        {t("ContactSubmitBTN")}
      </button>
    </Card>
    </>
  );
};

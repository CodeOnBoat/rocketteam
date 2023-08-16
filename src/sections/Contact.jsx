import { Box, Card } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/header/rocketTeamLogo.png";
import {
  sendEmailRocketTeam,
  sendThanksEmailToProspect,
  validateEmail,
} from "../mail/mailJs";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const Contact = ({ contactRef }) => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState("");

  const emailInputRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    console.log(i18n.language);
  }, []);

  const handleSubmission = (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name.");
      nameRef.current.focus();
    } else if (!email) {
      setError("Please enter your email.");
      emailInputRef.current.focus();
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      emailInputRef.current.focus();
    } else if (!phone) {
      setError("Please enter your phone number.");
    } else if (!message) {
      setError("Please enter your message.");
      messageRef.current.focus();
    } else {
      sendEmailRocketTeam(name, email, phone, message);
      sendThanksEmailToProspect(email, name);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <div>
      <div className="h-10" ref={contactRef}></div>
      <motion.div
        className="overflow-x-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Box
          className="flex flex-col gap-5 m-auto w-full max-w-3xl px-0 py-10 pt-20 mb-28 relative"
          style={{ borderRadius: "24px" }}
        >
          <div className="flex items-center w-full justify-center bg-gradientRocketWay absolute left-0 top-0 p-2 gap-3 rounded-t-2xl">
            <img src={Logo} className=" w-10 md:w-8" />
            <div className="text-xl md:text-md tracking-widest">
              Rocket Team
            </div>
          </div>
          <h2 className="text-center">{t("ContactUsTitle")}</h2>
          <input
            type="text"
            placeholder={t("ContactName")}
            ref={nameRef}
            value={name || ""}
            onChange={(event) => setName(event?.target?.value)}
            className="text-left text-base p-2 rounded-md border-black border-opacity-20 border focus:outline-none focus:border-primary focus:border-opacity-20 "
          />
          <input
            type="text"
            placeholder={t("ContactEmail")}
            value={email || ""}
            ref={emailInputRef}
            onChange={(event) => setEmail(event?.target?.value)}
            className="text-left p-2 rounded-md border-black border-opacity-20 border focus:outline-none focus:border-primary focus:border-opacity-20  "
          />

          <PhoneInput
            inputStyle={{
              border: "1px solid rgba(0,0,0,.2)",
              width: "100%",
              outline: "none",
              textAlign: "left",
              paddingTop: ".5em",
              paddingBottom: ".5em",
              lineHeight: "24px",
              fontSize: "16px",
              height: "fit-content",
            }}
            buttonStyle={{
              background: "white",
              border: "1px solid rgba(0,0,0,.2)",
            }}
            inputProps={{
              onFocus: (e) => {
                e.target.style.border = "1px solid rgba(235, 80, 235, 0.4)";
              },
              onBlur: (e) => {
                e.target.style.border = "1px solid rgba(0, 0, 0, 0.2)";
              },
            }}
            containerStyle={{ textAlign: "left" }}
            country={i18n.language !== "en" ? i18n.language : "ee"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            regions={"europe"}
            preferredCountries={["it", "es", "nl", "se"]}
          />
          <textarea
            type="text"
            ref={messageRef}
            placeholder={t("ContactMessage")}
            value={message || ""}
            onChange={(event) => setMessage(event?.target?.value)}
            className="text-left h-40 resize-none p-2 rounded-md border-black border border-opacity-20 focus:outline-none focus:border-primary focus:border-opacity-20 "
          />
          {error ? (
            <div className="text-red-500 h-5 text-center">{error}</div>
          ) : (
            <div className="h-5"></div>
          )}

          <button onClick={handleSubmission} className="m-auto py-1">
            {t("ContactSubmitBTN")}
          </button>
        </Box>
      </motion.div>
    </div>
  );
};

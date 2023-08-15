import { Card } from "@mui/material";
import React, { useRef, useState } from "react";
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
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const emailInputRef = useRef(null);

  const handleSubmission = (e) => {
    e.preventDefault();
    let isFormValid = true;

    if (!name) {
      setNameError("Please enter your name.");
      isFormValid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Please enter your email.");
      isFormValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isFormValid = false;
      setTimeout(() => {
        setEmailError("");
        setEmail("");
        emailInputRef.current.focus();
      }, 2000);
    } else {
      setEmailError("");
    }

    if (!phone) {
      setPhoneError("Please enter your phone number.");
      isFormValid = false;
    } else {
      setPhoneError("");
    }

    if (!message) {
      setMessageError("Please enter your message.");
      isFormValid = false;
    } else {
      setMessageError("");
    }

    if (!isFormValid) {
      setTimeout(() => {
        setNameError("");
        setEmailError("");
        setPhoneError("");
        setMessageError("");
      }, 2000);
      return;
    }

    sendEmailRocketTeam(name, email, phone, message);
    alert("Your Message has been sent");
    sendThanksEmailToProspect(email, name);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  const getCountryByLanguage = (language) => {
    switch (language) {
      case "it":
        return "it";
      case "es":
        return "es";
      case "nl":
        return "nl";
      case "sv":
        return "se";
      default:
        return "us";
    }
  };

  const currentLanguage = i18n.language || "en";

  return (
    <div>
      <div className="h-10" ref={contactRef}></div>
      <motion.div
        className="overflow-x-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card
          className="flex flex-col gap-5 m-auto w-full max-w-3xl px-5 sm:px-20 py-10 pt-20 mb-28 relative"
          style={{ borderRadius: "24px" }}
          elevation={2}
        >
          <div className="flex items-center w-full justify-center bg-gradientRocketWay absolute left-0 top-0 p-2 gap-3">
            <img src={Logo} className=" w-10 md:w-8" />
            <div className="text-xl md:text-md tracking-widest">
              Rocket Team
            </div>
          </div>
          <h2 className="text-center">{t("ContactUsTitle")}</h2>
          <input
            type="text"
            placeholder={t("ContactName")}
            value={name || ""}
            onChange={(event) => setName(event?.target?.value)}
            className="text-left text-base p-2 rounded-md border-black border-opacity-20 border-2 focus:outline-none focus:border-primary focus:border-opacity-40 "
          />
          <input
            type="text"
            placeholder={t("ContactEmail")}
            value={email || ""}
            ref={emailInputRef}
            onChange={(event) => setEmail(event?.target?.value)}
            className="text-left p-2 rounded-md border-black border-opacity-20 border-2 focus:outline-none focus:border-primary focus:border-opacity-40  "
          />

          <PhoneInput
            inputStyle={{
              border: "2px solid rgba(0,0,0,.2)",
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
              border: "2px solid rgba(0,0,0,.2)",
            }}
            inputProps={{
              onFocus: (e) => {
                e.target.style.border = "2px solid rgba(235, 80, 235, 0.4)";
              },
              onBlur: (e) => {
                e.target.style.border = "2px solid rgba(0, 0, 0, 0.2)";
              },
            }}
            containerStyle={{ textAlign: "left" }}
            country={getCountryByLanguage(currentLanguage)}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            regions={"europe"}
            preferredCountries={["it", "es", "nl", "se"]}
          />
          <textarea
            type="text"
            placeholder={t("ContactMessage")}
            value={message || ""}
            onChange={(event) => setMessage(event?.target?.value)}
            className="text-left h-40 resize-none p-2 rounded-md border-black border-opacity-20 border-2 focus:outline-none focus:border-primary focus:border-opacity-40 "
          />
          {emailError ? (
            <div className="text-red-500 h-5 text-center">
              {nameError || emailError || phoneError || messageError}
            </div>
          ) : (
            <div className="h-5"></div>
          )}

          <button onClick={handleSubmission} className="m-auto py-1">
            {t("ContactSubmitBTN")}
          </button>
        </Card>
      </motion.div>
    </div>
  );
};

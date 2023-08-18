import React, { useEffect } from "react";
import faq from "../assets/content/faq";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { use } from "i18next";
import { useTranslation } from "react-i18next";

export const FAQ = () => {
  const { t } = useTranslation();
  return (
    <section className="my-8">
      <h2>{t("faq")}</h2>
      <div className="my-8">
        {faq.map((question, i) => (
          <Accordion
            sx={{ mt: 2, borderRadius: "10px" }}
            className="bg-gradientFaq"
            key={i}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              dfa
              <Typography>{question.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

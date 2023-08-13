import React, { useEffect } from "react";
import faq from "../assets/content/faq";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FAQ = () => {
  return (
    <section className="my-8">
      <h2>Frequently asked questions</h2>
      <div className="my-8">
        {faq.map((question, i) => (
          <Accordion
            sx={{ mt: 2, borderRadius: "10px" }}
            className="bg-gradientFaq"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
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

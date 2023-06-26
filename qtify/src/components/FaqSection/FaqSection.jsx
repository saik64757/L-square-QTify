import React from "react";
import styles from "./FaqSection.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FaqSection() {
  return (
    <>
      <hr style={{ border: "1px solid  var(--color-Primary)" }} />
      <div className={styles.FaqSectionWrapper}>
        <p className={styles.title}>FAQs</p>
        <div className={styles.AccordianWrapper}>
          <div className={styles.Accordion}>
            <Accordion
              sx={{
                marginBottom: "10px",
                backgroundColor: "inherit",
                color: "white",
                border: "1px solid white",
              }}
            >
              <AccordionSummary
                sx={{ width: "558px" }}
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Is QTify free to use?</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.Accordion}>
            <Accordion
              sx={{
                marginBottom: "10px",
                backgroundColor: "inherit",
                color: "white",
                border: "1px solid white",
              }}
            >
              <AccordionSummary
                sx={{ width: "558px" }}
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Can I download and listen to songs offline?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <Typography>
                  Sorry, unfortunately we don't provide the service to download
                  any songs.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqSection;

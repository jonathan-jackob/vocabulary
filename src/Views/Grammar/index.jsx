import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Grammar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      title: "Possessive adjetives",
      keywords: "I´m,not",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab molestias, dolorem, alias quae aspernatur culpa accusamus est pariatur similique quas consectetur eveniet illum perspiciatis blanditiis eaque iure repellat nam.",
      examples: ["I´m from Colombia", "I´m not from Venezuela"],
    },
    {
      title: "Possessive adjetives",
      keywords: "I´m,not",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab molestias, dolorem, alias quae aspernatur culpa accusamus est pariatur similique quas consectetur eveniet illum perspiciatis blanditiis eaque iure repellat nam.",
      examples: ["I´m from Colombia", "I´m not from Venezuela"],
    },
    {
      title: "Possessive adjetives",
      keywords: "I´m,not",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab molestias, dolorem, alias quae aspernatur culpa accusamus est pariatur similique quas consectetur eveniet illum perspiciatis blanditiis eaque iure repellat nam.",
      examples: ["I´m from Colombia", "I´m not from Venezuela"],
    },
    {
      title: "Possessive adjetives",
      keywords: "I´m,not",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab molestias, dolorem, alias quae aspernatur culpa accusamus est pariatur similique quas consectetur eveniet illum perspiciatis blanditiis eaque iure repellat nam.",
      examples: ["I´m from Colombia", "I´m not from Venezuela"],
    },
  ];

  const addStrong = (example, keywords) => {
    const kewordsArray = keywords.split(",");
    kewordsArray.forEach((keyword) => {
      const regexp = new RegExp(keyword, "gi");
      example = String(example).replace(
        regexp,
        "<strong>" + keyword + "</strong>"
      );
    });

    return example;
  };
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          bgcolor: "#fff",
          boxShadow: "0px 3px 10px 0px rgba(0,0,0,.5)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: 24,
            fontWeight: 700,
            textAlign: "center",
            py: 2,
            mb: 1,
            bgcolor: "primary.main",
            color: "light.main",
            position: "relative",
          }}
        >
          GRAMMAR
        </Typography>
      </Box>

      <Box>
        {data.map((data, key) => (
          <Accordion
            key={key}
            expanded={expanded === "panel_" + key}
            onChange={handleChange("panel_" + key)}
          >
            <AccordionSummary expandIcon={<ExpandMore />} id={"panel_" + key}>
              <Typography fontSize={18}>{data.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data.description}</Typography>
              <ul>
                {data.examples.map((example, key2) => (
                  <li key={key2}>
                    <Typography
                      dangerouslySetInnerHTML={{
                        __html: addStrong(example, data.keywords),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
};

Grammar.propTypes = {};

export default Grammar;

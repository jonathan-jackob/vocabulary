import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const ListsGrammar = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
            {data.examples.length > 1 && (
              <ul>
                {data.examples.map((example, key2) => (
                  <React.Fragment key={key2}>
                    {example && (
                      <li>
                        <Typography
                          dangerouslySetInnerHTML={{
                            __html: addStrong(example, data.keywords),
                          }}
                        />
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

ListsGrammar.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ListsGrammar;

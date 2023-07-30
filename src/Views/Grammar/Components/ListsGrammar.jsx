import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Delete,
  DeleteOutline,
  EditNote,
  ExpandMore,
} from "@mui/icons-material";
import useOpen from "Hooks/useOpen";
import EditGrammar from "../Sections/Modals/EditGrammar";
import useGrammar from "Hooks/useGrammar";

const ListsGrammar = ({ data, update }) => {
  const modalEditOpen = useOpen();
  const grammar = useGrammar();
  const [expanded, setExpanded] = useState(false);
  const [dataEditGrammar, setDataEditGrammar] = useState({});

  const openEditModal = (data) => {
    setDataEditGrammar(data);
    modalEditOpen.open();
  };

  const deleteItem = ({ id, title }) => {
    if (confirm("Se eliminará el registro " + title.toUpperCase())) {
      const deleteResponse = grammar.deleteItem(id);

      if (deleteResponse.error) {
        alert("Ocurrió un error al eliminar el item");
      }

      if (deleteResponse.success) {
        update.toggle();
      }
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const addStrong = (example, keywords) => {
    const kewordsArray = keywords.split(",");
    kewordsArray.forEach((keyword) => {
      const regexp = new RegExp(`\\b(?<!\\w)${keyword.trim()}(?!\\w)\\b`, "gi");

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
            <Box textAlign="right">
              <IconButton
                onClick={() => {
                  openEditModal(data);
                }}
              >
                <EditNote color="success" />
              </IconButton>

              <IconButton
                onClick={() => {
                  deleteItem(data);
                }}
              >
                <DeleteOutline color="danger" />
              </IconButton>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}

      <EditGrammar
        status={modalEditOpen.status}
        close={modalEditOpen.close}
        data={dataEditGrammar}
        callbackSave={update.toggle}
      />
    </>
  );
};

ListsGrammar.propTypes = {
  data: PropTypes.array.isRequired,
  update: PropTypes.object.isRequired,
};

export default ListsGrammar;

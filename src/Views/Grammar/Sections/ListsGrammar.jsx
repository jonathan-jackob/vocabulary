import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { DeleteOutline, EditNote, ExpandMore } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import useOpen from "Hooks/useOpen";
import EditGrammar from "./Modals/EditGrammar";
import useGrammar from "Hooks/useGrammar";
import addStrong from "Functions/addStrong";

const ListsGrammar = ({ data, update }) => {
  const modalEditOpen = useOpen();
  const grammar = useGrammar();
  const [expanded, setExpanded] = useState(false);
  const [dataEditGrammar, setDataEditGrammar] = useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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

  return (
    <>
      {data.map((grammar, keyGrammar) => (
        <Accordion
          key={keyGrammar}
          expanded={expanded === "panel_" + keyGrammar}
          onChange={handleChange("panel_" + keyGrammar)}
          sx={{
            bgcolor: grey[100],
          }}
          elevation={5}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            id={"panel_" + keyGrammar}
          >
            <Typography fontSize={18} component="strong">
              {grammar.title.toUpperCase()}
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ bgcolor: grey[50] }}>
            {grammar.description && (
              <Typography
                mb={2}
                dangerouslySetInnerHTML={{
                  __html: addStrong(
                    grammar.description,
                    grammar.keywords,
                    grammar.inWords
                  ),
                }}
              />
            )}

            {grammar.rules.map((rule, keyRule) => (
              <Fragment key={keyRule}>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: addStrong(
                      rule.title,
                      grammar.keywords,
                      grammar.inWords
                    ),
                  }}
                />

                {rule.examples.length > 1 && (
                  <ul>
                    {rule.examples.map((example, keyExample) => (
                      <Fragment key={keyExample}>
                        {example && (
                          <li>
                            <Typography
                              dangerouslySetInnerHTML={{
                                __html: addStrong(
                                  example,
                                  grammar.keywords,
                                  grammar.inWords
                                ),
                              }}
                            />
                          </li>
                        )}
                      </Fragment>
                    ))}
                  </ul>
                )}
                {keyRule + 1 < grammar.rules.length && (
                  <Divider sx={{ mb: 2 }} />
                )}
              </Fragment>
            ))}

            <Box textAlign="right">
              <IconButton
                onClick={() => {
                  openEditModal(grammar);
                }}
              >
                <EditNote color="success" />
              </IconButton>

              <IconButton
                onClick={() => {
                  deleteItem(grammar);
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

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import { NoteAdd, PostAddOutlined } from "@mui/icons-material";
import useOpen from "Hooks/useOpen";
import AddModal from "./Sections/Modals/AddGrammar";
import useLocalStorage from "Hooks/useLocalStorage";
import ListsGrammar from "./Components/ListsGrammar";

const Grammar = () => {
  const modalAddOpen = useOpen();
  const update = useOpen();
  const grammar = useLocalStorage("grammar");
  const [dataGrammar, setDataGrammar] = useState([]);

  useEffect(() => {
    let objData = grammar.getDataJSON();
    setDataGrammar(objData);
  }, [update.status, modalAddOpen.status]);

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

      <Box px={2} mt={4}>
        <ListsGrammar data={dataGrammar} update={update} />
      </Box>

      <Button
        aria-label="add word"
        sx={{
          position: "fixed",
          bottom: 35,
          right: 15,
          zIndex: 1,
          p: 0,
          minWidth: 44,
          minHeight: 44,
          borderRadius: "50%",
        }}
        color="primary"
        variant="contained"
        onClick={modalAddOpen.open}
      >
        <NoteAdd />
      </Button>

      <AddModal
        status={modalAddOpen.status}
        close={modalAddOpen.close}
        callbackSave={update.toggle}
      />
    </>
  );
};

Grammar.propTypes = {};

export default Grammar;

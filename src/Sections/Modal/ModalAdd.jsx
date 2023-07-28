import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, Dialog, Grid, Slide } from "@mui/material";
import { PostAddOutlined } from "@mui/icons-material";
import TopBar from "./Components/TopBar";
import Form from "./Components/Form";
import formInit from "../../dataSturcture/word";
import ordenarAsc from "../../Functions/ordenarAsc";
import getVocabularyData from "../../Functions/getVocabularyData";
import saveVocabularyData from "../../Functions/saveVocabularyData";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalAdd = ({ open, setOpen }) => {
  const [formState, setFormState] = useState(formInit);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveWord = () => {
    let jsonVocabulary = getVocabularyData();
    if (formState.word.trim() === "") {
      alert("Require a word.");
      return false;
    }

    jsonVocabulary.push({
      id: Date.now(),
      ...formState,
    });

    ordenarAsc(jsonVocabulary, "word");
    setFormState(formInit); // limpieza de formulario
    saveVocabularyData(jsonVocabulary);
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        disabled={open}
        fullWidth
      >
        Add <PostAddOutlined sx={{ ml: 1 }} />
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <TopBar handleClose={handleClose} title="Add Word the vocabulary" />

        <Form
          form={formState}
          setForm={setFormState}
          buttons={
            <Grid item xs={12} textAlign="right" sx={{ mt: 3 }}>
              <Button
                onClick={handleClose}
                variant="outlined"
                sx={{ px: 3 }}
                color="default"
              >
                Cancel
              </Button>
              <Button
                onClick={saveWord}
                variant="outlined"
                sx={{ ml: 2, px: 3 }}
              >
                Save
              </Button>
            </Grid>
          }
        />
      </Dialog>
    </>
  );
};

ModalAdd.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ModalAdd;

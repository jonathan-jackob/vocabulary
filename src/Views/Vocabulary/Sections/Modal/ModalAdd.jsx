import React from "react";
import PropTypes from "prop-types";
import { Button, Dialog, Grid } from "@mui/material";
import useVocabulary from "Hooks/useVocabulary";
import TopBar from "Components/Modals/TopBar";
import Form from "Views/Vocabulary/Components/Modal/FormVocabulary";
import SlideUp from "Components/Transition/SlideUp";

const ModalAdd = ({ status, close, refresh }) => {
  const FormVocabulary = useVocabulary();

  const handleClose = () => {
    close();
    FormVocabulary.clean();
  };

  const saveWord = () => {
    const save = FormVocabulary.saveAdd();

    if (save.error) {
      alert(save.message);
    }
    if (save.success) {
      refresh();
      close();
      FormVocabulary.clean();
    }
  };

  return (
    <Dialog
      fullScreen
      open={status}
      onClose={handleClose}
      TransitionComponent={SlideUp}
    >
      <TopBar handleClose={handleClose} title="Add Word the vocabulary" />

      <Form
        FormVocabulary={FormVocabulary}
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
            <Button onClick={saveWord} variant="outlined" sx={{ ml: 2, px: 3 }}>
              Save
            </Button>
          </Grid>
        }
      />
    </Dialog>
  );
};

ModalAdd.propTypes = {
  status: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
};

ModalAdd.defaultProps = {
  refresh: () => {},
};

export default ModalAdd;

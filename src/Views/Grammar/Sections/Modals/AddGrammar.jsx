import React from "react";
import PropTypes from "prop-types";
import useGrammar from "Hooks/useGrammar";
import SlideUp from "Components/Transition/SlideUp";
import { Button, Dialog, Grid } from "@mui/material";
import TopBar from "Components/Modals/TopBar";
import FormGrammar from "Views/Grammar/Components/Modals/FormGrammar";

const AddGrammar = ({ status, close, callbackSave }) => {
  const dataGrammar = useGrammar();

  const handleClose = () => {
    close();
    dataGrammar.clean();
  };

  const saveWord = () => {
    const save = dataGrammar.saveAdd();

    if (save.error) {
      alert(save.message);
    }

    if (save.success) {
      callbackSave();
      handleClose();
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

      <FormGrammar
        dataGrammar={dataGrammar}
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

AddGrammar.propTypes = {
  status: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  callbackSave: PropTypes.func,
};

AddGrammar.defaultProps = {
  callbackSave: () => {},
};

export default AddGrammar;

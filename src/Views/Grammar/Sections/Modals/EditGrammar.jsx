import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useGrammar from "Hooks/useGrammar";
import SlideUp from "Components/Transition/SlideUp";
import { Button, Dialog, Grid } from "@mui/material";
import TopBar from "Components/Modals/TopBar";
import FormGrammar from "Views/Grammar/Components/Modals/FormGrammar";

const EditGrammar = ({ status, close, data, callbackSave }) => {
  const dataGrammar = useGrammar();

  const handleClose = () => {
    close();
  };

  const saveWord = () => {
    const save = dataGrammar.saveEdit();

    if (save.error) {
      alert(save.message);
    }

    if (save.success) {
      callbackSave();
      handleClose();
    }
  };

  useEffect(() => {
    dataGrammar.setAllData(data);
  }, [data]);

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

EditGrammar.propTypes = {
  status: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  data: PropTypes.object,
  callbackSave: PropTypes.func,
};

EditGrammar.defaultProps = {
  callbackSave: () => {},
};

export default EditGrammar;

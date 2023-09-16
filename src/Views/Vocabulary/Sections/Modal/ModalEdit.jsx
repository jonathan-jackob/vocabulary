import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Dialog, Grid } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Form from "Views/Vocabulary/Components/Modal/FormVocabulary";
import TopBar from "Components/Modals/TopBar";
import SlideUp from "Components/Transition/SlideUp";

const ModalEdit = ({ status, close, Formulario, refresh }) => {
  const handleClose = () => {
    close();
  };

  const deleteItem = () => {
    if (confirm("Estas seguro de eliminar " + Formulario.getWord())) {
      const response = Formulario.deleteItem(Formulario.getId());

      if (response.error) {
        alert(response.message);
      }
      if (response.success) {
        handleClose();
        refresh();
        FormVocabulary.clean();
      }
    }
  };

  const saveWord = () => {
    const response = Formulario.saveEdit();
    if (response.error) {
      alert(response.message);
    }

    if (response.success) {
      refresh();
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
      <TopBar handleClose={handleClose} title="Edit Word of vocabulary" />
      <Form
        handleClose={handleClose}
        FormVocabulary={Formulario}
        buttons={
          <Grid
            item
            xs={12}
            sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}
          >
            <Button
              onClick={deleteItem}
              variant="outlined"
              sx={{ alignSelf: "start" }}
              color="danger"
            >
              <DeleteOutline />
            </Button>
            <Box>
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
            </Box>
          </Grid>
        }
      />
    </Dialog>
  );
};

ModalEdit.propTypes = {
  status: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  Formulario: PropTypes.object.isRequired,
  refresh: PropTypes.func,
};

ModalEdit.defaultProps = {
  refresh: () => {},
};

export default ModalEdit;

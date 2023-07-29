import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Dialog, Grid, Slide } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import TopBar from "@Components/Vocabulary/Modal/TopBar";
import Form from "@Components/Vocabulary/Modal/Form";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalEdit = ({ status, close, Formulario, refresh }) => {
  const handleClose = () => {
    close();
  };

  const deleteItem = () => {
    if (confirm("Estas seguro de eliminar " + Formulario.getWord())) {
      const response = Formulario.deleteRegistry(Formulario.getId());

      if (response.error) {
        alert(response.message);
      }
      if (response.success) {
        handleClose();
        refresh();
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
      TransitionComponent={Transition}
    >
      <TopBar handleClose={handleClose} title="Edit Word of vocabulary" />
      <Form
        handleClose={handleClose}
        form={Formulario}
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

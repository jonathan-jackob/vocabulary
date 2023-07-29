import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, Dialog, Grid, Slide } from "@mui/material";
import TopBar from "@Components/Vocabulary/Modal/TopBar";
import Form from "@Components/Vocabulary/Modal/Form";
import useForm from "../../../../Hooks/useForm";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalAdd = ({ status, close, refresh }) => {
  const Formulario = useForm();

  const handleClose = () => {
    close();
    Formulario.clean();
  };

  const saveWord = () => {
    const save = Formulario.saveAdd();

    if (save.error) {
      alert(save.message);
    }
    if (save.success) {
      refresh();
      close();
    }
  };

  return (
    <>
      <Dialog
        fullScreen
        open={status}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <TopBar handleClose={handleClose} title="Add Word the vocabulary" />

        <Form
          form={Formulario}
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
  status: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
};

ModalAdd.defaultProps = {
  refresh: () => {},
};

export default ModalAdd;

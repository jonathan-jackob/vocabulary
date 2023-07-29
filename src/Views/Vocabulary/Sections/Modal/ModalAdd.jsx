import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, Dialog, Grid, Slide } from "@mui/material";
import { PostAddOutlined } from "@mui/icons-material";
import TopBar from "@Components/Vocabulary/Modal/TopBar";
import Form from "@Components/Vocabulary/Modal/Form";
import useForm from "../../../../Hooks/useForm";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalAdd = ({ open, setOpen, refresh }) => {
  const Formulario = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    Formulario.clean();
  };

  const saveWord = () => {
    const save = Formulario.saveAdd();

    if (save.error) {
      alert(save.message);
    }
    if (save.success) {
      refresh();
      handleClose();
    }
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
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
};

ModalAdd.defaultProps = {
  refresh: () => {},
};

export default ModalAdd;

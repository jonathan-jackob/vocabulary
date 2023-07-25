import React from "react";
import PropTypes from "prop-types";
import { Dialog, Slide } from "@mui/material";
import TopBar from "../Components/TopBar";
import FormEdit from "./FormEdit";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalEdit = ({ open, setOpen, form, setForm }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <TopBar handleClose={handleClose} title="Edit Word the vocabulary" />
      <FormEdit handleClose={handleClose} Form={form} setForm={setForm} />
    </Dialog>
  );
};

ModalEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
};

export default ModalEdit;

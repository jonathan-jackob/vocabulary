import React from "react";
import PropTypes from "prop-types";
import { Dialog, Slide } from "@mui/material";
import TopBar from "../Components/TopBar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalEdit = ({ open, setOpen }) => {
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
      <TopBar handleClose={handleClose} title="Edit Item of vocabulary" />
    </Dialog>
  );
};

ModalEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ModalEdit;

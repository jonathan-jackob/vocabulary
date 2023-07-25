import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { PostAddOutlined } from "@mui/icons-material";
import TopBar from "../Components/TopBar";
import FormAdd from "./FormAdd";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalAdd = ({ open, setOpen }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <TopBar handleClose={handleClose} title="Add Item of vocabulary" />
        <FormAdd handleClose={handleClose} />
      </Dialog>
    </>
  );
};

ModalAdd.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ModalAdd;

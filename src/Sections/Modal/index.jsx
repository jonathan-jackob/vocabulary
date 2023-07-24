import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { PostAddOutlined } from "@mui/icons-material";
import TopBar from "./TopBar";
import FormAdd from "./FormAdd";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal() {
  const [open, setOpen] = React.useState(false);

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
        <TopBar handleClose={handleClose} />
        <FormAdd handleClose={handleClose} />
      </Dialog>
    </>
  );
}

import React from "react";
import PropTypes from "prop-types";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const TopBar = ({ handleClose }) => {
  return (
    <AppBar sx={{ position: "relative" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <Close />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          Add Item of vocabulary
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default TopBar;

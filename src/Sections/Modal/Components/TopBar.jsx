import React from "react";
import PropTypes from "prop-types";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const TopBar = ({ handleClose, title }) => {
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
        <Typography
          fontSize={25}
          fontWeight={500}
          component="div"
          sx={{ ml: 2, flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default TopBar;

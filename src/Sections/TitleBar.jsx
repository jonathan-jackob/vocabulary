import React from "react";
import PropTypes from "prop-types";
import { IconButton, Typography } from "@mui/material";
import DrawerVocabulary from "./DrawerVocabulary";
import { MoreVertOutlined } from "@mui/icons-material";

const TitleBar = ({ openDrawer, setOpenDrawer }) => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          py: 2,
          mb: 1,
          bgcolor: "primary.main",
          color: "light.main",
          boxShadow: "0px 3px 10px 0px rgba(0,0,0,.5)",
          position: "relative",
        }}
      >
        VOCABULARY
        <IconButton
          sx={{
            position: "absolute",
            right: 10,
            top: 0,
            bottom: 0,
            color: "light.main",
          }}
          onClick={() => {
            setOpenDrawer(true);
          }}
        >
          <MoreVertOutlined />
        </IconButton>
      </Typography>
      <DrawerVocabulary open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

TitleBar.propTypes = {};

export default TitleBar;

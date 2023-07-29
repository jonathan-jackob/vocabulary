import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const Grammar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          bgcolor: "#fff",
          boxShadow: "0px 3px 10px 0px rgba(0,0,0,.5)",
        }}
      >
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
            position: "relative",
          }}
        >
          GRAMMAR
        </Typography>
      </Box>
      <Typography variant="h1" component="div">
        COMING SOON
      </Typography>
    </>
  );
};

Grammar.propTypes = {};

export default Grammar;
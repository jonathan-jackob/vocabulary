import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Typography } from "@mui/material";

const Grammar = () => {
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
      <Container>COMING SOON</Container>
    </>
  );
};

Grammar.propTypes = {};

export default Grammar;

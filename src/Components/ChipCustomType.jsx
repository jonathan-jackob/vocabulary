import React from "react";
import PropTypes from "prop-types";
import TypesColors from "../Theme/TypesColors";
import { Typography } from "@mui/material";

const ChipCustomType = ({ type, sx }) => {
  const color = TypesColors[type].main;

  return (
    <Typography
      component="span"
      sx={{
        color: color,
        border: "1px solid " + color,
        borderRadius: "10px",
        px: 1,
        py: "1px",
        fontSize: 12,
        ...sx,
      }}
    >
      {String(type).toUpperCase()}
    </Typography>
  );
};

ChipCustomType.propTypes = {
  type: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default ChipCustomType;

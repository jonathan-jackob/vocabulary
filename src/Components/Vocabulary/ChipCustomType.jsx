import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import TypesColors from "../../Theme/TypesColors";

const ChipCustomType = ({ type, sx }) => {
  const color = TypesColors[type].main;

  return (
    <Typography
      component="small"
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

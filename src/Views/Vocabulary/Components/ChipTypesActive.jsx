import React from "react";
import PropTypes from "prop-types";
import ChipCustomType from "./ChipCustomType";

const ChipTypesActive = ({ types, sx }) => {
  const getTypesActives = (types) => {
    let typesActives = [];

    for (let type in types) {
      if (types[type]) {
        typesActives.push(type);
      }
    }

    return typesActives;
  };

  return (
    <>
      {getTypesActives(types).map((type, key) => (
        <ChipCustomType key={key} type={type} sx={{ ...sx }} />
      ))}
    </>
  );
};

ChipTypesActive.propTypes = {
  types: PropTypes.object.isRequired,
  sx: PropTypes.object,
};

ChipTypesActive.defaultProps = {
  types: [],
  sx: {},
};

export default ChipTypesActive;

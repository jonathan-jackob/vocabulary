import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { Box } from "@mui/system";

const Types = ({ Type, setType }) => {
  const { noun, verb, adjetive, preposition, adverb } = Type;

  const handleChange = (event) => {
    setType({
      ...Type,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl sx={{ mt: 2 }}>
      <FormLabel component="legend">Check the type</FormLabel>
      <Box>
        <FormControlLabel
          control={
            <Checkbox name="noun" checked={noun} onChange={handleChange} />
          }
          label="Noun"
        />
        <FormControlLabel
          control={
            <Checkbox name="verb" checked={verb} onChange={handleChange} />
          }
          label="Verb"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="adjetive"
              checked={adjetive}
              onChange={handleChange}
            />
          }
          label="Adjetive"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="preposition"
              checked={preposition}
              onChange={handleChange}
            />
          }
          label="Preposition"
        />
        <FormControlLabel
          control={
            <Checkbox name="adverb" checked={adverb} onChange={handleChange} />
          }
          label="Adverb"
        />
      </Box>
    </FormControl>
  );
};

Types.propTypes = {
  Type: PropTypes.object.isRequired,
  setType: PropTypes.func.isRequired,
};

export default Types;

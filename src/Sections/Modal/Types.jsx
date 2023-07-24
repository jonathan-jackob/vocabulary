import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

const Types = ({ Type, setType }) => {
  const { noun, verb, adjetive, preposition, adverb } = Type;

  const handleChange = (event) => {
    setType({
      ...Type,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl>
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
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
      </FormGroup>
    </FormControl>
  );
};

Types.propTypes = {
  Type: PropTypes.object.isRequired,
  setType: PropTypes.func.isRequired,
};

export default Types;

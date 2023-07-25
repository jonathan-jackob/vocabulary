import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Box } from "@mui/system";

const Types = ({ Form, setForm }) => {
  const { noun, verb, adjetive, preposition, adverb } = Form.types;

  const handleChange = (event) => {
    setForm({
      ...Form,
      types: {
        ...Form.types,
        [event.target.name]: event.target.checked,
      },
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
  Form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
};

export default Types;

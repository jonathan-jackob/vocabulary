import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Box } from "@mui/system";

const Types = ({ form }) => {
  const handleChange = (event) => {
    form.setType(event.target.name, event.target.checked);
  };

  return (
    <FormControl sx={{ mt: 2 }}>
      <FormLabel component="legend">Check the type</FormLabel>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              name="noun"
              checked={form.getType("noun")}
              onChange={handleChange}
              color="noun"
            />
          }
          label="Noun"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="verb"
              checked={form.getType("verb")}
              onChange={handleChange}
              color="verb"
            />
          }
          label="Verb"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="adjetive"
              checked={form.getType("adjetive")}
              onChange={handleChange}
              color="adjetive"
            />
          }
          label="Adjetive"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="preposition"
              checked={form.getType("preposition")}
              onChange={handleChange}
              color="preposition"
            />
          }
          label="Preposition"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="adverb"
              checked={form.getType("adverb")}
              onChange={handleChange}
              color="adverb"
            />
          }
          label="Adverb"
        />
      </Box>
    </FormControl>
  );
};

Types.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Types;

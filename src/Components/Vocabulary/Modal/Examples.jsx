import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormControl, FormLabel, Grid, TextField } from "@mui/material";

const Examples = ({ form }) => {
  const examples = form.getExamples();

  const handleChange = (value, key) => {};
  return (
    <FormControl fullWidth>
      <FormLabel component="legend">Examples</FormLabel>
      {[...examples].map((example, key) => (
        <TextField
          key={key}
          label={"Example " + (key + 1)}
          variant="standard"
          value={form.getExample(key)}
          onChange={(event) => {
            form.editExample(event.target.value, key);
          }}
          fullWidth
          sx={{ mt: 1 }}
          placeholder="wefewf"
        />
      ))}
    </FormControl>
  );
};

Examples.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Examples;

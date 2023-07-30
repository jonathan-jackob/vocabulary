import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormControl, FormLabel, TextField } from "@mui/material";

const Examples = ({ form }) => {
  return (
    <FormControl fullWidth>
      <FormLabel component="legend">Examples</FormLabel>
      {form.getExamples().map((example, key) => (
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
          placeholder=""
        />
      ))}
    </FormControl>
  );
};

Examples.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Examples;

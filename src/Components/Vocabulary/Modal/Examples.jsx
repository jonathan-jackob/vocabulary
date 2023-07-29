import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormLabel, Grid, TextField } from "@mui/material";

const Examples = ({ form }) => {
  const examples = form.getExamples();

  const handleChange = (value, key) => {};
  return (
    <>
      <Grid item xs={12}>
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
            multiline
          />
        ))}
      </Grid>
    </>
  );
};

Examples.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Examples;

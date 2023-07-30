import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CapitalLetter from "Functions/CapitalLetter";

const Types = ({ form }) => {
  const handleChange = (event) => {
    form.setType(event.target.name, event.target.checked);
  };

  const getArrayTypes = (types) => {
    let array = Object.keys(types);
    array.sort((a, b) => a.localeCompare(b));
    return array;
  };

  return (
    <FormControl sx={{ mt: 2 }}>
      <FormLabel component="legend">Check the type</FormLabel>
      <Box>
        {getArrayTypes(form.getTypes()).map((type) => (
          <FormControlLabel
            key={type}
            control={
              <Checkbox
                name={type}
                checked={form.getType(type)}
                onChange={handleChange}
                color={type}
              />
            }
            label={
              <Typography
                component="span"
                sx={{
                  color: form.getType(type) ? type + ".main" : "inherit",
                  fontWeight: 500,
                }}
              >
                {CapitalLetter(type)}
              </Typography>
            }
          />
        ))}
      </Box>
    </FormControl>
  );
};

Types.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Types;

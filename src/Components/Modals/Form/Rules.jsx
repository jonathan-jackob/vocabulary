import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
} from "@mui/material";
import { Add, DeleteOutline } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const Rules = ({ dataGrammar }) => {
  const handleRuleTitle = (ruleData, keyRule, title) => {
    ruleData.title = title;
    dataGrammar.setRule(keyRule, ruleData);
  };

  const handleRuleExample = (ruleData, keyRule, keyExample, example) => {
    ruleData.examples[keyExample] = example;
    let examples = ruleData.examples.filter((example) => example.trim() !== "");
    ruleData.examples = [...examples, ""];
    dataGrammar.setRule(keyRule, ruleData);
  };

  const deleteRule = (keyRule) => {
    if (confirm("Do you want remove this rule?")) {
      dataGrammar.removeRule(keyRule);
    }
  };

  return (
    <>
      <FormLabel
        component="legend"
        sx={{
          mt: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Rules
        <IconButton onClick={dataGrammar.addRule}>
          <Add
            sx={{
              bgcolor: "primary.main",
              color: "white",
              borderRadius: "5px",
            }}
          />
        </IconButton>
      </FormLabel>

      {dataGrammar.getRules().map((rule, keyRule) => (
        <Paper
          key={keyRule}
          elevation={5}
          sx={{
            my: 1,
            p: 2,
          }}
        >
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor={"rule__" + keyRule}>Rule</InputLabel>
            <Input
              id={"rule__" + keyRule}
              type="text"
              value={rule.title}
              onChange={({ target }) => {
                handleRuleTitle(rule, keyRule, target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  {dataGrammar.getRules().length > 1 && (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        deleteRule(keyRule);
                      }}
                    >
                      <DeleteOutline
                        sx={{
                          color: "danger.light",
                        }}
                      />
                    </IconButton>
                  )}
                </InputAdornment>
              }
            />
          </FormControl>

          <Box sx={{ pl: 2 }}>
            {rule.examples.map((example, keyExample) => (
              <TextField
                variant="standard"
                key={keyExample}
                placeholder={keyExample === 0 ? "Example" : "Other example"}
                value={example}
                onChange={({ target }) => {
                  handleRuleExample(rule, keyRule, keyExample, target.value);
                }}
                disabled={rule.title === ""}
                fullWidth
                size="small"
                sx={{
                  mt: 2,
                }}
              />
            ))}
          </Box>
        </Paper>
      ))}
    </>
  );
};

Rules.propTypes = {
  dataGrammar: PropTypes.object.isRequired,
};

export default Rules;

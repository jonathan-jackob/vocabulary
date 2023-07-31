import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box, FormLabel, Paper, TextField } from "@mui/material";

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

  return (
    <>
      <FormLabel component="legend" sx={{ mt: 1 }}>
        Rules
      </FormLabel>

      {dataGrammar.getRules().map((rule, keyRule) => (
        <Paper
          key={keyRule}
          elevation={5}
          sx={{
            my: 1,
            p: 2,
            // bgcolor: rule.title === "" && keyRule > 0 ? "#eeeeee96" : "inherit",
          }}
        >
          <TextField
            variant="standard"
            placeholder={keyRule === 0 ? "Rule" : "Other rule"}
            value={rule.title}
            onChange={({ target }) => {
              handleRuleTitle(rule, keyRule, target.value);
            }}
            fullWidth
          />
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

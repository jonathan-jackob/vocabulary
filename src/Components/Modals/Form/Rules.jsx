import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FormLabel, Paper, TextField } from "@mui/material";

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

      {dataGrammar.getRules() &&
        dataGrammar.getRules().map((rule, keyRule) => (
          <Paper item key={keyRule} elevation={3} sx={{ mt: 2, p: 2 }}>
            <TextField
              label={`${keyRule + 1}.- Title Rule`}
              value={rule.title}
              onChange={(event) => {
                handleRuleTitle(rule, keyRule, event.target.value);
              }}
              variant="standard"
              fullWidth
            />
            {rule.examples.map((example, keyExample) => (
              <TextField
                key={`${keyRule}_${keyExample}`}
                label={`${keyRule + 1}.${keyExample + 1}.- Example of rule`}
                value={example}
                onChange={(event) => {
                  handleRuleExample(
                    rule,
                    keyRule,
                    keyExample,
                    event.target.value
                  );
                }}
                variant="standard"
                disabled={rule.title.trim() === ""}
                sx={{ mt: 1 }}
                fullWidth
              />
            ))}
          </Paper>
        ))}
    </>
  );
};

Rules.propTypes = {
  dataGrammar: PropTypes.object.isRequired,
};

export default Rules;

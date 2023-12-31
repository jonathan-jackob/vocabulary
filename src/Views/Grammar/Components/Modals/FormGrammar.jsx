import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
import Rules from "Components/Modals/Form/Rules";

const FormGrammar = ({ dataGrammar, buttons }) => {
  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            variant="standard"
            value={dataGrammar.getTitle()}
            onChange={(event) => {
              dataGrammar.setTitle(event.target.value);
            }}
            autoComplete="off"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="standard"
            value={dataGrammar.getDescription()}
            onChange={(event) => {
              dataGrammar.setDescription(event.target.value);
            }}
            autoComplete="off"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Rules dataGrammar={dataGrammar}></Rules>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Keywords"
            variant="standard"
            value={dataGrammar.getKeywords()}
            onChange={(event) => {
              dataGrammar.setKeywords(event.target.value);
            }}
            autoComplete="off"
            placeholder="I´m, I am (use comma for separate keywords)"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          sx={{
            color: dataGrammar.getInWords() ? "danger.main" : "inherit",
            mt: 2,
          }}
          control={
            <Switch
              checked={dataGrammar.getInWords()}
              onChange={({ target }) => {
                dataGrammar.setInWords(target.checked);
              }}
              color="danger"
            />
          }
          label="Replace keyword in words"
        />
      </Grid>
      {buttons}
    </Container>
  );
};

FormGrammar.propTypes = {
  dataGrammar: PropTypes.object.isRequired,
  buttons: PropTypes.node,
};

export default FormGrammar;

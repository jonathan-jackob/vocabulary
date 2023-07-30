import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, TextField } from "@mui/material";
import Examples from "Components/Modals/Examples";

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
            fullWidth
            multiline
            minRows={3}
          />
        </Grid>

        <Grid item xs={12}>
          <Examples form={dataGrammar} />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Keywords"
            variant="standard"
            value={dataGrammar.getKeywords()}
            onChange={(event) => {
              dataGrammar.setKeywords(event.target.value);
            }}
            fullWidth
            placeholder="I´m, I am (use comma for separate keywords)"
          />
        </Grid>
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

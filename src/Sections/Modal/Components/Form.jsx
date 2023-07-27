import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, List, TextField, Typography } from "@mui/material";
import Types from "./Types";
import VocabularyListItem from "../../../Components/VocabularyListItem";

const Form = ({ form, setForm, buttons }) => {
  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Word"
            variant="standard"
            value={form.word}
            onChange={(event) => {
              setForm({ ...form, word: event.target.value });
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Spanish"
            variant="standard"
            value={form.spanish}
            onChange={(event) => {
              setForm({ ...form, spanish: event.target.value });
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Pronounce"
            variant="standard"
            value={form.pronounce}
            onChange={(event) => {
              setForm({ ...form, pronounce: event.target.value });
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="URL Image"
            variant="standard"
            value={form.image}
            onChange={(event) => {
              setForm({ ...form, image: event.target.value });
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Types Form={form} setForm={setForm} />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Comment"
            variant="standard"
            value={form.comment}
            onChange={(event) => {
              setForm({ ...form, comment: event.target.value });
            }}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12} sx={{ my: 2 }}>
          <Typography>Preview</Typography>
          <List sx={{ bgcolor: "#eee" }}>
            <VocabularyListItem form={form} />
          </List>
        </Grid>

        {buttons}
      </Grid>
    </Container>
  );
};

Form.propTypes = {
  form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
  buttons: PropTypes.node,
};

export default Form;

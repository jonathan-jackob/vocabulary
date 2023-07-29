import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  List,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Types from "./Types";
import VocabularyListItem from "../VocabularyListItem";
import Examples from "./Examples";

const Form = ({ form, buttons }) => {
  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Word"
            variant="standard"
            value={form.getWord()}
            onChange={(event) => {
              form.setWord(event.target.value);
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Spanish"
            variant="standard"
            value={form.getSpanish()}
            onChange={(event) => {
              form.setSpanish(event.target.value);
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Pronounce"
            variant="standard"
            value={form.getPronounce()}
            onChange={(event) => {
              form.setPronounce(event.target.value);
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="URL Image"
            variant="standard"
            value={form.getImage()}
            onChange={(event) => {
              form.setImage(event.target.value);
            }}
            fullWidth
          />
        </Grid>

        <Examples form={form} />

        <Grid item xs={12}>
          <Types form={form} />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Comment"
            variant="standard"
            value={form.getComment()}
            onChange={(event) => {
              form.setComment(event.target.value);
            }}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12} sx={{ my: 2 }}>
          <Typography component="label">Preview</Typography>
          <List sx={{ px: 1 }} component={Paper}>
            <VocabularyListItem form={form.data} />
          </List>
        </Grid>

        {buttons}
      </Grid>
    </Container>
  );
};

Form.propTypes = {
  form: PropTypes.object.isRequired,
  buttons: PropTypes.node,
};

export default Form;

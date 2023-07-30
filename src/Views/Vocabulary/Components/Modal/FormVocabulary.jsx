import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, TextField } from "@mui/material";
import Types from "./Types";
import Examples from "../../../../Components/Modals/Form/Examples";

const Form = ({ FormVocabulary, buttons }) => {
  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Word or Phrase"
            variant="standard"
            value={FormVocabulary.getWord()}
            onChange={(event) => {
              FormVocabulary.setWord(event.target.value);
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            label="Pronounce"
            variant="standard"
            value={FormVocabulary.getPronounce()}
            onChange={(event) => {
              FormVocabulary.setPronounce(event.target.value);
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            label="Spanish"
            variant="standard"
            value={FormVocabulary.getSpanish()}
            onChange={(event) => {
              FormVocabulary.setSpanish(event.target.value);
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Types form={FormVocabulary} />
        </Grid>

        <Grid item xs={12}>
          <Examples form={FormVocabulary} />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Image"
            variant="standard"
            value={FormVocabulary.getImage()}
            onChange={(event) => {
              FormVocabulary.setImage(event.target.value);
            }}
            fullWidth
            placeholder="Example: https://images.com/sun.jpg"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Comment"
            variant="standard"
            value={FormVocabulary.getComment()}
            onChange={(event) => {
              FormVocabulary.setComment(event.target.value);
            }}
            fullWidth
          />
        </Grid>

        {buttons}
      </Grid>
    </Container>
  );
};

Form.propTypes = {
  FormVocabulary: PropTypes.object.isRequired,
  buttons: PropTypes.node,
};

export default Form;

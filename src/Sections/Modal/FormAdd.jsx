import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid, TextField } from "@mui/material";
import Types from "./Types";

const FormAdd = ({ handleClose }) => {
  const [Word, setWord] = useState("");
  const [Spanish, setSpanish] = useState("");
  const [Type, setType] = useState({
    noun: false,
    verb: false,
    adjetive: false,
    preposition: false,
    adverb: false,
  });
  const [Comment, setComment] = useState("");
  const saveWord = () => {
    console.log({
      word: Word,
      spanish: Spanish,
      types: Type,
      comment: Comment,
    });
  };

  return (
    <Container sx={{ pt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Word"
            variant="standard"
            value={Word}
            onChange={(event) => {
              setWord(event.target.value);
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Spanish"
            variant="standard"
            value={Spanish}
            onChange={(event) => {
              setSpanish(event.target.value);
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Types Type={Type} setType={setType} />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Comment"
            variant="standard"
            value={Comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12} textAlign="right" sx={{ mt: 3 }}>
          <Button onClick={handleClose} variant="outlined" sx={{ px: 3 }} color="default">
            Cancel
          </Button>
          <Button onClick={saveWord} variant="outlined" sx={{ ml: 2, px: 3 }}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

FormAdd.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default FormAdd;

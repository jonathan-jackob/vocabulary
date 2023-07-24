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
        <Grid item xs={12} sm={6}>
          <Types Type={Type} setType={setType} />
        </Grid>

        <Grid item xs={12} sm={6}>
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
      </Grid>

      <Container
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          textAlign: "right",
          pb: 2,
        }}
      >
        <Button onClick={handleClose} variant="outlined">
          Close
        </Button>
        <Button onClick={saveWord} variant="outlined" sx={{ ml: 1 }}>
          Save
        </Button>
      </Container>
    </Container>
  );
};

FormAdd.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default FormAdd;

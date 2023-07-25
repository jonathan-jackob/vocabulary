import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Grid,
  List,
  TextField,
  Typography,
} from "@mui/material";
import Types from "./Types";
import CustomListItem from "../../Components/VocabularyListItem";

const FormAdd = ({ handleClose }) => {
  const typesInit = {
    noun: false,
    verb: false,
    adjetive: false,
    preposition: false,
    adverb: false,
  };
  const [Word, setWord] = useState("");
  const [Spanish, setSpanish] = useState("");
  const [Type, setType] = useState(typesInit);
  const [Comment, setComment] = useState("");
  const [Image, setImage] = useState("");
  const saveWord = () => {
    const LS = localStorage.getItem("vocabulary");
    let jsonVocabulary = [];
    if (LS != null) {
      jsonVocabulary = JSON.parse(LS);
    }

    jsonVocabulary.push({
      id: Date.now(),
      word: Word,
      spanish: Spanish,
      types: Type,
      image: Image,
      comment: Comment,
    });

    localStorage.setItem("vocabulary", JSON.stringify(jsonVocabulary));

    setWord("");
    setSpanish("");
    setType(typesInit);
    setImage("");
    setComment("");
    handleClose();
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
            label="URL Image"
            variant="standard"
            value={Image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
            fullWidth
          />
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
        <Grid item xs={12} sx={{ my: 4 }}>
          <Typography>Preview</Typography>
          <List sx={{ bgcolor: "#eee" }}>
            <CustomListItem
              word={Word}
              spanish={Spanish}
              image="https://images.pexels.com/photos/531844/pexels-photo-531844.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2"
              types={Type}
            />
          </List>
        </Grid>

        <Grid item xs={12} textAlign="right" sx={{ mt: 3 }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{ px: 3 }}
            color="default"
          >
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

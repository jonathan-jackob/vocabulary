import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Grid,
  List,
  TextField,
  Typography,
} from "@mui/material";
import Types from "../Components/Types";
import VocabularyListItem from "../../../Components/VocabularyListItem";
import ordenarAsc from "../../../functions/order";

const FormEdit = ({ Form, setForm, handleClose }) => {
  const saveWord = () => {
    const LS = localStorage.getItem("vocabulary");
    let jsonVocabulary = [];

    if (LS != null) {
      let jsonTempo = JSON.parse(LS);
      jsonVocabulary = jsonTempo.map((vocabulary) =>
        Form.id == vocabulary.id ? Form : vocabulary
      );

      ordenarAsc(jsonVocabulary, "word");

      localStorage.setItem("vocabulary", JSON.stringify(jsonVocabulary));

      handleClose();
    }
  };

  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Word"
            variant="standard"
            value={Form.word}
            onChange={(event) => {
              setForm({ ...Form, word: event.target.value });
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Spanish"
            variant="standard"
            value={Form.spanish}
            onChange={(event) => {
              setForm({ ...Form, spanish: event.target.value });
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Types Form={Form} setForm={setForm} />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="URL Image"
            variant="standard"
            value={Form.image}
            onChange={(event) => {
              setForm({ ...Form, image: event.target.value });
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Comment"
            variant="standard"
            value={Form.comment}
            onChange={(event) => {
              setForm({ ...Form, comment: event.target.value });
            }}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12} sx={{ my: 2 }}>
          <Typography>Preview</Typography>
          <List sx={{ bgcolor: "#eee" }}>
            <VocabularyListItem form={Form} />
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

FormEdit.propTypes = {
  Form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default FormEdit;

import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Dialog, Grid, Slide } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import TopBar from "@Components/Vocabulary/Modal/TopBar";
import Form from "@Components/Vocabulary/Modal/Form";
import ordenarAsc from "@Functions/ordenarAsc";
import getVocabularyData from "@Functions/getVocabularyData";
import saveVocabularyData from "@Functions/saveVocabularyData";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalEdit = ({
  open,
  setOpen,
  form,
  setForm,
  deleteRegistry,
  refresh,
}) => {
  const saveWord = () => {
    let jsonTempo = getVocabularyData();
    let jsonVocabulary = jsonTempo.map((vocabulary) =>
      form.id == vocabulary.id ? form : vocabulary
    );

    ordenarAsc(jsonVocabulary, "word");
    saveVocabularyData(jsonVocabulary);
    handleClose();
    refresh();
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteItem = () => {
    if (confirm("Estas seguro de eliminar " + form.word)) {
      deleteRegistry(form.id);
      handleClose();
      refresh();
    }
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <TopBar handleClose={handleClose} title="Edit Word of vocabulary" />
      <Form
        handleClose={handleClose}
        form={form}
        setForm={setForm}
        buttons={
          <Grid
            item
            xs={12}
            sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}
          >
            <Button
              onClick={deleteItem}
              variant="outlined"
              sx={{ alignSelf: "start" }}
              color="danger"
            >
              Delete <DeleteOutline sx={{ ml: 2 }} />
            </Button>
            <Box>
              <Button
                onClick={handleClose}
                variant="outlined"
                sx={{ px: 3 }}
                color="default"
              >
                Cancel
              </Button>
              <Button
                onClick={saveWord}
                variant="outlined"
                sx={{ ml: 2, px: 3 }}
              >
                Save
              </Button>
            </Box>
          </Grid>
        }
      />
    </Dialog>
  );
};

ModalEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
  deleteRegistry: PropTypes.func.isRequired,
  refresh: PropTypes.func,
};

ModalEdit.defaultProps = {
  refresh: () => {},
};

export default ModalEdit;

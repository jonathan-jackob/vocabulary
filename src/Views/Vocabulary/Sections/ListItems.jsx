import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Container, Divider, List, Typography } from "@mui/material";
import ModalEdit from "./Modal/ModalEdit";
import ModalView from "./Modal/ModalView";
import formInit from "@Data/word";
import CustomListItem from "@Components/Vocabulary/VocabularyListItem";
import saveVocabularyData from "@Functions/saveVocabularyData";
import getVocabularyData from "@Functions/getVocabularyData";

const ListItems = ({ dataVocabulary, setDataVocabulary, refresh }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModaView, setOpenModaView] = useState(false);
  const [dataModalEditView, setDataModalEditView] = useState(formInit);
  const [firstLetter, setFirstLetter] = useState("");

  const openEditWord = (form) => {
    setDataModalEditView(form);
    setOpenModalEdit(true);
  };

  const openViewWord = (form) => {
    setDataModalEditView(form);
    setOpenModaView(true);
  };

  const deleteRegistry = (id) => {
    let jsonVocabulary = getVocabularyData();
    const filter = jsonVocabulary.filter((item) => {
      return item.id !== id;
    });

    setDataVocabulary(filter);
    saveVocabularyData(filter);
    refresh();
  };

  const letter = (letter) => {
    if (firstLetter != letter) {
      setFirstLetter(letter);
      return <Typography>{letter.toUpperCase()}</Typography>;
    } else {
      return <></>;
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{ pb: 7, height: "100%", position: "relative" }}
    >
      <Box sx={{ mt: 2 }}>
        <List>
          {dataVocabulary.map((form, key) => (
            <React.Fragment key={key}>
              {(key == 0 ||
                dataVocabulary[key].word.charAt(0) !==
                  dataVocabulary[key - 1].word.charAt(0)) && (
                <Divider
                  textAlign="right"
                  sx={{ color: "#aaa", fontSize: 12, fontWeight: 700, my: 1 }}
                >
                  {form.word.charAt(0).toUpperCase()}
                </Divider>
              )}
              <CustomListItem
                key={form.id}
                form={form}
                openEdit={() => {
                  openEditWord(form);
                }}
                openView={() => {
                  openViewWord(form);
                }}
                sx={{
                  bgcolor: key % 2 === 0 ? "#ededed8a" : "#fff",
                  minHeight: 60,
                  pr: 0,
                  pl: 1,
                  pb: "4px",
                  border: "1px solid #ededed8a",
                }}
              />
            </React.Fragment>
          ))}
        </List>
      </Box>

      <ModalEdit
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        form={dataModalEditView}
        setForm={setDataModalEditView}
        deleteRegistry={deleteRegistry}
        refresh={refresh}
      />

      <ModalView
        open={openModaView}
        setOpen={setOpenModaView}
        form={dataModalEditView}
      />
    </Container>
  );
};

ListItems.propTypes = {
  dataVocabulary: PropTypes.array.isRequired,
  setDataVocabulary: PropTypes.func.isRequired,
  refresh: PropTypes.func,
};

ListItems.defaultProps = {
  refresh: () => {},
};

export default ListItems;

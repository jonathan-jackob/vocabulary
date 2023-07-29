import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Container, Divider, List } from "@mui/material";
import ModalEdit from "./Modal/ModalEdit";
import ModalView from "./Modal/ModalView";
import CustomListItem from "@Components/Vocabulary/VocabularyListItem";
import useVocabulary from "@Hooks/useVocabulary";
import useForm from "@Hooks/useForm";

const ListItems = ({ dataVocabulary, setDataVocabulary, refresh }) => {
  const vocabulary = useVocabulary();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModaView, setOpenModaView] = useState(false);
  const Formulario = useForm();

  const openEditWord = (form) => {
    Formulario.setAllData(form);
    setOpenModalEdit(true);
  };

  const openViewWord = (form) => {
    Formulario.setAllData(form);
    setOpenModaView(true);
  };

  const deleteRegistry = (id) => {
    let arrVocabulary = vocabulary.getVocabulary();
    const filter = arrVocabulary.filter((item) => {
      return item.id !== id;
    });

    setDataVocabulary(filter);
    vocabulary.setVocabulary(filter);
    refresh();
  };

  const CustomListItemStyles = (key) => ({
    bgcolor: key % 2 === 0 ? "#ededed8a" : "#fff",
    minHeight: 60,
    pr: 0,
    pl: 1,
    pb: "4px",
    border: "1px solid #ededed8a",
  });

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
                sx={CustomListItemStyles(key)}
              />
            </React.Fragment>
          ))}
        </List>
      </Box>

      <ModalEdit
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        Formulario={Formulario}
        deleteRegistry={deleteRegistry}
        refresh={refresh}
      />

      <ModalView
        open={openModaView}
        setOpen={setOpenModaView}
        form={Formulario.data}
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

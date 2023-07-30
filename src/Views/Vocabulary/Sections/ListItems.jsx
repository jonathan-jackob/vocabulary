import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Divider, List } from "@mui/material";
import ModalEdit from "./Modal/ModalEdit";
import ModalView from "./Modal/ModalView";
import useVocabulary from "Hooks/useVocabulary";
import useOpen from "Hooks/useOpen";
import VocabularyListItem from "../Components/VocabularyListItem";

const ListItems = ({ dataVocabulary, refresh }) => {
  const modalEditOpen = useOpen();
  const modalViewOpen = useOpen();
  const Formulario = useVocabulary();

  const openEditWord = (form) => {
    Formulario.setAllData(form);
    modalEditOpen.open();
  };

  const openViewWord = (form) => {
    Formulario.setAllData(form);
    modalViewOpen.open();
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
                  textAlign="left"
                  sx={{ color: "#aaa", fontSize: 12, fontWeight: 700, my: 1 }}
                >
                  {form.word.charAt(0).toUpperCase()}
                </Divider>
              )}
              <VocabularyListItem
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
        status={modalEditOpen.status}
        close={modalEditOpen.close}
        Formulario={Formulario}
        refresh={refresh}
      />

      <ModalView
        status={modalViewOpen.status}
        close={modalViewOpen.close}
        form={Formulario.data}
      />
    </Container>
  );
};

ListItems.propTypes = {
  dataVocabulary: PropTypes.array.isRequired,
  refresh: PropTypes.func,
};

ListItems.defaultProps = {
  refresh: () => {},
};

export default ListItems;

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  List,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import CustomListItem from "./Components/VocabularyListItem";
import ModalAdd from "./Sections/Modal/ModalAdd";
import ModalEdit from "./Sections/Modal/ModalEdit";

import formInit from "./dataSturcture/word";
import TitleBar from "./Sections/TitleBar";

function App() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [dataVocabulary, setDataVocabulary] = useState([]);
  const [dataModalEdit, setDataModalEdit] = useState(formInit);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    if (!openModalAdd) {
      const LS = localStorage.getItem("vocabulary");

      if (LS != null) {
        const objData = JSON.parse(LS);
        if (searchWord.trim() == "") {
          setDataVocabulary(objData);
        } else {
          setDataVocabulary(
            objData.filter((item) => {
              const word = String(item.word).toLowerCase();
              const search = searchWord.trim().toLowerCase();
              return word.includes(search);
            })
          );
        }
      }
    }
  }, [openModalAdd, openModalEdit, openDrawer, searchWord]);

  const deleteRegistry = (id) => {
    const filter = dataVocabulary.filter((item) => {
      return item.id !== id;
    });

    setDataVocabulary(filter);

    localStorage.setItem("vocabulary", JSON.stringify(filter));
  };

  const openEditWord = (form) => {
    setDataModalEdit(form);
    setOpenModalEdit(true);
  };

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          bgcolor: "#fff",
          boxShadow: "0px 3px 10px 0px rgba(0,0,0,.5)",
        }}
      >
        <TitleBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <Grid
          container
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ pb: 1, pt: 1 }}
        >
          <Grid item xs={8} md={10}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              type="search"
              value={searchWord}
              onChange={(event) => {
                setSearchWord(event.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <ModalAdd open={openModalAdd} setOpen={setOpenModalAdd} />
          </Grid>
        </Grid>
      </Box>
      <Container
        maxWidth={false}
        sx={{ pb: 7, height: "100%", position: "relative" }}
      >
        <Box sx={{ mt: 2 }}>
          <List>
            {dataVocabulary.map((form, key) => (
              <CustomListItem
                form={form}
                key={form.id}
                openEdit={() => {
                  openEditWord(form);
                }}
                deleteItem={deleteRegistry}
                color={key % 2 == 0}
              />
            ))}
          </List>
        </Box>

        <ModalEdit
          open={openModalEdit}
          setOpen={setOpenModalEdit}
          form={dataModalEdit}
          setForm={setDataModalEdit}
        />
      </Container>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Fab,
  Grid,
  InputAdornment,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { Search, Favorite } from "@mui/icons-material";
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

  useEffect(() => {
    if (!openModalAdd) {
      const LS = localStorage.getItem("vocabulary");
      if (LS != null) {
        setDataVocabulary(JSON.parse(LS));
      }
    }
  }, [openModalAdd, openModalEdit, openDrawer]);

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
      <TitleBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Container maxWidth={false} sx={{ pb: 7, pt: 2, height: "100%" }}>
        <Grid
          container
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={8} md={10}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              type="search"
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
        <List>
          {dataVocabulary.map((form) => (
            <CustomListItem
              form={form}
              key={form.id}
              openEdit={() => {
                openEditWord(form);
              }}
              deleteItem={deleteRegistry}
            />
          ))}
        </List>

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

import {
  Container,
  Grid,
  InputAdornment,
  List,
  TextField,
  Typography,
} from "@mui/material";
import CustomListItem from "./Components/VocabularyListItem";
import ModalAdd from "./Sections/Modal/ModalAdd";
import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ModalEdit from "./Sections/Modal/ModalEdit";

import formInit from "./dataSturcture/word";

function App() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [dataVocabulary, setDataVocabulary] = useState([]);
  const [dataModalEdit, setDataModalEdit] = useState(formInit);

  useEffect(() => {
    if (!openModalAdd) {
      const LS = localStorage.getItem("vocabulary");
      if (LS != null) {
        setDataVocabulary(JSON.parse(LS));
      }
    }
  }, [openModalAdd, openModalEdit]);

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
      <Typography
        variant="h1"
        sx={{
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          py: 2,
          mb: 1,
          bgcolor: "primary.main",
          color: "light.main",
          boxShadow: "0px 3px 10px 0px rgba(0,0,0,.5)",
        }}
      >
        VOCABULARY
      </Typography>
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

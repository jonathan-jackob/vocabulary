import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { MoreVertOutlined, Search } from "@mui/icons-material";
import CustomListItem from "../Components/VocabularyListItem";
import ModalAdd from "../Sections/Modal/ModalAdd";
import ModalEdit from "../Sections/Modal/ModalEdit";

import formInit from "../dataSturcture/word";
import DrawerVocabulary from "../Sections/DrawerVocabulary";
import getVocabularyData from "../Functions/getVocabularyData";
import saveVocabularyData from "../Functions/saveVocabularyData";

function Vocabulary() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [dataVocabulary, setDataVocabulary] = useState([]);
  const [dataModalEdit, setDataModalEdit] = useState(formInit);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    if (!openModalAdd) {
      const objData = getVocabularyData();
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
  }, [openModalAdd, openModalEdit, openDrawer, searchWord]);

  const deleteRegistry = (id) => {
    let jsonVocabulary = getVocabularyData();
    const filter = jsonVocabulary.filter((item) => {
      return item.id !== id;
    });

    setDataVocabulary(filter);

    saveVocabularyData(filter);
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
            position: "relative",
          }}
        >
          VOCABULARY
          <IconButton
            sx={{
              position: "absolute",
              right: 10,
              top: 0,
              bottom: 0,
              color: "light.main",
            }}
            onClick={() => {
              setOpenDrawer(true);
            }}
          >
            <MoreVertOutlined />
          </IconButton>
          <DrawerVocabulary open={openDrawer} setOpen={setOpenDrawer} />
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ p: 1 }}
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
          deleteRegistry={deleteRegistry}
        />
      </Container>
    </>
  );
}

export default Vocabulary;

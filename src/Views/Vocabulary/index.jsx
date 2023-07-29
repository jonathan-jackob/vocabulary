import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { MoreVertOutlined, Search } from "@mui/icons-material";
import ModalAdd from "./Sections/Modal/ModalAdd";
import DrawerVocabulary from "./Sections/DrawerVocabulary";
import ListItems from "./Sections/ListItems";
import useVocabulary from "@Hooks/useVocabulary";

function Vocabulary() {
  const [dataVocabulary, setDataVocabulary] = useState([]);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [freshData, setFreshData] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const vocabulary = useVocabulary();

  useEffect(() => {
    if (!openModalAdd) {
      const objData = vocabulary.getVocabulary();
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
  }, [freshData, searchWord]);

  const refresh = () => {
    setFreshData((value) => !value);
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
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          bgcolor: "#fff",
          boxShadow: "0px 3px 10px 0px rgba(0,0,0,.5)",
        }}
      >
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
            <ModalAdd
              open={openModalAdd}
              setOpen={setOpenModalAdd}
              refresh={refresh}
            />
          </Grid>
        </Grid>
      </Box>

      <ListItems
        dataVocabulary={dataVocabulary}
        setDataVocabulary={setDataVocabulary}
        refresh={refresh}
      />
    </>
  );
}

export default Vocabulary;

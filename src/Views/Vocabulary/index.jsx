import { useEffect, useState } from "react";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { MoreVertOutlined, PostAddOutlined } from "@mui/icons-material";
import DrawerVocabulary from "./Sections/DrawerVocabulary";
import ListItems from "./Sections/ListItems";
import ModalAdd from "./Sections/Modal/ModalAdd";
import SearchVocabulary from "./Sections/SearchVocabulary";
import useVocabulary from "@Hooks/useVocabulary";
import useOpen from "../../Hooks/useOpen";

function Vocabulary() {
  const modalAddOpen = useOpen();
  const drawerOpen = useOpen();
  const [dataVocabulary, setDataVocabulary] = useState([]);
  const [freshData, setFreshData] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [filter, setFilter] = useState("all");
  const vocabulary = useVocabulary();

  useEffect(() => {
    let objData = vocabulary.getVocabulary();

    if (filter !== "all") {
      objData = objData.filter((item) => item.types[filter]);
    }

    if (searchWord.trim() !== "") {
      objData = objData.filter((item) => {
        const word = String(item.word).toLowerCase();
        const search = searchWord.trim().toLowerCase();
        return word.includes(search);
      });
    }
    setDataVocabulary(objData);
  }, [freshData, modalAddOpen.status, searchWord, filter]);

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
          onClick={drawerOpen.open}
        >
          <MoreVertOutlined />
        </IconButton>
        <DrawerVocabulary
          status={drawerOpen.status}
          close={drawerOpen.close}
          refresh={refresh}
        />
      </Typography>

      <SearchVocabulary
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        filter={filter}
        setFilter={setFilter}
      />

      <ListItems
        dataVocabulary={dataVocabulary}
        setDataVocabulary={setDataVocabulary}
        refresh={refresh}
      />

      <Button
        aria-label="add word"
        sx={{
          position: "fixed",
          bottom: 35,
          right: 15,
          zIndex: 1,
          p: 0,
          minWidth: 44,
          minHeight: 44,
          borderRadius: "50%",
        }}
        color="primary"
        variant="contained"
        onClick={modalAddOpen.open}
      >
        <PostAddOutlined />
      </Button>

      <Grid item xs={4} md={2}>
        <ModalAdd
          status={modalAddOpen.status}
          close={modalAddOpen.close}
          refresh={refresh}
        />
      </Grid>
    </>
  );
}

export default Vocabulary;

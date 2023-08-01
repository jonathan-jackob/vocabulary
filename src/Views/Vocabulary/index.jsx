import { useEffect, useState } from "react";
import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import { MoreVertOutlined, PostAddOutlined } from "@mui/icons-material";
import DrawerSettings from "../Sections/DrawerSettings";
import ListItems from "./Sections/ListItems";
import ModalAdd from "./Sections/Modal/ModalAdd";
import SearchVocabulary from "./Sections/SearchVocabulary";
import useOpen from "Hooks/useOpen";
import useLocalStorage from "Hooks/useLocalStorage";

function Vocabulary() {
  const modalAddOpen = useOpen();
  const drawerOpen = useOpen();
  const vocabulary = useLocalStorage("vocabulary");
  const showWithoutData = useOpen();
  const [dataVocabulary, setDataVocabulary] = useState([]);
  const [freshData, setFreshData] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let objData = vocabulary.getDataJSON();
    const conFiltro = filter !== "all";
    const conBusqueda = searchWord.trim() !== "";

    if (conFiltro) {
      objData = objData.filter((item) => item.types[filter]);
    }

    if (conBusqueda) {
      objData = objData.filter((item) => {
        const word = String(item.word).toLowerCase();
        const search = searchWord.trim().toLowerCase();
        return word.includes(search);
      });
    }
    if ((conFiltro || conBusqueda) && objData.length === 0) {
      showWithoutData.open();
    } else {
      showWithoutData.close();
    }
    setDataVocabulary(objData);
  }, [freshData, modalAddOpen.status, searchWord, filter]);

  const refresh = () => {
    setFreshData(!freshData);
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
        <DrawerSettings
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

      {dataVocabulary.length > 0 && (
        <ListItems
          dataVocabulary={dataVocabulary}
          setDataVocabulary={setDataVocabulary}
          refresh={refresh}
        />
      )}

      {showWithoutData.isShow() && (
        <Divider
          textAlign="center"
          sx={{
            color: "default.light",
            mt: 3,
          }}
        >
          No results.
        </Divider>
      )}

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

      <ModalAdd
        status={modalAddOpen.status}
        close={modalAddOpen.close}
        refresh={refresh}
      />
    </>
  );
}

export default Vocabulary;

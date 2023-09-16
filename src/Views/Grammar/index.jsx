import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { MoreVertOutlined, NoteAdd, Search } from "@mui/icons-material";
import useOpen from "Hooks/useOpen";
import AddModal from "./Sections/Modals/AddGrammar";
import useLocalStorage from "Hooks/useLocalStorage";
import ListsGrammar from "./Sections/ListsGrammar";
import DrawerSettings from "Views/Sections/DrawerSettings";

const Grammar = () => {
  const modalAddOpen = useOpen();
  const drawerOpen = useOpen();
  const update = useOpen();
  const showWithoutData = useOpen();
  const grammar = useLocalStorage("grammar");
  const [dataGrammar, setDataGrammar] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    let objData = grammar.getDataJSON();

    const conBusqueda = searchWord.trim() !== "";

    if (conBusqueda) {
      objData = objData.filter((item) => {
        const title = String(item.title).toLowerCase();
        const search = searchWord.trim().toLowerCase();
        return title.includes(search);
      });
    }

    if (conBusqueda && objData.length === 0) {
      showWithoutData.open();
    } else {
      showWithoutData.close();
    }
    setDataGrammar(objData);
  }, [update.status, modalAddOpen.status, searchWord]);

  return (
    <>
      <Paper
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
        elevation={8}
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
          GRAMMAR
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
            refresh={update.toggle}
          />
        </Typography>

        <Grid
          container
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ p: 1 }}
        >
          <Grid item xs={12}>
            <TextField
              label="search"
              size="small"
              type="search"
              variant="outlined"
              onChange={({ target }) => {
                setSearchWord(target.value);
              }}
              value={searchWord}
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
        </Grid>
      </Paper>

      <Box px={2} mt={4} pb={10}>
        <ListsGrammar data={dataGrammar} update={update} />
      </Box>

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
        <NoteAdd />
      </Button>

      <AddModal
        status={modalAddOpen.status}
        close={modalAddOpen.close}
        callbackSave={update.toggle}
      />
    </>
  );
};

Grammar.propTypes = {};

export default Grammar;

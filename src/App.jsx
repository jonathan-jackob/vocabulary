import {
  Container,
  Grid,
  InputAdornment,
  List,
  TextField,
  Typography,
} from "@mui/material";
import CustomListItem from "./Components/VocabularyListItem";
import Modal from "./Sections/Modal";
import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [dataVocabulary, setDataVocabulary] = useState([]);
  useEffect(() => {
    if (!openModal) {
      const LS = localStorage.getItem("vocabulary");
      if (LS != null) {
        setDataVocabulary(JSON.parse(LS));
      }
    }
  }, [openModal]);

  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          py: 1,
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
            <Modal open={openModal} setOpen={setOpenModal} />
          </Grid>
        </Grid>
        <List>
          {dataVocabulary.map((element) => (
            <CustomListItem {...element} key={element.id} />
          ))}
        </List>

        {/* <Navegador tab={tab} setTab={setTab} /> */}
      </Container>
    </>
  );
}

export default App;

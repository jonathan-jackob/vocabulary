import { useRef, useState } from "react";
import { Box, Button, Container, Divider, Icon, List } from "@mui/material";
import CustomListItem from "./Components/CustomListItem";
import Navegador from "./Sections/Navegador";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";

function App() {
  const [tab, setTab] = useState(0);
  const ref = useRef(null);

  return (
    <>
      <Container sx={{ pb: 7, pt: 2, backgroundColor: "danger" }} ref={ref}>
        <Box textAlign="right">
          <Button variant="outlined">
            Add <PostAddOutlinedIcon />
          </Button>
        </Box>
        <List>
          <CustomListItem
            title="holi"
            image="https://psicoterapeutas.eu/imagenes-psicoterapeutas-eu/tests-objetivos.png"
          />
          <Divider />
        </List>

        <Navegador tab={tab} setTab={setTab} />
      </Container>
    </>
  );
}

export default App;

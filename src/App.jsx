import { useEffect, useState } from "react";

import Vocabulary from "./views/Vocabulary";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { ChecklistOutlined, MenuBookOutlined } from "@mui/icons-material";
import Grammar from "./Views/Grammar";

function App() {
  const [tab, setTab] = useState(0);
  return (
    <>
      {tab == 0 && <Vocabulary />}
      {tab == 1 && <Grammar />}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={tab}
          onChange={(event, val) => {
            setTab(val);
          }}
          component="nav"
        >
          <BottomNavigationAction
            label="Vocabulary"
            icon={<MenuBookOutlined />}
          />
          <BottomNavigationAction
            label="Grammar"
            icon={<ChecklistOutlined />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default App;

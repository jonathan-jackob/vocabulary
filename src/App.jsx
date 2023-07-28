import { useEffect, useState } from "react";

import Vocabulary from "./views/Vocabulary";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { ChecklistOutlined, MenuBookOutlined } from "@mui/icons-material";
import Grammar from "./Views/Grammar";

function App() {
  const tabLocal = localStorage.getItem("tab");
  const [tab, setTab] = useState(tabLocal == null ? 0 : parseInt(tabLocal));

  const handleTab = (event, value) => {
    setTab(value);
    localStorage.setItem("tab", value);
  };

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
          onChange={handleTab}
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

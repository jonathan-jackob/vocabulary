import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { ChecklistOutlined, MenuBookOutlined } from "@mui/icons-material";

const Navegador = ({ tab, setTab, ...others }) => {
  return (
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
        <BottomNavigationAction label="Grammar" icon={<ChecklistOutlined />} />
      </BottomNavigation>
    </Paper>
  );
};

export default Navegador;

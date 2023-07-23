import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import AccessibilityOutlinedIcon from "@mui/icons-material/AccessibilityOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";

const Navegador = ({ tab, setTab, ...others }) => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={tab}
        onChange={(event, val) => {
          setTab(val);
        }}
      >
        <BottomNavigationAction
          label="All"
          icon={<DensitySmallOutlinedIcon />}
          color="red"
        />
        <BottomNavigationAction
          label="Nouns"
          icon={<AccessibilityOutlinedIcon />}
        />
        <BottomNavigationAction label="Verbs" icon={<SyncOutlinedIcon />} />
        <BottomNavigationAction label="Adverbs" />
      </BottomNavigation>
    </Paper>
  );
};

export default Navegador;

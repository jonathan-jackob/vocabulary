import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import AccessibilityOutlinedIcon from "@mui/icons-material/AccessibilityOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import {
  CheckOutlined,
  ConnectWithoutContactOutlined,
  Inventory2Outlined,
} from "@mui/icons-material";

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
        sx={{ mx: 0, border: 1, px: 0 }}
      >
        <BottomNavigationAction
          label="All"
          showLabel={tab == 0}
          icon={<DensitySmallOutlinedIcon />}
          sx={{ mx: 0, border: 1, px: 0 }}
        />
        <BottomNavigationAction
          label="Nouns"
          showLabel={tab == 1}
          icon={<AccessibilityOutlinedIcon />}
          sx={{ mx: 0, border: 1, px: 0 }}
        />
        <BottomNavigationAction
          label="Verbs"
          showLabel={tab == 2}
          icon={<SyncOutlinedIcon />}
          sx={{ mx: 0, border: 1, px: 0 }}
        />
        <BottomNavigationAction
          label="Adjetives"
          showLabel={tab == 3}
          icon={<CheckOutlined />}
          sx={{ mx: 0, border: 1, px: 0 }}
        />
        <BottomNavigationAction
          label="Prepositions"
          showLabel={tab == 4}
          icon={<Inventory2Outlined />}
          sx={{ m: 0, border: 1 }}
        />
        <BottomNavigationAction
          label="Adverbs"
          showLabel={tab == 5}
          icon={<ConnectWithoutContactOutlined />}
          sx={{ m: 0, border: 1 }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Navegador;

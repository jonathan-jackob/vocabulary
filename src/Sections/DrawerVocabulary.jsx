import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { DownloadOutlined, UploadOutlined } from "@mui/icons-material";

const DrawerVocabulary = ({ open, setOpen }) => {
  const closeDrawer = () => {
    setOpen(false);
  };

  const refInput = useRef(null);

  const backupData = () => {
    const data = localStorage.getItem("vocabulary");
    if (data !== null) {
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "vocabulary.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      closeDrawer();
    }
  };

  const handleChange = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      if (
        confirm("Se eliminaran los registros existentes, ¿deseas continuar?")
      ) {
        // console.log(e.target.result);
        localStorage.setItem("vocabulary", e.target.result);
      }
    };
  };

  return (
    <Drawer anchor="right" open={open} onClose={closeDrawer}>
      <Box sx={{ width: 250 }} role="presentation" onKeyDown={closeDrawer}>
        <List>
          <ListItem key={1} disablePadding>
            <ListItemButton onClick={backupData}>
              <ListItemIcon>
                <DownloadOutlined />
              </ListItemIcon>
              <ListItemText primary="Export data (Backup)" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem key={2} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <UploadOutlined />
              </ListItemIcon>
              <label>
                <ListItemText primary="Import data" />
                <input
                  type="file"
                  accept="application/JSON"
                  className="d-none"
                  hidden
                  ref={refInput}
                  onChange={handleChange}
                />
              </label>
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Drawer>
  );
};

DrawerVocabulary.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default DrawerVocabulary;

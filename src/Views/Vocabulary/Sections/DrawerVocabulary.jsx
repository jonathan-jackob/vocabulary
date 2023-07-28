import React from "react";
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
import getVocabularyData from "@Functions/getVocabularyData";
import saveVocabularyData from "@Functions/saveVocabularyData";

const DrawerVocabulary = ({ open, setOpen }) => {
  const closeDrawer = () => {
    setOpen(false);
  };

  const addZero = (num) => (num < 10 ? "0" + num : num);

  const date = () => {
    const dateObj = new Date();
    let date = "";
    date += dateObj.getFullYear();
    date += addZero(dateObj.getMonth() + 1); // getMonth() retorna de 0-11
    date += addZero(dateObj.getDate());
    date += addZero(dateObj.getHours());
    date += addZero(dateObj.getMinutes());
    date += addZero(dateObj.getSeconds());

    return date;
  };

  const backupData = () => {
    const data = getVocabularyData();
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "vocabulary_" + date() + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeDrawer();
  };

  const handleChange = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      if (
        confirm("Se eliminaran los registros existentes, ¿deseas continuar?")
      ) {
        saveVocabularyData(JSON.parse(e.target.result));
        closeDrawer();
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

          <label>
            <ListItem key={2} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <UploadOutlined />
                </ListItemIcon>
                <ListItemText primary="Import data" />
                <input
                  type="file"
                  accept="application/JSON"
                  className="d-none"
                  hidden
                  onChange={handleChange}
                />
              </ListItemButton>
            </ListItem>
          </label>
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

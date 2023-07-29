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
import useVocabulary from "../../../Hooks/useVocabulary";

const DrawerVocabulary = ({ status, close, refresh }) => {
  const vocabulary = useVocabulary();
  const closeDrawer = () => {
    close();
    refresh();
  };

  const addZero = (num) => (num < 10 ? "0" + num : num);

  const date = () => {
    const dateObj = new Date();
    let date = "";
    date += dateObj.getFullYear();
    date += "_" + addZero(dateObj.getMonth() + 1); // getMonth() retorna de 0-11
    date += "_" + addZero(dateObj.getDate());
    date += addZero(dateObj.getHours());
    date += addZero(dateObj.getMinutes());
    date += addZero(dateObj.getSeconds());

    return date;
  };

  const backupData = () => {
    const data = vocabulary.getVocabulary();
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
        vocabulary.setVocabulary(JSON.parse(e.target.result));
        closeDrawer();
      }
    };
  };

  return (
    <Drawer anchor="right" open={status} onClose={closeDrawer}>
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
  status: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  refresh: PropTypes.func,
};
DrawerVocabulary.defaultProps = {
  refresh: () => {},
};
export default DrawerVocabulary;

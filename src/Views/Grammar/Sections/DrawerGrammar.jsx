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
import useLocalStorage from "Hooks/useLocalStorage";
import generateHashDate from "Functions/generateHashDate";
import useBackup from "Hooks/useBackup";

const DrawerGrammar = ({ status, close, refresh }) => {
  const vocabulary = useLocalStorage("grammar");
  const backup = useBackup();
  const closeDrawer = () => {
    close();
    refresh();
  };

  const backupData = () => {
    const data = vocabulary.getDataJSON();
    backup.downloadJSON(data, "grammar_" + generateHashDate());
    closeDrawer();
  };

  const handleChange = (event) => {
    backup.loadFile(event, (e) => {
      if (
        confirm("Se eliminaran los registros existentes, ¿deseas continuar?")
      ) {
        vocabulary.setDataJSON(JSON.parse(e.target.result));
        closeDrawer();
      }
    });
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

DrawerGrammar.propTypes = {
  status: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  refresh: PropTypes.func,
};
DrawerGrammar.defaultProps = {
  refresh: () => {},
};
export default DrawerGrammar;

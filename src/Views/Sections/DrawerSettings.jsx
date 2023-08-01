import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { DownloadOutlined, UploadOutlined } from "@mui/icons-material";
import useLocalStorage from "Hooks/useLocalStorage";
import generateHashDate from "Functions/generateHashDate";
import useBackup from "Hooks/useBackup";

const DrawerSettings = ({ status, close, refresh }) => {
  const vocabulary = useLocalStorage("vocabulary");
  const grammar = useLocalStorage("grammar");

  const backup = useBackup();
  const closeDrawer = () => {
    close();
    refresh();
  };

  const backupData = () => {
    const data = {
      vocabulary: vocabulary.getDataJSON(),
      grammar: grammar.getDataJSON(),
    };
    backup.downloadJSON(data, "vocabulary_" + generateHashDate());
    closeDrawer();
  };

  const handleChange = (event) => {
    backup.loadFile(event, (e) => {
      if (
        confirm("Se eliminaran los registros existentes, ¿deseas continuar?")
      ) {
        const data = JSON.parse(e.target.result);
        if (typeof data.vocabulary === "object") {
          vocabulary.setDataJSON(data.vocabulary);
        }

        if (typeof data.grammar === "object") {
          grammar.setDataJSON(data.grammar);
        }

        closeDrawer();
      }
    });
  };

  return (
    <Drawer anchor="right" open={status} onClose={closeDrawer}>
      <Box sx={{ width: 250 }} role="presentation" onKeyDown={closeDrawer}>
        <List
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                textAlign: "center",
              }}
            >
              Settings
            </ListSubheader>
          }
        >
          <Divider />
          <ListItem key={1} disablePadding>
            <ListItemButton onClick={backupData}>
              <ListItemText primary="Export data (Backup)" />
              <DownloadOutlined sx={{ color: "default.main" }} />
            </ListItemButton>
          </ListItem>
          <Divider />

          <label>
            <ListItem key={2} disablePadding>
              <ListItemButton>
                <ListItemText primary="Import data" />
                <UploadOutlined sx={{ color: "default.main" }} />
              </ListItemButton>
            </ListItem>
            <input
              type="file"
              accept="application/JSON"
              className="d-none"
              hidden
              onChange={handleChange}
            />
          </label>
          <Divider />
        </List>
      </Box>
    </Drawer>
  );
};

DrawerSettings.propTypes = {
  status: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  refresh: PropTypes.func,
};
DrawerSettings.defaultProps = {
  refresh: () => {},
};
export default DrawerSettings;

import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { EditOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import getTypesWord from "../Functions/getTypesWord";
import ChipCustomType from "./ChipCustomType";
import sinImagen from "../assets/no-disponible.png";

const VocabularyListItem = ({ form, openEdit, openView, ...others }) => {
  const getTitle = () => {
    return (
      <Typography fontSize={14} variant="subtitle2">
        {form.word}
        {form.spanish !== "" && (
          <Typography fontSize={14} variant="subtitle1" component="span">
            {" - " + form.spanish}
          </Typography>
        )}
      </Typography>
    );
  };

  const getSecondary = () => {
    const typesWord = getTypesWord(form.types);

    return (
      <>
        <Box>
          {typesWord.map((type, key) => (
            <ChipCustomType
              key={key}
              type={type}
              sx={{ ml: key == 0 ? "0" : "4px", fontSize: 9 }}
            />
          ))}
        </Box>
        {form.comment != "" && (
          <Typography fontSize={10} variant="subtitle1" component="small">
            {form.comment}
          </Typography>
        )}
      </>
    );
  };

  return (
    <>
      <ListItem disablePadding {...others}>
        <ListItemAvatar>
          <Avatar
            alt="Travis Howard"
            src={form.image.trim() != "" ? form.image : sinImagen}
            variant="square"
          />
        </ListItemAvatar>
        <ListItemText primary={getTitle()} secondary={getSecondary()} />

        {typeof openView === "function" && (
          <ListItemIcon sx={{ minWidth: 36 }}>
            <RemoveRedEyeOutlined
              onClick={openView}
              sx={{ cursor: "pointer" }}
              color="success"
            />
          </ListItemIcon>
        )}

        {typeof openEdit === "function" && (
          <ListItemIcon sx={{ minWidth: 36, ml: 1 }}>
            <EditOutlined
              onClick={openEdit}
              sx={{ cursor: "pointer" }}
              color="info"
            />
          </ListItemIcon>
        )}
      </ListItem>
      <Divider />
    </>
  );
};

VocabularyListItem.propTypes = {
  form: PropTypes.object.isRequired,
  openEdit: PropTypes.func,
  openView: PropTypes.func,
};

export default VocabularyListItem;

import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { EditOutlined } from "@mui/icons-material";

const VocabularyListItem = ({ form, openEdit, deleteItem, color }) => {
  const getTitle = () => {
    let typesWord = "";
    for (const type in form.types) {
      if (Object.hasOwnProperty.call(form.types, type)) {
        if (form.types[type]) {
          typesWord += typesWord != "" ? " - " : "";
          typesWord += type.toUpperCase();
        }
      }
    }

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
    let typesWord = "";
    for (const type in form.types) {
      if (Object.hasOwnProperty.call(form.types, type)) {
        if (form.types[type]) {
          typesWord += typesWord != "" ? ", " : "";
          typesWord += type.toUpperCase();
        }
      }
    }

    return (
      <>
        <Typography
          fontSize={10}
          variant="subtitle2"
          component="span"
          sx={{ display: "block" }}
        >
          {typesWord}
        </Typography>
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
      <ListItem
        disablePadding
        sx={{ bgcolor: color ? "#eee" : "#fff", px: 2, minHeight: 60 }}
      >
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={form.image} variant="square" />
        </ListItemAvatar>
        <ListItemText primary={getTitle()} secondary={getSecondary()} />

        {typeof openEdit === "function" && (
          <ListItemIcon sx={{ minWidth: 36 }}>
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
  deleteItem: PropTypes.func,
};

VocabularyListItem.defaultProps = {};

export default VocabularyListItem;

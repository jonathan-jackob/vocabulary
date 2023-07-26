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
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

const VocabularyListItem = ({ form, openEdit, deleteItem, color }) => {
  let title = form.word + (form.spanish != "" ? ` (${form.spanish})` : "");

  const getSecondary = () => {
    let secondary = "";
    for (const type in form.types) {
      if (Object.hasOwnProperty.call(form.types, type)) {
        if (form.types[type]) {
          secondary += secondary != "" ? ", " : "";
          secondary += type.toUpperCase();
        }
      }
    }

    return (
      <>
        <Typography sx={{ display: "inline" }} component="span" fontSize={12}>
          {secondary}
        </Typography>
        {form.comment != "" && " - " + form.comment}
      </>
    );
  };

  const deleteRegistry = () => {
    deleteItem(form.id);
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
        <ListItemText primary={title} secondary={getSecondary()} />

        {typeof openEdit === "function" && (
          <ListItemIcon sx={{ minWidth: 36 }}>
            <EditOutlined
              onClick={openEdit}
              sx={{ cursor: "pointer" }}
              color="info"
            />
          </ListItemIcon>
        )}
        {typeof deleteItem === "function" && (
          <ListItemIcon sx={{ minWidth: 36 }}>
            <DeleteOutline
              onClick={deleteRegistry}
              sx={{ cursor: "pointer" }}
              color="danger"
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

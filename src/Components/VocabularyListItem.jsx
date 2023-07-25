import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  DeleteOutline,
  EditOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

const VocabularyListItem = ({ form, openEdit, deleteItem }) => {
  let title = form.word + (form.spanish != "" ? ` (${form.spanish})` : "");

  const getSecondary = () => {
    let secondary = "";
    for (const type in form.types) {
      if (Object.hasOwnProperty.call(form.types, type)) {
        if (form.types[type]) {
          secondary += secondary != "" ? " ," : "";
          secondary += type;
        }
      }
    }
    return secondary;
  };

  const deleteRegistry = () => {
    deleteItem(form.id);
  };
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={form.image} variant="square" />
        </ListItemAvatar>
        <ListItemText primary={title} secondary={getSecondary()} />
        <ListItemIcon>
          <VisibilityOutlined color="success" />
        </ListItemIcon>
        {typeof openEdit === "function" && (
          <ListItemIcon>
            <EditOutlined
              onClick={openEdit}
              sx={{ cursor: "pointer" }}
              color="info"
            />
          </ListItemIcon>
        )}
        {typeof deleteItem === "function" && (
          <ListItemIcon>
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

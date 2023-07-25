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
import { EditOutlined, VisibilityOutlined } from "@mui/icons-material";

const CustomListItem = ({ word, spanish, image, types }) => {
  let title = word + (spanish != "" ? ` (${spanish})` : "");

  const getSecondary = () => {
    let secondary = "";
    for (const type in types) {
      if (Object.hasOwnProperty.call(types, type)) {
        if (types[type]) {
          secondary += secondary != "" ? " ," : "";
          secondary += type;
        }
      }
    }
    return secondary;
  };

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={image} variant="square" />
        </ListItemAvatar>
        <ListItemText primary={title} secondary={getSecondary()} />
        <ListItemIcon>
          <VisibilityOutlined color="success" />
        </ListItemIcon>
        <ListItemIcon>
          <EditOutlined color="info" />
        </ListItemIcon>
      </ListItem>
      <Divider />
    </>
  );
};

CustomListItem.propTypes = {
  word: PropTypes.string.isRequired,
  spanish: PropTypes.string,
  image: PropTypes.string,
  types: PropTypes.object,
};

export default CustomListItem;

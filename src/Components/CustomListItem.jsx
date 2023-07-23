import React from "react";
import PropTypes from "prop-types";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const CustomListItem = ({ title, image }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="Travis Howard" src={image} />
      </ListItemAvatar>
      <ListItemText primary={title} secondary="second" />
    </ListItem>
  );
};

CustomListItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CustomListItem;

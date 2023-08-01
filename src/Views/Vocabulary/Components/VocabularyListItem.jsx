import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { BorderColor } from "@mui/icons-material";
import sinImagen from "Assets/no-image.png";
import ChipTypesActive from "./ChipTypesActive";

const VocabularyListItem = ({ form, openEdit, openView, ...others }) => {
  const getTitle = () => {
    return (
      <Typography
        fontSize={14}
        variant="subtitle2"
        component="label"
        sx={{ cursor: "pointer" }}
      >
        {form.word}
        {form.pronounce && (
          <Typography
            fontSize={14}
            variant="subtitle1"
            component="span"
            sx={{ cursor: "pointer" }}
          >
            {" / " + form.pronounce + ""}
          </Typography>
        )}
      </Typography>
    );
  };

  const getSecondary = () => {
    return (
      <>
        {form.spanish && (
          <Typography
            fontSize={14}
            variant="subtitle1"
            component="label"
            sx={{ display: "block", lineHeight: 1.2, cursor: "pointer" }}
          >
            {form.spanish}
          </Typography>
        )}
        <Box
          component="span"
          sx={{
            display: "flex",
            gap: "3px 5px",
            flexWrap: "wrap",
            mt: "5px",
          }}
        >
          <ChipTypesActive
            types={form.types}
            sx={{
              fontSize: 7,
              minWidth: 55,
              textAlign: "center",
            }}
          />
        </Box>
      </>
    );
  };

  return (
    <>
      <ListItem disablePadding {...others}>
        <ListItemAvatar
          sx={{
            px: 0,
            mx: 0,
          }}
        >
          <Avatar
            onClick={openView}
            alt={form.word}
            src={form.image.trim() === "" ? sinImagen : form.image}
            variant="square"
            sx={{
              px: 0,
              mx: 0,
              cursor: "pointer",
            }}
          />
        </ListItemAvatar>
        <ListItemText onClick={openView} sx={{ cursor: "pointer" }}>
          {getTitle()}
          {getSecondary()}
        </ListItemText>

        {typeof openEdit === "function" && (
          <ListItemIcon sx={{ minWidth: 36, ml: 1 }}>
            <BorderColor
              onClick={openEdit}
              sx={{ cursor: "pointer" }}
              color="default.light"
            />
          </ListItemIcon>
        )}
      </ListItem>
    </>
  );
};

VocabularyListItem.propTypes = {
  form: PropTypes.object.isRequired,
  openEdit: PropTypes.func,
  openView: PropTypes.func,
};

export default VocabularyListItem;

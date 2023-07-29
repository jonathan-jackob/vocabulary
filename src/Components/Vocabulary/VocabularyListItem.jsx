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
import { EditOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import getTypesWord from "@Functions/getTypesWord";
import sinImagen from "@Assets/no-disponible.png";
import ChipCustomType from "./ChipCustomType";

const VocabularyListItem = ({ form, openEdit, openView, ...others }) => {
  const getTitle = () => {
    return (
      <Typography fontSize={14} variant="subtitle2" component="label">
        {form.word}
        {form.pronounce && (
          <Typography fontSize={14} variant="subtitle1" component="span">
            {" / " + form.pronounce + ""}
          </Typography>
        )}
      </Typography>
    );
  };

  const getSecondary = () => {
    const typesWord = getTypesWord(form.types);

    return (
      <>
        {form.spanish && (
          <Typography
            fontSize={14}
            variant="subtitle1"
            component="label"
            sx={{ display: "block", lineHeight: 1.2 }}
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
          {typesWord.map((type, key) => (
            <ChipCustomType
              key={key}
              type={type}
              sx={{
                fontSize: 7,
                minWidth: 50,
                textAlign: "center",
              }}
            />
          ))}
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
            alt={form.word}
            src={form.image.trim() ? form.image : sinImagen}
            variant="square"
            sx={{
              px: 0,
              mx: 0,
            }}
          />
        </ListItemAvatar>
        <ListItemText>
          {getTitle()}
          {getSecondary()}
        </ListItemText>

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
      {/* <Divider /> */}
    </>
  );
};

VocabularyListItem.propTypes = {
  form: PropTypes.object.isRequired,
  openEdit: PropTypes.func,
  openView: PropTypes.func,
};

export default VocabularyListItem;

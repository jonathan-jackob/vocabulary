import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  Typography,
} from "@mui/material";
import getTypesWord from "../../Functions/getTypesWord";
import ChipCustomType from "../../Components/ChipCustomType";
import sinImagen from "../../assets/no-disponible.png";

const ModalView = ({ open, setOpen, form }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const getTypes = () => {
    return getTypesWord(form.types);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            title={
              <>
                {form.word}
                {form.pronounce && (
                  <Typography
                    fontSize={20}
                    variant="subtitle1"
                    component="span"
                    // sx={{ fontStyle: "italic" }}
                  >
                    {" / " + form.pronounce}
                  </Typography>
                )}
              </>
            }
            subheader={form.spanish}
          />
          <Box
            sx={{
              minWidth: "300px",
              position: "relative",
              bgcolor: "#eee",
            }}
          >
            <CardMedia
              component="img"
              image={form.image == "" ? sinImagen : form.image}
              alt="Paella dish"
              sx={{
                height: "auto",
                width: "100%",
                objectFit: "cover",
                aspectRatio: "2/1.7",
              }}
            />
          </Box>
          <CardContent>
            {getTypes().map((type, key) => (
              <ChipCustomType
                key={key}
                type={type}
                sx={{ ml: key == 0 ? "0" : "4px" }}
              />
            ))}

            <Typography
              variant="body2"
              component="pre"
              sx={{
                mt: 2,
                py: "3px",
                px: "5px",
                borderRadius: "5px",
                color: "#606060",
                overflow: "auto",
              }}
            >
              {form.comment ? form.comment : "No comment."}
            </Typography>
          </CardContent>

          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Button onClick={handleClose}>Close</Button>
          </CardActions>
        </Card>
      </Dialog>
    </>
  );
};

ModalView.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

export default ModalView;

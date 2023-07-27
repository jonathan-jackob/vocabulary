import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ModalView() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>dfe</Button>
      <Dialog open={open} onClose={handleClose}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://imagekit.androidphoria.com/wp-content/uploads/como-buscar-una-imagen-en-facebook-con-una-foto.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              lkdwe
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
}

import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import sinImagen from "Assets/no-image.png";
import DialogContent from "@mui/material/DialogContent";
import getTypesWord from "Functions/getTypesWord";
import ChipCustomType from "Views/Vocabulary/Components/ChipCustomType";

const ModalView = ({ status, close, form }) => {
  const handleClose = () => {
    close();
  };

  const getTypes = () => {
    return getTypesWord(form.types);
  };

  return (
    <>
      <Dialog open={status} onClose={handleClose} scroll="paper">
        <CardHeader
          sx={{ pb: 1 }}
          title={
            <>
              {form.word}
              {form.pronounce && (
                <Typography fontSize={20} variant="subtitle1" component="span">
                  {" / " + form.pronounce}
                </Typography>
              )}
            </>
          }
          subheader={form.spanish}
        />
        <DialogContent sx={{ p: 0 }}>
          <Card sx={{ maxWidth: 345 }}>
            <Paper
              elevation={3}
              sx={{
                minWidth: "300px",
                position: "relative",
                bgcolor: "#eee",
                borderRadius: 0,
              }}
            >
              <CardMedia
                component="img"
                image={form.image == "" ? sinImagen : form.image}
                alt="Paella dish"
                sx={{
                  height: "auto",
                  width: "100%",
                  objectFit: form.image == "" ? "scale-down" : "cover",
                  aspectRatio: "2/1.7",
                  borderRadius: 0,
                }}
              />
            </Paper>

            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px 4px",
                  flexDirection: "row",
                  textAlign: "center",
                  justifyContent: "end",
                }}
              >
                {getTypes().map((type, key) => (
                  <ChipCustomType
                    key={key}
                    type={type}
                    sx={{ minWidth: "15%", fontSize: 10 }}
                  />
                ))}
              </Box>

              {form.examples.length > 1 && (
                <TableContainer component={Paper} sx={{ mt: 2 }}>
                  <Table aria-label="table examples">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ py: "5px", textAlign: "center" }}>
                          {form.examples.length === 2 ? "Example" : "Examples"}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {form.examples.map((example, key) => (
                        <React.Fragment key={key}>
                          {example && (
                            <TableRow
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{ py: "4px" }}
                              >
                                {example}
                              </TableCell>
                            </TableRow>
                          )}
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}

              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  py: "3px",
                  px: "5px",
                  borderRadius: "5px",
                  color: "#606060",
                  overflow: "auto",
                }}
              >
                {form.comment ? form.comment : ""}
              </Typography>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

ModalView.propTypes = {
  status: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

export default ModalView;

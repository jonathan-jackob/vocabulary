import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import useVocabulary from "../../../Hooks/useVocabulary";

const SearchVocabulary = ({ searchWord, setSearchWord, filter, setFilter }) => {
  const Formulario = useVocabulary();
  const filtros = ["all", ...Object.keys(Formulario.getTypes())];

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        bgcolor: "#fff",
        borderRadius: 0,
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ p: 1 }}
      >
        <Grid item xs={7} md={10}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            type="search"
            value={searchWord}
            onChange={(event) => {
              setSearchWord(event.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={5} md={2}>
          <FormControl size="small" fullWidth>
            <InputLabel id="select-filter-label">Filter</InputLabel>
            <Select
              labelId="select-filter-label"
              id="select-filter"
              value={filter}
              label="Filter"
              onChange={handleChange}
              sx={{
                fontSize: 12,
                minHeight: 40,
              }}
            >
              {filtros.map((filtro, key) => (
                <MenuItem
                  key={key}
                  value={filtro}
                  sx={{ minHeight: 30, fontSize: 12, justifyContent: "center" }}
                >
                  {String(filtro).toUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

SearchVocabulary.propTypes = {};

export default SearchVocabulary;

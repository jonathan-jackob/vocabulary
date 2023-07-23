import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { cyan, green, grey, orange, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    success: {
      main: green[700],
    },
    info: {
      main: cyan[700],
    },
    warning: {
      main: orange[700],
    },
    danger: {
      main: red[900],
    },
    light: {
      main: grey[100],
    },
    dark: {
      main: grey[900],
    },
  },
});

function Theme(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

export default Theme;

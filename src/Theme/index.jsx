import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { cyan, green, grey, orange, red, teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[600],
    },
    success: {
      light: green[500],
      main: green[700],
      dark: green[900],
    },
    info: {
      light: cyan[400],
      main: cyan[700],
      dark: cyan[900],
    },
    warning: {
      main: orange[700],
    },
    danger: {
      light: red[500],
      main: red["A700"],
      dark: red[900],
    },
    light: {
      main: grey[100],
    },
    dark: {
      main: grey[900],
    },
    default: {
      main: grey[700],
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

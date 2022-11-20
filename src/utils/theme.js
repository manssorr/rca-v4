import { createTheme } from "@mui/material";

import { green, purple } from "@mui/material/colors";
import defaultStyles from "./defaultStyles";

const mainTheme = createTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    allVariants: {
      color: defaultStyles.colors.main,
    },
    fontFamily: [
      "Noto Sans",
      "-apple-system",
      '"Helvetica Neue"',
      '"Apple Color Emoji"',
      "sans-serif",
      '"Segoe UI Symbol"',
      '"Segoe UI"',
      "BlinkMacSystemFont",
      "Roboto",
      "Arial",
      '"Segoe UI Emoji"',
    ].join(","),
  },
});

export default mainTheme;

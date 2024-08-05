// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6", // Example primary color
    },
    secondary: {
      main: "#19857b", // Example secondary color
    },
    background: {
      default: "#fff", // Background color for the app
      paper: "#ffff", // Background color for components like Card
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 100,
    },
    h1: {
      fontWeight: 1000,
    },
    h4: {
      fontWeight: 100,
    },
    h5: {
      fontWeight: 100,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;

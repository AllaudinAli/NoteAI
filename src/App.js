import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Box } from "@mui/material";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Box id="home" sx={{}}>
        <Home />
      </Box>
      <Box id="about-us">
        <About />
      </Box>
      <Box id="services">
        <Services />
      </Box>
      <Box id="contact-us">
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;

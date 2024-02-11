import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import MeetingSummarizer from "./components/MeetingSummarizer"; // Make sure to create this component
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/MeetingSummarizer" element={<Box><MeetingSummarizer /></Box>} />
          <Route
            index
            element={
              <Box>
                <Box id="home">
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
              </Box>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Methodology from "./pages/Methodology";
import MeetingSummarizer from "./pages/MeetingSummarizer"; // Make sure to create this component
import SummaryPage from "./pages/summary";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fontsource/roboto'; 


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route
            path="/MeetingSummarizer"
            element={
              <Box>
                <MeetingSummarizer />
              </Box>
            }
          />
          <Route path="/summary" element={<SummaryPage />} />
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
                <Box id="methodology">
                  <Methodology />
                </Box>
                <Box id="services">
                  <Services />
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

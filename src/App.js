import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./pages/Home";
import AboutOne from "./pages/About_one";
import AboutTwo from "./pages/About_two";
import AboutThree from "./pages/About_three";
import AboutFour from "./pages/About_four";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import MeetingSummarizer from "./pages/MeetingSummarizer"; // Make sure to create this component
import SummaryPage from "./pages/summary";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/roboto";

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
          <Route path="/summary" index element={<SummaryPage />} />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            index
            element={
              <Box>
                <Box id="home">
                  <Home />
                </Box>
                <Box id="about-us">
                  <AboutOne />
                </Box>
                <Box id="about-us">
                  <AboutTwo />
                </Box>
                <Box id="about-us">
                  <AboutThree />
                </Box>
                <Box id="about-us">
                  <AboutFour />
                </Box>
                <Box id="footer">
                  <Footer />
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

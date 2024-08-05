import React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import BasicButtons from "../components/Button";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          height: "auto",
          backgroundImage: 'url("home.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          pt: 5,
        }}
      >
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" color="white" style={{ padding: "25%" }}>
              Automate your meeting notes
              <Typography variant="h6" color="#cccfcd">
                <br />
                NoteAI is an advanced AI-powered tool specifically designed to
                streamline the automation and summarization of meeting notes.
              </Typography>
              <br />
              <BasicButtons />
            </Typography>
          </Grid>
          {!isMobile && (
            <Grid item xs={12} md={6}>
              <img
                src="/Header_Image.png"
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  margin: "15% 0 0 0",
                }}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
}

export default Home;

import React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";
import BasicButtons from "../components/Button";
function Home() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh", // Ensures at least full viewport height coverage
          height: "auto", // Adjusts based on content size
          backgroundImage: 'url("home.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundAttachment: "fixed",
          pt: 5,
        }}
      >
        <Grid container spacing={4} justifyContent="center">
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
          <Grid item xs={12} md={6}>
            {/* <img
              src=""
              alt="Flowchart"
              style={{
                maxWidth: "50%",
                height: "auto",
                margin: "0 0 0 0",
              }}
            /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;

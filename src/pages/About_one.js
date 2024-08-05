import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function AboutOne() {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexGrow: 1,
        padding: "20px",
        bgcolor: "white",
      }}
    >
      <Grid
        container
        spacing={10}
        alignItems="center"
        justifyContent="center"
        padding="2%"
      >
        <Grid item xs={10} md={5}>
          <Typography variant="h4" color="teal">
            Speech-to-Text Conversion
          </Typography>
          <br />
          <br />
          <Typography variant="h6" gutterBottom color={"black"}>
            <li>
              Advanced Audio Processing: Utilizes OpenAI's Whisper technology to
              convert meeting audio and video into accurate text.
            </li>
            <br />
            <li>
              Language Support: Supports multiple languages, ensuring
              accessibility for diverse teams.
            </li>
            <br />
            <li>
              Real-Time Transcription: Capable of transcribing live meetings,
              providing instant textual outputs for immediate review.
            </li>

            <br />
            <br />
          </Typography>
        </Grid>
        <Grid item xs={10} md={5}>
          <img
            src="about_one.jpg" // Replace with the path to your image
            alt="About Us"
            style={{
              maxWidth: "80%",
              height: "auto",
              borderRadius: "10%", // Optional: if you want rounded corners
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutOne;

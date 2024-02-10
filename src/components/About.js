import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "50vh", // Adjust based on your navbar's height if it's different than 64px
        display: "flex",
        flexGrow: 1,
        padding: "20px",
      }}
    >
      <Grid
        container
        spacing={30}
        alignItems="center"
        justifyContent="center"
        padding="2%"
      >
        <Grid item xs={10} md={5}>
          <Typography variant="h4" color="teal">
            About Us
          </Typography>
          <br />
          <br />
          <Typography variant="h6" gutterBottom color={"#77787d"}>
            In today's fast-paced business landscape, efficient
            documentation and dissemination of meeting outcomes are paramount.
            This project introduces an innovative approach to streamline this
            process through the application of cutting-edge language models. By
            leveraging state-of-the-art Large Language Models (LLM), we present
            a novel system for the automated generation of meeting minutes.
            Project Structure The project comprises three key modules:
            <br /><br />
          </Typography>
          <Typography variant="h6" gutterBottom color={"#77787d"}>
            <ul>
              Module Transcription: This module focuses on the conversion of
              spoken words into text, ensuring an accurate representation of the
              meeting's content.
            </ul>
            <ul>
              Module Text Summarization: Using advanced language models, this
              module synthesizes comprehensive summaries of the meeting content,
              capturing key discussions and decisions.
            </ul>
            <ul>
              Module Output: This module generates the final meeting minutes in
              multiple formats, including bullet points, flowcharts, and
              detailed reports.
            </ul>
            <ul>
              Module Chatbot: This module the answer all the questions relevent
              to that meeting
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={10} md={5}>
          <img
            src="about1.png" // Replace with the path to your image
            alt="About Us"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "12px", // Optional: if you want rounded corners
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;

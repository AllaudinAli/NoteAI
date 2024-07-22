import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexGrow: 1,
        padding: "20px",
        bgcolor: "#0D0D0D",
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
          <Typography variant="h6" gutterBottom color={"white"}>
            In today's fast-paced business landscape, efficient documentation
            and dissemination of meeting outcomes are paramount. This project
            introduces an innovative approach to streamline this process through
            the application of cutting-edge language models. By leveraging
            state-of-the-art Large Language Models (LLM), we present a novel
            system for the automated generation of meeting minutes. Project
            Structure The project comprises four key modules:
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid item xs={10} md={5}>
          <img
            src="about_img.jpg" // Replace with the path to your image
            alt="About Us"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "50%", // Optional: if you want rounded corners
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;

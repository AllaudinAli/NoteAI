import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function AboutThree() {
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
            Visual Flowchart Creation
          </Typography>
          <br />
          <br />
          <Typography variant="h6" gutterBottom color={"black"}>
            <li>
              Automated Flowcharts: Automatically generates flowcharts from
              summarized text to visually represent meeting dynamics.
            </li>
            <br />
            <li>
              Interactive Elements: Offers interactive flowcharts that allow
              users to delve deeper into specific points of interest.
            </li>
            <br />
            <li>
              Enhanced Comprehension: Visual aids help in better understanding
              and retention of the meeting’s flow and key outcomes.
            </li>

            <br />
            <br />
          </Typography>
        </Grid>

        <Grid item xs={10} md={5}>
          <img
            src="about_threee.jpg" // Replace with the path to your image
            alt="About Us"
            style={{
              maxWidth: "90%",
              height: "auto",
              borderRadius: "10%", // Optional: if you want rounded corners
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutThree;

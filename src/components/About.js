import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ flexGrow: 1, height: "50%" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6} style={{ backgroundColor: 'black', color: 'white', padding: '200px' }}>
          <Typography variant="h4" gutterBottom color="teal">
            About Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Here you can add your "About Us" content. Describe the mission, vision,
            and values of HorrizonAI. You might also include information about the
            team, history of the project, or any other relevant information that you
            believe will engage your visitors.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="about.jpg" alt="About Us" style={{ width: '110%', height: '100%', objectFit: 'cover' }} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;

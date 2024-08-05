import React from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";

function AboutTwo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        <Grid item xs={10} md={5} order={isMobile ? 2 : 1}>
          <img
            src="summary_mod.png"
            alt="About Us"
            style={{
              maxWidth: "80%",
              height: "auto",
              borderRadius: "10%",
            }}
          />
        </Grid>
        <Grid item xs={10} md={5} order={isMobile ? 1 : 2}>
          <Typography variant="h4" color="teal">
            Intelligent Summarization
          </Typography>
          <br />
          <br />
          <Typography variant="h6" gutterBottom color={"black"}>
            <li>
              Bullet Point Summaries: Converts detailed transcripts into
              concise, easy-to-read bullet points.
            </li>
            <br />
            <li>
              Contextual Awareness: Summarizes key points, decisions, and action
              items, maintaining the context of the discussion.
            </li>
            <br />
            <li>
              Efficiency: Saves time and effort in distilling lengthy
              discussions into essential information.
            </li>
            <br />
            <br />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutTwo;

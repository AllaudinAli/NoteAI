import React from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";

function AboutFour() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
        spacing={0}
        alignItems="center"
        justifyContent="center"
        padding="2%"
      >
        <Grid item xs={10} md={5} order={isMobile ? 2 : 1}>
          <img
            src="about_four.jpg"
            alt="About Us"
            style={{
              maxWidth: "70%",
              height: "auto",
              borderRadius: "10%",
            }}
          />
        </Grid>
        <Grid item xs={10} md={5} order={isMobile ? 1 : 2}>
          <Typography variant="h4" color="teal">
            Q&A Bot
          </Typography>
          <br />
          <br />
          <Typography variant="h6" gutterBottom color={"black"}>
            <li>
              Interactive Engagement: Allows users to ask questions about the
              meeting's content and receive immediate, context-aware answers.
            </li>
            <br />
            <li>
              Machine Learning Integration: Continuously learns from new inputs
              to improve accuracy and relevance of responses.
            </li>
            <br />
            <li>
              Accessibility: Makes post-meeting clarifications simpler, ensuring
              all participants are on the same page regardless of their meeting
              attendance.
            </li>
            <br />
            <br />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutFour;

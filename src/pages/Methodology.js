import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function Methodology() {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexGrow: 1,
      }}
    >
      <Grid container alignItems="center" justifyContent="center" padding="10%">
        <Typography variant="h2" color="teal" align="center">
          Methodology
        </Typography>
        <Grid item xs={10} md={10}>
          <img
            src="flowchart1.png" // Replace with the path to your image
            alt="About Us"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Methodology;

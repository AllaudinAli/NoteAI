import React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";
import BasicButtons from "./Button";
function Home() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "auto",
          backgroundImage: 'url("home1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          paddingTop: "4px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10} md={5}>
            <Box>
              <Typography
                variant="h2"
                color="white"
                style={{ margin: "20% 0% 60% 10%", padding: "15%" }}
              >
                Automate your meeting notes
                <Typography
                  variant="h6"
                  color="#cccfcd"
                  styles={{ padding: "10%" }}
                >
                  <br />
                  SomethingAI is an AI-powered tool that helps you to automate
                  and summarize your meeting notes
                </Typography>
                <br />
                <BasicButtons />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} md={5}>
            <img
              src="home2.png" // Replace with the path to your image
              alt="About Us"
              style={{
                maxWidth: "100%",
                borderRadius: "12px",
                margin: "20% 0% 0% 40%",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;

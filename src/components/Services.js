import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

const serviceData = [
  {
    title: "Module Transcription",
    description:
      "This module focuses on the conversion of spoken words into text, ensuring an accurate representation of the meeting's content.",
    imageUrl: "service1.png",
  },
  {
    title: "Module Text Summarization",
    description:
      "Using advanced language models, this module synthesizes comprehensive summaries of the meeting content, capturing key discussions and decisions. ",
    imageUrl: "service2.png",
  },
  {
    title: "Module Output",
    description:
      "This module generates the final meeting minutes in multiple formats, including bullet points, flowcharts, and detailed reports.",
    imageUrl: "service3_2.png",
  },
  {
    title: "Module ChatBot",
    description:
      "Respond to any queries or requests made by users in real-time about the summary content",
    imageUrl: "service4_2.png",
  },
];

function Services() {
  return (
    <Box sx={{ flexGrow: 1, margin: "0% 10% 10% 10%" }}>
      <Grid
        container
        spacing={{ xs: 10, md: 10 }}
        columns={{ xs: 2, sm: 8, md: 12, lg: 4 }}
      >
        {serviceData.map((service, index) => (
          <Grid item xs={2} sm={4} md={6} lg={1} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                textAlign: "center",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundImage: `url(${service.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 0,
                paddingBottom: "100%",
              }}
            />
            <br />
            <br />
            <Typography
              variant="h6"
              textAlign={"center"}
              gutterBottom
              component="div"
            >
              {service.title}
            </Typography>
            <Typography variant="body1" textAlign={"center"} color={"#77787d"}>
              {service.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;

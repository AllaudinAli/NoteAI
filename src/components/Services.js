import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

const serviceData = [
  {
    title: "Business Intelligence and Data Analytics",
    description:
      "Data Scrapping and Running ETL Processes, Data Analytics to Provide Valuable Business Insights",
    imageUrl: "service1.png", // Replace with your image path
  },
  {
    title: "Enterprise Machine Learning Solutions",
    description:
      "Build POCs to demonstrate the applicability of ML for business problems, Train ML models to support data-driven business operations.",
    imageUrl: "service2.png",
  },
  {
    title: "LLM Based Business Applications",
    description:
      "Text generation and keyword mapping for search applications, Chatbots and Recommendation bots for E-commerce platforms.",
    imageUrl: "service3_2.png",
  },
  {
    title: "LLM Based Business Applications",
    description:
      "Text generation and keyword mapping for search applications, Chatbots and Recommendation bots for E-commerce platforms.",
    imageUrl: "service4_2.png",
  },
  // Add more items as needed
];


function Services() {
  return (
    <Box sx={{ flexGrow: 1, margin: "10%" }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Our Services
      </Typography>
      <br/><br/><br/><br/><br/>
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
                borderRadius: "50%", // This will make the Paper round
                overflow: "hidden",
                backgroundImage: `url(${service.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 0,
                paddingBottom: "100%", // This maintains the aspect ratio of the Paper
              }}
            /><br/><br/>
            <Typography variant="h6" gutterBottom component="div">
              {service.title}
            </Typography>
            <Typography variant="body2">{service.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;

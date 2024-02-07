import React from 'react';
import { Box, Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';

const serviceData = [
  {
    title: 'Business Intelligence and Data Analytics',
    description: 'Data Scrapping and Running ETL Processes, Data Analytics to Provide Valuable Business Insights',
    imageUrl: 'logo512.png', // Replace with your image path
  },
  {
    title: 'Enterprise Machine Learning Solutions',
    description: 'Build POCs to demonstrate the applicability of ML for business problems, Train ML models to support data-driven business operations.',
    imageUrl: 'logo512.png',
  },
  {
    title: 'LLM Based Business Applications',
    description: 'Text generation and keyword mapping for search applications, Chatbots and Recommendation bots for E-commerce platforms.',
    imageUrl: 'logo512.png',
  },
  {
    title: 'LLM Based Business Applications',
    description: 'Text generation and keyword mapping for search applications, Chatbots and Recommendation bots for E-commerce platforms.',
    imageUrl: 'logo512.png',
  }
  // Add more items as needed
];

function Services() {
  return (
    <Box sx={{ flexGrow: 1, padding: 15 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={10} justifyContent="center">
        {serviceData.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', backgroundColor: 'white', boxShadow: 0 }}>
              <CardMedia
                component="img"
                image={service.imageUrl}
                alt={service.title}
                sx={{ width: '100%', height: 'auto', borderRadius: '50%' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;

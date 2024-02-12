import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

function Contact() {
  return (
    <Box sx={{ flexGrow: 1, height: "auto" }}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "black", color: "white", padding: "50px" }}
        >
          <Typography variant="h4" gutterBottom color="teal">
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            NoteAI,
            <br />
            University of Management and Technology C-II, Johar Town
            <br />
            Lahore, Pakistan
            <br />
            Phone: +92 348 4331435
          </Typography>
          <Link href="mailto:contact@horrizonai.example.com" variant="body1">
            Send us an email
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.680692292669!2d74.29131866266823!3d31.452335827694675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190143f74858d9%3A0xfbed356be41e98f1!2sUniversity%20of%20Management%20%26%20Technology%20Rd%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e1!3m2!1sen!2s!4v1707661805115!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;

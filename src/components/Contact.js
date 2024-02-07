import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

function Contact() {
  return (
    <Box sx={{ flexGrow: 1, height: "50vh" }}>
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
            HorrizonAI Inc.
            <br />
            95 Main Revenue Road,
            <br />
            Block A Revenue Society,
            <br />
            Block D 1 Block A Johar Town
            <br />
            Lahore, Pakistan
            <br />
            Phone: +123 456 7890
          </Typography>
          <Link href="mailto:contact@horrizonai.example.com" variant="body1">
            Send us an email
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4721.328996751226!2d74.28122601926827!3d31.454564796105313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1707311425842!5m2!1sen!2shttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.428034921156!2d74.28018481145376!3d31.454673774136637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190168af1701cd%3A0x7f9a04a77c1c023b!2sMain%20Revenue%20Rd%2C%20Block%20A%20Revenue%20Society%20Block%20A%20Revenue%20Employees%20Cooperative%20Housing%20Society%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e1!3m2!1sen!2s!4v1707311518219!5m2!1sen!2s"
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

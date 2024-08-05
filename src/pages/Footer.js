import React from "react";
import { Box, Container, Typography, IconButton, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box sx={{ bgcolor: "black", color: "#f5f5ff", py: 3 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">Email: info@noteai.com</Typography>
            <Typography variant="body2">Phone: +123 456 7890</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              align="sm-center"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton
                color="inherit"
                href="https://facebook.com"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ pt: 4 }}>
          © {new Date().getFullYear()} NoteAI. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

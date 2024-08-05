import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Container,
} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log(formData); // Print form data to the console for now
    alert("Thank you for contacting us!");
  };

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          height: "auto",
          backgroundImage: 'url("home.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          pt: 5,
        }}
      >
        <Container component="main" maxWidth="sm">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "80vh",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={3}
              sx={{ my: 4, mx: 2, p: 4, width: "100%", maxWidth: "600px" }}
            >
              <ContactMailIcon color="primary" fontSize="large" />
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                color="teal"
              >
                Contact Us
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      required
                      multiline
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Contact;

import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import InputBox from "./InputBox";
import DropBox from "./DropBox";
import TranscriptionBox from "./TranscriptionBox";
function MeetingSummarizer() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleAddLink = (link) => {
    console.log("Adding link:", link);
  };

  const handleFileDrop = (file) => {
    console.log("Dropping file:", file);
  };

  const handleTranscriptionSubmit = (transcription) => {
    console.log("Submitting transcription:", transcription);
  };

  return (
    <Box sx={{ p: 14 }}>
      <Container
        maxWidth="xl"
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          color: "teal",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h2" color={"#595958"} align="center">
          Welcome to Meeting Summarizer
        </Typography>
      </Container>

      <Grid container spacing={7} sx={{ p: 3 }}>
        <Grid item xs={12} md={6}>
          <InputBox onAddLink={handleAddLink} />
          <DropBox onDrop={handleFileDrop} />
          <TranscriptionBox onTranscriptionSubmit={handleTranscriptionSubmit} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              width: "100%",
              height: "30vw",
              backgroundColor: "#cccfcd",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h5"
              backgroundColor="teal"
              p={3}
              color={"white"}
              align="center"
              sx={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            >
              Meeting Summary
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        onClick={handleBackToHome}
        sx={{ backgroundColor: "teal" }}
      >
        Back to Home
      </Button>
    </Box>
  );
}

export default MeetingSummarizer;

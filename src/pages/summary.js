import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button, CircularProgress } from "@mui/material";

function SummaryPage() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating fetching a summary
    setTimeout(() => {
      const fetchedSummary = "Here is the simulated summary of the meeting based on the input provided. It includes key points discussed, decisions made, and action items to follow up.";
      setSummary(fetchedSummary);
      setLoading(false);
    }, 2000);
  }, []);

  const handleBackToInput = () => {
    navigate("/MeetingSummarizer");
  };

  return (
    <Container maxWidth="md" sx={{ p: 4, mt: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Meeting Summary
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ mt: 3, p: 3, border: '1px solid #ddd', borderRadius: '4px' }}>
          <Typography variant="body1">{summary}</Typography>
        </Box>
      )}
      <Button variant="contained" color="primary" onClick={handleBackToInput} sx={{ mt: 2 }}>
        Go Back
      </Button>
    </Container>
  );
}

export default SummaryPage;

import React, { useState, useEffect } from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button, CircularProgress } from "@mui/material";

function SummaryPage() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating fetching a summary
    setTimeout(() => {
      const fetchedSummary = [
        "• The summary will be generated a displayed here"
      ];
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
          {summary.map((line, index) => (
            <Typography key={index} variant="body1" paragraph>{line}</Typography>
          ))}
        </Box>
      )}
      <Button variant="contained" color="primary" onClick={handleBackToInput} sx={{ mt: 2 }}>
        Go Back
      </Button>
    </Container>
  );
}

export default SummaryPage;

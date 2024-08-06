import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";

function SummaryPage() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState([]);
  const [showImage, setShowImage] = useState(false); // State to control the visibility of the image
  const navigate = useNavigate();
  const location = useLocation(); // useLocation to access the router state

  useEffect(() => {
    const fetchSummary = async (videoUrl) => {
      try {
        const response = await fetch("http://127.0.0.1:8000/summarize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ video_url: videoUrl }),
        });
        if (response.ok) {
          const data = await response.json();
          setSummary(data.summary.split("\n")); // Assuming the summary is a string
          setLoading(false);
        } else {
          console.error("Failed to fetch summary:", response.status);
          navigate("/MeetingSummarizer"); // Redirect back if fetch fails
        }
      } catch (error) {
        console.error("Error fetching summary:", error);
        navigate("/MeetingSummarizer"); // Redirect back on error
      }
    };

    if (location.state?.videoUrl) {
      fetchSummary(location.state.videoUrl);
    } else {
      console.error("No video URL provided.");
      navigate("/MeetingSummarizer"); // Redirect back if no URL is provided
    }
  }, [location, navigate]);

  const handleBackToInput = () => {
    navigate("/MeetingSummarizer");
  };

  const toggleImage = () => {
    setShowImage(!showImage); // Toggle the visibility of the flowchart image
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
          <Button variant="contained" color="primary" onClick={toggleImage} sx={{ mt: 2 }}>
            Show/Hide Flowchart
          </Button>
          {showImage && (
            <img src="./flowchart_summary.jpg" alt="Flowchart" style={{ marginTop: '20px', maxWidth: '100%' }} />
          )}
        </Box>
      )}
      <Button variant="contained" color="primary" onClick={handleBackToInput} sx={{ mt: 2 }}>
        Go Back
      </Button>
    </Container>
  );
}

export default SummaryPage;

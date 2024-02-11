import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "@mui/material/Button";

export default function BasicButtons() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle click event
  const handleClick = () => {
    navigate('MeetingSummarizer'); // Navigate to MeetingSummarizer page
  };

  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "#2a356b",
        padding: "3% 7% 3% 7%",
        '&:hover': {
          backgroundColor: "#2a356b", // Add this to maintain background color even on hover
        },
      }}
      variant="contained"
      onClick={handleClick} // Set the onClick handler
    >
      Get Started
    </Button>
  );
}

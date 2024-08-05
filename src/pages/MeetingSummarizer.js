import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import DropBox from "../components/DropBox";
import TranscriptionBox from "../components/TranscriptionBox";
import YouTubeIcon from "@mui/icons-material/YouTube";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import NotesIcon from "@mui/icons-material/Notes";

function MeetingSummarizer() {
  const navigate = useNavigate();
  const [inputType, setInputType] = useState("");
  const [link, setLink] = useState(""); // State to hold the YouTube link or URL
  const [transcription, setTranscription] = useState(""); // State to hold the transcription text

  const handleSubmission = () => {
    if (inputType === "link" && link) {
      navigate("/summary", { state: { videoUrl: link } });
    } else if (inputType === "transcript" && transcription) {
      navigate("/summary", { state: { content: transcription } });
    } else {
      // Handle other input types or show an error
    }
  };

  const renderInputComponent = () => {
    switch (inputType) {
      case "link":
        return (
          <InputBox onSubmit={handleSubmission} link={link} setLink={setLink} />
        );
      case "file":
        return <DropBox onSubmit={handleSubmission} />;
      case "transcript":
        return (
          <TranscriptionBox
            transcription={transcription}
            setTranscription={setTranscription}
          />
        );
      default:
        return null;
    }
  };

  return (
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
      <Container
        maxWidth="lg"
        sx={{ p: { xs: 2, md: 8 }, mt: { xs: 2, md: 4 } }}
      >
        <Typography
          variant="h6"
          align="center"
          color="white"
          gutterBottom
          sx={{ fontSize: { xs: "1.5rem", md: "3rem" } }}
        >
          Welcome to Meeting Summarizer
        </Typography>
        {!inputType && (
          <Grid container spacing={2} justifyContent="center">
            {[
              {
                icon: <YouTubeIcon sx={{ fontSize: { xs: 40, md: 60 } }} />,
                title: "YouTube Link",
                type: "link",
              },
              {
                icon: (
                  <UploadFileIcon
                    sx={{ fontSize: { xs: 40, md: 60 } }}
                    color="primary"
                  />
                ),
                title: "Upload File",
                type: "file",
              },
              {
                icon: (
                  <NotesIcon
                    sx={{ fontSize: { xs: 40, md: 60 } }}
                    color="action"
                  />
                ),
                title: "Enter Transcript",
                type: "transcript",
              },
            ].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <Card
                  raised
                  sx={{
                    height: 300,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f0f0f0",
                    "&:hover": { boxShadow: 6 },
                  }}
                  onClick={() => setInputType(item.type)}
                >
                  <CardActionArea sx={{ height: "100%" }}>
                    <CardContent>
                      {item.icon}
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        {inputType && (
          <>
            {renderInputComponent()}
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleSubmission}
            >
              Next
            </Button>
            <Button variant="text" onClick={() => setInputType("")}>
              Back
            </Button>
          </>
        )}
      </Container>
    </Box>
  );
}

export default MeetingSummarizer;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const TranscriptionBox = ({ onTranscriptionSubmit }) => {
  const [transcription, setTranscription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onTranscriptionSubmit(transcription);
    setTranscription('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        label="Add text transcription"
        multiline
        rows={4}
        variant="outlined"
        value={transcription}
        onChange={(e) => setTranscription(e.target.value)}
      />
      <Button variant="contained" type="submit">Submit</Button>
    </Box>
  );
};

export default TranscriptionBox;

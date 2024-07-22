import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const TranscriptionBox = ({ transcription, setTranscription }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        fullWidth
        label="Add text transcription"
        multiline
        rows={4}
        variant="outlined"
        value={transcription}
        onChange={(e) => setTranscription(e.target.value)}
        InputLabelProps={{
          style: { color: '#fff' } // Changes label text to white
        }}
        InputProps={{
          style: { color: '#fff' }, // Changes input text to white
        }}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
        }}
      />
    </Box>
  );
};

export default TranscriptionBox;

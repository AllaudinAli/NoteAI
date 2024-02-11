import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const InputBox = ({ onAddLink }) => {
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLink(link);
    setLink('');
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
        label="Add YouTube link"
        variant="outlined"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <Button variant="contained" type="submit">Submit</Button>
    </Box>
  );
};

export default InputBox;

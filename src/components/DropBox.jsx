import React from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const DropBox = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box {...getRootProps()} sx={{ border: '1px dashed grey', p: 2, my: 2 }}>
      <input {...getInputProps()} />
      <Button variant="outlined">Drag 'n' drop some files here, or click to select files</Button>
    </Box>
  );
};

export default DropBox;

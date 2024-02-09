import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: 'calc(100vh - 64px)', // Adjust based on your navbar's height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("home.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h2" color="white" style={{ margin: '0 50% 0 0', padding: '10%'}}>Welcome to SomethingAI</Typography>
    </Box>
  );
}

export default Home;

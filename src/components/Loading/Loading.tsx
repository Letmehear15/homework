import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const Loading = () => {
  return (
    <Box
      sx={{ backgroundColor: '#0000003d' }}
      position="absolute"
      top={0}
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  );
};

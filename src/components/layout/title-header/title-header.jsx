import React from 'react';
import { Box, Typography } from '@mui/material';

const TitleHeader = ({ title, subTilte }) => {
  return (
    <Box>
      <Typography variat="h1">
        { title }
      </Typography>
      <Typography variat="h3">
        { subTilte }
      </Typography>
    </Box>
  );
};

export default TitleHeader;
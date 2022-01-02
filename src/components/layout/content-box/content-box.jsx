import React from 'react';
import { Box, Grid, } from '@mui/material';
import TitleHeader from '../title-header/title-header'

const ContentBox = (props) => {
  return (
    <Box>
      <TitleHeader
        title='작업 리스트'
        subTilte='작업할 리스트를 보여줍니다.'
      />
      <Grid container spacing={2}>
        {[...Array(10)].map(v => {
          return (
            <Grid item xs={3}>
              <CarMemo></CarMemo>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
};

export default ContentBox;
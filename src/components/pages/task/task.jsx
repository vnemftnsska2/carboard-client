import React from 'react';
import { Box, Grid, } from '@mui/material';
import CarMemo from '../../car-memo/car-memo';
import TitleHeader from '../../layout/title-header/title-header'

const Task = ({}) => {
  return (
    <Grid container spacing={2}>
      {[...Array(10)].map(v => {
        return (
          <Grid item xs={3}>
            <CarMemo></CarMemo>
          </Grid>
        )
      })}
    </Grid>
  );
};

export default Task;
import React from 'react';
import { Box, Button, Grid, } from '@mui/material';
import TaskMemo from '../../task-memo/task-memo';
import AddTaskIcon from '@mui/icons-material/AddTask';


const Task = ({}) => {
  return (
    <Box>
      <Box sx={{ height: '5em', padding: '1em' }}>
        <Button variant="outlined" endIcon={<AddTaskIcon />}>
          업무 추가
        </Button>
      </Box>
      <Grid container spacing={2}>
        {[...Array(10)].map(v => {
          return (
            <Grid item xs={3}>
              <TaskMemo></TaskMemo>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
};

export default Task;
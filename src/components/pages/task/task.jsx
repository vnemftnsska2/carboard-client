import React, { useState } from 'react';
import { Box, Button, Grid, } from '@mui/material';
import TaskMemo from '../../task-memo/task-memo';
import AddTaskIcon from '@mui/icons-material/AddTask';

// Modal
import TaskModal from '../../task-modal/task-modal';

const Task = ({}) => {
  const [open, setOpen] = useState(false);
  const openTaskModal = () => setOpen(true);
  const closeTaskModal = () => setOpen(false);

  return (
    <Box>
      <Box sx={{ height: '5em', padding: '1em' }}>
        <Button onClick={openTaskModal} variant="outlined" endIcon={<AddTaskIcon />}>
          작업 추가
        </Button>
      </Box>
      <Grid container spacing={2}>
        {[...Array(10)].map(v => {
          return (
            <Grid item xs={12} md={6} lg={3}>
              <TaskMemo></TaskMemo>
            </Grid>
          )
        })}
      </Grid>

      {/* Modal */}
      <TaskModal
        open={open}
        handleClose={closeTaskModal}
      />
    </Box>
  );
};

export default Task;
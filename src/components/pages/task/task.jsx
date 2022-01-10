import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, } from '@mui/material';
import TaskMemo from '../../task-memo/task-memo';
import AddTaskIcon from '@mui/icons-material/AddTask';

// Modal
import TaskModal from '../../task-modal/task-modal';

const Task = ({ taskRepository, }) => {
  const [open, setOpen] = useState(false);
  const [allList, setAllList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  const getTaskList = async () => {
    const data = await taskRepository.asyncTaskList();
    if (!data?.fatal) {
        setAllList(data);
        setTaskList(data);
    }
  };

  const addTask = (task) => {
    const result = taskRepository.ayncAddTask(task);
    console.log(result);
  };

  // Init
  useEffect(getTaskList, [taskRepository]);

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
        {[...Array(10)].map((i, v) => {
          return (
            <Grid item xs={12} md={6} lg={3}>
              <TaskMemo key={i}></TaskMemo>
            </Grid>
          )
        })}
      </Grid>

      {/* Modal */}
      <TaskModal
        open={open}
        addTask={addTask}
        handleClose={closeTaskModal}
      />
    </Box>
  );
};

export default Task;
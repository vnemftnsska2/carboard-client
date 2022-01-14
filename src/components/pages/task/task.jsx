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
  const [updateTask, setUpdateTask] = useState(null);

  const getTaskList = async () => {
    const data = await taskRepository.asyncTaskList();
    if (!data?.fatal) {
      setAllList(data);
      setTaskList(data);
    }
  };

  const addTask = async (task, reset) => {
    const isNewTask = task.idx ? false : true;
    if (isNewTask) {
      const result = await taskRepository.ayncAddTask(task);
      if (result.status === 200) {
        alert('신규 작업이 추가되었습니다 🚙 🚘 🚕');
        closeTaskModal();
        reset();
        getTaskList();
      } else {
        alert('진행중 에러가 발생하였습니다 😡')
      }
    } else {
      alert('UPDATE...!!')
    }
  };

  // Init
  useEffect(getTaskList, [taskRepository]);

  const openTaskModal = (task) => {
    setUpdateTask(task || null);
    setOpen(true)
  };
  const closeTaskModal = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box sx={{ height: '5em', padding: '1em' }}>
        <Button onClick={() => {openTaskModal()}} variant="outlined" endIcon={<AddTaskIcon />}>
          작업 추가
        </Button>
      </Box>
      <Grid container spacing={2}>
        {taskList && taskList.map(v => {
          return (
            <Grid item key={v.idx} xs={12} md={6} lg={3}>
              <TaskMemo
                key={v.idx}
                task={v}
                openUpdateModal={openTaskModal}
              ></TaskMemo>
            </Grid>
          )
        })}
      </Grid>

      {/* Modal */}
      <TaskModal
        open={open}
        addTask={addTask}
        updateTask={updateTask}
        handleClose={closeTaskModal}
      />
    </Box>
  );
};

export default Task;
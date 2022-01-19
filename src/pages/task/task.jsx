import React, { useEffect, useRef, useState } from 'react';
import { 
  Box, 
  Button, 
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Paper,
  TextField,
} from '@mui/material';
// Modal
import TaskModal from '../../components/task-modal/task-modal';
import TaskMemo from '../../components/task-memo/task-memo';

//Icons
import AddTaskIcon from '@mui/icons-material/AddTask';


const Task = ({ taskRepository, }) => {
  const [open, setOpen] = useState(false);
  const [searchStatus, setSearchStatus] = useState(0);
  const keywordRef = useRef();
  const searchBtnRef = useRef();

  const [allList, setAllList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [updateTask, setUpdateTask] = useState(null);

  const getTaskList = async () => {
    const data = await taskRepository.asyncTaskList(searchStatus);
    if (!data?.fatal) {
      setAllList(data);
      setTaskList(data);
    }
  };

  //Search
  const handleClickSearchBtn = e => {
    const keyword = keywordRef.current.value;
    const searchTaskList = allList
      .filter(v => {
        const taskToJson = JSON.stringify(v);
        if (taskToJson.toLowerCase().indexOf(keyword) > -1) {
          return v;
        } else if (taskToJson.indexOf(keyword) > -1) {
          return v;
        }
      });
    setTaskList(searchTaskList);
  };

  const triggerSearchBtn = e => {
    if (e.code === 'Enter') {
      handleClickSearchBtn();
    }
  };

  //Task Action
  const addTask = async (task) => {
    const isNewTask = task.idx ? false : true;
    if (isNewTask) {
      const result = await taskRepository.ayncAddTask(task);
      if (result.status === 200) {
        alert('신규 작업이 추가되었습니다 🚙 🚘 🚕');
        closeTaskModal();
        getTaskList();
      } else {
        alert('진행중 에러가 발생하였습니다 😡')
      }
    } else {
      delete task.rowno;
      const result = await taskRepository.ayncUpdateTask(task);
      if (result.status === 200) {
        alert(`no.${task.idx} 작업이 수정되었습니다 🚙 🚘 🚕`);
        closeTaskModal();
        getTaskList();
      } else {
        alert('진행중 에러가 발생하였습니다 😡')
      }
    }
  };

  const deleteTask = async(task) => {
    const result = await taskRepository.ayncDeleteTask(task);
      if (result.status === 200) {
        alert(`no.${task.idx} 작업이 삭제되었습니다 🗑`);
        closeTaskModal();
        getTaskList();
      } else {
        alert('진행중 에러가 발생하였습니다 😡')
      }
  }

  // Init
  useEffect(getTaskList, [taskRepository, searchStatus]);

  const openTaskModal = (task) => {
    setUpdateTask(task || null);
    setOpen(true)
  };
  const closeTaskModal = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Paper sx={{ marginTop: '10px', padding: '1em 3em 1em 1.5em' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={1}>
            <FormControl variant="standard" sx={{minWidth: 120, }}>
              <InputLabel id="task-status-select-label">작업상태</InputLabel>
              <Select
                labelId="task-status-select-label"
                id="task-status-select"
                name="status_search"
                label="작업상태"
                defaultValue=''
                value={searchStatus}
                onChange={({target: {value}}) => {setSearchStatus(value)}}
              >
                <MenuItem value={0}>전체</MenuItem>
                <MenuItem value={1}>입고예정</MenuItem>
                <MenuItem value={2}>작업전</MenuItem>
                <MenuItem value={3}>금일작업</MenuItem>
                <MenuItem value={4}>작업완료</MenuItem>
                <MenuItem value={5}>출고</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" alignItems="flex-end">
              <TextField
                label="검색"
                type="search"
                variant="standard"
                sx={{minWidth: 150, }}
                inputRef={keywordRef}
                onKeyDown={triggerSearchBtn}
              />
              <Button
                size="small"
                variant="outlined"
                onClick={handleClickSearchBtn}
              >
                검색
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6} lg={8} sx={{textAlign:'right', }}>
            <Button
              ref={searchBtnRef}
              variant="contained"
              sx={{minWidth: '7em', marginTop: '12px'}}
              onClick={() => {openTaskModal()}}
            >
              작업 추가
            </Button>
          </Grid>
        </Grid>
        {/* <Stack direction="row" alignItems="flex-end" justifyContent="space-between" spacing={3}>
        </Stack> */}
      </Paper>
      <Paper sx={{marginTop: '1em', padding: '1em', minHeight: '80vh'}}>
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
          deleteTask={deleteTask}
          handleClose={closeTaskModal}
        />
      </Paper>
    </Box>
  );
};

export default Task;
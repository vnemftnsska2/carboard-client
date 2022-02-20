import React, { useEffect, useRef, useState } from "react";
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
} from "@mui/material";
//Task List
import TaskMemo from "../../components/task-memo/task-memo";
// Modal
import TaskModal from "../../components/task-modal/task-modal";
import ImgViewer from "../../components/img-viewer/img-viewer";

const Task = ({ taskRepository }) => {
  const [allList, setAllList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [updateTask, setUpdateTask] = useState(null);

  const [searchStatus, setSearchStatus] = useState(0);
  const keywordRef = useRef();
  const searchBtnRef = useRef();

  const [open, setOpen] = useState(false);
  const [imgOpen, setImgOpen] = useState(false);
  const [imgFileName, setImgFileName] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTaskList = async () => {
    const data = await taskRepository.asyncTaskList(searchStatus);
    if (!data?.fatal) {
      setAllList(data);
      setTaskList(data);
    }
  };

  //Search
  const handleClickSearchBtn = (e) => {
    const keyword = keywordRef.current.value;
    const searchTaskList = allList.filter((v) => {
      const taskToJson = JSON.stringify(v);
      if (taskToJson.toLowerCase().indexOf(keyword) > -1) {
        return v;
      } else if (taskToJson.indexOf(keyword) > -1) {
        return v;
      }
      return false;
    });
    setTaskList(searchTaskList);
  };

  const triggerSearchBtn = (e) => {
    if (e.code === "Enter") {
      handleClickSearchBtn();
    }
  };

  //Task Action
  const addTask = async (task) => {
    const isNewTask = task.idx ? false : true;
    const formData = new FormData();
    for (let key in task) {
      if (key !== "rowno") {
        formData.append(key, task[key]);
      }
    }

    if (isNewTask) {
      const result = await taskRepository.ayncAddTask(formData);
      if (result.status === 200) {
        alert("신규 작업이 추가되었습니다 🚙 🚘 🚕");
        closeTaskModal();
        getTaskList();
      } else {
        alert("진행중 에러가 발생하였습니다 😡");
      }
    } else {
      const result = await taskRepository.ayncUpdateTask(formData);
      if (result.status === 200) {
        alert(`no.${task.idx} 작업이 수정되었습니다 🚙 🚘 🚕`);
        closeTaskModal();
        getTaskList();
      } else {
        console.log(result);
        alert("진행중 에러가 발생하였습니다 😡");
      }
    }
  };

  const deleteTask = async (task) => {
    const result = await taskRepository.ayncDeleteTask(task);
    if (result.status === 200) {
      alert(`no.${task.idx} 작업이 삭제되었습니다 🗑`);
      closeTaskModal();
      getTaskList();
    } else {
      alert("진행중 에러가 발생하였습니다 😡");
    }
  };

  const deleteReleaseImg = async (idx) => {
    const result = await taskRepository.ayncDeleteReleaseImg(idx);
    if (result.status === 200) {
      getTaskList();
    } else {
      alert("진행중 에러가 발생하였습니다 😡");
    }
  };

  // Init
  useEffect(getTaskList, [taskRepository, searchStatus]);

  const openTaskModal = (task) => {
    setUpdateTask(task || null);
    setOpen(true);
  };
  const closeTaskModal = () => setOpen(false);

  const openImgViewer = (fileName) => {
    console.log(fileName);
    setImgFileName(fileName || "");
    setImgOpen(true);
  };

  const closeImgViewer = () => setImgOpen(false);

  return (
    <Box>
      <Paper sx={{ marginTop: "10px", padding: "1em 3em 1em 1.5em" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={1}>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <InputLabel id="task-status-select-label">작업상태</InputLabel>
              <Select
                labelId="task-status-select-label"
                id="task-status-select"
                name="status_search"
                label="작업상태"
                defaultValue=""
                value={searchStatus}
                onChange={({ target: { value } }) => {
                  setSearchStatus(value);
                }}
              >
                <MenuItem value={0}>전체</MenuItem>
                <MenuItem value={1}>입고예정</MenuItem>
                <MenuItem value={2}>작업전</MenuItem>
                <MenuItem value={3}>금일작업</MenuItem>
                <MenuItem value={4}>작업완료</MenuItem>
                <MenuItem value={5}>기재완료</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" alignItems="flex-end">
              <TextField
                label="검색"
                type="search"
                variant="standard"
                sx={{ minWidth: 150 }}
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
          <Grid item xs={6} md={6} lg={8} sx={{ textAlign: "right" }}>
            <Button
              ref={searchBtnRef}
              variant="contained"
              sx={{ minWidth: "7em", marginTop: "12px" }}
              onClick={() => {
                openTaskModal();
              }}
            >
              작업 추가
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ marginTop: "1em", padding: "1em", minHeight: "80vh" }}>
        <Grid container spacing={2}>
          {taskList &&
            taskList.map((v) => {
              return (
                <Grid item key={v.idx} xs={12} md={6} lg={3}>
                  <TaskMemo
                    key={v.idx}
                    task={v}
                    openUpdateModal={openTaskModal}
                    openImgViewer={openImgViewer}
                  ></TaskMemo>
                </Grid>
              );
            })}
        </Grid>

        {/* Modal */}
        <TaskModal
          open={open}
          addTask={addTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
          deleteImg={deleteReleaseImg}
          handleClose={closeTaskModal}
        />
        <ImgViewer
          open={imgOpen}
          fileName={imgFileName}
          handleClose={closeImgViewer}
        />
      </Paper>
    </Box>
  );
};

export default Task;

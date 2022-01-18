import "./app.css";
import React, { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

// import { Container, Box, CssBaseline, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

// 임시
import Task from "./pages/task/task";
import Login from "./pages/login/login";
import Home from "./pages/home/home";

const drawerWidth = 240;
const App = ({ taskRepository }) => {
  const theme = useTheme();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const handleDrawerOpen = () => {
    setSideBarOpen(true);
  };

  const handleDrawerClose = () => {
    setSideBarOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));


  const user = true;

  return (
    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route element={<Home />}>
        <Route path="task" element={<Task taskRepository={taskRepository}/>} />
      </Route>
    </Routes>
  );
};

export default App;

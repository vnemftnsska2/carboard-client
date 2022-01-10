import "./app.css";
import React, { useState } from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

// LayOut
import Header from "./components/layout/header/header";
import SideBar from "./components/layout/side-bar/side-bar";

// Menu

// 임시
import Task from "./components/pages/task/task";

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

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header
          open={sideBarOpen}
          drawerWidth={drawerWidth}
          handleDrawerOpen={handleDrawerOpen}
        />
        {/* SideBar */}
        <SideBar
          open={sideBarOpen}
          theme={theme}
          drawerWidth={drawerWidth}
          handleDrawerClose={handleDrawerClose}
          DrawerHeader={DrawerHeader}
        />
        <Box sx={{ height: "100vh" }}>
          <DrawerHeader />
          <Task taskRepository={taskRepository} />
        </Box>
      </Box>
    </Container>
  );
};

export default App;

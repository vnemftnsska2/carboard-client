import React, { useState } from 'react';
import { Container, Box, CssBaseline, } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Outlet } from 'react-router-dom';
import { grey, } from '@mui/material/colors';

//Layout
import Header from '../../layout/header/header';
import SideBar from '../../layout/side-bar/side-bar';

const drawerWidth = 240;
const Home = (props) => {
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
    <Container maxWidth={false} sx={{ backgroundColor:grey[100] }}>
      <Box sx={{ display: "flex", backgroundColor:grey[100] }}>
        <CssBaseline />
        {/* Header */}
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
        {/* Contents */}
        <Box sx={{ height: "100vh", width: "100%", backgroundColor:grey[100] }}>
          <DrawerHeader />
          <Outlet />
          {/* <Task taskRepository={taskRepository} /> */}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
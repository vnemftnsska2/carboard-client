import './app.css';
import React, { useState } from 'react';
import { Container, Box, CssBaseline, } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// LayOut
import Header from './components/layout/header/header';
import SideBar from './components/layout/side-bar/side-bar';

// 임시
import Task from './components/pages/task/task';


// Menu


const drawerWidth = 240;
const App = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header
          open={open}
          drawerWidth={drawerWidth}
          handleDrawerOpen={handleDrawerOpen}
        />
        {/* SideBar */}
        <SideBar
          open={open}
          theme={theme}
          drawerWidth={drawerWidth}
          handleDrawerClose={handleDrawerClose}
          DrawerHeader={DrawerHeader}
        />
        <Box sx={{ height: '100vh'}} >
          <DrawerHeader />
          <Task />
        </Box>
      </Box>
    </Container>
  );
}

export default App;

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton} from '@mui/material';
import { styled, } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../static/images/w-logo.png';


const Header = ({ open, handleDrawerOpen, drawerWidth }) => {
  const Header = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <Header position="fixed" open={open}>
      <Toolbar sx={{ backgroundColor: 'black',}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ lineHeight:'0.6'}}>
          <img src={Logo} width="150"/>
        </Typography>
      </Toolbar>
    </Header>
  );
};

export default Header;
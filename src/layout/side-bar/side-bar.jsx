import React from 'react';
import {
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
} from '@mui/material';
import { styled, } from '@mui/material/styles';

//Menu Icons
//Dashboard
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
//공지사항
import CampaignIcon from '@mui/icons-material/Campaign';
//업무지시서
import ListAltIcon from '@mui/icons-material/ListAlt';
//재고관리
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//거래처 관리
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
//사원관리
import PortraitIcon from '@mui/icons-material/Portrait';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
//고객관리
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
//환경설정
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';



//Temp Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const SideBar = ({ handleDrawerClose, DrawerHeader, theme, open, drawerWidth, }) => {
  const SideBar = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
  });

  return (
    <SideBar variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </SideBar>
  );
};

export default SideBar;
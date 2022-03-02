import React from "react";
import {
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

//Menu Icons
//Dashboard
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
//공지사항
import CampaignIcon from "@mui/icons-material/Campaign";
//업무지시서
import ListAltIcon from "@mui/icons-material/ListAlt";
//재고관리
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
//상품가격셋팅
import PriceChangeIcon from "@mui/icons-material/PriceChange";
//카마스터
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
//거래처 관리
import StoreIcon from "@mui/icons-material/Store";
//사원관리
import PortraitIcon from "@mui/icons-material/Portrait";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
//고객관리
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
//환경설정
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

//Temp Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const menuList = [
  {
    icon: <LaptopChromebookIcon />,
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <CampaignIcon />,
    name: "공지사항",
    link: "/notice",
  },
  {
    icon: <ListAltIcon />,
    name: "업무지시서",
    link: "/task",
  },
  {
    icon: <AddShoppingCartIcon />,
    name: "재고관리",
    link: "/inventory",
  },
  {
    icon: <PriceChangeIcon />,
    name: "가격설정",
    link: "/pricing",
  },
  {
    icon: <StoreIcon />,
    name: "거래처",
    link: "/store",
  },
  {
    icon: <ContactPhoneIcon />,
    name: "카마스터",
    link: "/carMaster",
  },
  {
    icon: <ManageAccountsIcon />,
    name: "사원관리",
    link: "/employee",
  },
  {
    icon: <PeopleAltIcon />,
    name: "고객관리",
    link: "/customer",
  },
  {
    icon: <SettingsSuggestIcon />,
    name: "환경설정",
    link: "/setting",
  },
];

const SideBar = ({
  handleDrawerClose,
  DrawerHeader,
  theme,
  open,
  drawerWidth,
}) => {
  const SideBar = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
  });

  return (
    <SideBar variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuList.map((menu, index) => (
          <Link
            to={menu.link}
            key={menu.name}
            style={{ textDecoration: "none" }}
          >
            <ListItem button key={menu.name}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText secondary={menu.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </SideBar>
  );
};

export default SideBar;

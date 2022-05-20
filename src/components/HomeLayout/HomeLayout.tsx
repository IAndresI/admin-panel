import React, { useState } from 'react'
import { Badge, Box, CssBaseline, IconButton, InputBase, List, ListItem, Menu, MenuItem, styled, Toolbar } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import logo from '../../assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import './HomeLayout.scss';
import { useLogoutMutation } from '../../services/authService';
import { useAppDispatch } from '../../store/hooks/redux';
import { authActions } from '../../store/reducers/authSlice';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.sharp,
    duration: ".3s",
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.sharp,
    duration: ".3s",
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8.5)} + 1px)`,
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  boxShadow: "none",
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.sharp,
    duration: ".3s",
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.sharp,
      duration: ".3s",
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': {
      ...openedMixin(theme),
      borderRight: "1px solid var(--color-light-gray)",
      backgroundColor: "var(--background-color-secondary)",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': {
      ...closedMixin(theme),
      borderRight: "1px solid var(--color-light-gray)",
      backgroundColor: "var(--background-color-secondary)",
    },
  }),
}),
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "var(--background-color)",
  '&:hover': {
    backgroundColor: "var(--background-color)",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('all'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledSearch = styled(Search)(({ theme }) => ({
  color: 'var(--color-light-gray)',
  marginLeft: 30,
  borderRadius: 10,
  '& .MuiInputBase-input': {
    width: 400,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 20
  }
}));

const adminTabs = [
  { title: 'Dashboard', icon: <DashboardIcon /> },
  { title: 'Hotels', icon: <CorporateFareIcon /> },
  { title: 'Rooms', icon: <MeetingRoomIcon /> },
  { title: 'Users', icon: <SupervisedUserCircleIcon /> },
  { title: 'Companys', icon: <WorkIcon /> },
]

export default function HomeLayout({ children, darkTheme }) {

  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const menuId = 'primary-search-account-menu';
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={darkTheme ? { '& .MuiPaper-root': { backgroundColor: 'var(--background-color)', color: 'var(--text-color)' } } : null}
    >
      <MenuItem>
        Profile
      </MenuItem>
      <MenuItem
        disabled={isLoading}
        onClick={() => {
          logout(null)
            .then(() => dispatch(authActions.logout()))
          handleMenuClose();
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={darkTheme ? { '& .MuiPaper-root': { backgroundColor: 'var(--background-color)', color: 'var(--text-color)' } } : null}
    >
      <MenuItem>
        <IconButton sx={{ color: 'var(--color-light-gray)' }} size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          sx={{ color: 'var(--color-light-gray)' }}
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          sx={{ color: 'var(--color-light-gray)' }}
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>

      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "var(--background-color-secondary)", height: 91, display: 'flex', justifyContent: 'center', borderBottom: "1px solid var(--color-light-gray)" }}>
        <IconButton className="home__button" onClick={handleDrawerOpen} sx={{ position: 'absolute', left: open ? -1 : 68, right: "auto", border: "1px solid var(--color-light-gray)", borderRadius: "0%" }}>
          {open ? <ChevronLeftIcon sx={{ color: "var(--color-light-gray)" }} /> : <ChevronRightIcon sx={{ color: "var(--color-light-gray)" }} />}
        </IconButton>
        <Toolbar sx={{ marginLeft: open ? "10px" : "78px", }}>
          <StyledSearch>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </StyledSearch>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" sx={{ color: "var(--color-light-gray)" }}>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              sx={{ color: "var(--color-light-gray)" }}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              sx={{ color: "var(--color-light-gray)" }}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              sx={{ color: "var(--color-light-gray)" }}
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMobileMenu}
        {renderMenu}
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ justifyContent: "flex-start", position: "relative", borderRight: "1px solid var(--color-light-gray)" }}>
        <DrawerHeader sx={{ backgroundColor: "var(--background-color-secondary)", height: 90, justifyContent: "flex-start", }}>
          <div className="home__logo">
            <div>
              <img src={logo} width={50} height={50} alt="logo" />
            </div>
            <h2 className="home__name" style={{ opacity: open ? 1 : 0 }}>
              Admin Panel
            </h2>
          </div>
        </DrawerHeader>
        <Divider sx={{ borderColor: "var(--color-light-gray)" }} />
        <List>
          {adminTabs.map(({ title, icon }) => (
            <ListItem key={title} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  color: "#AAAAB6",
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => navigate(`/${title}`)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ color: 'var(--color-light-gray)' }}>
                    {
                      icon
                    }
                  </div>
                </ListItemIcon>
                <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: "var(--color-light-gray)" }} />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                color: "#AAAAB6",
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <div style={{ color: 'var(--color-light-gray)' }}>
                  <AccountCircle />
                </div>
              </ListItemIcon>
              <ListItemText primary="Profile" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                color: "#AAAAB6",
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => {
                logout(null)
                  .then(() => dispatch(authActions.logout()))
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <div style={{ color: 'var(--color-light-gray)' }}>
                  <LogoutIcon />
                </div>
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader sx={{ marginTop: "20px" }} />
        {
          children
        }
      </Box>
    </Box >
  )
}

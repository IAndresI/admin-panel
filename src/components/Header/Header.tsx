import React from 'react'
import { IconButton, styled, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';

export default function Header({ open, setOpen, drawerWidth }) {

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    backgroundColor: "var(--background-color-secondary)",
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['all'], {
      easing: theme.transitions.easing.sharp,
      duration: ".3s",
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    }),
  }));

  return (
    <AppBar position="sticky" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
            color: "var(--text-color-secondary)"
          }}
        >
          <MenuIcon />
        </IconButton>
        Mini variant drawer
      </Toolbar>
    </AppBar>
  )
}
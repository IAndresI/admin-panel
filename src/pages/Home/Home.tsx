import React from 'react'
import './Home.scss';
import { useAppSilector } from '../../store/hooks/redux';
import { useNavigate } from "react-router-dom";
import SideBarDrawer from '../../components/Sidebar/Sidebar';
import { Box, styled } from '@mui/material';
import Header from '../../components/Header/Header';

import './Home.scss';

export default function Home() {

  const isAuth = useAppSilector(state => state.user.isAuth);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  if (!isAuth) {
    navigate("/auth/login")
  }

  const drawerWidth = 240;

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: ".3s",
    }),
    overflowX: 'hidden',
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      marginLeft: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const openedMixin = (theme) => ({
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: ".3s",
    }),
    overflowX: 'hidden',
    marginLeft: drawerWidth
  });

  const MyBox = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
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

  return (
    <div className="app__panel panel">
      <SideBarDrawer drawerWidth={drawerWidth} open={open} setOpen={setOpen} />
      <div className="panel__main">
        <Header drawerWidth={drawerWidth} open={open} setOpen={setOpen} />
        <MyBox open={open} component="main" sx={{ flexGrow: 1, p: 3 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ducimus quas magnam totam iste consequatur, quibusdam adipisci vel illum dolorum quasi. Ipsa cupiditate laudantium natus ipsum ullam ipsam, sed reprehenderit.
          Similique magni maiores eos aut vel dolore quibusdam alias, cumque ut totam modi ipsa id! Adipisci, autem reprehenderit! Ducimus a quis quae nesciunt optio tempore consequatur, sapiente doloribus provident hic!
        </MyBox>
      </div>
    </div>
  )
}

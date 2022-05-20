import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { useEffect, useState } from 'react';
import { authActions } from '../../store/reducers/authSlice';
import { useAuthQuery } from '../../services/authService';
import { useAppDispatch } from '../../store/hooks/redux';
import Fab from '@mui/material/Fab';
import Auth from '../Auth/Auth';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

import './App.scss';

function App() {

  const theme = localStorage.getItem('adminPanelDarkTheme') === 'true';

  const [darkTheme, setDarkTheme] = useState(!!theme || false);
  const { data, isLoading } = useAuthQuery(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(authActions.checkAuth(data));
    }
  }, [data, dispatch])

  if (isLoading) return;

  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    left: 6,
    zIndex: 1200,
    backgroundColor: "var(--background-color)",
    color: "var(--text-color)",
    border: "1px solid var(--text-color)",
    transition: "transform .3s",
    '&:hover': {
      backgroundColor: "var(--background-color)",
      transform: "scale(1.1)"
    },
    '&:active': {
      transform: "scale(1)"
    }
  };

  return (
    <div className="app" data-theme={!!darkTheme ? "light" : "dark"}>
      <Router>
        <Routes>
          <Route path="/*" element={<Home darkTheme={darkTheme} />} />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </Router>
      <Fab
        aria-label="Dark Or Light Mode"
        sx={fabStyle}
        onClick={() => setDarkTheme((prev) => {
          localStorage.setItem('adminPanelDarkTheme', (!prev).toString());
          return !prev;
        })}
      >
        {
          darkTheme ?
            <LightModeIcon />
            :
            <NightlightRoundIcon />
        }
      </Fab>
    </div>

  );
}

export default App;
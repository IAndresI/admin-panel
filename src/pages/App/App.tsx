import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUser from '../CreateUser/CreateUser';
import Home from '../Home/Home';
import List from '../List/List';
import UserPage from '../UserPage/UserPage';
import { useEffect } from 'react';
import { authActions } from '../../store/reducers/authSlice';
import { useAuthQuery } from '../../services/authService';
import { useAppDispatch } from '../../store/hooks/redux';

import './App.scss';
import Auth from '../Auth/Auth';

function App() {

  const { data, isLoading } = useAuthQuery(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(authActions.checkAuth(data));
    }
  }, [data, dispatch])

  if (isLoading) return;

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/users">
            <Route path="" index element={<List />} />
            <Route path=":id" index element={<UserPage />} />
            <Route path="new" index element={<CreateUser />} />
          </Route>
          <Route path="/products">
            <Route path="" index element={<List />} />
            <Route path=":id" index element={<UserPage />} />
            <Route path="new" index element={<CreateUser />} />
          </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
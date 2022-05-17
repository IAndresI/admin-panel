import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUser from '../CreateUser/CreateUser';
import Home from '../Home/Home';
import List from '../List/List';
import Login from '../Login/Login';
import UserPage from '../UserPage/UserPage';
import { useEffect } from 'react';
import { authActions } from '../../store/reducers/authSlice';
import { useAuthMutation } from '../../services/authService';
import { useAppDispatch } from '../../store/hooks/redux';

import './App.scss';




function App() {

  const [auth, { data, error, isLoading }] = useAuthMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      auth(null).unwrap();
    }
  }, [])

  useEffect(() => {
    if (data) {
      dispatch(authActions.checkAuth(data));
    }
  }, [data])



  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" index element={<Login />} />
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
  );
}

export default App;
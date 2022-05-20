import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomeLayout from '../../components/HomeLayout/HomeLayout'
import { useAppSilector } from '../../store/hooks/redux';
import Dashboard from '../Dashboard/Dashboard';
import Hotels from '../Hotels/Hotels';
import Rooms from '../Rooms/Rooms';
import Users from '../Users/Users';
import Companys from '../Companys/Companys';

export default function Home({ darkTheme }) {

  const isAuth = useAppSilector(state => state.user.isAuth);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate("/auth/login")
  }

  return (
    <HomeLayout darkTheme={darkTheme}>
      <div className="app__dashboard dashboard panel">
        <Routes>
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/users" element={<Users />} />
          <Route path="/companys" element={<Companys />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </HomeLayout>
  )
}
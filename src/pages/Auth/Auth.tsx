import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Login from '../../components/Auth/Login/Login'
import Recover from '../../components/Auth/Recover/Recover'
import Registration from '../../components/Auth/Registration/Registration'

import './Auth.scss';

type Props = {}

export default function Auth({ }: Props) {

  return (
    <div className="app__auth auth">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/recover" element={<Recover />} />
      </Routes>
    </div>
  )
}
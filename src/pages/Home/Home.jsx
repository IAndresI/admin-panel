import React from 'react'
import './Home.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="list">list</Link>
      <Link to="login">login</Link>
    </div>
  )
}

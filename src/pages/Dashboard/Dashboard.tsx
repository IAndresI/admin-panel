import { Typography } from '@mui/material'
import React from 'react'
import PanelHeader from '../../components/PanelHeader/PanelHeader'

import './Dashboard.scss'

export default function Dashboard() {
  return (
    <section>
      <PanelHeader title="Dashboard" />
      <div className="panel__main">
        <Typography>Dashboard</Typography>
      </div>
    </section>
  )
}
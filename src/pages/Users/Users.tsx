import { Typography } from '@mui/material'
import React from 'react'
import PanelHeader from '../../components/PanelHeader/PanelHeader'

import './Users.scss'

type Props = {}

export default function Users({ }: Props) {
  return (
    <section>
      <PanelHeader title="Users" />
      <div className="panel__main">
        <Typography>Users</Typography>
      </div>
    </section>
  )
}
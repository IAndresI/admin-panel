import { Typography } from '@mui/material'
import React from 'react'
import PanelHeader from '../../components/PanelHeader/PanelHeader'

import './Rooms.scss'

type Props = {}

export default function Rooms({ }: Props) {
  return (
    <section>
      <PanelHeader title="Rooms" />
      <div className="panel__main">
        <Typography>Rooms</Typography>
      </div>
    </section>
  )
}
import { Typography } from '@mui/material'
import React from 'react'
import PanelHeader from '../../components/PanelHeader/PanelHeader'

import './Hotels.scss'

type Props = {}

export default function Hotels({ }: Props) {
  return (
    <section>
      <PanelHeader title="Hotels" />
      <div className="panel__main">
        <Typography>Hotels</Typography>
      </div>
    </section>
  )
}
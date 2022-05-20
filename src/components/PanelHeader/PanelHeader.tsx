import { Typography } from '@mui/material'
import React from 'react'

import './PanelHeader.scss'

type Props = {
  title: string
}

export default function PanelHeader({ title }: Props) {
  return (
    <div className="panel__header">
      <Typography
        className='panel__header-title'
        sx={{ fontSize: 30, fontWeight: '900' }}
      >
        {title}
      </Typography>
    </div>
  )
}
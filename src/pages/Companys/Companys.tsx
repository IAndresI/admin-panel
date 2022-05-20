import { Typography } from '@mui/material'
import React from 'react'
import PanelHeader from '../../components/PanelHeader/PanelHeader'

import './Companys.scss'

type Props = {}

export default function Companys({ }: Props) {
  return (
    <section>
      <PanelHeader title="Companys" />
      <div className="panel__main">
        <Typography>Companys</Typography>
      </div>
    </section>
  )
}
import { Grid } from '@mui/material'
import React from 'react'
import PanelHeader from '../../components/PanelHeader/PanelHeader'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

import './Dashboard.scss'

const DashboardHeaderStatisticItem = ({ title, Icon, percent, amaunt, color = 'var(--color-light-gray)' }) => (
  <div className="panel__item">
    <h5 className="panel__item-title panel__item-title--secondary">
      {title}
    </h5>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="panel__icon-container" style={{ backgroundColor: color }}>
        <Icon />
      </div>
      <span className="panel__amaunt">{amaunt}</span>
      <span className="panel__percent" style={{ color: percent > 0 ? "var(--color-light-green)" : "var(--color-red)" }}>{percent > 0 ? '+' : null}{percent}%</span>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <section>
      <PanelHeader title="Dashboard" />
      <div className="panel__main">
        <Grid container spacing={2} className="panel__row">
          <Grid item xs={3}>
            <DashboardHeaderStatisticItem
              title="New Bookings"
              Icon={BookmarkAddIcon}
              color="var(--color-light-green)"
              amaunt={881}
              percent={34.7}
            />
          </Grid>
          <Grid item xs={3}>
            <DashboardHeaderStatisticItem
              title="Earnings"
              Icon={MonetizationOnIcon}
              color="var(--color-blue)"
              amaunt="$136,000"
              percent={22.8}
            />
          </Grid>
          <Grid item xs={3}>
            <DashboardHeaderStatisticItem
              title="Users"
              Icon={PeopleAltIcon}
              color="var(--color-purple)"
              amaunt={7345}
              percent={17.8}
            />
          </Grid>
          <Grid item xs={3}>
            <DashboardHeaderStatisticItem
              title="Today Views"
              Icon={LeaderboardIcon}
              color="var(--color-pink)"
              amaunt={3456}
              percent={-5.9}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="panel__row">
          <Grid container spacing={2} item xs={3}>
            <Grid item xs={12}>
              <DashboardHeaderStatisticItem
                title="Today Views"
                Icon={LeaderboardIcon}
                color="var(--color-pink)"
                amaunt={3456}
                percent={-5.9}
              />
            </Grid>
            <Grid item xs={12}>
              <DashboardHeaderStatisticItem
                title="Today Views"
                Icon={LeaderboardIcon}
                color="var(--color-pink)"
                amaunt={3456}
                percent={-5.9}
              />
            </Grid>
          </Grid>
          <Grid item xs={9} className="panel__row">
            <DashboardHeaderStatisticItem
              title="Today Views"
              Icon={LeaderboardIcon}
              color="var(--color-pink)"
              amaunt={3456}
              percent={-5.9}
            />
          </Grid>
        </Grid>
      </div>
    </section>
  )
}
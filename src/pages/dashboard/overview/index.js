// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import RecentEarnings from 'src/views/dashboard/overview/RecentEarnings.js'
import TotalBalance from 'src/views/dashboard/overview/TotalBalance.js'
import EcommerceTotalBalance from 'src/views/dashboards/ecommerce/EcommerceTotalBalance'
import RecentTransactions from 'src/views/dashboard/overview/RecentTransactions.js'
import CryptoWithdrawal from 'src/views/dashboard/overview/CryptoWithdrawal.js'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { useState } from 'react'

const Overview = () => {

  const [isRefreshing, setIsRefreshing] = useState(false);

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <TotalBalance isRefreshing={isRefreshing} />
        </Grid>
        <Grid item xs={12} md={8}>
          {/* <RecentTransactions /> */}
        </Grid>
        <Grid item xs={12} md={8}>
          <CryptoWithdrawal isRefreshing={isRefreshing} setIsRefreshing={setIsRefreshing} />
        </Grid>
        <Grid item xs={12} md={8}>
          <RecentEarnings />
        </Grid>
        <Grid item xs={12} md={4} >
          <RecentTransactions isRefreshing={isRefreshing} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Overview

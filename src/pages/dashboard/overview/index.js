// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import CryptoBalance from 'src/views/dashboard/overview/CryptoBalance'
import TotalBalance from 'src/views/dashboard/overview/TotalBalance'
import EcommerceTotalBalance from 'src/views/dashboards/ecommerce/EcommerceTotalBalance'
import RecentTransactions from 'src/views/dashboard/overview/RecentTransactions'
import CryptoWithdrawal from 'src/views/dashboard/overview/CryptoWithdrawal'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const Overview = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <TotalBalance />
        </Grid>
        <Grid item xs={12} md={8}>
          {/* <RecentTransactions /> */}
        </Grid>
        <Grid item xs={12} md={8}>
          <CryptoBalance />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentTransactions />
        </Grid>
        <Grid item xs={12} md={8}>
          <CryptoWithdrawal />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Overview

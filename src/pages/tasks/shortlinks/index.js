import { Typography, Grid } from '@mui/material'

import ListShortlinks from 'src/views/tasks/shortlinks/ListShortlinks'
import ViewAdsHeader from 'src/views/miscellaneous/ViewAds/viewAdsHeader.js'

import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const CardStatistics = () => {
    return (
        <>
            <ViewAdsHeader />
            {/* <Grid item xs={12}>
                <Typography sx={{ mb: 1, fontSize: '1.375rem', fontWeight: 700 }}>Shortlinks List</Typography>

                <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                    Using bypass tools is forbidden and may lead to your account being banned!
                </Typography>
            </Grid> */}
            <ApexChartWrapper>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <ListShortlinks />
                    </Grid>
                </Grid>
            </ApexChartWrapper>
        </>

    )
}

export default CardStatistics

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import Grid from '@mui/material/Grid'

// Styled Grid component
const StyledGrid1 = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
        paddingTop: '0 !important'
    },
    '& .MuiCardContent-root': {
        [theme.breakpoints.down('md')]: {
            paddingTop: 0
        }
    }
}))

// Styled Grid component


// Styled component for the image
const Img = styled('img')(({ theme }) => ({
    height: '11rem',
    borderRadius: theme.shape.borderRadius
}))

const ViewAdsHeader = () => {
    return (
        <Card>
            <Grid container spacing={6}>
                <StyledGrid1 item xs={12} md={6} lg={7}>
                    <CardContent>
                        <Typography variant='h6' sx={{ mb: 2 }}>
                            Stumptown Roasters
                        </Typography>
                        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>


                        </Box>
                        <Typography variant='body2'>
                            Before there was a United States of America, there were coffee houses, because how are you supposed to
                            build.
                        </Typography>
                    </CardContent>

                </StyledGrid1>

            </Grid>
        </Card>
    )
}

export default ViewAdsHeader

import Typography from '@mui/material/Typography'
import { useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

const ViewAdsHeader = () => {
    const isMobile = useMediaQuery('(max-width: 600px)');
    return (

        <Typography variant='h5' sx={{ textAlign: 'center', width: '100%' }}>
            <Grid item>
                <iframe
                    data-aa='2311159'
                    src='//ad.a-ads.com/2311159?size=728x90'
                    style={{ width: isMobile ? '100%' : '728px', height: '90px', border: '0', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}>
                </iframe>
                <Grid item>
                    <a
                        href="https://a-ads.com?partner=2311915">
                        <img src="https://a-ads.com/a_ads_banners/gif/english/728x90/simple_v1.gif"
                            alt="Advertise with Anonymous Ads"
                            style={{ width: isMobile ? '100%' : '728px', height: '90px', border: '0', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }} />
                    </a>

                </Grid>
            </Grid >
        </Typography>



    )
}

export default ViewAdsHeader

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import LoadingButton from '@mui/lab/LoadingButton';
import { Snackbar, Alert, Stack, Box } from '@mui/material';
import { useEffect, useState, Fragment } from 'react';

// ** Icon Imports
import Icon from 'src/@core/components/icon';

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar';

import { useHttp } from 'src/@core/utils/api_intercepters';

import Recaptcha from "react-google-recaptcha"
import ViewAdsHeader from "../../miscellaneous/ViewAds/viewAdsHeader"

const FaucetCrypto = () => {
    const [claimStatus, setClaimStatus] = useState(null);
    const [countdown, setCountdown] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [claimErrorMessage, setClaimErrorMessage] = useState(null);
    const [snackbarValues, setSnackbarValues] = useState({
        message: '',
        severity: 'warning',
    });

    const useHttpMethod = useHttp();

    const [recaptchaValue, setRecaptchaValue] = useState('');
    const handleRecaptchaChange = (token) => {
        setRecaptchaValue(token);
    }


    const fetchClaimStatus = async () => {
        try {
            const response = await useHttpMethod.get('/faucet/earn/faucet-status');
            setClaimStatus(response.payload);

            if (!response.payload.isAvailable) {
                const nextClaimTime = response.payload.nextClaimTime;
                if (typeof nextClaimTime === 'number') {
                    startCountdown(nextClaimTime);
                }
            }
        } catch (error) {
            console.error('Error fetching claim status:', error);
        }
    };

    useEffect(() => {
        fetchClaimStatus();
    }, []);

    const startCountdown = (minutes) => {
        const nextClaimTimeInMillis = new Date().getTime() + (minutes * 60000);
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = nextClaimTimeInMillis - now;
            if (difference > 0) {
                const updatedMinutes = Math.floor((difference / 1000 / 60) % 60);
                const updatedSeconds = Math.floor((difference / 1000) % 60);
                setCountdown(`${updatedMinutes}m ${updatedSeconds}s`);
            } else {
                clearInterval(interval);
                setCountdown(null);
                fetchClaimStatus();
            }
        }, 1000);
    };

    const handleClaim = async () => {
        try {
            const response = await useHttpMethod.get(`/faucet/earn/claim-faucet?recaptchaToken=${recaptchaValue}`);
            if (response && response.message) {
                setClaimErrorMessage(response.message);
                setOpenSnackbar(true);
                setSnackbarValues({ message: response.message, severity: 'success' });
                fetchClaimStatus();
            }
        } catch (error) {
            console.error('Error claiming faucet:', error);
            setOpenSnackbar(true);
            setSnackbarValues({ message: 'Error claiming faucet', severity: 'error' });
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };


    return (
        <Card >
            {/* <Card>
                <ViewAdsHeader />
            </Card> */}
            <CardContent
                sx={{
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    p: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
                }}
            >
                <CustomAvatar skin='light' sx={{ width: 50, height: 50, mb: 2.25 }}>
                    <Icon icon='bx:dollar-circle' fontSize='2rem' />
                </CustomAvatar>
                <Typography variant='h4' sx={{ mb: 20 }}>
                    Crypto Faucet
                </Typography>
                <Typography variant='h6' sx={{ mb: 10 }}>
                    Daily claims are 48, You can Claim after every 30 minutes.
                </Typography>

                <Recaptcha
                    sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
                    render="explicit"
                    theme="dark"
                    onChange={handleRecaptchaChange}
                    style={{
                        opacity: claimStatus?.isAvailable ? 1 : 0.5,
                        pointerEvents: claimStatus?.isAvailable ? 'auto' : 'none',
                    }}


                />
                <CardContent mt={15}>


                    <Stack direction="column" spacing={2}>
                        {countdown && (
                            <Typography variant='h5' sx={{ mb: 10, mt: 5 }} >
                                Next claim in {countdown}
                            </Typography>
                        )}
                        <LoadingButton
                            variant='contained'
                            onClick={handleClaim}
                            loading={false}
                            loadingIndicator="Loading..."
                            disabled={!!countdown}
                            sx={{
                                p: theme => theme.spacing(1.75, 5.5),
                                opacity: countdown ? 0.5 : 1,
                                pointerEvents: countdown ? 'none' : 'auto',
                            }}
                        >
                            Claim Now
                        </LoadingButton>
                    </Stack>

                </CardContent>

                <Fragment>
                    <Snackbar open={openSnackbar} onClose={handleClose} autoHideDuration={3000}>
                        <Alert variant='filled' elevation={3} onClose={handleClose} severity={snackbarValues?.severity}>
                            {snackbarValues?.message}
                        </Alert>
                    </Snackbar>
                </Fragment>

            </CardContent>
        </Card>
    );
};

export default FaucetCrypto;

// ** MUI Imports
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// ** Icons Imports
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import { useHttp } from 'utils/api_intercepters';
import React, { useState, useEffect } from 'react'
import { Box, Button, Typography, Backdrop, useTheme, CircularProgress, Alert, Snackbar } from '@mui/material'


import '../faucet.scss'
const Pending = ({ pending, setRefresh }) => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const [snackbarOptions, setSnackbarOptions] = useState({ open: false, severity: "success", message: "" });
    const handleCloseSnackbar = () => setSnackbarOptions({ ...snackbarOptions, open: false });
    const handleOpen = () => {
        setOpen(true);
    };

    const useHttpMethod = useHttp();

    const claimChallenge = (id) => {
        setOpen(true)
        useHttpMethod.get(`/faucet/earn/claim-challenges?claimId=${id}`).then((res) => {
            if (res.statusCode === 200) {
                let timeStamp = new Date().getTime()
                setRefresh(timeStamp)
                setSnackbarOptions({ open: true, severity: "success", message: res.message });
            } else {
                setSnackbarOptions({ open: true, severity: "error", message: res.message });
            }
            setOpen(false);
        });
    }

    return (
        <div>
            <Grid container spacing={6}>
                {pending.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card sx={{ border: 0, boxShadow: 0 }} className='challenges__card'>
                            <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
                                <Typography
                                    variant='h6'
                                    sx={{ display: 'flex', marginBottom: 0.75, alignItems: 'center', color: 'common.white' }}
                                >
                                    {item.name}
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', marginBottom: 3 }}>
                                    <Typography sx={{ color: 'common.white' }}>
                                        $ {item.reward}
                                    </Typography>

                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                        <RemoveRedEyeOutlinedIcon />
                                        <Typography sx={{ color: 'common.white', marginLeft: 2.5 }}>
                                            : {
                                                item.isCompleted || item.currentSuccessCount >= item.count ?
                                                    `${item.count} / ${item.count}`
                                                    :
                                                    `${item.currentSuccessCount} / ${item.count}`
                                            }
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ mr: 2, display: 'flex', alignItems: 'center', width: "100%" }}>
                                    <Button
                                        variant='contained'
                                        color='warning'
                                        onClick={() => claimChallenge(item._id)}
                                        sx={{
                                            // color: 'common.white',
                                            width: '100%',
                                        }}
                                        disabled={
                                            item.currentSuccessCount < item.count ? true : false
                                        }
                                    >
                                        Claim
                                    </Button>

                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>


            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <Snackbar open={snackbarOptions.open} autoHideDuration={2000} onClose={handleCloseSnackbar} >
                <Alert severity={snackbarOptions.severity} sx={{ width: '100%' }}>
                    {snackbarOptions.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Pending
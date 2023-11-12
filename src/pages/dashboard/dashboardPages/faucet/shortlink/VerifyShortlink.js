import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import { Snackbar, Alert, Box, Dialog, Typography, Backdrop, CircularProgress } from "@mui/material";
import { AddTask, Cancel } from "@mui/icons-material";


import { useHttp } from 'src/utils/Http';

const VerifyShortlink = () => {
    const [open, setOpen] = React.useState(true);
    const router = useRouter();

    const [snackbarOptions, setSnackbarOptions] = useState({ open: false, severity: "success", message: "" });
    const handleClose = () => setSnackbarOptions({ ...snackbarOptions, open: false });

    const [verifiedData, setVerifiedData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const { id } = router.query;
        if (id) {
            VerifyShortlinkid()
        }
    }, [router.query]);

    const useHttpMethod = useHttp();
    const VerifyShortlinkid = () => {
        const { id } = router.query;
        setLoading(true);
        useHttpMethod.get(`/earn/verify-shortlink?id=${id}`).then((res) => {
            setVerifiedData(res)
            if (res.statusCode === 200 || res.statusCode === 429) {
                setSnackbarOptions({ open: true, severity: "success", message: res.message });
                setTimeout(() => {
                    router.push("/tasks")
                }, 2000)
            } else {
                setSnackbarOptions({ open: true, severity: "error", message: res.message });
            }
            setLoading(false);
        });
    }

    return (
        <Box>

            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box sx={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {
                        verifiedData.statusCode === 200 ?
                            <AddTask
                                sx={{
                                    fontSize: '5rem',
                                }}
                            />
                            :
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Cancel
                                    sx={{
                                        fontSize: '5rem',
                                    }}
                                />
                                <Typography sx={{
                                    mt: 2,
                                    fontSize: '2rem',
                                }} variant="h4">Verifying</Typography>
                            </Box>
                    }
                    <Typography sx={{
                        ml: 2,
                        fontSize: '2rem',
                    }}>
                        {verifiedData ? verifiedData.message : "Verifying..."}
                    </Typography>
                </Box>
            </Dialog>


            <Snackbar open={snackbarOptions.open} autoHideDuration={2000} onClose={handleClose} >
                <Alert severity={snackbarOptions.severity} sx={{ width: '100%' }}>
                    {snackbarOptions.message}
                </Alert>
            </Snackbar>

            <Backdrop
                sx={{ color: '#fff', zIndex: 3 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    )
}

export default VerifyShortlink
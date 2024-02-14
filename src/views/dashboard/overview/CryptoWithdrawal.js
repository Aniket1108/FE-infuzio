// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import LoadingButton from '@mui/lab/LoadingButton';

import {
    TextField, Snackbar, Alert
} from '@mui/material'

import Icon from 'src/@core/components/icon'

import toast from 'react-hot-toast'

import { useHttp } from 'src/@core/utils/api_intercepters'

const CryptoWithdrawal = () => {
    // ** States
    const [values, setValues] = useState({
        withdrawAddress: '',
        amount: '',
    })

    const [buttonLoading, setButtonLoading] = useState(false)
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarValues, setSnackbarValues] = useState({
        message: '',
        severity: 'warning',
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value })
    }


    const useHttpMethod = useHttp()

    const withdrawAmount = (e) => {
        e.preventDefault()
        setButtonLoading(true)

        if (values.withdrawAddress === '' || values.amount === null) {
            setSnackbarValues({
                message: 'Please fill all the fields',
                severity: 'error'
            })
            setOpenSnackbar(true)
            setButtonLoading(false)
            return
        }

        useHttpMethod.post('/app/wallet/withdraw-faucetpay', {
            address: values.withdrawAddress,
            amount: values.amount
        }).then(res => {
            setButtonLoading(false)

            if (res.statusCode !== 200) {
                setSnackbarValues({
                    message: res.message,
                    severity: 'error'
                })
                setOpenSnackbar(true)
                return
            }

            setSnackbarValues({
                message: res.message,
                severity: 'success'
            })
            setOpenSnackbar(true)

            setValues({
                withdrawAddress: '',
                amount: '',
            })

        })
    }

    return (
        <Card>
            <CardHeader title='Withdraw' />
            <CardContent>
                <form onSubmit={(e) => {
                    withdrawAmount(e)
                }}>
                    <Grid container spacing={5} sx={{ mt: -5 }}>
                        <Grid item xs={12}>
                            <TextField autoFocus fullWidth id='withdrawAddress' label='Withdrawal Address *' sx={{ mb: 4 }}
                                value={values.withdrawAddress}
                                onChange={handleChange('withdrawAddress')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField autoFocus fullWidth id='withdrawAddress' label='Amount *' sx={{ mb: 4 }}
                                value={values.amount}
                                onChange={handleChange('amount')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Withdrawal Requirements:</Typography>
                            <Box component='ul' sx={{ pl: 4, mb: 0, '& li': { mb: 1, color: 'text.secondary' } }}>
                                <li>use faucetpay address</li>
                                <li>once withdraw it cannot be undone.</li>

                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <LoadingButton fullWidth size="large" color="secondary" type='submit' loading={buttonLoading} variant="contained" >
                                <span>Withdraw</span>
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>


            <Fragment>
                <Snackbar open={openSnackbar} onClose={handleClose} autoHideDuration={3000}>
                    <Alert variant='filled' elevation={3} onClose={handleClose} severity={snackbarValues?.severity}>
                        {snackbarValues?.message}
                    </Alert>
                </Snackbar>
            </Fragment>
        </Card>
    )
}

export default CryptoWithdrawal

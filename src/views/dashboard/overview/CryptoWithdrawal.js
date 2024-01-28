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
        amount: null,
    })

    console.log(values)

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarValues, setSnackbarValues] = useState({
        message: '',
        severity: '',
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

        if (values.withdrawAddress === '' || values.amount === null) {
            setSnackbarValues({
                message: 'Please fill all the fields',
                severity: 'error'
            })
            setOpenSnackbar(true)
            return
        }

        useHttpMethod.post('/app/wallet/withdraw-faucetpay', {
            address: values.withdrawAddress,
            amount: values.amount
        }).then(res => {
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
                            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Password Requirements:</Typography>
                            <Box component='ul' sx={{ pl: 4, mb: 0, '& li': { mb: 1, color: 'text.secondary' } }}>
                                <li>Minimum 8 characters long - the more, the better</li>
                                <li>At least one lowercase & one uppercase character</li>
                                <li>At least one number, symbol, or whitespace character</li>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' type='submit' sx={{ mr: 3 }}>
                                Withdraw
                            </Button>
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

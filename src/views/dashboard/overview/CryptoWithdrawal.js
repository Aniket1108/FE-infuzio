// ** React Imports
import { useState } from 'react'

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

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const defaultValues = {
    cryptoAddress: '',
    currentPassword: '',
    amount: ''
}

const schema = yup.object().shape({
    currentPassword: yup.string().min(8).required(),
    cryptoAddress: yup
        .string()
        .required('Withdrawal address is required'),
    amount: yup
        .number()
        .typeError('Withdrawal amount must be a number')
        .positive('Withdrawal amount must be positive')
        .required('Withdrawal amount is required'),
})

const CryptoWithdrawal = () => {
    // ** States
    const [values, setValues] = useState({
        showcryptoAddress: false,
        showCurrentPassword: false,
        showamount: false
    })

    // ** Hooks
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({ defaultValues, resolver: yupResolver(schema) })

    const handleClickShowCurrentPassword = () => {
        setValues({ ...values, showCurrentPassword: !values.showCurrentPassword })
    }

    const handleClickShowcryptoAddress = () => {
        setValues({ ...values, showcryptoAddress: !values.showcryptoAddress })
    }

    const handleClickShowamount = () => {
        setValues({ ...values, showamount: !values.showamount })
    }

    const onPasswordFormSubmit = () => {
        toast.success('Password Changed Successfully')
        reset(defaultValues)
    }

    return (
        <Card>
            <CardHeader title='Withdraw' />
            <CardContent>
                <form onSubmit={handleSubmit(onPasswordFormSubmit)}>
                    {/* <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor='input-current-password' error={Boolean(errors.currentPassword)}>
                                    Current Password
                                </InputLabel>
                                <Controller
                                    name='currentPassword'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <OutlinedInput
                                            value={value}
                                            label='Current Password'
                                            onChange={onChange}
                                            id='input-current-password'
                                            error={Boolean(errors.currentPassword)}
                                            type={values.showCurrentPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        edge='end'
                                                        onMouseDown={e => e.preventDefault()}
                                                        onClick={handleClickShowCurrentPassword}
                                                    >
                                                        <Icon icon={values.showCurrentPassword ? 'bx:show' : 'bx:hide'} />
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    )}
                                />
                                {errors.currentPassword && (
                                    <FormHelperText sx={{ color: 'error.main' }}>{errors.currentPassword.message}</FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                    </Grid> */}
                    <Grid container spacing={5} sx={{ mt: 0 }}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor='input-crypto-address' error={Boolean(errors.cryptoAddress)}>
                                    Your Withdrawal Address
                                </InputLabel>
                                <Controller
                                    name='cryptoAddress'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <OutlinedInput
                                            value={value}
                                            label='Your Withdrawal Address'
                                            onChange={onChange}
                                            id='input-crypto-address'
                                            error={Boolean(errors.cryptoAddress)}
                                        // type={values.showcryptoAddress ? 'text' : 'text'}
                                        // endAdornment={
                                        //     <InputAdornment position='end'>
                                        //         <IconButton
                                        //             edge='end'
                                        //             onClick={handleClickShowcryptoAddress}
                                        //             onMouseDown={e => e.preventDefault()}
                                        //         >
                                        //             <Icon icon={values.showcryptoAddress ? 'bx:show' : 'bx:hide'} />
                                        //         </IconButton>
                                        //     </InputAdornment>
                                        // }
                                        />
                                    )}
                                />
                                {errors.cryptoAddress && (
                                    <FormHelperText sx={{ color: 'error.main' }}>{errors.cryptoAddress.message}</FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor='input-crypto-amount' error={Boolean(errors.amount)}>
                                    Withdrawal Amount
                                </InputLabel>
                                <Controller
                                    name='amount'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <OutlinedInput
                                            value={value}
                                            label='Withdrawal Amount'
                                            onChange={onChange}
                                            id='input-crypto-amount'
                                            error={Boolean(errors.amount)}
                                        // type={values.showamount ? 'text' : 'password'}
                                        // endAdornment={
                                        //     <InputAdornment position='end'>
                                        //         <IconButton
                                        //             edge='end'
                                        //             onMouseDown={e => e.preventDefault()}
                                        //             onClick={handleClickShowamount}
                                        //         >
                                        //             <Icon icon={values.showamount ? 'bx:show' : 'bx:hide'} />
                                        //         </IconButton>
                                        //     </InputAdornment>
                                        // }
                                        />
                                    )}
                                />
                                {errors.amount && (
                                    <FormHelperText sx={{ color: 'error.main' }}>{errors.amount.message}</FormHelperText>
                                )}
                            </FormControl>
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
                                Save Changes
                            </Button>
                            <Button type='reset' variant='outlined' color='secondary' onClick={() => reset()}>
                                Reset
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default CryptoWithdrawal

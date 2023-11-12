// ** React Imports
import { useState } from 'react'
import { useHttp } from 'utils/api_intercepters'
import { Box, IconButton, InputAdornment, Snackbar, Alert, Backdrop, CircularProgress } from "@mui/material";

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import KeyOutline from 'mdi-material-ui/KeyOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

const TabSecurity = () => {
    const useHttpMethod = useHttp()

    // ** States
    const [values, setValues] = useState({
        newPassword: '',
        showNewPassword: false,
        confirmNewPassword: '',
        showConfirmNewPassword: false
    })
    const [loading, setLoading] = useState(false)
    const [snackbarOptions, setSnackbarOptions] = useState({ open: false, severity: "success", message: "" });
    const handleClose = () => setSnackbarOptions({ ...snackbarOptions, open: false });

    // Handle New Password
    const handleNewPasswordChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleClickShowNewPassword = () => {
        setValues({ ...values, showNewPassword: !values.showNewPassword })
    }

    const handleMouseDownNewPassword = event => {
        event.preventDefault()
    }

    // Handle Confirm New Password
    const handleConfirmNewPasswordChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleClickShowConfirmNewPassword = () => {
        setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
    }

    const handleMouseDownConfirmNewPassword = event => {
        event.preventDefault()
    }

    const changePassword = () => {
        setLoading(true)
        if (values.newPassword !== values.confirmNewPassword) {
            setLoading(false);
            return setSnackbarOptions({ open: true, severity: "error", message: "New password and confirm new password does not match" });
        }

        useHttpMethod.post("/user/auth/change-password", {
            newPassword: values.newPassword,
        }).then((res) => {
            if (res.statusCode === 200) {
                setSnackbarOptions({ open: true, severity: "success", message: res.message });
                setValues({ ...values, newPassword: '', confirmNewPassword: '' })
            } else {
                setSnackbarOptions({ open: true, severity: "error", message: res.message });
            }
            setLoading(false);
        })
    }

    return (
        <Box>

            <CardContent sx={{ paddingBottom: 0 }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sx={{ marginTop: 6 }}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor='account-settings-new-password'>New Password</InputLabel>
                                    <OutlinedInput
                                        label='New Password'
                                        value={values.newPassword}
                                        id='account-settings-new-password'
                                        onChange={handleNewPasswordChange('newPassword')}
                                        type={values.showNewPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    edge='end'
                                                    onClick={handleClickShowNewPassword}
                                                    aria-label='toggle password visibility'
                                                    onMouseDown={handleMouseDownNewPassword}
                                                >
                                                    {values.showNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor='account-settings-confirm-new-password'>Confirm New Password</InputLabel>
                                    <OutlinedInput
                                        label='Confirm New Password'
                                        value={values.confirmNewPassword}
                                        id='account-settings-confirm-new-password'
                                        type={values.showConfirmNewPassword ? 'text' : 'password'}
                                        onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    edge='end'
                                                    aria-label='toggle password visibility'
                                                    onClick={handleClickShowConfirmNewPassword}
                                                    onMouseDown={handleMouseDownConfirmNewPassword}
                                                >
                                                    {values.showConfirmNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <Box sx={{ mt: 11 }}>
                                    <Button
                                        variant='contained'
                                        sx={{ marginRight: 3.5 }}
                                        onClick={changePassword}
                                    >
                                        Save Changes
                                    </Button>
                                    <Button
                                        type='reset'
                                        variant='outlined'
                                        color='secondary'
                                        onClick={() => setValues({ ...values, newPassword: '', confirmNewPassword: '' })}
                                    >
                                        Reset
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        sm={6}
                        xs={12}
                        sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img width={183} alt='avatar' height={256} src='/images/pages/pose-m-1.png' />
                    </Grid>
                </Grid>
            </CardContent>

            {/* <Divider sx={{ margin: 0 }} />

      <CardContent>
        <Box sx={{ mt: 1.75, display: 'flex', alignItems: 'center' }}>
          <KeyOutline sx={{ marginRight: 3 }} />
          <Typography variant='h6'>Two-factor authentication</Typography>
        </Box>

        <Box sx={{ mt: 5.75, display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              maxWidth: 368,
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Avatar
              variant='rounded'
              sx={{ width: 48, height: 48, color: 'common.white', backgroundColor: 'primary.main' }}
            >
              <LockOpenOutline sx={{ fontSize: '1.75rem' }} />
            </Avatar>
            <Typography sx={{ fontWeight: 600, marginTop: 3.5, marginBottom: 3.5 }}>
              Two factor authentication is not enabled yet.
            </Typography>
            <Typography variant='body2'>
              Two-factor authentication adds an additional layer of security to your account by requiring more than just
              a password to log in. Learn more.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 11 }}>
          <Button variant='contained' sx={{ marginRight: 3.5 }}>
            Save Changes
          </Button>
          <Button
            type='reset'
            variant='outlined'
            color='secondary'
            onClick={() => setValues({ ...values, currentPassword: '', newPassword: '', confirmNewPassword: '' })}
          >
            Reset
          </Button>
        </Box>
      </CardContent> */}

            <Snackbar open={snackbarOptions.open} autoHideDuration={2000} onClose={handleClose} >
                <Alert severity={snackbarOptions.severity} sx={{ width: '100%' }}>
                    {snackbarOptions.message}
                </Alert>
            </Snackbar>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    )
}

export default TabSecurity
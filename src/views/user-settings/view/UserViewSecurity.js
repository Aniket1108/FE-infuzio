// ** React Imports
import { useState, useEffect } from 'react'
import { useHttp } from 'src/@core/utils/api_intercepters';
// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import AlertTitle from '@mui/material/AlertTitle'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import DialogTitle from '@mui/material/DialogTitle'
import OutlinedInput from '@mui/material/OutlinedInput'
import DialogContent from '@mui/material/DialogContent'
import InputAdornment from '@mui/material/InputAdornment'
import TableContainer from '@mui/material/TableContainer'
import Snackbar from '@mui/material/Snackbar';
// ** Icon Imports
import Icon from 'src/@core/components/icon'


const UserViewSecurity = () => {
  // ** States
  const useHttpMethod = useHttp()
  const [defaultValues, setDefaultValues] = useState({ mobile: '+1(968) 819-2547' })
  const [mobileNumber, setMobileNumber] = useState(defaultValues.mobile)
  const [openEditMobileNumber, setOpenEditMobileNumber] = useState(false)


  const [values, setValues] = useState({
    newPassword: '',
    showNewPassword: false,
    confirmPassword: '',
    showconfirmPassword: false
  })

  // Handle Password
  const handleNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  // Handle Confirm Password
  const handleconfirmPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowconfirmPassword = () => {
    setValues({ ...values, showconfirmPassword: !values.showconfirmPassword })
  }

  // Handle edit mobile number dialog
  const handleEditMobileNumberClickOpen = () => setOpenEditMobileNumber(true)
  const handleEditMobileNumberClose = () => setOpenEditMobileNumber(false)

  // Handle button click inside the dialog
  const handleCancelClick = () => {
    setMobileNumber(defaultValues.mobile)
    handleEditMobileNumberClose()
  }

  const handleSubmitClick = () => {
    setDefaultValues({ ...defaultValues, mobile: mobileNumber })
    handleEditMobileNumberClose()
  }

  useEffect(() => {
    useHttpMethod.post('/user/auth/change-password', {
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword
    }).then(res => {
      console.log(res)
    })
  }, [values.newPassword, values.confirmPassword])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Change Password' />
          <CardContent>
            <Alert icon={false} severity='warning' sx={{ mb: 6 }}>
              <AlertTitle sx={{ fontWeight: 600, mb: theme => `${theme.spacing(1)} !important` }}>
                Ensure that these requirements are met
              </AlertTitle>
              Minimum 8 characters long, uppercase & symbol
            </Alert>

            <form onSubmit={e => e.preventDefault()}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor='user-view-security-new-password'>New Password</InputLabel>
                    <OutlinedInput
                      label='New Password'
                      value={values.newPassword}
                      id='user-view-security-new-password'
                      onChange={handleNewPasswordChange('newPassword')}
                      type={values.showNewPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowNewPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <Icon icon={values.showNewPassword ? 'bx:show' : 'bx:hide'} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor='user-view-security-confirm-new-password'>Confirm New Password</InputLabel>
                    <OutlinedInput
                      label='Confirm New Password'
                      value={values.confirmPassword}
                      id='user-view-security-confirm-new-password'
                      type={values.showconfirmPassword ? 'text' : 'password'}
                      onChange={handleconfirmPasswordChange('confirmPassword')}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                            onClick={handleClickShowconfirmPassword}
                          >
                            <Icon icon={values.showconfirmPassword ? 'bx:show' : 'bx:hide'} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button type='submit' variant='contained'>
                    Change Password
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Two-step verification'
            titleTypographyProps={{ sx: { mb: 1 } }}
            subheader='Keep your account secure with authentication step.'
          />
          <CardContent>
            <Typography sx={{ mb: 2.5, fontWeight: 500 }}>SMS</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography sx={{ color: 'text.secondary' }}>{mobileNumber}</Typography>
              <div>
                <IconButton
                  size='small'
                  aria-label='edit'
                  sx={{ color: 'text.secondary' }}
                  onClick={handleEditMobileNumberClickOpen}
                >
                  <Icon icon='bx:edit' fontSize={20} />
                </IconButton>
                <IconButton size='small' aria-label='delete' sx={{ color: 'text.secondary' }}>
                  <Icon icon='bx:trash-alt' fontSize={20} />
                </IconButton>
              </div>
            </Box>

            <Divider
              sx={{ mt: theme => `${theme.spacing(2)} !important`, mb: theme => `${theme.spacing(6)} !important` }}
            />

            <Typography
              sx={{
                color: 'text.secondary',
                '& a': { color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }
              }}
            >
              Two-factor authentication adds an additional layer of security to your account by requiring more than just
              a password to log in.{' '}
              <Link href='/' onClick={e => e.preventDefault()}>
                Learn more
              </Link>
              .
            </Typography>
          </CardContent>

          <Dialog
            open={openEditMobileNumber}
            onClose={handleCancelClick}
            aria-labelledby='user-view-security-edit-mobile-number'
            sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 560, p: [2, 10] } }}
            aria-describedby='user-view-security-edit-mobile-number-description'
          >
            <DialogTitle
              id='user-view-security-edit-mobile-number'
              sx={{ mb: 6, textAlign: 'center', fontSize: '1.625rem !important' }}
            >
              Enable One Time Password
            </DialogTitle>

            <DialogContent>
              <Typography sx={{ mb: 4, fontWeight: 500 }}>Verify Your Mobile Number for SMS</Typography>
              <Typography sx={{ mb: 6, color: 'text.secondary' }}>
                Enter your mobile phone number with country code and we will send you a verification code.
              </Typography>
              <form onSubmit={e => e.preventDefault()}>
                <TextField
                  autoFocus
                  fullWidth
                  value={mobileNumber}
                  label='Mobile number with country code'
                  onChange={e => setMobileNumber(e.target.value)}
                />
                <Box sx={{ mt: 6, display: 'flex' }}>
                  <Button type='submit' sx={{ mr: 5 }} variant='contained' onClick={handleSubmitClick}>
                    Submit
                  </Button>
                  <Button type='reset' color='secondary' variant='outlined' onClick={handleCancelClick}>
                    Cancel
                  </Button>
                </Box>
              </form>
            </DialogContent>
          </Dialog>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserViewSecurity

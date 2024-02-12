import { useState, useEffect, Fragment } from 'react';
import { useHttp } from 'src/@core/utils/api_intercepters';
import { Grid, Card, Alert, CardHeader, CardContent, Snackbar, AlertTitle, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from '@mui/material';


// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Rest of your imports...

const PasswordChange = () => {

  const useHttpMethod = useHttp();

  // State variables
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const [values, setValues] = useState({
    newPassword: '',
    showNewPassword: false,
    confirmPassword: '',
    showconfirmPassword: false
  });
  const [buttonLoading, setButtonLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarValues, setSnackbarValues] = useState({
    message: '',
    severity: 'warning',
  });


  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword });
  };

  const handleconfirmPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowconfirmPassword = () => {
    setValues({ ...values, showconfirmPassword: !values.showconfirmPassword });
  };


  const passwordInput = (e) => {
    e.preventDefault();
    setButtonLoading(true);



    if (values.newPassword === '' || values.confirmPassword === '') {
      setSnackbarValues({
        message: 'Please enter both new password and confirm password.',
        severity: 'error'
      });
      setOpenSnackbar(true);
      setButtonLoading(false);
      return;
    }

    if (values.newPassword !== values.confirmPassword) {
      setSnackbarValues({
        message: 'New password and confirm password do not match',
        severity: 'error'
      });
      setOpenSnackbar(true);
      setButtonLoading(false);
      return;
    }

    useHttpMethod
      .post('/user/auth/change-password', {
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      })
      .then((res) => {
        setButtonLoading(false);
        console.log(res);

        if (res.statusCode !== 200) {
          setSnackbarValues({
            message: res.message,
            severity: 'error',
          });
          setOpenSnackbar(true);
          return;
        }

        setSnackbarValues({
          message: 'Password changed successfully',
          severity: 'success',
        });
        setOpenSnackbar(true);


        setValues({
          newPassword: '',
          confirmPassword: '',
        });
      })
      .catch((error) => {
        setSnackbarValues({
          message: 'Failed to change password',
          severity: 'error',
        });
        setOpenSnackbar(true);
        console.error(error);
      });

  };


  if (!initialRenderComplete) {
    return null;
  }


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

            <form onSubmit={(e) => passwordInput(e)}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
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

                <Grid item xs={12}>
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
          <Fragment>
            <Snackbar open={openSnackbar} onClose={handleClose} autoHideDuration={3000}>
              <Alert variant='filled' elevation={3} onClose={handleClose} severity={snackbarValues?.severity}>
                {snackbarValues?.message}
              </Alert>
            </Snackbar>
          </Fragment>
        </Card>
      </Grid>
    </Grid>
  );
}

export default PasswordChange;










// import { useState, useEffect, Fragment } from 'react'
// import { useHttp } from 'src/@core/utils/api_intercepters';
// // ** Next Import
// import Link from 'next/link'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Grid from '@mui/material/Grid'
// import Alert from '@mui/material/Alert'
// import Table from '@mui/material/Table'
// import Button from '@mui/material/Button'
// import Dialog from '@mui/material/Dialog'
// import Divider from '@mui/material/Divider'
// import TableRow from '@mui/material/TableRow'
// import TableHead from '@mui/material/TableHead'
// import TableCell from '@mui/material/TableCell'
// import TableBody from '@mui/material/TableBody'
// import TextField from '@mui/material/TextField'
// import CardHeader from '@mui/material/CardHeader'
// import AlertTitle from '@mui/material/AlertTitle'
// import InputLabel from '@mui/material/InputLabel'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import CardContent from '@mui/material/CardContent'
// import FormControl from '@mui/material/FormControl'
// import DialogTitle from '@mui/material/DialogTitle'
// import OutlinedInput from '@mui/material/OutlinedInput'
// import DialogContent from '@mui/material/DialogContent'
// import InputAdornment from '@mui/material/InputAdornment'
// import TableContainer from '@mui/material/TableContainer'
// import Snackbar from '@mui/material/Snackbar';
// // ** Icon Imports
// import Icon from 'src/@core/components/icon'



// const PasswordChange = () => {
//   // ** States
//   const useHttpMethod = useHttp()

//   const [values, setValues] = useState({
//     newPassword: '',
//     showNewPassword: false,
//     confirmPassword: '',
//     showconfirmPassword: false
//   })

//   const [buttonLoading, setButtonLoading] = useState(false)
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarValues, setSnackbarValues] = useState({
//     message: '',
//     severity: 'warning',
//   })


//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpenSnackbar(false);
//   };

//   const handleChange = prop => event => {
//     setValues({ ...values, [prop]: event.target.value })
//   }


//   // Handle Password
//   const handleNewPasswordChange = prop => event => {
//     setValues({ ...values, [prop]: event.target.value })
//   }

//   const handleClickShowNewPassword = () => {
//     setValues({ ...values, showNewPassword: !values.showNewPassword })
//   }

//   // Handle Confirm Password
//   const handleconfirmPasswordChange = prop => event => {
//     setValues({ ...values, [prop]: event.target.value })
//   }

//   const handleClickShowconfirmPassword = () => {
//     setValues({ ...values, showconfirmPassword: !values.showconfirmPassword })
//   }

//   const passwordInput = (e) => {
//     e.preventDefault()
//     setButtonLoading(true)

//     if (values.newPassword === '' || values.confirmPassword === '') {
//       setSnackbarValues({
//         message: 'Please enter both new password and confirm password.',
//         severity: 'error'
//       })
//       setOpenSnackbar(true)
//       setButtonLoading(false)
//       return
//     }

//     if (values.newPassword !== values.confirmPassword) {
//       setSnackbarValues({
//         message: 'New password and confirm password do not match',
//         severity: 'error'
//       });
//       setOpenSnackbar(true);
//       setButtonLoading(false);
//       return;
//     }

//     useHttpMethod
//       .post('/user/auth/change-password', {
//         newPassword: values.newPassword,
//         confirmPassword: values.confirmPassword,
//       })
//       .then((res) => {
//         setButtonLoading(false);
//         console.log(res);

//         if (res.statusCode !== 200) {
//           setSnackbarValues({
//             message: res.message,
//             severity: 'error',
//           });
//           setOpenSnackbar(true);
//           return;
//         }

//         setSnackbarValues({
//           message: 'Password changed successfully',
//           severity: 'success',
//         });
//         setOpenSnackbar(true);

//         // Optionally, you may want to reset the password fields
//         setValues({
//           newPassword: '',
//           confirmPassword: '',
//         });
//       })
//       .catch((error) => {
//         setSnackbarValues({
//           message: 'Failed to change password',
//           severity: 'error',
//         });
//         setOpenSnackbar(true);
//         console.error(error);
//       });
//   };




//   // useEffect(() => {
//   //   useHttpMethod.post('/user/auth/change-password', {
//   //     newPassword: values.newPassword,
//   //     confirmPassword: values.confirmPassword
//   //   }).then(res => {
//   //     setButtonLoading(false)
//   //     console.log(res)
//   //   }).catch(error => {
//   //     setSnackbarMessage('Failed to change password');
//   //     setSnackbarSeverity('error');
//   //     setSnackbarOpen(true);
//   //     console.error(error);
//   //   });
//   // }, [values.newPassword, values.confirmPassword])

//   return (
//     <Grid container spacing={6}>
//       <Grid item xs={12}>
//         <Card>
//           <CardHeader title='Change Password' />
//           <CardContent>
//             <Alert icon={false} severity='warning' sx={{ mb: 6 }}>
//               <AlertTitle sx={{ fontWeight: 600, mb: theme => `${theme.spacing(1)} !important` }}>
//                 Ensure that these requirements are met
//               </AlertTitle>
//               Minimum 8 characters long, uppercase & symbol
//             </Alert>

//             <form onSubmit={(e) => passwordInput(e)}>
//               <Grid container spacing={6}>
//                 <Grid item xs={12}>
//                   <FormControl fullWidth>
//                     <InputLabel htmlFor='user-view-security-new-password'>New Password</InputLabel>
//                     <OutlinedInput
//                       label='New Password'
//                       value={values.newPassword}
//                       id='user-view-security-new-password'
//                       onChange={handleNewPasswordChange('newPassword')}
//                       type={values.showNewPassword ? 'text' : 'password'}
//                       endAdornment={
//                         <InputAdornment position='end'>
//                           <IconButton
//                             edge='end'
//                             onClick={handleClickShowNewPassword}
//                             onMouseDown={e => e.preventDefault()}
//                             aria-label='toggle password visibility'
//                           >
//                             <Icon icon={values.showNewPassword ? 'bx:show' : 'bx:hide'} />
//                           </IconButton>
//                         </InputAdornment>
//                       }
//                     />
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <FormControl fullWidth>
//                     <InputLabel htmlFor='user-view-security-confirm-new-password'>Confirm New Password</InputLabel>
//                     <OutlinedInput
//                       label='Confirm New Password'
//                       value={values.confirmPassword}
//                       id='user-view-security-confirm-new-password'
//                       type={values.showconfirmPassword ? 'text' : 'password'}
//                       onChange={handleconfirmPasswordChange('confirmPassword')}
//                       endAdornment={
//                         <InputAdornment position='end'>
//                           <IconButton
//                             edge='end'
//                             onMouseDown={e => e.preventDefault()}
//                             aria-label='toggle password visibility'
//                             onClick={handleClickShowconfirmPassword}
//                           >
//                             <Icon icon={values.showconfirmPassword ? 'bx:show' : 'bx:hide'} />
//                           </IconButton>

//                         </InputAdornment>
//                       }
//                     />
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Button type='submit' variant='contained'>
//                     Change Password
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </CardContent>
//           <Fragment>
//             <Snackbar open={openSnackbar} onClose={handleClose} autoHideDuration={3000}>
//               <Alert variant='filled' elevation={3} onClose={handleClose} severity={snackbarValues?.severity}>
//                 {snackbarValues?.message}
//               </Alert>
//             </Snackbar>
//           </Fragment>
//         </Card>
//       </Grid>
//     </Grid>
//   )
// }

// export default PasswordChange

// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import InputAdornment from '@mui/material/InputAdornment'
import LinearProgress from '@mui/material/LinearProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
// import UserSuspendDialog from 'src/views/apps/user/view/UserSuspendDialog'
// import UserSubscriptionDialog from 'src/views/apps/user/view/UserSubscriptionDialog'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

const data = {
  role: 'user',
  status: 'active',
  avatarColor: 'primary',
  avatar: '/images/avatars/profile3.png'
}

const roleColors = {
  admin: 'error',
  editor: 'info',
  author: 'warning',
  maintainer: 'success',
  subscriber: 'primary'
}

const statusColors = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

// ** Styled <sup> component
const Sup = styled('sup')(({ theme }) => ({
  top: '0.25rem',
  left: '-1rem',
  fontSize: '1.125rem',
  position: 'absolute',
  color: theme.palette.primary.main
}))

// ** Styled <sub> component
const Sub = styled('sub')(({ theme }) => ({
  fontSize: '1rem',
  marginTop: '0.5rem',
  alignSelf: 'flex-end',
  color: theme.palette.text.secondary
}))

const UserViewLeft = () => {
  // ** States

  // const [openEdit, setOpenEdit] = useState(false)
  // const [openPlans, setOpenPlans] = useState(false)
  // const [suspendDialogOpen, setSuspendDialogOpen] = useState(false)
  // const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false)

  const [userData, setUserData] = useState(null);


  // Handle Edit dialog

  // const handleEditClickOpen = () => setOpenEdit(true)
  // const handleEditClose = () => setOpenEdit(false)

  // Handle Upgrade Plan dialog

  // const handlePlansClickOpen = () => setOpenPlans(true)
  // const handlePlansClose = () => setOpenPlans(false)

  useEffect(() => {
    const storedUserDataString = localStorage.getItem('userData') ?? null;
    if (storedUserDataString) {
      try {
        const storedUserData = JSON.parse(storedUserDataString);

        setUserData({ ...data, ...storedUserData });
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);


  if (userData) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardContent sx={{ pt: 12, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              {data.avatar ? (
                <CustomAvatar
                  src={data.avatar}
                  variant='rounded'
                  alt={`${userData.firstName} ${userData.lastName}`}
                  sx={{ width: 110, height: 110, mb: 6 }}
                />
              ) : (
                <CustomAvatar
                  skin='light'
                  variant='rounded'
                  color={data.avatarColor}
                  sx={{ width: 110, height: 110, fontWeight: 600, mb: 6, fontSize: '3rem' }}
                >
                  {getInitials(`${userData.firstName} ${userData.lastName}`)}
                </CustomAvatar>
              )}
              <Typography variant='h5' sx={{ mb: 2.5, fontSize: '1.375rem !important' }}>
                {`${userData.firstName} ${userData.lastName}`}
              </Typography>
              <CustomChip
                rounded
                skin='light'
                size='small'
                label={data.role}
                sx={{ fontWeight: 500 }}
                color={roleColors[data.role]}
              />
            </CardContent>

            {/* <CardContent sx={{ mt: 6, mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ mr: 8, display: 'flex', alignItems: 'center' }}>
                                    <CustomAvatar skin='light' variant='rounded' sx={{ mr: 4 }}>
                                        <Icon icon='bx:check' />
                                    </CustomAvatar>
                                    <div>
                                        <Typography variant='h6' sx={{ fontSize: '1.125rem !important' }}>
                                            1.23k
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>Task Done</Typography>
                                    </div>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CustomAvatar skin='light' variant='rounded' sx={{ mr: 4 }}>
                                        <Icon icon='bx:customize' />
                                    </CustomAvatar>
                                    <div>
                                        <Typography variant='h6' sx={{ fontSize: '1.125rem !important' }}>
                                            568
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>Project Done</Typography>
                                    </div>
                                </Box>
                            </Box>
                        </CardContent> */}

            <CardContent>
              <Typography variant='h6'>Details</Typography>
              <Divider sx={{ mt: theme => `${theme.spacing(1)} !important` }} />
              <Box sx={{ pt: 4, pb: 2 }}>
                <Box sx={{ display: 'flex', mb: 4 }}>
                  <Typography sx={{ mr: 2, fontWeight: 700, color: 'text.secondary' }}>First Name:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{userData.firstName}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 4 }}>
                  <Typography sx={{ mr: 2, fontWeight: 700, color: 'text.secondary' }}>Last Name:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{userData.lastName}</Typography>
                </Box>
                {/* <Box sx={{ display: 'flex', mb: 4 }}>
                                    <Typography sx={{ mr: 2, fontWeight: 700, color: 'text.secondary' }}>Username:</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>@{data.username}</Typography>
                                </Box> */}
                <Box sx={{ display: 'flex', mb: 4 }}>
                  <Typography sx={{ mr: 2, fontWeight: 700, color: 'text.secondary' }}>Email:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{userData.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 4 }}>
                  <Typography sx={{ mr: 2, fontWeight: 700, color: 'text.secondary' }}>Status:</Typography>
                  <CustomChip
                    rounded
                    skin='light'
                    size='small'
                    label={data.status}
                    sx={{ fontWeight: 500 }}
                    color={statusColors[data.status]}
                  />
                </Box>
                <Box sx={{ display: 'flex', mb: 4 }}>
                  <Typography sx={{ mr: 2, fontWeight: 700, color: 'text.secondary' }}>Role:</Typography>
                  <Typography sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>{data.role}</Typography>
                </Box>
                {/* <Box sx={{ display: 'flex' }}>
                                    <Typography sx={{ mr: 2, fontWeight: 700, color: 'text.secondary' }}>Country:</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>{data.country}</Typography>
                                </Box> */}
              </Box>
            </CardContent>

            {/* <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditClickOpen}>
                                Edit
                            </Button>
                            <Button color='error' variant='outlined' onClick={() => setSuspendDialogOpen(true)}>
                                Suspend
                            </Button>
                        </CardActions> */}
          </Card>
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default UserViewLeft

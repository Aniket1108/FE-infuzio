// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import UserViewSecurity from 'src/views/user-settings/view/UserViewSecurity'
// import UserViewRight from 'src/views/user-settings/view/UserViewRight'

// import ChangePasswordCard from 'src/views/user-settings/view/new'

const UserSecurity = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={5} lg={6}>
                <UserViewSecurity />
            </Grid>
            <Grid item xs={12} md={7} lg={4}>
                {/* <UserViewRight /> */}
            </Grid>
        </Grid>
    )
}

export default UserSecurity
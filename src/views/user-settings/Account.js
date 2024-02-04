// ** MUI Imports
import Grid from '@mui/material/Grid'

import CardSnippet from 'src/@core/components/card-snippet'

import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import UserViewLeft from 'src/views/user-settings/view/UserViewLeft'
// import UserViewRight from 'src/views/user-settings/view/UserViewRight'

import TabsFullWidth from 'src/views/user-settings/view/new'
import * as source from 'src/views/miscellaneous/TabsSourceCode'


const UserView = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={5} lg={4}>
                <UserViewLeft />
            </Grid>
            <Grid item xs={12} md={6}>
                <CardSnippet
                    title='Security'
                    sx={{ boxShadow: 0, backgroundColor: 'transparent', border: theme => `1px solid ${theme.palette.divider}` }}
                    code={{
                        tsx: null,
                        jsx: source.TabsFullWidthJSXCode
                    }}
                >
                    {/* <Typography sx={{ mb: 4 }}>
                        Use <code>variant='fullWidth'</code> prop with <code>TabList</code> component to have full width tabs.
                    </Typography> */}
                    <TabsFullWidth />
                </CardSnippet>
            </Grid>

            {/* <Grid item xs={12} md={7} lg={8}>
                <TabsFullWidth />
            </Grid> */}
        </Grid>
    )
}

export default UserView
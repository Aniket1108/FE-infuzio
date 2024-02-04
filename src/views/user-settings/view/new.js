// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'


import PasswordChange from 'src/views/user-settings/view/PasswordChange'

const TabsFullWidth = () => {
    // ** State
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <TabsWrapper>
            <TabContext value={value}>
                <TabList variant='fullWidth' onChange={handleChange} aria-label='full width tabs example'>
                    <Tab value='1' label='Password Change' />
                    <Tab value='2' label='2 Factor Auth' />
                    <Tab value='3' label='Tab 3' />
                </TabList>
                <TabPanel value='1'>
                    <Typography>
                        <PasswordChange />
                    </Typography>
                </TabPanel>
                <TabPanel value='2'>
                    <Typography>
                        Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
                        sesame snaps halvah.
                    </Typography>
                </TabPanel>
                <TabPanel value='3'>
                    <Typography>
                        Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                        carrot cake gummi bears.
                    </Typography>
                </TabPanel>
            </TabContext>
        </TabsWrapper>
    )
}

export default TabsFullWidth

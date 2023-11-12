// ** React Imports
import { useState } from 'react'

import BitcoTasks from './BitcoTasks'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import '../faucet.scss'
const CardNavigation = () => {
    // ** State
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Card className='faucet__offerwalls'>
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='card navigation example'>
                    <Tab value='1' label='Bitco Tasks' />
                    {/* <Tab value='2' label='Monlix' /> */}
                </TabList>
                <CardContent>
                    <TabPanel value='1' sx={{ p: 0 }}>
                        <Typography sx={{ marginBottom: 2 }}>
                            Note:- Reward will be credited once verified from BitcoTasks
                        </Typography>

                        <BitcoTasks />
                    </TabPanel>
                    <TabPanel value='2' sx={{ p: 0 }}>
                        <Typography variant='h6' sx={{ marginBottom: 2 }}>
                            Header Two
                        </Typography>
                    </TabPanel>
                </CardContent>
            </TabContext>
        </Card>
    )
}

export default CardNavigation
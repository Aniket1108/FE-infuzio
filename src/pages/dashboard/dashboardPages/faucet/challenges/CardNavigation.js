// ** React Imports
import { useState, useEffect } from 'react'

import Pending from './Pending'
import Completed from './Completed'

import { useHttp } from 'utils/api_intercepters'


// ** MUI Imports
import Grid from '@mui/material/Grid'
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
    const useHttpMethod = useHttp()

    // ** State
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const [pending, setPending] = useState([])
    const [completed, setCompleted] = useState([])


    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        useHttpMethod
            .get('/faucet/earn/list-challenges').then((res) => {
                if (res.statusCode === 200) {
                    let resData = res.payload

                    let pendingData = resData.filter((el) => {
                        return el.isCompleted === false
                    })

                    let completedData = resData.filter((el) => {
                        return el.isCompleted === true
                    })

                    setPending(pendingData)
                    setCompleted(completedData)
                }
            })
    }, [refresh])

    return (
        <Card id='faucet__challenges'>
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='card navigation example'>
                    <Tab value='1' label='Pending' />
                    <Tab value='2' label='Completed' />
                    {/* <Tab value='3' label='Faucet' /> */}
                </TabList>
                <CardContent>
                    {/* PTC ads earnings */}
                    <TabPanel value='1' sx={{ p: 0 }}>
                        <Typography variant='h6' sx={{ marginBottom: 2 }}>Pending Tasks</Typography>
                        <Pending pending={pending} setRefresh={setRefresh} />
                    </TabPanel>


                    {/* shorlinks earnings */}
                    <TabPanel value='2' sx={{ p: 0 }}>
                        <Typography variant='h6' sx={{ marginBottom: 2 }}>Completed Tasks</Typography>
                        <Completed completed={completed} />
                    </TabPanel>
                </CardContent>
            </TabContext>
        </Card>
    )
}

export default CardNavigation
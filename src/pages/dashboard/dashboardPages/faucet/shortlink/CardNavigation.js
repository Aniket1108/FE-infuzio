// ** React Imports
import { useState, useEffect } from 'react'

// import PTC_cards from './PTC/PTC_cards'
import Shortlinks from './Shortlinks'

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

const CardNavigation = () => {
    const useHttpMethod = useHttp()

    // ** State
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const [ptcAds, setPtcAds] = useState([])
    const [shortlinks, setShortlinks] = useState([])

    useEffect(() => {
        // useHttpMethod
        //     .get('/faucet/earn/list-ptc-ads').then((res) => {
        //         if (res.statusCode === 200) {
        //             // setPtcAds(res.payload)
        //             let sortDataOnClaimed = (res.payload).sort((a, b) => {
        //                 return a.clamed - b.clamed
        //             })
        //             setPtcAds(sortDataOnClaimed)
        //         }
        //     })

        useHttpMethod
            .get('/faucet/earn/list-shortlinks').then((res) => {
                if (res.statusCode === 200) {
                    // setShortlinks(res.payload)
                    let sortDataOnClaimed = (res.payload).sort((a, b) => {
                        return a.clamed - b.clamed
                    })
                    setShortlinks(sortDataOnClaimed)
                }
            })
    }, [])

    return (
        <Card id="faucet__shortlinks">
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='card navigation example'>
                    <Tab value='1' label='Shortlinks' />
                    {/* <Tab value='2' label='PTC' /> */}
                    {/* <Tab value='3' label='Faucet' /> */}
                </TabList>
                <CardContent>
                    {/* shorlinks earnings */}
                    <TabPanel value='1' sx={{ p: 0 }}>
                        <Typography variant='h6' sx={{ marginBottom: 2 }}>Shortlinks</Typography>
                        <Shortlinks shortlinks={shortlinks} />
                    </TabPanel>

                    {/* PTC ads earnings */}
                    {/* <TabPanel value='2' sx={{ p: 0 }}>
                        <Typography variant='h6' sx={{ marginBottom: 2 }}>PTC - Ads</Typography>
                        <PTC_cards ptcAds={ptcAds} />
                    </TabPanel> */}

                    {/* faucet earnings */}
                    {/* <TabPanel value='3' sx={{ p: 0 }}>
                        <Typography variant='h6' sx={{ marginBottom: 2 }}>Header Three</Typography>
                        <Button variant='contained'>Button Three</Button>
                    </TabPanel> */}
                </CardContent>
            </TabContext>
        </Card>
    )
}

export default CardNavigation
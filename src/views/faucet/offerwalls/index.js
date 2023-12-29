'use client'

// ** React Imports
import { useState, useEffect } from 'react'
import jwtDecode from 'jsonwebtoken';

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsSimple = () => {
    // ** State
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const containerStyle = {
        width: '100%',
        height: '700px',
        border: '0',
        padding: '0',
        margin: '0',
        overflow: 'auto', // Add scrolling behavior to the container
    };

    const iframeStyle = {
        width: '100%',
        height: '100%',
        border: '0',
    };


    const [bitcotasksUrl, setbitcotasksUrl] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        const decoded = jwtDecode.decode(token);
        const dynamicUrl = `https://bitcotasks.com//offerwall/09qe9dy1cb0jyo3dj5rtnnqbc4t1rd/${decoded.userId}`;
        console.log(dynamicUrl)
        setbitcotasksUrl(dynamicUrl);
    }, []);

    return (
        <TabsWrapper panelTopRound='right'>
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='simple tabs example'>
                    <Tab value='1' label='BitcoTasks' />
                    <Tab value='3' label='Monlix' disabled />
                </TabList>
                <TabPanel value='1'>
                    <div style={containerStyle}>
                        <iframe
                            style={iframeStyle}
                            src={bitcotasksUrl}
                        ></iframe>
                    </div>
                </TabPanel>
                <TabPanel value='3'>

                </TabPanel>
            </TabContext>
        </TabsWrapper >
    )
}

export default TabsSimple


// // ** React Imports
// import { useState } from 'react'
// import jwtDecode from 'jwt-decode';

// // ** MUI Imports
// import { Tab, TabList, TabPanel, TabContext, Typography } from '@mui/material'

// // ** Custom Component Import
// import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

// const TabsSimple = () => {
//     // ** State
//     const [value, setValue] = useState('1')

//     const handleChange = (event, newValue) => {
//         setValue(newValue)
//     }


//     const containerStyle = {
//         width: '100%',
//         height: '700px',
//         border: '0',
//         padding: '0',
//         margin: '0',
//         overflow: 'auto', // Add scrolling behavior to the container
//     };

//     const iframeStyle = {
//         width: '100%',
//         height: '100%',
//         border: '0',
//     };

//     // const token = localStorage.getItem('token');
//     // const decoded = jwtDecode(token);

//     // let url = `https://surveywall.wannads.com?apiKey=${process.env.REACT_APP_WANNADS_API_KEY}&userId=123`;

//     return (
//         <TabsWrapper panelTopRound='right'>
//             <TabContext value={value}>
//                 <TabList onChange={handleChange} aria-label='simple tabs example'>
//                     <Tab value='1' label='bitcotasks' />
//                     <Tab disabled value='3' label='Disabled' />
//                 </TabList>
//                 <TabPanel value='1'>

//                     {/* <div style={containerStyle}>
//                         <iframe
//                             style={iframeStyle}
//                             src={url}
//                         ></iframe>
//                     </div> */}
//                     <Typography>
//                         Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
//                         carrot cake gummi bears.
//                     </Typography>

//                 </TabPanel>
//                 <TabPanel value='3'>
//                     <Typography>
//                         Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
//                         carrot cake gummi bears.
//                     </Typography>
//                 </TabPanel>
//             </TabContext>
//         </TabsWrapper>
//     )
// }

// export default TabsSimple

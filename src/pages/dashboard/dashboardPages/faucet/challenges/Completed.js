// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'

// ** Icons Imports
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import '../faucet.scss'
const Completed = ({ completed }) => {

    return (
        <div>
            <Grid container spacing={6}>
                {completed.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card sx={{ border: 0, boxShadow: 0}}  className='challenges__card'>
                            <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
                                <Typography
                                    variant='h6'
                                    sx={{ display: 'flex', marginBottom: 0.75, alignItems: 'center', color: 'common.white' }}
                                >
                                    {item.name}
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', marginBottom: 3 }}>
                                    <Typography sx={{ color: 'common.white' }}>
                                        $ {item.reward}
                                    </Typography>

                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                        <RemoveRedEyeOutlinedIcon />
                                        <Typography sx={{ color: 'common.white', marginLeft: 2.5 }}>
                                            : {
                                                item.isCompleted ?
                                                    `${item.count} / ${item.count}`
                                                    :
                                                    `${item.currentSuccessCount} / ${item.count}`
                                            }
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ mr: 2, display: 'flex', alignItems: 'center', width: "100%" }}>
                                    <Button
                                        variant='contained'
                                        color='warning'
                                        disabled
                                        sx={{
                                            // color: 'common.white',
                                            width: '100%',
                                        }}
                                    >
                                        Claimed
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Completed
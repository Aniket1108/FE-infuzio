// ** MUI Imports
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// ** Icons Imports
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import React, { useState, useEffect } from 'react'
import { Box, Button, Typography, Backdrop, useTheme, CircularProgress } from '@mui/material'

import { useHttp } from 'utils/api_intercepters';

const Shortlinks = ({ shortlinks }) => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const useHttpMethod = useHttp();

    const generateLink = (id) => {
        setOpen(true)
        useHttpMethod.get(`/earn/generate-shortlink?shortlinkId=${id}`).then((res) => {
            if (res.statusCode === 200) {
                window.open(res.payload.shortlink, "_blank")
            }
            setOpen(false);
        });
    }

    return (
        <div>
            <Grid container spacing={6}>
                {shortlinks?.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'primary.main' }}>
                            <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
                                <Typography
                                    variant='h6'
                                    sx={{ display: 'flex', marginBottom: 0.75, alignItems: 'center', color: 'common.white' }}
                                >
                                    <AddLinkOutlinedIcon sx={{ marginRight: 2.5 }} />
                                    {item.name}
                                </Typography>
                                <Typography variant='body2' sx={{ marginBottom: 3 }}>
                                    {item.description}
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', marginBottom: 3 }}>
                                    <Typography sx={{ color: 'common.white' }}>
                                        $ {item.reward} Per Claim
                                    </Typography>

                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                        <RemoveRedEyeOutlinedIcon />
                                        <Typography sx={{
                                            color: 'common.white',
                                            marginLeft: 1.5
                                        }}>
                                            : {item.clamed}/{item.view_per_day}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ mr: 2, display: 'flex', alignItems: 'center', width: "100%" }}>
                                    <Button
                                        variant='contained'
                                        color='warning'
                                        onClick={() => generateLink(item._id)}
                                        sx={{
                                            // color: 'common.white',
                                            width: '100%',
                                        }}
                                        disabled={item.clamed >= item.view_per_day ? true : false}
                                    >
                                        Claim
                                    </Button>

                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
};

export default Shortlinks
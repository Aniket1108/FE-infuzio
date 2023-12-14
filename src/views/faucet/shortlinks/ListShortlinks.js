import { useState, useEffect } from 'react'
import { Grid, Box, Card, Typography, CardContent, Button } from '@mui/material'

import { useHttp } from 'src/@core/utils/api_intercepters';

const ListShortlinks = () => {

  const useHttpMethod = useHttp();
  const [shortLinksList, setShortLinksList] = useState(null)

  useEffect(() => {
    useHttpMethod.get('/faucet/earn/list-shortlinks').then((res) => {
      if (res.statusCode !== 200) {
      } else {
        setShortLinksList(res.payload)
      }
    });
  }, [])

  const generateShortlink = (e, shortlinkId) => {
    try {
      e.preventDefault()

      useHttpMethod.get(`/faucet/earn/generate-shortlink?shortlinkId=${shortlinkId}`).then((res) => {
        if (res.statusCode !== 200) {
        } else {
          window.open(res.payload.shortlink, '_blank');
        }
      });
    } catch (err) {

    }
  }

  if (shortLinksList) {
    return (
      <Grid container spacing={6}>
        {shortLinksList?.map((item, index) => {
          return (
            <Grid item xs={12} md={4} sm={6} key={index}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant='h5' sx={{ mb: 1.75, color: 'text.primary' }}>{item.name}</Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Typography variant='h6' sx={{ mr: 2.5 }}>
                          {item.reward} $
                        </Typography>
                      </Box>
                      <Typography variant='body2'>Completed - {item.clamed} / {item.view_per_day}</Typography>
                    </Box>
                    <Button
                      skin='light' variant={item.clamed == item.view_per_day ? 'disabled' : 'rounded'}
                      sx={{
                        backgroundColor: 'text.secondary',
                        width: 75,
                        height: 35
                      }}
                      onClick={(e) => { generateShortlink(e, item._id) }}
                    >
                      {item.clamed == item.view_per_day ? 'claimed' : 'claim'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    )
  } else {
    return null
  }
}

export default ListShortlinks

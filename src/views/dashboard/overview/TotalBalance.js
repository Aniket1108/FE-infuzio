import { useState, useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import { useHttp } from 'src/@core/utils/api_intercepters';

// Styled component for the trophy image
const TrophyImg = styled('img')({
    right: 36,
    bottom: -2,
    height: 140,
    position: 'absolute'
})

const TotalBalance = () => {

    const useHttpMethod = useHttp();
    const [totalBalance, setTotalBalance] = useState(0.00);

    useEffect(() => {
        useHttpMethod.get('/app/wallet/total-balance').then((res) => {
            if (res.statusCode !== 200) return
            setTotalBalance(res.payload);
        });
    }, []);

    return (
        <Card sx={{ position: 'relative' }}>
            <CardContent sx={{ py: theme => `${theme.spacing(5)} !important` }}>
                <Typography sx={{ mb: 1.25, fontWeight: 500 }}>Welcome</Typography>
                <Typography variant='body2' sx={{ mb: 4.5 }}>
                    Today is great day to start crypto investment
                </Typography>
                <Typography variant='h5' sx={{ color: 'primary.main', fontSize: '1.625rem !important' }}>
                    $ {totalBalance}
                </Typography>
                <Typography variant='body2' sx={{ mb: 2.5, color: 'text.disabled' }}>
                    Total Balance
                </Typography>
                <Button size='small' variant='contained'>
                    Send
                </Button>
                <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
            </CardContent>
        </Card>
    )
}

export default TotalBalance

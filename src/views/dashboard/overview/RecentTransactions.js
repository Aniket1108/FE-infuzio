import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'

// ** Custom Components Import
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Icon from 'src/@core/components/icon'

import { useHttp } from 'src/@core/utils/api_intercepters';


const RecentTransactions = ({ isRefreshing }) => {

    const useHttpMethod = useHttp();
    const [recentTransactions, setRecentTransactions] = useState(null);

    useEffect(() => {
        useHttpMethod.post('/app/wallet/transaction-history-faucetpay', {
            "page": 1,
            "limit": 5
        }).then((res) => {
            setRecentTransactions(res.payload.result);
        });
    }, [isRefreshing]);

    return (
        <Card sx={{
            height: '430px'
        }} >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingX: 3,
                paddingY: 2,
                height: 55
            }}>
                <Typography variant='body1'>Recent Transactions</Typography>
                {/* <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                    <OptionsMenu iconButtonProps={{ size: 'small' }} options={['Share', 'Refresh', 'Edit']} />
                </Box> */}
            </Box>
            <Divider />
            <CardContent>
                {recentTransactions?.map((item, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: index !== recentTransactions.length - 1 ? 6 : undefined
                            }}
                        >
                            <Avatar variant='rounded' sx={{ mr: 3.5, width: 38, height: 38 }} >
                                <Icon icon='cryptocurrency-color:usdt' />
                            </Avatar>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant='body2' sx={{ mb: 0.5, color: 'text.disabled' }}>
                                        {item.crypto}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 500 }}>USDT</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                    <Typography sx={{ mr: 3, fontWeight: 500 }}>{item.inDecimal}</Typography>
                                    {/* <Typography sx={{ color: 'text.disabled', fontSize: 14 }}>USDT</Typography> */}
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </CardContent>
        </Card>
    )
}

export default RecentTransactions

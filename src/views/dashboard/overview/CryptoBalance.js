import { useState, useEffect } from 'react';

import {
    Box, Card, Menu, Table, Avatar, TableRow, Button, MenuItem, TableHead, TableCell, TableBody, Typography, IconButton, TableContainer, Divider
} from '@mui/material'
import {
    useTheme
} from '@mui/material/styles'

import { useHttp } from 'src/@core/utils/api_intercepters';
import CustomAvatar from 'src/@core/components/mui/avatar'
import Icon from 'src/@core/components/icon'

const data2 = [
    {
        "cryptoId": 1,
        "balance": 0.22995000000000002,
        "name": "Tether",
        "symbol": "USDT",
        "priceInUSD": 1,
        "balanceInUSD": 0.22995,
        "imageURL": "https://dev-crypto-backend.s3.ap-south-1.amazonaws.com/public_images/crypto_icons/tether.png"
    }
]

const CryptoBalance = () => {
    // ** Hook
    const theme = useTheme()

    const useHttpMethod = useHttp();
    const [allBalance, setAllBalance] = useState(null);

    useEffect(() => {
        useHttpMethod.get('/app/wallet/get-balances').then((res) => {
            if (res.statusCode !== 200) {
                // setOpenSnackbar(true);
            }
            setAllBalance(res.payload.allBalance);
        });
    }, []);

    return (
        <Card>
            <TableContainer>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingX: 3,
                    paddingY: 2,
                    height: 55
                }}>
                    <Typography variant='body1'>Crypto balance</Typography>
                    <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                        <Typography variant='body2'>Add New Wallet</Typography>
                        <CustomAvatar skin='light' color='warning' sx={{ ml: 3.75 }} variant='rounded'>
                            <Icon icon='ph:plus-fill' />
                        </CustomAvatar>
                    </Box>
                </Box>
                <Divider sx={{ mb: 3 }} />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Name</TableCell>
                            <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Balance</TableCell>
                            <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>In USD&nbsp;($)</TableCell>
                            <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Price&nbsp;($)</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allBalance?.map((item, index) => {
                            const { cryptoId, balance, name, symbol, priceInUSD, balanceInUSD, imageURL } = item

                            return (
                                <TableRow
                                    key={cryptoId}
                                    sx={{ '& .MuiTableCell-root': { py: theme => `${theme.spacing(2)} !important` } }}
                                >
                                    <TableCell>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar
                                                alt={symbol}
                                                variant='rounded'
                                                sx={{ mr: 2.5, width: 36, height: 36 }}
                                                src={imageURL}
                                            />
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
                                                    {name}
                                                </Typography>
                                                <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
                                                    {symbol}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography sx={{ fontWeight: 600, color: 'primary.main' }}>{balance?.toFixed(6)}</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography sx={{ fontWeight: 600, color: 'primary.main' }}>{`$${balanceInUSD}`}</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography sx={{ fontWeight: 600, color: 'primary.main' }}>{`$${priceInUSD}`}</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default CryptoBalance

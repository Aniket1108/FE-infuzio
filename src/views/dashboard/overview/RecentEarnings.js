import { useState, useEffect } from 'react'

import {
  Box,
  Card,
  Menu,
  Table,
  Avatar,
  TableRow,
  Button,
  MenuItem,
  TableHead,
  TableCell,
  TableBody,
  Typography,
  IconButton,
  TableContainer,
  Divider
} from '@mui/material'
import TablePagination from '@mui/material/TablePagination';
import { useTheme } from '@mui/material/styles'

import { useHttp } from 'src/@core/utils/api_intercepters'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Icon from 'src/@core/components/icon'

import Pagination from 'src/views/components/pagination/PaginationSimple'

const data2 = [
  {
    cryptoId: 1,
    balance: 0.22995000000000002,
    name: 'Tether',
    symbol: 'USDT',
    priceInUSD: 1,
    balanceInUSD: 0.22995,
    imageURL: '/images/Crypto_Icons/USDT.png'
  }
]

const RecentEarnings = () => {
  // ** Hook
  const theme = useTheme()

  const useHttpMethod = useHttp()
  const [allBalance, setAllBalance] = useState(null)
  const [page, setPage] = useState(0);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    useHttpMethod.post('/app/wallet/earning-history', {
      page: page + 1,
      limit: 5
    }).then(res => {

      if (res.statusCode !== 200) {
        // setOpenSnackbar(true);
      }
      setAllBalance(res.payload)
    })
  }, [page])

  return (
    <Card sx={{
      height: '430px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }} >
      <TableContainer>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingX: 3,
            paddingY: 2,
            height: 55
          }}
        >
          <Typography variant='body1'>Recent Earnings</Typography>

        </Box>
        <Divider sx={{ mb: 3 }} />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Earned From</TableCell>
              <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Amount</TableCell>
              <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Date/Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allBalance?.map((item, index) => {
              const { symbol, title, createdAt, amountInDecimal } = item
              const dateTime = new Date(createdAt)

              return (
                <TableRow
                  key={createdAt}
                  sx={{ '& .MuiTableCell-root': { '&:first-of-type': { py: theme => `${theme.spacing(2)} !important` } } }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        alt={symbol}
                        variant='rounded'
                        sx={{ mr: 2.5, width: 36, height: 36 }}
                        src={
                          '/images/Crypto_Icons/USDT.png'
                        }
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
                          {title}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ fontWeight: 600, color: 'primary.main' }}>
                        {amountInDecimal?.toFixed(6)}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        sx={{ fontWeight: 600, color: 'primary.main' }}
                      >{`${dateTime.toLocaleString()}`}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={9}
        rowsPerPage={5}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={() => {
          return 5
        }}
      />
    </Card>
  )
}

export default RecentEarnings

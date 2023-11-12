import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Crypto_balance = ({ allBalance }) => {


  return (
    <div id='crypto__balance'>
      <div>
        Crypto Balance
      </div>
      <div className='balance__table'>
        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
          <Table sx={{ minWidth: 300, color: `#fff` }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  className='table__row'
                >
                  Name</TableCell>
                <TableCell align="right" className='table__row'>
                  Balance</TableCell>
                <TableCell align="right" className='table__row'>
                  In USD&nbsp;($)</TableCell>
                <TableCell align="right" className='table__row'>
                  Price&nbsp;($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allBalance?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" className='table__row'>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" className='table__row'>{row.balance}</TableCell>
                  <TableCell align="right" className='table__row'>{row.balanceInUSD}</TableCell>
                  <TableCell align="right" className='table__row'>{row.priceInUSD}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default Crypto_balance

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    "cryptoId": 1,
    "balance": 0.17,
    "name": "Tether",
    "symbol": "USDT",
    "priceInUSD": 1,
    "balanceInUSD": 0.17,
    "imageURL": "https://crypto-backend-public-images.s3.ap-south-1.amazonaws.com/cryptoId_1.png"
  }
]
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Crypto_balance = () => {
  return (
    <div id='crypto__balance'>
      <div>
        Crypto Balance
      </div>
      <div className='balance__table'>
        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
          <Table sx={{ minWidth: 650, color: `#fff` }} aria-label="simple table">
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
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" className='table__row'>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" className='table__row'>{row.calories}</TableCell>
                  <TableCell align="right" className='table__row'>{row.fat}</TableCell>
                  <TableCell align="right" className='table__row'>{row.carbs}</TableCell>
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
  createData('Tron', 159, 6.0, 24, 4.0),
  createData('Bitcoin', 237, 9.0, 37, 4.3),
  createData('Ethereum', 262, 16.0, 24, 6.0),
  createData('Binance', 305, 3.7, 67, 4.3),
];
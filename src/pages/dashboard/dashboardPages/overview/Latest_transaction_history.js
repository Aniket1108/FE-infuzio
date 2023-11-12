
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useHttp } from "utils/api_intercepters";

const Latest_transaction_history = () => {
  const useHttpMethod = useHttp();
  const [transactionHistory, setTransactionHistory] = useState(null)

  const input = {
    "page": 1,
    "limit": 5
  }

  useEffect(() => {
    useHttpMethod.post("/app/wallet/transaction-history-faucetpay", input).then((res) => {
      console.log(res)
      setTransactionHistory(res.payload.result)
    })
  }, [])

  return (
    <div id='transactions__history'>
      <div>
        Latest Transactions
      </div>
      <div className='transactions__table'>
        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className='table__row'>Currency</TableCell>
                <TableCell align="right" className='table__row'>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactionHistory?.map((row) => (
                <TableRow
                  key={row.userId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                >
                  <TableCell component="th" scope="row" className='table__row'>
                    {row.crypto}
                  </TableCell>
                  <TableCell align="right" className='table__row'>{row.inDecimal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div >
  )
}

export default Latest_transaction_history
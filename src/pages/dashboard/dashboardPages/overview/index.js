import React, { useState, useEffect } from 'react';
import { useHttp } from "utils/api_intercepters";

import Top_card from './Top_card';
import Crypto_balance from './Crypto_balance';
import Latest_transaction_history from './Latest_transaction_history';


import { Backdrop, CircularProgress, Alert, Snackbar } from '@mui/material'

import './overview.scss';

const Overview = () => {
  const useHttpMethod = useHttp();

  const [allBalance, setAllBalance] = useState(null);
  const [totalBalance, setTotalBalance] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [snackbarOptions, setSnackbarOptions] = useState({ open: false, severity: "success", message: "" });
  const handleCloseSnackbar = () => setSnackbarOptions({ ...snackbarOptions, open: false });

  useEffect(() => {
    setOpen(true);
    useHttpMethod.get("/app/wallet/get-balances").then((res) => {
      setOpen(false);
      if (res.statusCode !== 200) {
        return setSnackbarOptions({ open: true, severity: "error", message: res.message });
      }

      setAllBalance(res.payload.allBalance);
      setTotalBalance(res.payload.totalBalanceInUSD);
    });
  }, []);

  return (
    <div id='overview__main'>
      <div id='page__top__header'>
        <div>
          <h2>Overview</h2>
          <p>Welcome back, name</p>
        </div>
      </div>

      <Top_card totalBalance={totalBalance} />

      <div id='page__middle'>
        <Crypto_balance allBalance={allBalance} />
        <Latest_transaction_history />
      </div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar open={snackbarOptions.open} autoHideDuration={2000} onClose={handleCloseSnackbar} >
        <Alert severity={snackbarOptions.severity} sx={{ width: '100%' }}>
          {snackbarOptions.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Overview;
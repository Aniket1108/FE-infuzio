import React, { useState, useEffect } from 'react';
import { useHttp } from "utils/api_intercepters";

import Top_card from './Top_card';
import Crypto_balance from './Crypto_balance';
import Latest_transaction_history from './Latest_transaction_history';

import './overview.scss';

const Overview = () => {
  const [allBalance, setAllBalance] = useState(null);
  const [totalBalance, setTotalBalance] = useState(null);
  const useHttpMethod = useHttp();

  useEffect(() => {
    useHttpMethod.get("/app/wallet/get-balances").then((res) => {
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
    </div>
  );
};

export default Overview;
import React from 'react'

import Top_card from './Top_card'
import Crypto_balance from './Crypto_balance'
import Latest_transaction_history from './Latest_transaction_history'

import './overview.scss'
const index = () => {
  return (
    <div id='overview__main'>
      <div id='page__top__header'>
        <div>
          <h2>Overview</h2>
          <p>Welcome back, name </p>
        </div>
      </div>

      <Top_card />

      <div id='page__middle'>
        <Crypto_balance />
        <Latest_transaction_history />
      </div>
    </div>
  )
}

export default index
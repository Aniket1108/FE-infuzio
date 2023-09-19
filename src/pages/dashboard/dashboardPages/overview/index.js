import React from 'react'

import Top_card from './Top_card'

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
    </div>
  )
}

export default index
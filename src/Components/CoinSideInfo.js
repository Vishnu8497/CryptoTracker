import React from 'react'
import './CoinSideInfo.css'

const CoinSideInfo = ({coin}) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

  return (
    <div className='coin'>
        <img src={coin?.image.large} alt="Coin Image"/>
        <h1>{coin.name}</h1>
        <p>{coin.description.en.split('.')[0]}</p>
        <h2>Rank : {coin.market_cap_rank}</h2>
        <h2>Current Price : ₹ {numberWithCommas(coin.market_data.current_price.inr)}</h2>
        <h2>Current Price : ₹{numberWithCommas(coin.market_data.market_cap.inr)} M</h2>
    </div>
  )
}

export default CoinSideInfo
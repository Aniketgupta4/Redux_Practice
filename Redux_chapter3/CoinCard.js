import React from 'react'

function CoinCard ({coin}) {
  return (
    <div className='coin-card'>
        <img src={coin.image} alt={coin.name}/>
        <h3>{coin.name}</h3>
        <p>Price: ${coin.current_price}</p>
        <p>Market Cap Rank:{coin.market_cap_rank}</p>
    </div>
  )
}

export default CoinCard

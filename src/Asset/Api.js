export const coinList=
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false'

export const singleCoin=(id)=>
    `https://api.coingecko.com/api/v3/coins/${id}`

export const Chart=(id,days=365)=>
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}`

export const searchCoin=(search)=>
    `https://api.coingecko.com/api/v3/search?query=${search}`

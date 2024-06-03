const cryptosOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'b838712149msh20436172aeaeb14p16cfa4jsn227b1dfecc4d',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
  }
};

let coins

const fetchCryptos = async () => {
  try {
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins?limit=100', cryptosOptions);
    const json = await response.json();
    const data = json.data
    const stats = data.stats
    coins = data.coins
    document.getElementById('cryptos').innerText=`$${stats.total.toLocaleString()}`
    document.getElementById('markets').innerText=`$${stats.totalMarkets.toLocaleString()}`
    document.getElementById('exchanges').innerText=`$${stats.totalExchanges.toLocaleString()}`
    document.getElementById('market-cap').innerText=`$${Math.round(stats.totalMarketCap/1000000000).toLocaleString()} Billion`
    document.getElementById('volume').innerText=`$${Math.round(stats.total24hVolume/1000000000).toLocaleString()} Billion`
    
    const coinCards = coins.map((coin)=>{
      return (
        `<div id="coin-card">
          <div>
            <h1>${coin.name}</h1>
            <img src=${coin.iconUrl}></img>
          </div>
          <p>Price: $${Math.round(coin.price).toLocaleString()}</p>
          <p>Market Cap: $${Math.round(coin.marketCap/1000000000).toLocaleString()} Billion</p>
          <p>Daily Cap: ${coin.change}%</p>
        </div>`
      )
    }).join('')
    document.getElementById('coins').innerHTML = coinCards
  } catch (error) {
    console.error(error);
  }
}

const stocksOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b838712149msh20436172aeaeb14p16cfa4jsn227b1dfecc4d',
		'x-rapidapi-host': 'yahoo-finance127.p.rapidapi.com'
	}
}

const fetchStocks = async () => {
  try {
    const response = await fetch('https://yahoo-finance127.p.rapidapi.com/key-statistics/aapl', stocksOptions)
    const json = await response.json();
  } catch(err) {
    console.log(err)
  }
}

const fetchData = () => {
  fetchCryptos()
  fetchStocks()
}

  document.addEventListener("DOMContentLoaded", fetchData);

  const cryptoPage = document.getElementById('crypto')
  const stocksPage = document.getElementById('stocks')
  const cryptoLink = document.getElementById('crypto-nav')
  const stocksLink = document.getElementById('stocks-nav')

  const navToCrypto = () => {
    stocksPage.style.display = "none"
    cryptoPage.style.display = "flex"
  }

  const navToStocks = () => {
    cryptoPage.style.display = "none"
    stocksPage.style.display = "flex"
  }

  cryptoLink.addEventListener('click', navToCrypto)
  stocksLink.addEventListener('click', navToStocks)

  const filterCrypto = (query) => {
    console.log(query)
    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(query.toLowerCase()))
    const coinCards = filteredCoins.map((coin)=>{
      return (
        `<div id="coin-card">
          <div>
            <h1>${coin.name}</h1>
            <img src=${coin.iconUrl}></img>
          </div>
          <p>Price: $${Math.round(coin.price).toLocaleString()}</p>
          <p>Market Cap: $${Math.round(coin.marketCap/1000000000).toLocaleString()} Billion</p>
          <p>Daily Cap: ${coin.change}%</p>
        </div>`
      )
    }).join('')
    document.getElementById('coins').innerHTML = coinCards
  }

  const input = document.getElementById('crypto-search')

  input.addEventListener('keydown', () => filterCrypto(input.value))
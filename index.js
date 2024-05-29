<<<<<<< HEAD
// const for the button cryptocurrency
// const cryptoEl = document.querySelector('#btnEl1')
// // const for the button stocks
// const stocksEl = document.querySelector('#btnEl2')

// fetching Seeking Alpha Finance 
const url = 'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl'

fetch(url). 
then(function (res) {
  console.log(res)  
    return res.json();
}). then()
=======
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b838712149msh20436172aeaeb14p16cfa4jsn227b1dfecc4d',
		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
	}
};

let cryptos
let crytpoDetails
let cryptoHistory

const fetchCryptos = async () => {
  try {
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins?limit=100', options);
    cryptos = await response.json();
    console.log(cryptos);
  } catch (error) {
    console.error(error);
  }
}

/* const fetchCryptoDetails = async (coindId) => {
  try {
    const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/${coinId}`, options);
    crytpoDetails = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const fetchCryptoHistory = async (coindId, timePeriod) => {
  try {
    const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/${coinId}/history?timePeriod=${timePeriod}`, options);
    cryptoHistory = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
} */

document.addEventListener('DOMContentLoaded', fetchCryptos);

const crypto = () => {
  // link global stats values to global stats box
  const stats = cryptos.data.stats
  const total = stats.total
  const volume = stats.total24hVolume
  const coins = stats.totalCoins
  const exchanges = stats.totalExchanges
  const cap = stats.totalMarketCap
  const markets = stats.totalMarkets
}
>>>>>>> 075bb722330cccdb0e5f7230758153c0df735e2d

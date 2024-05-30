const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'b838712149msh20436172aeaeb14p16cfa4jsn227b1dfecc4d',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
  }
};
const fetchCryptos = async () => {
  try {
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins?limit=100', options);
    const json = await response.json();
    const data = json.data
    const stats = data.stats
    console.log(stats)
    document.getElementById('cryptos').innerText=`$${stats.total}`
    document.getElementById('markets').innerText=`$${stats.totalMarkets}`
    document.getElementById('exchanges').innerText=`$${stats.totalExchanges}`
    document.getElementById('market-cap').innerText=`$${Math.round(stats.totalMarketCap/1000000000)} Billion`
    document.getElementById('volume').innerText=`$${Math.round(stats.total24hVolume/1000000000)} Billion`
  } catch (error) {
    console.error(error);
  }
}
document.addEventListener("DOMContentLoaded", fetchCryptos);
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
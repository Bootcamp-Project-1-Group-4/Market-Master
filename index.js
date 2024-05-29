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
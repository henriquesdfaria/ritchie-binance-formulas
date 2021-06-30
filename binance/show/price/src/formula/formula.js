const fetch = require('node-fetch')

function Run(inputCoin, inputCurrency) {
    const coin = inputCoin.toUpperCase()
    const currency = inputCurrency.toUpperCase()

    fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${coin}${currency}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(coin => console.log(new Intl.NumberFormat().format(coin.price)))
            .catch(err => console.error("Sorry! Could not get the BTC price, please try again later."))
}

const formula = Run
module.exports = formula

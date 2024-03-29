// apiCoin.js
const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';
  
    const coins = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
  
    console.log(coins);
    return coins;
  }
  
  const setCoins = async () => {
    const coins = await fetchCoins();
  
    const coinsList = document.getElementById('coins-list');
  
    coins.forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
  
      newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;
  
      coinsList.appendChild(newLi);
    });
  }
  
  window.onload = () => setCoins();
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [idx, setIdx] = useState(0);
  const [money, setMoney] = useState("");
  

  const onChange = (event) => {
    setMoney(event.target.value);
  };
  const onChangeSelect = (event) => {
    setIdx(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") // https://goodteacher.tistory.com/540
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <div>
        <input
          type="number"
          onChange={onChange}
          value={money}
          placeholder="USD"
        ></input>
      </div>
      <div>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select value={idx} onChange={onChangeSelect}>
            {coins.map((coin, index) => (
              <option key={coin.id} value={index}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
      <div>
        {loading ? (
            <strong>Loading...</strong>
          ) : (
            1 / coins[idx].quotes.USD.price * money 
          )
        } COINS
      </div>
    </div>
  );
}

export default App;

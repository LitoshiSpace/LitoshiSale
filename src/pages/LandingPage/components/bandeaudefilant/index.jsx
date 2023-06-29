import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

export const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://brc20api.bestinslot.xyz/v1/get_brc20_tickers_info/vol_24h/desc/0/1"
        );
        setData(response.data.items.slice(0, 10));
        const change = await axios.get(
          "https://api.coinbase.com/v2/prices/BTC-USD/spot",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_KEY}`,
            },
          }
        );
        setPrice(change.data.data.amount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="defilante">
      <ul className="slide">
        {data.map((item, index) => (
          <li key={index}>
            <span className="titre">${item.tick}</span>
            <ItemDetails
              tick={item.tick}
              marketcap={item.marketcap * Math.pow(10, -8) * price}
            />
            $
            {Math.floor(item.marketcap * Math.pow(10, -8) * price)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            <span
              className={
                parseFloat(item.change_24h).toFixed(2) < 0 ? "red" : "green"
              }
            >
              <span className="arrow">
                <p className="percentage">
                  {Math.abs(parseFloat(item.change_24h)).toFixed(2)}%
                </p>
                {parseFloat(item.change_24h).toFixed(2) < 0 ? (
                  <p className="arrow-down">&#9660;</p>
                ) : (
                  <p className="arrow-up">&#9650;</p>
                )}
              </span>
            </span>
          </li>
        ))}
        {data.map((item, index) => (
          <li key={index}>
            <span className="titre">${item.tick}</span>
            <ItemDetails
              tick={item.tick}
              marketcap={item.marketcap * Math.pow(10, -8) * price}
            />
            $
            {Math.floor(item.marketcap * Math.pow(10, -8) * price)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            <span
              className={
                parseFloat(item.change_24h).toFixed(2) < 0 ? "red" : "green"
              }
            >
              <span className="arrow">
                <p className="percentage">
                  {Math.abs(parseFloat(item.change_24h)).toFixed(2)}%
                </p>
                {parseFloat(item.change_24h).toFixed(2) < 0 ? (
                  <p className="arrow-down">&#9660;</p>
                ) : (
                  <p className="arrow-up">&#9650;</p>
                )}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ItemDetails = ({ tick, marketcap }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    // Perform the query to obtain detailed token information
    axios
      .get("https://brc20api.bestinslot.xyz/v1/get_brc20_ticker/" + tick)
      .then((response) => {
        const maxSupplyValue = parseInt(response.data.ticker[0].max_supply, 10);
        setPrice(marketcap / maxSupplyValue);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la requête pour obtenir les informations du token " +
            tick,
          error
        );
      });
  }, [tick]);

  return <span>${parseFloat(price).toFixed(2)}</span>;
};

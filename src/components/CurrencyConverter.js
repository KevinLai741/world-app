import React, { useState } from "react";

const CurrencyOption = () => (
    <>
      <option>U.S. Dollar (USD)</option>
      <option>European Euro (EUR)</option>
      <option>Japanese Yen (JPY)</option>
      <option>British Pound (GBP)</option>
      <option>Swiss Franc (CHF)</option>
      <option>Canadian Dollar (CAD)</option>
      <option>Australian/New Zealand Dollar</option>
      <option>South African Rand (ZAR)</option>
      <option>Vietnamese Dong(VND)</option>
      <option>Turkish Lira</option>
    </>
  );


function CurrencyConverter() {
    const [amount, setAmount] = useState(0);
    const [output, setOutput] = useState(0);
    const [error, setError] = useState(null);

    const handleConversion = async () => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "HbPbxmRmmT0Ge5laW0Xh3auZ8vGkZRGe");

        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };

        const response = await fetch("https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}", requestOptions);
        const result = await response.text();

        setOutput(result);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };

    return (
      <div className="currency">
        <h1>Money Converter</h1>
        <p>Please input the currency here:</p>
        <div className="container">
          <div className="center">
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            <select>
              <CurrencyOption />
            </select>
            <button onClick={handleConversion}>Convert</button>
            <select>
              <CurrencyOption />
            </select>
          </div>
        </div>
        {error ? (
          <p>An error occurred: {error.message}</p>
        ) : (
          <p>Output: {output}</p>
        )}
      </div>
    );
  }

export default CurrencyConverter;
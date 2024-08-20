import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyLogo, currencName, usdValue, euroValue} = cryptoData

  return (
    <li className="crypto-item">
      <div className="logo-card">
        <img src={currencyLogo} alt={currencName} className="currency-logo" />
        <p className="val">{currencName}</p>
      </div>
      <div className="currency-card">
        <div className="crypto-val">
          <p className="usd val">{usdValue}</p>
        </div>
        <div className="crypto-val">
          <p className="euro val">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

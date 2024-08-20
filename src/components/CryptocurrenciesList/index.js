import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptosData: []}

  componentDidMount() {
    this.getCryptosData()
  }

  getCryptosData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptosData: formattedData, isLoading: false})
  }

  render() {
    const {cryptosData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#FFFFFF" height={40} width={40} />
          </div>
        ) : (
          <div className="crypto-container">
            <h1 className="title">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptocurrency-png"
            />
            <div className="crypto-list-item">
              <div className="crypto-header-card">
                <div>
                  <p className="header">Coin Type</p>
                </div>
                <div className="currency-type">
                  <p className="header">USD</p>
                  <p className="header">EURO</p>
                </div>
              </div>
              <ul className="crypto-list-container">
                {cryptosData.map(item => (
                  <CryptocurrencyItem cryptoData={item} key={item.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList

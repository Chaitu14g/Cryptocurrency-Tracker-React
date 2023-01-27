import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoListValues: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.fetchListDetails()
  }

  fetchListDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({
      cryptoListValues: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {cryptoListValues, isLoading} = this.state
    return (
      <div className="background_container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="background_container_sub">
            <h1 className="main_heading">Cryptocurrency Tracker</h1>
            <img
              alt="cryptocurrency"
              className="main_image"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            />
            <CryptocurrenciesList cryptoListValues={cryptoListValues} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker

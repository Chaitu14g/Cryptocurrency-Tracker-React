import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrencyList = props => {
  const {cryptoListValues} = props
  return (
    <div className="cryptoList">
      <div className="headingListContainer">
        <p className="headingPara headingParaWidth">Coin Type</p>
        <p className="headingPara">USD</p>
        <p className="headingPara">EURO</p>
      </div>
      <ul className="cryptoListSub">
        {cryptoListValues.map(eachItem => (
          <CryptocurrencyItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrencyList

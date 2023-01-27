import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachItem
  return (
    <li className="singleListContainer">
      <img className="singleImage" alt={currencyName} src={currencyLogo} />
      <p className="singlePara singleParaUnique">{currencyName}</p>
      <p className="singlePara">{usdValue}</p>
      <p className="singlePara">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem

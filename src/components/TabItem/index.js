import './index.css'

const TabItem = props => {
  const {data, onClickTabItem} = props
  const {tabId, displayText} = data

  const handleClick = () => {
    onClickTabItem(tabId)
  }
  return (
    <li className="tab-item" onClick={handleClick}>
      <button type="button" onClick={handleClick}>
        <p className="tab-item">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem

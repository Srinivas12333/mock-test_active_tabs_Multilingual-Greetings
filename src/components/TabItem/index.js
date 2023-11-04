import './index.css'

const TabItem = props => {
  const {details, onChangeActiveTab, isActive} = props
  const {id, buttonText} = details

  const activeButton = isActive ? 'active-button' : ''

  const onClickButton = () => {
    onChangeActiveTab(id)
  }

  return (
    <li className="button-list-item">
      <button
        className={`button ${activeButton}`}
        type="button"
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default TabItem

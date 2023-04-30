// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, updateSearchInput} = props
  const {suggestion} = eachSuggestion

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-styles">
      <div className="list-suggestions">
        <p>{suggestion}</p>
        <button type="button" className="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow-icon"
            onClick={onClickSuggestion}
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem

import * as React from 'react'
import { AppContext } from '../../../App'
import { CloseIcon, SearchIcon } from '../../../assets/images/svg'
import { HeaderStateContext } from '../Header'


const SearchBarView: React.FC = () => {
  const { useContext, useState, useRef } = React
  const [query, setQuery] = useState('')
  const input = useRef<HTMLInputElement>(document.createElement('input'))
  const {
    iconColor, setSearchBarState, isSearchBarOpen, theme,
  } = useContext(HeaderStateContext)
  const { mobile } = useContext(AppContext)

  const handleCloseIconClick = () => {
    if (query) {
      setQuery('')
      return input.current.focus()
    }
    setSearchBarState(false)
  }

  return (
    <div className={`search ${theme}${isSearchBarOpen ? ' open' : ''}`}>
      {
        !mobile && (
          <SearchIcon
            onClick={() => setSearchBarState(true)}
            color={iconColor}
          />
        )
      }
      {
        isSearchBarOpen && (
          <React.Fragment>
            <input
              ref={input}
              value={query}
              onChange={({ target: { value }}) => setQuery(value)}
            />
            {
              (!mobile || query) && (
                <CloseIcon
                  onClick={handleCloseIconClick}
                  color={iconColor}
                />
              )
            }
          </React.Fragment>
        )
      }
    </div>
  )
}

export default SearchBarView

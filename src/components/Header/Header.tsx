import React from 'react'
import {  RouteComponentProps, withRouter } from 'react-router-dom'
import { AppContext } from '../../App'
import Cart from './Cart'
import Categories from './Categories'
import Logo from './Logo'
import SearchBar from './SearchBar'
import SideBar from './SideBar'

interface IHeaderState extends Readonly <{
  iconColor: number,
  theme: string,
  isSearchBarOpen ?: boolean,
  setSearchBarState(arg0: boolean): any,
}> {}

export const HeaderStateContext = React.createContext({} as IHeaderState)

const Header: React.FC<RouteComponentProps> = ({ history: { location: { pathname } } }) => {
  const { useState, useEffect, useCallback, useContext } = React
  const { mobile } = useContext(AppContext)
  const [isSearchBarOpen, setSearchBarState] = useState(mobile)
  const isCatalog = (path: string): boolean => path.includes('/catalog')

  const getThemeDetails = useCallback(() => isCatalog(pathname)
    ? {
      iconColor: 3,
      theme: 'dark',
     } : {
       iconColor: 2,
       theme: 'light',
     }, [pathname])

  const { theme: initialTheme, iconColor: initialIconColor } = getThemeDetails()

  const [theme, setTheme] = useState(initialTheme)
  const [iconColor, setIconColor] = useState(initialIconColor)

  useEffect(() => {
    const { iconColor: newColor, theme: newTheme } = getThemeDetails()
    if (!mobile) {
      setIconColor(newColor)
      setSearchBarState(isCatalog(pathname))
    } else {
      setIconColor(1)
      setSearchBarState(true)
    }
    setTheme(newTheme)
  }, [getThemeDetails, setIconColor, mobile, pathname])

  const searchBarClass = isSearchBarOpen ? ' search-bar-open' : ''
  

  return (
    <HeaderStateContext.Provider value={{
      iconColor,
      isSearchBarOpen,
      setSearchBarState,
      theme,
    }}>
      <div className={`header ${theme}`}>
        <div className="header__content-wrapper">
          <div className="header__logo">
            <Logo />
          </div>
          {
            mobile ? (
              <div className={`header__nav-bar${searchBarClass}`}>
                <SideBar />
              </div>
            ) : (
              <div className={`header__categories${searchBarClass}`}>
                {!isCatalog(pathname) && <Categories />}
              </div>
            )
          }
          <div className={`header__search${searchBarClass}`}>
            <SearchBar />
          </div>
          <div className="header__cart">
            <Cart />
          </div>
        </div>
      </div>
    </HeaderStateContext.Provider>
  )
}

export default withRouter(Header)

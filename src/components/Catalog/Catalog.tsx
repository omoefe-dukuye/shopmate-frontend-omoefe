import React, { createContext, FC } from 'react'
import { RouteComponentProps } from 'react-router'
import Categories from './Categories'
import FilteredProducts from './FilteredProducts'

interface ICatalogContext extends Readonly <{
  pathname: string,
}> {}

export const CatalogContext = createContext({ pathname: '/catalog' } as ICatalogContext)

const CatalogView: FC<RouteComponentProps> = ({ history: { location: { pathname } } }) => (
  <CatalogContext.Provider value={{ pathname }}>
    <div className="catalog">
      <Categories />
      <FilteredProducts />
    </div>
  </CatalogContext.Provider>
)

export default CatalogView

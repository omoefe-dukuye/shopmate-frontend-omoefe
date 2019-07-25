import React, { FC, useContext, useState } from 'react'
import { CatalogContext } from '../Catalog'
import Filters from './Filters'
import Products from './Products'

const FilteredProducts: FC = () => {
  const { pathname } = useContext(CatalogContext)

  const [variables, setVariables] = useState({})

  const [productCount, setProductCount] = useState(0)

  const initialVariables = {
    first: 6,
    ...(pathname !== '/catalog' && { category: pathname.split('/').pop() }),
  }

  return (
    <div className="content-wrapper catalog__filtered-products__wrapper">
      <div className="catalog__filtered-products">
        <Filters
          info={{
            productCount,
          }}
          setVariables={setVariables}
        />
        <Products
          variables={{
            ...initialVariables,
            ...variables,
          }}
          setProductCount={setProductCount}
        />
      </div>
    </div>
  )
}

export default FilteredProducts

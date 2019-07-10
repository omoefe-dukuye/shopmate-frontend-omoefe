import React, { ReactNode, useContext } from 'react'
import { Query } from 'react-apollo'
import { GET_PRODUCTS } from '../../../graphql/queries'
import { IErrorLoading, IProductsResponse } from '../../../types'
import Error from '../../Error'
import Loader from '../../Loader'
import { CatalogContext } from '../Catalog'
import FilteredProductsView from './FilteredProductsView'

const FilteredProducts: React.FC = () => {
  const { pathname } = useContext(CatalogContext)
  return (
    <div className="content-wrapper catalog__filtered-products__wrapper">
      <Query
        query={GET_PRODUCTS}
        variables={{
          first: 6,
          ...(pathname !== '/catalog' && { category: pathname.split('/').pop() }),
        }}
      >
        {
          ({ error, loading, data}: IErrorLoading & IProductsResponse): ReactNode => {
            if (loading) return <Loader />
            if (error) return <Error />
            return <FilteredProductsView products={data.products} />
          }
        }
      </Query>
    </div>
  )
}

export default FilteredProducts

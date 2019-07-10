import React, { ReactNode } from 'react'
import { Query } from 'react-apollo'
import { GET_PRODUCTS } from '../../../graphql/queries'
import { IApolloResponse, IProductsResponse } from '../../../types'
import GridSectionView from './GridSectionView'

const GridSection: React.FC = () => (
  <Query
    query={GET_PRODUCTS}
    variables={{
      first: 4,
      orderBy: 'price_DESC',
    }}
  >
    {
      ({ loading, error, data }: IApolloResponse & IProductsResponse): ReactNode => {
        return (
          <GridSectionView
            error={error}
            loading={loading}
            products={data && data.products.products}
          />
        )
      }
    }
  </Query>
)

export default GridSection

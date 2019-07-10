import React, { FC, ReactNode } from 'react'
import { Query } from 'react-apollo'
import { GET_ATTRIBUTES } from '../../../../../graphql/queries'
import { IApolloResponse, IAttributesResponse } from '../../../../../types'
import Error from '../../../../Error'
import Loader from '../../../../Loader'
import FilterAttributesView from './FilterAttributesView'

const FilterAttributes: FC = () => (
  <div className="catalog__filtered-products__filters__attributes">
    <Query query={GET_ATTRIBUTES}>
      {
        ({ error, loading, data }: IApolloResponse & IAttributesResponse): ReactNode => {
          if (loading) return <Loader />
          if (error) return <Error />
          return <FilterAttributesView attributes={data.attributes} />
        }
      }
    </Query>
  </div>
)

export default FilterAttributes

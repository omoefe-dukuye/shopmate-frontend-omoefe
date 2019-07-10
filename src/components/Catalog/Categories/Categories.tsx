import React, { ReactNode } from 'react'
import { Query } from 'react-apollo'
import { GET_CATEGORIES } from '../../../graphql/queries'
import { ICategoriesResponse, IApolloResponse } from '../../../types'
import Error from '../../Error'
import Loader from '../../Loader'
import CategoriesView from './CategoriesView'

const Categories: React.FC = () => (
  <div className="catalog__categories">
    <Query
      query={GET_CATEGORIES}
    >
      {
        ({ error, loading, data}: IApolloResponse & ICategoriesResponse): ReactNode => {
          if (loading) return <Loader />
          if (error) return <Error />
          return <CategoriesView categories={data.categories} />
        }
      }
    </Query>
  </div>
)

export default Categories

import * as React from 'react'
import { Query } from 'react-apollo'
import { GET_CATEGORIES } from '../../../graphql/queries'
import { IApolloResponse, ICategoriesResponse } from '../../../types'
import Error from '../../Error'
import Loader from '../../Loader'
import CategoriesView from './CategoriesView'

const Categories: React.FC = () => (
  <Query
    query={GET_CATEGORIES}
  >
    {
      ({ loading, error, data }: ICategoriesResponse & IApolloResponse): React.ReactNode => {
        if (loading) return <Loader size={0.5} />
        if (error) return <Error />

        let displayedCategories = data.categories.map(({ name }) => name)

        if (displayedCategories.length > 5) {
          displayedCategories = displayedCategories.slice(0, 5)
        }

        return <CategoriesView categories={displayedCategories} />
      }
    }
  </Query>
)

export default Categories

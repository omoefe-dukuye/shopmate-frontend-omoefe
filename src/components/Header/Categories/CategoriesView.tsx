import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import cleanString from '../../../utils/cleanString'
import { HeaderStateContext } from '../Header'

interface ICategories extends Readonly <{
  categories: ReadonlyArray<string>,
}> {}

const CategoriesView: FC<ICategories> = ({ categories }) => {
  const { isSearchBarOpen } = React.useContext(HeaderStateContext)
  return (
    <div className={`categories${isSearchBarOpen ? ' search-bar-open' : ''}`}>
      {
        categories.map(category => (
          <Link
            key={category}
            to={`/catalog/${cleanString(category)}`}
          >
            <span key={category}>
              {category}
            </span>
          </Link>
        ))
      }
    </div>
  )
}

export default CategoriesView

import React, { FC, Fragment } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { CloseIcon } from '../../../../assets/images/svg'
import getCategory from '../../../../utils/getCategory'

const FilterCategories: FC<RouteComponentProps> = ({ history }) => {
  const { pathname } = history.location
  const isCatalog = pathname === '/catalog'
  return (
    <div className="catalog__filtered-products__filters__categories">
      <h3 className="filter-header">Category</h3>
      <div>
        {
          isCatalog
            ? (
              <p>All</p>
          ) : (
            <Fragment>
              <CloseIcon
                onClick={() => history.push('/catalog')}
                color={1}
              />
              <p>{getCategory(pathname.split('/').pop() as string)}</p>
            </Fragment>
          )
        }
      </div>
    </div>
  )
}

export default withRouter(FilterCategories)

import React, { FC } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { CloseIcon } from '../../../../assets/images/svg'
import getCategory from '../../../../utils/getCategory'

const FilterCategories: FC<RouteComponentProps> = ({ history }) => {
  const { pathname } = history.location
  const isCatalog = pathname === '/catalog'
  return (
    <div className="catalog__filtered-products__filters__categories">
      <div>
        {
          !isCatalog && (
            <CloseIcon
              onClick={() => history.push('/catalog')}
              color={1}
            />
          )
        }
        <p>Category: {isCatalog ? 'All' : getCategory(pathname.split('/').pop() as string) }</p>
      </div>
    </div>
  )
}

export default withRouter(FilterCategories)

import React, { FC, useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../../App'
import { ICategory } from '../../../types'
import cleanString from '../../../utils/cleanString'
import { CatalogContext } from '../Catalog'

interface ICategoriesView extends Readonly<{
  categories: ReadonlyArray<ICategory>,
}> {}

const CategoriesView: FC<ICategoriesView> = ({ categories }) => {
  const initialBannerText: string = 'Over a hundred T-shirts . . .'
  const [descriptionState, setDescription] = useState('')
  const { mobile } =  useContext(AppContext)
  const { pathname } = useContext(CatalogContext)
  return (
    <div className="content-wrapper">
      <div className="catalog__categories__text">
        {
          !mobile && (
            <div className="catalog__categories__text__nav">
              {
                categories.map(({ id, name, description }) => {
                  const isCurrentNav = cleanString(name) === pathname.split('/').pop()
                  if (isCurrentNav && descriptionState !== description) {
                    setDescription(description)
                  }
                  return (
                    <div key={id} className="catalog__categories__text__nav__item">
                      <NavLink
                        activeClassName="catalog__categories__text__nav__item--active"
                        to={`/catalog/${cleanString(name)}`}
                      >
                        <h2>{name}</h2>
                      </NavLink>
                    </div>
                  )
                })
              }
            </div>
          )
        }
        <div className="catalog__categories__text__description">
          <p>
            {pathname === '/catalog' ? initialBannerText : descriptionState}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CategoriesView

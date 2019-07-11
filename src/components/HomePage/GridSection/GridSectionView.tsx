import React, { FC, ReactNode, useContext } from 'react'
import { AppContext } from '../../../App'
import { IErrorLoading, IProductCard } from '../../../types'
import Ad from './Ad'
import Product from './Product'

interface IGridSectionView extends IErrorLoading, Readonly <{
  products: ReadonlyArray<IProductCard>,
}> {}



const GridSectionView: FC<IGridSectionView> = ({ loading, error, products }) => {
  const { mobile } = useContext(AppContext)
  const boxContent = (i: number): ReactNode  => {
    if (mobile || i < 3) {
      return (
        <Product
          loading={loading}
          error={error}
          product={products && products[i]}
          index={i}
        />
      )
    }

    return (
      <Ad />
    )
  }
  return (
    <div className="grid-section">
      {
        Array.from(Array(4), (_, i) => (
          <div
            className={`grid-section__box--${i + 1}`}
            key={i}
          >
            {boxContent(i)}
          </div>
        ))
      }
    </div>
  )
}

export default GridSectionView

import React, { FC } from 'react'

interface IFilterHeader extends Readonly <{
  productCount: number,
}> {}

const FilterHeader: FC<IFilterHeader> = ({ productCount }) => (
  <div className="catalog__filtered-products__filters__header">
    <h2>Filter <span>{productCount}</span> items</h2>
  </div>
)

export default FilterHeader

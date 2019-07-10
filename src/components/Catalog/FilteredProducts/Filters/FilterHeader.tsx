import React, { FC } from 'react'

const FilterHeader: FC<{ productCount: number }> = ({ productCount }) => (
  <div className="catalog__filtered-products__filters__header">
    <h2>Filter <span>{productCount}</span> items</h2>
  </div>
)

export default FilterHeader

import React, { FC, useContext } from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/src/scss/index.scss'
import { FiltersContext } from './Filters'

const FilterPriceRange: FC = () => {
  const { priceRange, setPriceRange, sliderSpan } = useContext(FiltersContext)

  return (
    <div className="catalog__filtered-products__filters__price-range">
      <h3 className="filter-header">Price Range</h3>
      <InputRange
        {...sliderSpan}
        draggableTrack
        onChange={setPriceRange}
        value={priceRange}
        formatLabel={value => `₦ ${value}`}
      />
    </div>
  )
}

export default FilterPriceRange

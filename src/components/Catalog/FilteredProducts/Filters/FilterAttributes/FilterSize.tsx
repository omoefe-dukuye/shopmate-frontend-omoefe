import React, { FC, useContext } from 'react'
import { FiltersContext } from '../Filters'



const FilterSize: FC<{sizes: string[]}> = ({ sizes }) => {
  const { selectedSizes, setSizes } = useContext(FiltersContext)
  const handleClick = (size: string) => {
    if (selectedSizes.includes(size)) {
      return setSizes(selectedSizes.filter(existingSize => size !== existingSize))
    }
    setSizes([...selectedSizes, size])
  }

  return (
    <div className="filter-attributes__size">
      <h2 className="filter-attributes__size__header">Size</h2>
      <div className="filter-attributes__size__content">
        <div className="filter-attributes__size__content__size-items">
          {
            sizes.map(size => (
                <span
                  className={`size-item${selectedSizes.includes(size) ? ' selected' : ''}`}
                  key={size}
                  onClick={() => handleClick(size)}
                >
                  {size}
                </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FilterSize

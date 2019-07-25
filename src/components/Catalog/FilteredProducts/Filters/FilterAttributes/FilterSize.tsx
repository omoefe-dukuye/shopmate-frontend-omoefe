import React, { FC, useContext } from 'react'
import { FiltersContext } from '../Filters'

interface IFilterSize extends Readonly <{
  sizes: ReadonlyArray<string>,
}> {}

const FilterSize: FC<IFilterSize> = ({ sizes }) => {
  const { selectedSizes, setSizes } = useContext(FiltersContext)
  const handleClick = (size: string) => {
    if (selectedSizes.includes(size)) {
      return setSizes(selectedSizes.filter(existingSize => size !== existingSize))
    }
    setSizes([...selectedSizes, size])
  }

  return (
    <div className="filter-attributes__size">
      <h3 className="filter-header filter-header">Size</h3>
      <div className="filter-attributes__content">
        <div className="filter-attributes__content__items">
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

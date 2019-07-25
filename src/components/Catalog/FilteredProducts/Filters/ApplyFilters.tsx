import React, { FC, useContext } from 'react'
import { CloseIcon } from '../../../../assets/images/svg'
import { FiltersContext } from './Filters'

const ApplyFilters: FC = () => {
  const { applyFilters, clearFilters } = useContext(FiltersContext)

  return (
    <div className="catalog__filtered-products__apply">
      <button
        className="button"
        onClick={applyFilters}
      >
        Apply
      </button>
      <button onClick={clearFilters}>
        <CloseIcon
          color={1}
        />
        <span>Clear All</span>
      </button>
    </div>
  )
}

export default ApplyFilters

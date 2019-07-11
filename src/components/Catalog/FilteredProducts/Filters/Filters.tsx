import React, { createContext, FC, useState } from 'react'
import FilterAttributes from './FilterAttributes'
import FilterCategories from './FilterCategories'
import FilterHeader from './FilterHeader'

interface IFilters extends Readonly <{
  info: Readonly <{
    productCount: number,
  }>,
}> {}

interface IFiltersContext extends Readonly <{
  selectedColors: string[],
  selectedSizes: string[],
  setColors(colors: string[]): void,
  setSizes(sizes: string[]): void,
}> {}

export const FiltersContext = createContext({} as IFiltersContext)

const Filters: FC<IFilters> = ({ info }) => {
  const [selectedColors, setColors] = useState<string[]>([])
  const [selectedSizes, setSizes] = useState<string[]>([])
  return (
    <div className="catalog__filtered-products__filters">
      <FiltersContext.Provider value={{
        selectedColors,
        selectedSizes,
        setColors,
        setSizes,
      }}>
        <FilterHeader productCount={info.productCount} />
        <FilterCategories />
        <FilterAttributes />
      </FiltersContext.Provider>
    </div>
  )
}

export default Filters

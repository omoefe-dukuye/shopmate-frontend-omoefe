import React, { createContext, FC, useState } from 'react'
import { Range } from 'react-input-range'
import { IInputVariables } from '../../../../types'
import ApplyFilters from './ApplyFilters'
import FilterAttributes from './FilterAttributes'
import FilterCategories from './FilterCategories'
import FilterHeader from './FilterHeader'
import FilterPriceRange from './FilterPriceRange'

interface IFilters extends Readonly <{
  info: Readonly <{
    productCount: number,
  }>,
  setVariables: (variables: IInputVariables) => void,
}> {}

interface IFiltersContext extends Readonly <{
  sliderSpan: {
    maxValue?: number;
    minValue?: number;
  },
  applyFilters: () => void,
  clearFilters: () => void,
  priceRange: Range,
  setPriceRange: (value: Range) => void,
  selectedColors: string[],
  selectedSizes: string[],
  setColors(colors: string[]): void,
  setSizes(sizes: string[]): void,
}> {}

export const FiltersContext = createContext({} as IFiltersContext)

const Filters: FC<IFilters> = ({ info, setVariables }) => {
  const sliderSpan = {
    maxValue: 30,
    minValue: 0,
  }

  const [selectedColors, setColors] = useState<string[]>([])
  const [selectedSizes, setSizes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<Range>({
    max: sliderSpan.maxValue,
    min: sliderSpan.minValue,
  })

  const getFilterState = () => ({
    ...(selectedColors[0] && { colors: selectedColors }),
    priceRange: [priceRange.min, priceRange.max],
    ...(selectedSizes[0] && { sizes: selectedSizes }),
  })

  const applyFilters = () => {
    setVariables(getFilterState())
  }

  const clearFilters = () => {
    setColors([])
    setSizes([])
    setPriceRange({
      max: sliderSpan.maxValue,
      min: sliderSpan.minValue,
    })

    setVariables(getFilterState())
  }

  return (
    <div className="catalog__filtered-products__filters">
      <FiltersContext.Provider value={{
        applyFilters,
        clearFilters,
        priceRange,
        selectedColors,
        selectedSizes,
        setColors,
        setPriceRange,
        setSizes,
        sliderSpan,
      }}>
        <FilterHeader productCount={info.productCount} />
        <FilterCategories />
        <FilterAttributes />
        <FilterPriceRange />
        <ApplyFilters />
      </FiltersContext.Provider>
    </div>
  )
}

export default Filters

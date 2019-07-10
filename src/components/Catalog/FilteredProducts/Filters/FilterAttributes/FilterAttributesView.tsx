import React, { FC } from 'react'
import { IAttribute } from '../../../../../types'
import FilterColor from './FilterColor'
import FilterSize from './FilterSize'

const FilterAttributesView: FC<{ attributes: IAttribute[] }> = ({ attributes }) => {
  const formattedAttributes = attributes.reduce((acc, { name, values }) => {
    return {
      ...acc,
      [name.toLowerCase()]: values.map(({ value }) => value),
    }
  }, { color: [], size: [] })
  return (
    <div>
      <FilterColor colors={formattedAttributes.color || []} />
      <FilterSize sizes={formattedAttributes.size || []} />
    </div>
  )
}

export default FilterAttributesView

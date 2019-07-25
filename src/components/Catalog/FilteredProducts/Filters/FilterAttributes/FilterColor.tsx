import React, { FC, useContext, useState } from 'react'
import { FiltersContext } from '../Filters'

interface IFilterColor extends Readonly <{
  colors: ReadonlyArray<string>,
}> {}

const FilterColor: FC<IFilterColor> = ({ colors }) => {
  const [tipColor, setTipColor] = useState('')
  const { selectedColors, setColors } = useContext(FiltersContext)
  const handleClick = (color: string) => {
    if (selectedColors.includes(color)) {
      return setColors(selectedColors.filter(existingColor => color !== existingColor))
    }
    setColors([...selectedColors, color])
  }

  return (
    <div className="filter-attributes__color">
      <h3 className="filter-header filter-header--color">Color</h3>
      <div className="filter-attributes__content">
        <div className="filter-attributes__content__tip">{tipColor}</div>
        <div className="filter-attributes__content__items filter-attributes__content__items--color">
          {
            colors.map(color => (
              <div
                className={`color-item-wrapper${selectedColors.includes(color) ? ' selected' : ''}`}
                key={color}
              >
                <span
                  className="color-item"
                  style={{
                    background: color.toLowerCase(),
                    ...(
                      color.toLowerCase() === 'white'
                      && !selectedColors.includes(color)
                      && { border: '1px solid #666'}
                    ),
                  }}
                  onMouseLeave={() => setTipColor('')}
                  onMouseEnter={() => setTipColor(color)}
                  onClick={() => handleClick(color)}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FilterColor

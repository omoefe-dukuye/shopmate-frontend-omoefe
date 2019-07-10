import React, { FC, useContext, useState } from 'react'
import { FiltersContext } from '../Filters'



const FilterColor: FC<{colors: string[]}> = ({ colors }) => {
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
      <h2 className="filter-attributes__color__header">Color</h2>
      <div className="filter-attributes__color__content">
        <div className="filter-attributes__color__content__tip">{tipColor}</div>
        <div className="filter-attributes__color__content__color-items">
          {
            colors.map(color => (
              <div className={`color-item-wrapper${selectedColors.includes(color) ? ' selected' : ''}`}>
                <span
                  className="color-item"
                  key={color}
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

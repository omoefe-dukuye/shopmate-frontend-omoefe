import * as React from 'react'
import { PulseLoader } from 'react-spinners'
import { colors, IColors } from '../types'

interface ILoader {
  size ?: number
}

const Loader: React.FC<ILoader & IColors> = ({ size, color }) => (
  <PulseLoader
    sizeUnit="rem"
    size={size}
    color={color}
  />
)

Loader.defaultProps = {
  color: colors.primary,
  size: 1,
}

export default Loader

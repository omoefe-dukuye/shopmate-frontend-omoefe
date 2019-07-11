import React, { FC } from 'react'
import { PulseLoader } from 'react-spinners'
import { colors, IColors } from '../types'

interface ILoader extends Readonly <{
  size ?: number,
}> {}

const Loader: FC<ILoader & IColors> = ({ size, color }) => (
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

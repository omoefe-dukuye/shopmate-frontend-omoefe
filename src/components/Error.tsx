import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { colors, IFontAwesomeIcon } from '../types'

const Error: FC<IFontAwesomeIcon> = ({ size, color }) => (
  <div>
    <FontAwesomeIcon icon={'exclamation-triangle'} color={color} size={size} />
  </div>
)

Error.defaultProps = {
  color: colors.primary,
  size: '1x',
}

export default Error

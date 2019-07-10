import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { colors, IFontAwesomeIconSize } from '../types'

interface IError {
  color ?: colors
}


const Error: React.FC<IFontAwesomeIconSize & IError> = ({ size, color }) => (
  <div>
    <FontAwesomeIcon icon={'exclamation-triangle'} color={color} size={size} />
  </div>
)

Error.defaultProps = {
  color: colors.primary,
  size: '1x',
}

export default Error

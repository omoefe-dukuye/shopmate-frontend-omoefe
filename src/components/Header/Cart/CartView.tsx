import * as React from 'react'
import { BagIcon } from '../../../assets/images/svg'
import { HeaderStateContext } from '../Header'

const CartView: React.FC = () => {
  const { useContext } = React
  const { iconColor } = useContext(HeaderStateContext)
  return (
    <div>
      <BagIcon
// tslint:disable-next-line: no-empty
        onClick={() => {}}
        color={iconColor}
      />
    </div>
  )
}

export default CartView

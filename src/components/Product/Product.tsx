import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { IProductCard } from '../../types'
import CardBack from './Back'
import CardFront from './Front'

interface IProduct {
  product: IProductCard,
  adText ?: string,
}

const Product: React.FC<IProduct> = ({ product, adText }) => {
  const { mobile } = useContext(AppContext)
  return (
    <div className={`product__container${mobile ? '' : ' rotate'}`}>
      <CardFront
        product={product}
        adText={adText}
        mobile={mobile}
      />
      { !mobile && <CardBack product={product} /> }
    </div>
  )
}

export default Product

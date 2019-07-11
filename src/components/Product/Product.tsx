import React, { FC, useContext } from 'react'
import { AppContext } from '../../App'
import { IProductCard } from '../../types'
import CardBack from './Back'
import CardFront from './Front'

interface IProduct extends Readonly <{
  product: IProductCard,
  adText ?: string,
}> {}

const Product: FC<IProduct> = ({ product, adText }) => {
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

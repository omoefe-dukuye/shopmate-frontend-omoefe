import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../../App'
import { IProductCard } from '../../../../types'
import Product from '../../../Product'

interface IProductView {
  product: IProductCard,
  index: number,
}

const ProductView: React.FC<IProductView> = ({ product, index }) => {
  const { image, name, description } = product
  const { mobile } =  useContext(AppContext)
  const adText = 'top picks'
  return index === 0 && !mobile
    ? (
      <div className="product__side product__side--box1">
        <span className="ad-text">
          Featured Product
        </span>
        <div className="product product--box1">
          <div className="product__picture product__picture--box1">
            <img src={require(`../../../../assets/images/${image}`)} alt="Best Picks" />
          </div>
          <div className="product__info product__info--box1">
            <h2>
              {name}
            </h2>
            <Fragment>
              <p>
                {description}
              </p>
              <Link to="/catalog" className="button">
                Shop Now
              </Link>
            </Fragment>
          </div>
        </div>
      </div>
    )
    : <Product product={product} adText={adText} />
}

export default ProductView

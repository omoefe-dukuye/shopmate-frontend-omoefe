import React from 'react'
import { Link } from 'react-router-dom'
import { BagIcon } from '../../assets/images/svg'
import { IProductCard } from '../../types'

interface ICardBack {
  product: IProductCard,
  adText ?: string,
}

const CardBack: React.FC<ICardBack> = ({
  product: { image, name, description, price, id }, adText,
}) => (
  <div className="product__side product__side--back">
    <div className="description">
      <p>
        {description}
      </p>
    </div>
    <div className="action">
      <BagIcon
// tslint:disable-next-line: no-empty
        onClick={() => {}}
        color={3}
      />
      <Link
        to={`/products/${id}`}
        className="button button--reverse"
      >
        View
      </Link>
    </div>
  </div>
)

export default CardBack

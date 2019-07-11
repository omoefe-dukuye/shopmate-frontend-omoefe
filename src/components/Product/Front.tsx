import React, { FC } from 'react'
import { BagIcon } from '../../assets/images/svg';

interface IProduct extends Readonly <{
  product: {
    image: string,
    name: string,
    description: string,
    price: number,
  },
  adText ?: string,
  mobile ?: boolean,
}> {}

const CardFront: FC<IProduct> = ({
  product: { image, name, description, price }, adText, mobile,
}) => (
  <div className="product__side product__side--front">
    {
      adText && (
        <span className="ad-text">
          {adText}
        </span>
      )
    }
    {
      mobile && (
        <span className="card-cart">
          <BagIcon
  // tslint:disable-next-line: no-empty
            onClick={() => {}}
            color={2}
          />
        </span>
      )
    }
    <div className="product">
      <div className="product__picture">
        <img src={require(`../../assets/images/${image}`)} alt="Product" />
      </div>
      <div className="product__info">
        <h2>
          {name}
        </h2>
        <div className="product__info__price">
          <h3>
            &#8358; {price.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  </div>
)

export default CardFront

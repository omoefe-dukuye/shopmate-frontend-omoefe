import React, { FC } from 'react'
import { IPaginatedProducts } from '../../../../types'
import Product from '../../../Product'

const ProductsView: FC<{ readonly products: IPaginatedProducts }> = ({ products }) => (
  <div className="catalog__filtered-products__products">
    {
      products.products.map(product => (
        <div key={product.id} className="catalog__filtered-products__products__product">
          <Product product={product} />
        </div>
      ))
    }
  </div>
)

export default ProductsView

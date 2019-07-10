import React, { FC } from 'react'
import { IPaginatedProducts } from '../../../types'
import Product from '../../Product'
import Filters from './Filters'



const FilteredProductsView: FC<{ products: IPaginatedProducts }> = ({ products }) => (
  <div className="catalog__filtered-products">
    <Filters
      info={{
        productCount: products.count,
        }}
    />
    <div className="catalog__filtered-products__products">
      {
        products.products.map(product => (
          <div key={product.id} className="catalog__filtered-products__products__product">
            <Product product={product} />
          </div>
        ))
      }
    </div>
  </div>
)

export default FilteredProductsView

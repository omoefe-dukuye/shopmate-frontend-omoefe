import React from 'react'
import { IApolloResponse, IProductCard } from '../../../../types'
import Error from '../../../Error'
import Loader from '../../../Loader'
import ProductView from './ProductView'

interface IProductBox extends IApolloResponse, Readonly <{
  product: IProductCard,
  index: number,
}> {}

const Box1: React.FC<IProductBox> = ({ loading, error, index, product }) => {
  if (loading) return <Loader />
  if (error) return <Error />
  return <ProductView product={product} index={index} />
}

export default Box1

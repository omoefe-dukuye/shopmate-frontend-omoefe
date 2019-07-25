import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { Query } from 'react-apollo'
import { GET_PRODUCTS } from '../../../../graphql/queries'
import { IErrorLoading, IProductsResponse, IProductVariables } from '../../../../types'
import Error from '../../../Error'
import Loader from '../../../Loader'
import ProductsView from './ProductsView'

interface IProduct extends Readonly <{
  setProductCount: (count: number) => void,
  variables: IProductVariables,
}> {}

const usePrevious = (value: any) => {
  const ref = useRef()
  
  useEffect(() => {
    ref.current = value
  }, [value])
  
  return ref.current
}

const Products: FC<IProduct> = ({ variables, setProductCount }) => {
  const [prevVariableState, setPrevVariableState] = useState([] as Array<(string | undefined)>)
  const prevVariables = usePrevious(variables)
  return (
      <Query
        query={GET_PRODUCTS}
        variables={variables}
        notifyOnNetworkStatusChange
      >
        {
          ({ error, loading, data, refetch, networkStatus }:
            IErrorLoading & IProductsResponse & {
              refetch: (variables: IProductVariables) => void,
              networkStatus: number,
            }):
              ReactNode => {
            if (loading || networkStatus === 4) return <Loader />
            if (error) return <Error />
            if (
              (JSON.stringify(prevVariables) !== JSON.stringify(variables)
              && !prevVariableState.includes(JSON.stringify(variables)))
            ) {
              setPrevVariableState([...prevVariableState, JSON.stringify(variables)])
              refetch(variables)
              return <Loader />
            }
            setProductCount(data.products.count)
            return (
              <ProductsView products={data.products} />
            )
          }
        }
      </Query>
  )
}

export default Products

import { gql } from 'apollo-boost'

export const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
      description
    }
  }
`



export const GET_PRODUCTS = gql`
  query(
    $orderBy: ProductOrderByInput,
    $first: Int,
    $query: String,
    $skip: Int,
    $category: CategoryName,
    $after: String,
    $priceRange: [Int!]
    $colors: [String!]
    $sizes: [String!]
  ) {
    products(
      orderBy: $orderBy,
      first: $first,
      query: $query,
      skip: $skip,
      category: $category,
      after: $after
      priceRange: $priceRange
      colors: $colors
      sizes: $sizes
    ) {
      hasNext
      startCursor
      endCursor
      products {
        id
        name
        description
        discountedPrice
        display
        image
        price
        attributes {
          color,
          size
        }
        rating {
          value
          count
        }
        thumbnail
      }
      count
    }
  }
`

export const GET_ATTRIBUTES = gql`
  query {
    attributes {
      name
      values {
        value
      }
    }
  }
`

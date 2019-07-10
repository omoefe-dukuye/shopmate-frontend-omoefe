export enum colors {
  primary = '#F62F5E',
  secondary = '#FFF',
}

export interface IFontAwesomeIconSize {
  size ?: 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'
}

export interface IColors {
  color ?: colors
}

export interface IApolloResponse {
  loading: boolean,
  error?: any
}

export interface IOnClick {
  onClick(): any
}

export interface IColor {
  color: string
}

export interface IProduct {
  id: string,
  name: string,
  description: string,
  discountedPrice: number,
  display: number,
  image: string,
  image2: string,
  price: number,
  thumbnail: string,
}

export interface IProductCard {
  id: string,
  name: string,
  description: string,
  discountedPrice: number,
  display: number,
  image: string,
  price: number,
  rating: {
    value: number,
    count: number,
  }
  attributes: {
    color: string[],
    size: string[],
  },
  thumbnail: string,
}

export interface IPaginatedProducts {
  hasNext: boolean,
  startCursor: string,
  endCursor: string,
  products: IProductCard[],
  count: number,
}

export interface IProductsResponse {
  data: {
    products: IPaginatedProducts,
  }
}

export interface IErrorLoading {
  loading: boolean,
  error ?: object,
}

export interface ICategory {
  id: string,
  name: string,
  description: string,
}

export interface ICategoriesResponse {
  data: {
    categories: ICategory[],
  }
}

export interface IRouter {
  history: {
    location: {
      pathname: string,
    },
  },
}

export interface IAttribute {
  name: string
  values: Array<{ value: string }>
}

export interface IAttributesResponse {
  data: {
    attributes: IAttribute[],
  }
}

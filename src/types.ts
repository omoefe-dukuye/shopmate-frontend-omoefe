export enum colors {
  primary = '#F62F5E',
  secondary = '#FFF',
}

export interface IFontAwesomeIcon extends IColors, Readonly <{
  size ?: 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'
}> {}

export interface IColors extends Readonly <{
  color ?: colors,
}> {}

export interface IApolloResponse extends Readonly <{
  loading: boolean,
  error?: any,
}> {}

export interface IOnClick extends Readonly <{
  onClick(): any,
}> {}

export interface IColor extends Readonly <{
  color: string,
}> {}

export interface IProduct extends Readonly <{
  id: string,
  name: string,
  description: string,
  discountedPrice: number,
  display: number,
  image: string,
  image2: string,
  price: number,
  thumbnail: string,
}> {}

export interface IProductCard extends Readonly <{
  id: string,
  name: string,
  description: string,
  discountedPrice: number,
  display: number,
  image: string,
  price: number,
  rating: Readonly <{
    value: number,
    count: number,
  }>,
  attributes: Readonly <{
    color: ReadonlyArray<string>,
    size: ReadonlyArray<string>,
  }>,
  thumbnail: string,
}> {}

export interface IPaginatedProducts extends Readonly <{
  hasNext: boolean,
  startCursor: string,
  endCursor: string,
  products: ReadonlyArray<IProductCard>,
  count: number,
}> {}

export interface IProductsResponse extends Readonly <{
  data: Readonly<{
    products: IPaginatedProducts,
  }>,
}> {}

export interface IErrorLoading extends Readonly <{
  loading: boolean,
  error ?: object,
}> {}

export interface ICategory extends Readonly <{
  id: string,
  name: string,
  description: string,
}> {}

export interface ICategoriesResponse extends Readonly <{
  data: Readonly <{
    categories: ReadonlyArray<ICategory>,
  }>,
}> {}

export interface IRouter extends Readonly <{
  history: Readonly <{
    location: Readonly <{
      pathname: string,
    }>,
  }>,
}> {}

export interface IAttribute extends Readonly <{
  name: string
  values: ReadonlyArray<{ value: string }>,
}> {}

export interface IAttributesResponse extends Readonly <{
  data: Readonly <{
    attributes: ReadonlyArray<IAttribute>,
  }>,
}> {}

type getCategory = (category: string) => string

const getCategory: getCategory = category => {
  if (category === 'valentines') {
    return 'Valentine\'s'
  }
  const arr = category.split('')
  return `${arr[0].toUpperCase()}${(arr.slice(1)).join('')}`
}

export default getCategory

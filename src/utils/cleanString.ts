type cleanString = (str: string) => string

const cleanString: cleanString = str => str.replace(/\W/g, '').toLowerCase()

export default cleanString

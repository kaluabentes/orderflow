import products from '~/data/products.json'
import productsByCategories from '~/data/productsByCategories.json'

export const API_PRODUCTS_GROUPED = '/api/products/grouped'
export const API_PRODUCTS = '/api/products'

export function getProducts() {
  return new Promise(resolve => {
    setTimeout(() => resolve(products), 1000)
  })
}

export function getProductsGroupedByCategories() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data: productsByCategories }), 1000)
  })
}

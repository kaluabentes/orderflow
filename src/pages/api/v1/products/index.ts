import { NowRequest, NowResponse } from '@vercel/node'
import ProductsService from '~/@server/services/ProductService'

export default async (request: NowRequest, response: NowResponse) => {
  if (request.method === 'POST') {
    try {
      response.send(await ProductsService.create(request.body))
    } catch (error) {
      response.status(500).send(error.message)
    }
    return
  }

  try {
    response.send(await ProductsService.getAll())
  } catch (error) {
    response.status(500).send(error.message)
  }
}

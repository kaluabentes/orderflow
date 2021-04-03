import { NowRequest, NowResponse } from '@vercel/node'
import ProductsService from '~/@server/services/ProductService'

export default async (request: NowRequest, response: NowResponse) => {
  if (request.method === 'PATCH') {
    try {
      response.send(
        await ProductsService.update(request.query.id, request.body)
      )
    } catch (error) {
      response.status(500).send(error.message)
    }
    return
  }

  try {
    response.send(await ProductsService.getOne(request.query.id))
  } catch (error) {
    response.status(500).send(error.message)
  }
}

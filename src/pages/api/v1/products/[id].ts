import { NowRequest, NowResponse } from '@vercel/node'
import JwtService from '~/@server/services/JwtService'
import ProductService from '~/@server/services/ProductService'
import connectDb from '~/@server/utils/connectDb'

export default async (request: NowRequest, response: NowResponse) => {
  const user: any = await JwtService.checkToken(request.headers.authorization)

  if (!user || !user.isAdmin) {
    response.status(401).send('Unauthorized')
    return
  }

  await connectDb()

  if (request.method === 'PATCH') {
    try {
      response.send(await ProductService.update(request.query.id, request.body))
    } catch (error) {
      response.status(500).send(error.message)
    }
    return
  }

  try {
    response.send(await ProductService.getOne({ _id: request.query.id }))
  } catch (error) {
    response.status(500).send(error.message)
  }
}

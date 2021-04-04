import { NowRequest, NowResponse } from '@vercel/node'

import JwtService from '~/@server/services/JwtService'
import PaymentMethodService from '~/@server/services/PaymentMethodService'
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
      response.send(
        await PaymentMethodService.update(request.query.id, request.body)
      )
    } catch (error) {
      response.status(500).send(error.message)
    }
    return
  }

  try {
    response.send(await PaymentMethodService.getOne({ _id: request.query.id }))
  } catch (error) {
    response.status(500).send(error.message)
  }
}

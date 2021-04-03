import { NowRequest, NowResponse } from '@vercel/node'

import JwtService from '~/@server/services/JwtService'
import UserService from '~/@server/services/UserService'

export default async (request: NowRequest, response: NowResponse) => {
  const user: any = await JwtService.checkToken(request.headers.authorization)

  if (!user || !user.isAdmin) {
    response.status(401).send('Unauthorized')
    return
  }

  if (request.method === 'PATCH') {
    response
      .status(201)
      .send(await UserService.update(request.query.id, request.body))
    return
  }

  // Get one
  response.status(201).send(await UserService.getOne({ _id: request.query.id }))
}

import { NowRequest, NowResponse } from '@vercel/node'
import User from '~/@server/models/User'

import JwtService from '~/@server/services/JwtService'
import UsersService from '~/@server/services/UsersService'

export default async (request: NowRequest, response: NowResponse) => {
  const user: any = await JwtService.checkToken(request.headers.authorization)

  if (!Boolean(user)) {
    response.status(401).send('Unauthorized')
    return
  }

  if (request.method === 'PATCH') {
    response
      .status(201)
      .send(await User.updateOne({ _id: user.sub }, request.body))
    return
  }

  response.status(200).send(await User.findOne({ _id: user.sub }))
}

import { NowRequest, NowResponse } from '@vercel/node'
import User from '~/@server/models/User'

import JwtService from '~/@server/services/JwtService'
import UsersService from '~/@server/services/UsersService'

export default async (request: NowRequest, response: NowResponse) => {
  if (request.method === 'PATCH') {
    response
      .status(201)
      .send(await User.updateOne({ _id: request.query.id }, request.body))
    return
  }

  // Get one
  response.status(201).send(await User.findOne({ _id: request.query.id }))
}

import { NowRequest, NowResponse } from '@vercel/node'

import JwtService from '~/@server/services/JwtService'
import UserService from '~/@server/services/UserService'

export default async (request: NowRequest, response: NowResponse) => {
  const user: any = await JwtService.checkToken(request.headers.authorization)

  if (!user || !user.isAdmin) {
    response.status(401).send('Unauthorized')
    return
  }

  if (request.method === 'POST') {
    try {
      response.send(await UserService.create(request.body))
    } catch (error) {
      response.status(500).send(error.message)
    }
    return
  }

  try {
    response.send(await UserService.getAll())
  } catch (error) {
    response.status(500).send(error.message)
  }
}

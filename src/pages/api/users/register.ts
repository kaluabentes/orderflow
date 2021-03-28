import { NowRequest, NowResponse } from '@vercel/node'

import AuthService from '~/server/auth/AuthService'
import UsersService from '~/server/users/UsersService'

export default async (request: NowRequest, response: NowResponse) => {
  const {
    method,
    headers: { authorization }
  } = request
  const { name } = request.body

  if (method !== 'POST') {
    response.setHeader('Allow', ['POST'])
    response
      .status(405)
      .send({ error: `Method ${method} not allowed. Methods allowed: POST` })
    return
  }

  const user: any = await AuthService.checkToken(authorization)

  if (!user) {
    response.status(401).send({ error: 'Unauthorized' })
    return
  }

  if (!name) {
    response.status(400).send({ error: 'The name field is required' })
    return
  }

  const result = await UsersService.update(user.sub, {
    name
  })

  response.status(200).send(result)
}

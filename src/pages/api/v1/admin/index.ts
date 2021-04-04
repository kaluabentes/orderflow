import { NowRequest, NowResponse } from '@vercel/node'
import bcrypt from 'bcrypt'

import JwtService from '~/@server/services/JwtService'
import AdminService from '~/@server/services/AdminService'
import { EMAIL_EXISTS } from '~/@server/config/errors'

export default async (request: NowRequest, response: NowResponse) => {
  const user: any = await JwtService.checkToken(request.headers.authorization)

  if (!user || !user.isAdmin) {
    response.status(401).send('Unauthorized')
    return
  }

  if (request.method === 'POST') {
    const adminExists = await AdminService.getOne({ email: request.body.email })

    if (adminExists) {
      response.status(400).send(EMAIL_EXISTS)
      return
    }

    const admin = await AdminService.create({
      ...request.body,
      password: await bcrypt.hash(request.body.password, 10)
    })

    delete admin.password

    try {
      response.send(admin)
    } catch (error) {
      response.status(500).send(error.message)
    }
    return
  }

  try {
    response.send(await AdminService.getAll())
  } catch (error) {
    response.status(500).send(error.message)
  }
}

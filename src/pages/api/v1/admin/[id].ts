import { NowRequest, NowResponse } from '@vercel/node'
import bcrypt from 'bcrypt'

import AdminService from '~/@server/services/AdminService'
import { EMAIL_EXISTS } from '~/@server/config/errors'
import JwtService from '~/@server/services/JwtService'
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
      const admin = await AdminService.getOne({ _id: request.query.id })
      const adminExists = await AdminService.getOne({
        email: request.body.email
      })

      if (request.body.email !== admin.email && adminExists) {
        response.status(400).send(EMAIL_EXISTS)
        return
      }

      admin.name = request.body.name || admin.name
      admin.email = request.body.email || admin.email
      admin.password = request.body.password
        ? await bcrypt.hash(request.body.password, 10)
        : admin.password

      await admin.save()

      delete admin.password

      response.send(admin)
    } catch (error) {
      response.status(500).send(error.message)
    }
    return
  }

  try {
    response.send(await AdminService.getOne({ _id: request.query.id }))
  } catch (error) {
    response.status(500).send(error.message)
  }
}

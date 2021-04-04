import { NowRequest, NowResponse } from '@vercel/node'
import bcrypt from 'bcrypt'
import { USER_NOTFOUND, WRONG_PASSWORD } from '~/@server/config/errors'
import AdminService from '~/@server/services/AdminService'
import JwtService from '~/@server/services/JwtService'
import connectDb from '~/@server/utils/connectDb'

export default async (request: NowRequest, response: NowResponse) => {
  const { email, password } = request.body

  await connectDb()

  try {
    const admin = await AdminService.getOne({ email })

    if (!admin) {
      response.status(400).send(USER_NOTFOUND)
      return
    }

    const checkPassword = await bcrypt.compare(password, admin.password)

    if (!checkPassword) {
      response.status(400).send(WRONG_PASSWORD)
      return
    }

    const plainAdmin = Object.create(admin)

    delete plainAdmin.password

    response.send({
      user: plainAdmin,
      token: await JwtService.createToken({
        sub: admin._id,
        isAdmin: true
      })
    })
  } catch (error) {
    response.status(500).send(error.message)
  }
}

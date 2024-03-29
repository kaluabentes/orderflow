import { NowRequest, NowResponse } from '@vercel/node'
import twilio from 'twilio'

import JwtService from '~/@server/services/JwtService'
import UsersService from '~/@server/services/UserService'
import connectDb from '~/@server/utils/connectDb'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const serviceSid = process.env.TWILIO_SERVICE_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

/**
 * Verifica código
 * Caso seja inválido retornar código de erro
 * Caso o código seja válido cria ou retorna usuário através do número de celular
 * Criar token jwt e retornar junto com as informações do usuário
 */
export default async (request: NowRequest, response: NowResponse) => {
  const { method } = request
  const { code, phone } = request.body

  if (method !== 'POST') {
    response.setHeader('Allow', ['POST'])
    response
      .status(405)
      .send({ error: `Method ${method} not allowed. Methods allowed: POST` })
    return
  }

  if (!code) {
    response.status(400).send({ error: 'code field is required' })
    return
  }

  if (code.length < 4) {
    response.status(400).send({
      message: 'Invalid code'
    })
    return
  }

  if (!phone) {
    response.status(400).send({ error: 'Phone field is required' })
    return
  }

  if (phone.length < 11) {
    response.status(400).send({
      message: 'The phone number must have 11 digits with DD included'
    })
  }

  await connectDb()
  const client = twilio(accountSid, authToken)

  try {
    await client.verify
      .services(serviceSid)
      .verificationChecks.create({ to: `+55${phone}`, code })

    const user = await UsersService.getOne({ phone })

    if (user) {
      const token = await JwtService.createToken({
        sub: user._id,
        isAdmin: false
      })
      response.status(200).send({
        token,
        user
      })
      return
    }

    const newUser = await UsersService.create({ phone })

    const token = await JwtService.createToken({
      sub: newUser._id,
      isAdmin: false
    })

    response.status(200).send({
      token,
      user: newUser
    })
  } catch (error) {
    response.status(400).send({ error: error.message, ...error })
    return
  }
}

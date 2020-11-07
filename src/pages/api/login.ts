import { NowRequest, NowResponse } from '@vercel/node'
import twilio from 'twilio'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const serviceSid = process.env.TWILIO_SERVICE_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

export default async (request: NowRequest, response: NowResponse) => {
  const { method } = request
  const { phone } = request.body

  if (method !== 'POST') {
    response.setHeader('Allow', ['POST'])
    response
      .status(405)
      .send({ error: `Method ${method} not allowed. Methods allowed: POST` })
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

  const client = twilio(accountSid, authToken)

  try {
    const verification = await client.verify
      .services(serviceSid)
      .verifications.create({ to: `+55${phone}`, channel: 'sms' })

    response.status(200).send(verification)
  } catch (error) {
    response.status(400).send({ error })
    return
  }
}

import axios from 'axios'

export function sendVerificationCode(phone) {
  return axios.post('/api/login', { phone })
}

import axios from 'axios'

export function login(phone) {
  return axios.post('/api/login', { phone })
}

export function verify(phone, code) {
  return axios.post('/api/verify', { phone, code })
}

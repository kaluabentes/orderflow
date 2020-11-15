import axios from 'axios'
import buildAuthHeader from '~/utils/buildAuthHeader'

export function login(phone) {
  return axios.post('/api/login', { phone })
}

export function verify(phone, code) {
  return axios.post('/api/verify', { phone, code })
}

export function register(token, data) {
  return axios.post('/api/register', data, buildAuthHeader(token))
}

import axios from 'axios'
import getAuthHeader from '~/utils/getters/getAuthHeader'

export function login(phone) {
  return axios.post('/api/login', { phone })
}

export function verify(phone, code) {
  return axios.post('/api/verify', { phone, code })
}

export function register(token, data) {
  return axios.post('/api/register', data, getAuthHeader(token))
}

import net from './net'
import config from '@/config'

export default class User {
  async register (user) {
    const response = await net.postOnly(`${config.api}/register`, user)
    if (response.status >= 200 && response.status < 300) {
      return response.json()
    }
    if (response.status >= 500) return Promise.reject(new Error({ message: 'Server error' }))

    const json = await response.text()
    return Promise.reject(new Error(json))
  }

  async login (user) {
    const response = await net.postOnly(`${config.api}/login`, user)
    if (response.status >= 200 && response.status < 300) {
      return response.json()
    }
    if (response.status >= 500) return Promise.reject(new Error({ message: 'Server error' }))

    const json = await response.text()
    return Promise.reject(new Error(json))
  }
}

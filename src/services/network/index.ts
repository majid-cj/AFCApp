import axios from 'axios'
import { useAppStore } from '~/store'

export const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.202:8080/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    timeout: 5000,
  },
})

export const setupNetwork = async () => {
  axiosInstance.interceptors.request.use(
    async (config) => {
      const { authorized } = useAppStore()
      const authorization = authorized
        ? { Authorization: `Bearer ${authorized.access}` }
        : {}
      config.headers = {
        ...config.headers,
        ...authorization,
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      return Promise.reject(error)
    }
  )
}

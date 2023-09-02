import { GeneralError } from '~/utils/errors'
import { axiosInstance } from '../network'

export const signUpAPI = async (requestData: any): Promise<any> => {
  try {
    const response = await axiosInstance.post<any>('sign-up/', requestData)
    const { data } = response
    return data
  } catch (error: any) {
    if (error.response) {
      const { data } = error.response
      throw new GeneralError('0000', data)
    }
    throw new GeneralError()
  }
}

export const signInAPI = async (requestData: any): Promise<any> => {
  try {
    const response = await axiosInstance.post<any>('sign-in/', requestData)
    const { data } = response
    return data
  } catch (error: any) {
    if (error.response) {
      const { data } = error.response
      throw new GeneralError('0000', data)
    }
    throw new GeneralError()
  }
}

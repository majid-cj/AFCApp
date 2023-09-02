import { GeneralError } from '~/utils/errors'
import { axiosInstance } from '../network'

export const viewOrderByIdAPI = async (id: number): Promise<any> => {
  try {
    const response = await axiosInstance.get<any>(`order/order/${id}/`)
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

export const viewAllOrdersAPI = async (): Promise<any> => {
  try {
    const response = await axiosInstance.get<any>('order/order/')
    const { data } = response
    return data
  } catch (error: any) {
    if (error.response) {
      const { data } = error.response
      throw new GeneralError('0000', data.results)
    }
    throw new GeneralError()
  }
}

export const addNewOrderAPI = async (requestData: any): Promise<any> => {
  try {
    const response = await axiosInstance.post<any>('order/order/', requestData)
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

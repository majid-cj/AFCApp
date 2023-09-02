import { GeneralError } from '~/utils/errors'
import { axiosInstance } from '../network'

export const viewAllProductsAPI = async (): Promise<any> => {
  try {
    const response = await axiosInstance.get<any>('product/product/')
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

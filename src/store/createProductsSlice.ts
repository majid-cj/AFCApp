import { StateCreator } from 'zustand'
import { viewAllProductsAPI } from '~/services/api/product'

export interface ProductsSlice {
  products: Array<any>
  productError: any
  getProducts: () => void
}

export const createProductsSlice: StateCreator<ProductsSlice> = (set) => ({
  products: [],
  productError: undefined,
  async getProducts() {
    try {
      const response = await viewAllProductsAPI()
      set((state) => ({
        ...state,
        products: response,
        productError: undefined,
      }))
    } catch (error) {
      set((state) => ({
        ...state,
        products: [],
        productError: error,
      }))
    }
  },
})

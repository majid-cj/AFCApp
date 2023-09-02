import { StateCreator } from 'zustand'
import {
  viewAllOrdersAPI,
  addNewOrderAPI,
  viewOrderByIdAPI,
} from '~/services/api/order'

export interface OrderSlice {
  orders: Array<any>
  order: any
  orderError: any
  getAllOrder: () => void
  createNewOrder: (member: number, product: number) => void
  getOrder: (id: number) => void
}

export const createOrderSlice: StateCreator<OrderSlice> = (set) => ({
  orders: [],
  order: undefined,
  orderError: undefined,
  async getAllOrder() {
    try {
      const response = await viewAllOrdersAPI()
      set((state) => ({
        ...state,
        orders: response,
        order: undefined,
        orderError: undefined,
      }))
    } catch (error) {
      set((state) => ({
        ...state,
        orders: [],
        order: undefined,
        orderError: error,
      }))
    }
  },
  async getOrder(id) {
    try {
      const response = await viewOrderByIdAPI(id)
      set((state) => ({
        ...state,
        orders: [],
        order: response,
        orderError: undefined,
      }))
    } catch (error) {
      set((state) => ({
        ...state,
        orders: [],
        order: undefined,
        orderError: error,
      }))
    }
  },
  async createNewOrder(member, product) {
    try {
      const response = await addNewOrderAPI({ member, product })
      set((state) => ({
        ...state,
        orders: [],
        order: response,
        orderError: undefined,
      }))
    } catch (error) {
      set((state) => ({
        ...state,
        orders: [],
        order: undefined,
        orderError: error,
      }))
    }
  },
})

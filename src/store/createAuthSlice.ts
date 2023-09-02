import { StateCreator } from 'zustand'
import { signInAPI, signUpAPI } from '~/services/api/auth'

type Authorized = {
  user: any
  refresh: string
  access: string
}

export interface AuthSlice {
  isAuthorized: boolean
  authorized: Authorized | undefined
  authError: any
  login: (email: string, password: string) => void
  signUp: (name: string, email: string, password: string) => void
  signOut: () => void
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isAuthorized: false,
  authorized: undefined,
  authError: undefined,
  async login(email, password) {
    try {
      const response = await signInAPI({ email, password })
      set((state) => ({
        ...state,
        isAuthorized: true,
        authorized: response,
        authError: undefined,
      }))
    } catch (error) {
      set((state) => ({
        ...state,
        isAuthorized: false,
        authorized: undefined,
        authError: error,
      }))
    }
  },
  async signUp(name, email, password) {
    try {
      const response = await signUpAPI({ name, email, password })
      set((state) => ({
        ...state,
        isAuthorized: false,
        authorized: response,
        authError: undefined,
      }))
    } catch (error) {
      set((state) => ({
        ...state,
        isAuthorized: false,
        authorized: undefined,
        authError: error,
      }))
    }
  },
  signOut() {
    set((state) => ({
      ...state,
      isAuthorized: false,
      authorized: undefined,
      authError: undefined,
    }))
  },
})

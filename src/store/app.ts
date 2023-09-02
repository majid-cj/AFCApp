import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { AuthSlice, createAuthSlice } from '~/store/createAuthSlice'

import { ThemeSlice, createThemeSlice } from '~/store/createThemeSlice'
import { ProductsSlice, createProductsSlice } from '~/store/createProductsSlice'
import { OrderSlice, createOrderSlice } from '~/store/createOrderSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';


type Store = AuthSlice & ThemeSlice & ProductsSlice & OrderSlice

export const useAppStore = create<Store>()(
  persist(
    (set, get, api) => ({
      ...createAuthSlice(set, get, api),
      ...createThemeSlice(set, get, api),
      ...createProductsSlice(set, get, api),
      ...createOrderSlice(set, get, api),
    }),
    {
      name: 'afc_app_storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

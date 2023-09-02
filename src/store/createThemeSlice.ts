import { AppTheme } from '@react-navigation/native'

import { StateCreator } from 'zustand'
import { AppDarkTheme, AppLightTheme } from '~/resources/theme'

export interface ThemeSlice {
  theme: AppTheme
  dark: boolean
  toggleTheme: () => void
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  theme: AppLightTheme,
  dark: false,
  toggleTheme: () =>
    set((state) => ({
      theme: state.dark ? AppLightTheme : AppDarkTheme,
      dark: !state.dark,
    })),
})
